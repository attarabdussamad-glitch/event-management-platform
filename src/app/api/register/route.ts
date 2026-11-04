import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  generateRegistrationId,
  generateTicketNumber,
  generateSecureToken,
} from "@/lib/utils";
import QRCode from "qrcode";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      organization,
      designation,
      city,
      country = "India",
      ticketTypeId,
      answers = {},
      consentGiven = false,
      education,
      qualification,
      skills,
      experienceLevel,
      preferredIndustry,
      preferredRole,
      locationPreference,
      linkedinUrl,
      portfolioUrl,
    } = body;

    if (!fullName || !email || !ticketTypeId) {
      return NextResponse.json(
        { error: "Full name, email and ticket type are required." },
        { status: 400 }
      );
    }

    const event = await prisma.event.findFirst({
      where: { isPublished: true },
    });

    if (!event) {
      return NextResponse.json(
        { error: "No active event found." },
        { status: 400 }
      );
    }

    const ticketType = await prisma.ticketType.findFirst({
      where: { id: ticketTypeId, eventId: event.id, isActive: true },
    });

    if (!ticketType) {
      return NextResponse.json(
        { error: "Invalid ticket type." },
        { status: 400 }
      );
    }

    const existing = await prisma.registration.findFirst({
      where: {
        eventId: event.id,
        email: email.toLowerCase(),
        status: { not: "CANCELLED" },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "A registration with this email already exists for this event." },
        { status: 409 }
      );
    }

    const registrationId = generateRegistrationId("PMCF");
    const ticketNumber = generateTicketNumber();
    const verificationToken = generateSecureToken(40);
    const status = ticketType.requiresApproval ? "PENDING" : "CONFIRMED";

    const result = await prisma.$transaction(async (tx) => {
      const registration = await tx.registration.create({
        data: {
          eventId: event.id,
          ticketTypeId: ticketType.id,
          registrationId,
          status,
          fullName,
          email: email.toLowerCase(),
          phone,
          organization,
          designation,
          city,
          country,
          answers,
          consentGiven: !!consentGiven,
          consentAt: consentGiven ? new Date() : null,
        },
      });

      if (
        ticketType.category === "ATTENDEE" &&
        (education || skills || experienceLevel || preferredRole)
      ) {
        await tx.jobSeekerProfile.create({
          data: {
            registrationId: registration.id,
            education,
            qualification,
            skills,
            experienceLevel,
            preferredIndustry,
            preferredRole,
            locationPreference,
            linkedinUrl,
            portfolioUrl,
            consentToShare: !!consentGiven,
          },
        });
      }

      const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL || ""}/verify/${verificationToken}`;
      let qrCodeDataUrl: string | null = null;
      try {
        qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, {
          width: 300,
          margin: 2,
          errorCorrectionLevel: "M",
        });
      } catch (e) {
        console.error("QR generation failed", e);
      }

      const ticket = await tx.ticket.create({
        data: {
          registrationId: registration.id,
          ticketNumber,
          verificationToken,
          qrCodeDataUrl,
          status: "VALID",
        },
      });

      return { registration, ticket };
    });

    if (resend && process.env.RESEND_FROM_EMAIL) {
      try {
        await resend.emails.send({
          from: `${process.env.RESEND_FROM_NAME || "Career Fair"} <${process.env.RESEND_FROM_EMAIL}>`,
          to: email,
          subject: `Registration Confirmation – ${event.name}`,
          html: `
            <h2>Registration Confirmed</h2>
            <p>Dear ${fullName},</p>
            <p>Thank you for registering for <strong>${event.name}</strong>.</p>
            <p><strong>Registration ID:</strong> ${registrationId}<br/>
            <strong>Ticket Number:</strong> ${ticketNumber}<br/>
            <strong>Status:</strong> ${status}</p>
            <p>Please keep this email. Your QR ticket is available at your ticket page.</p>
            <p>See you in Mumbai!</p>
          `,
        });

        await prisma.emailLog.create({
          data: {
            toEmail: email,
            subject: `Registration Confirmation – ${event.name}`,
            template: "registration_confirmation",
            status: "SENT",
          },
        });
      } catch (emailErr) {
        console.error("Email send failed", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      registrationId: result.registration.registrationId,
      ticketNumber: result.ticket.ticketNumber,
      status: result.registration.status,
      ticketUrl: `/ticket/${result.ticket.verificationToken}`,
    });
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Registration failed. Please try again.", details: error?.message },
      { status: 500 }
    );
  }
}

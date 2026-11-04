import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const adminCount = await prisma.user.count({
      where: {
        roles: {
          some: {
            role: { name: "SUPER_ADMIN" },
          },
        },
      },
    });

    return NextResponse.json({
      needsSetup: adminCount === 0,
      message:
        adminCount === 0
          ? "No Super Admin found. Please complete setup."
          : "System already initialized.",
    });
  } catch (error: any) {
    return NextResponse.json({
      needsSetup: true,
      error: "Database connection issue. Check DATABASE_URL.",
      details: error?.message,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password || password.length < 8) {
      return NextResponse.json(
        { error: "Name, email and password (min 8 chars) are required." },
        { status: 400 }
      );
    }

    const existingAdmin = await prisma.user.findFirst({
      where: {
        roles: {
          some: { role: { name: "SUPER_ADMIN" } },
        },
      },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Setup already completed. Super Admin exists." },
        { status: 403 }
      );
    }

    let superAdminRole = await prisma.role.findUnique({
      where: { name: "SUPER_ADMIN" },
    });

    if (!superAdminRole) {
      superAdminRole = await prisma.role.create({
        data: {
          name: "SUPER_ADMIN",
          description: "Full system access",
        },
      });
    }

    const otherRoles = [
      { name: "EVENT_MANAGER", description: "Manage event content" },
      { name: "REGISTRATION_MANAGER", description: "Manage registrations" },
      { name: "CHECKIN_STAFF", description: "Check-in staff" },
    ];

    for (const r of otherRoles) {
      await prisma.role.upsert({
        where: { name: r.name },
        update: {},
        create: r,
      });
    }

    let event = await prisma.event.findFirst();
    if (!event) {
      event = await prisma.event.create({
        data: {
          name: "Professional Mega Career & Recruitment Fair",
          tagline: "Where Talent Meets Opportunity.",
          description:
            "A large-scale career, employment, recruitment, networking, leadership and entertainment event planned for Mumbai, Maharashtra, India.",
          category: "Career Fair, Job Fair, Recruitment Expo",
          location: "Mumbai, Maharashtra, India",
          timezone: "Asia/Kolkata",
          isPublished: true,
          registrationMode: "OPEN",
        },
      });

      const types = [
        { name: "Job Seeker / Candidate", category: "ATTENDEE" },
        { name: "Student / Fresh Graduate", category: "ATTENDEE" },
        { name: "Employer / Recruiter", category: "EMPLOYER", requiresApproval: true },
        { name: "Sponsor / Collaborator", category: "SPONSOR", requiresApproval: true },
        { name: "General Visitor", category: "ATTENDEE" },
      ];

      for (const [i, t] of types.entries()) {
        await prisma.ticketType.create({
          data: {
            eventId: event.id,
            name: t.name,
            category: t.category,
            requiresApproval: (t as any).requiresApproval || false,
            sortOrder: i,
            isActive: true,
          },
        });
      }
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        passwordHash,
        isActive: true,
        roles: {
          create: {
            roleId: superAdminRole.id,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Super Admin created successfully. You can now log in.",
      userId: user.id,
    });
  } catch (error: any) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { error: "Setup failed", details: error?.message },
      { status: 500 }
    );
  }
}

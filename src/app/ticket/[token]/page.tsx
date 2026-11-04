import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TicketPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const ticket = await prisma.ticket.findUnique({
    where: { verificationToken: token },
    include: {
      registration: {
        include: {
          ticketType: true,
          event: true,
          jobSeekerProfile: true,
        },
      },
    },
  });

  if (!ticket) {
    notFound();
  }

  const reg = ticket.registration;
  const event = reg.event;

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <div className="bg-slate-900 text-white px-6 py-5">
          <p className="text-amber-400 text-xs font-medium uppercase tracking-wide">
            Official Ticket
          </p>
          <h1 className="mt-1 text-lg font-semibold">{event.name}</h1>
          <p className="text-slate-400 text-sm mt-1">{event.location}</p>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <p className="text-xs text-slate-500">Participant</p>
            <p className="font-semibold text-slate-900">{reg.fullName}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-slate-500">Registration ID</p>
              <p className="font-medium">{reg.registrationId}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Ticket Number</p>
              <p className="font-medium">{ticket.ticketNumber}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Category</p>
              <p className="font-medium">{reg.ticketType.name}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Status</p>
              <p className="font-medium capitalize">{reg.status.toLowerCase()}</p>
            </div>
          </div>

          {ticket.qrCodeDataUrl && (
            <div className="flex flex-col items-center pt-4 border-t border-slate-100">
              <img
                src={ticket.qrCodeDataUrl}
                alt="Ticket QR Code"
                className="w-48 h-48"
              />
              <p className="mt-2 text-xs text-slate-500 text-center">
                Present this QR code at the venue for check-in
              </p>
            </div>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-4 text-center">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
            ← Back to event website
          </Link>
        </div>
      </div>
    </div>
  );
}

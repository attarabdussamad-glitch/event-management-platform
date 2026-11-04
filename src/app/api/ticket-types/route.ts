import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const event = await prisma.event.findFirst({
      where: { isPublished: true },
    });

    if (!event) {
      return NextResponse.json({ ticketTypes: [] });
    }

    const ticketTypes = await prisma.ticketType.findMany({
      where: { eventId: event.id, isActive: true },
      orderBy: { sortOrder: "asc" },
      select: {
        id: true,
        name: true,
        category: true,
        description: true,
        requiresApproval: true,
        price: true,
      },
    });

    return NextResponse.json({ ticketTypes });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ticketTypes: [] });
  }
}

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Roles
  const roles = [
    { name: "SUPER_ADMIN", description: "Full system access" },
    { name: "EVENT_MANAGER", description: "Manage event content and settings" },
    { name: "REGISTRATION_MANAGER", description: "Manage registrations and check-ins" },
    { name: "CHECKIN_STAFF", description: "QR scan and check-in only" },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
  }

  // Permissions (basic set)
  const permissions = [
    { key: "event:read", description: "View event configuration" },
    { key: "event:write", description: "Edit event configuration" },
    { key: "registrations:read", description: "View registrations" },
    { key: "registrations:write", description: "Manage registrations" },
    { key: "tickets:checkin", description: "Perform check-ins" },
    { key: "users:manage", description: "Manage users and roles" },
    { key: "emails:send", description: "Send emails" },
    { key: "reports:export", description: "Export reports" },
  ];

  for (const perm of permissions) {
    await prisma.permission.upsert({
      where: { key: perm.key },
      update: {},
      create: perm,
    });
  }

  // Default Event
  const event = await prisma.event.upsert({
    where: { id: "default-event" },
    update: {},
    create: {
      id: "default-event",
      name: "Professional Mega Career & Recruitment Fair",
      tagline: "Where Talent Meets Opportunity.",
      description:
        "A large-scale event connecting job seekers, students, fresh graduates, working professionals, employers, recruiters, sponsors, collaborators, educational institutions, industry experts, speakers, artists, and public personalities through recruitment booths, hiring activities, career development sessions, networking, talks, and entertainment.",
      category: "Career Fair, Job Fair, Recruitment Expo, and Professional Networking Event",
      location: "Mumbai, Maharashtra, India",
      venueName: "To be announced",
      venueAddress: "Mumbai, Maharashtra, India",
      timezone: "Asia/Kolkata",
      organizerName: "Event Organizing Committee",
      organizerEmail: "info@megacareerfair.in",
      primaryColor: "#0f172a",
      secondaryColor: "#f59e0b",
      backgroundColor: "#ffffff",
      textColor: "#0f172a",
      registrationMode: "OPEN",
      isPublished: true,
    },
  });

  // Ticket Types for Career Fair
  const ticketTypes = [
    {
      name: "Job Seeker / Candidate",
      category: "ATTENDEE",
      description: "For students, fresh graduates and professionals looking for opportunities",
      price: 0,
      requiresApproval: false,
    },
    {
      name: "Student / Fresh Graduate",
      category: "ATTENDEE",
      description: "Special category for students and fresh graduates",
      price: 0,
      requiresApproval: false,
    },
    {
      name: "Working Professional",
      category: "ATTENDEE",
      description: "For experienced professionals exploring new opportunities",
      price: 0,
      requiresApproval: false,
    },
    {
      name: "Employer / Recruiter",
      category: "EMPLOYER",
      description: "For companies and HR teams participating in recruitment",
      price: 0,
      requiresApproval: true,
    },
    {
      name: "Sponsor / Collaborator",
      category: "SPONSOR",
      description: "For organizations interested in sponsorship or partnership",
      price: 0,
      requiresApproval: true,
    },
    {
      name: "General Visitor",
      category: "ATTENDEE",
      description: "General entry for visitors",
      price: 0,
      requiresApproval: false,
    },
  ];

  for (const [index, tt] of ticketTypes.entries()) {
    await prisma.ticketType.create({
      data: {
        eventId: event.id,
        name: tt.name,
        category: tt.category,
        description: tt.description,
        price: tt.price,
        requiresApproval: tt.requiresApproval,
        sortOrder: index,
        isActive: true,
      },
    });
  }

  // Default pages
  const pages = [
    { slug: "home", title: "Home", sortOrder: 0 },
    { slug: "about", title: "About the Event", sortOrder: 1 },
    { slug: "agenda", title: "Event Agenda", sortOrder: 2 },
    { slug: "employers", title: "Participating Employers", sortOrder: 3 },
    { slug: "speakers", title: "Speakers", sortOrder: 4 },
    { slug: "sponsors", title: "Sponsors", sortOrder: 5 },
    { slug: "register", title: "Registration", sortOrder: 6 },
    { slug: "venue", title: "Venue & Location", sortOrder: 7 },
    { slug: "contact", title: "Contact", sortOrder: 8 },
    { slug: "faq", title: "FAQ", sortOrder: 9 },
  ];

  for (const page of pages) {
    await prisma.eventPage.upsert({
      where: {
        eventId_slug: { eventId: event.id, slug: page.slug },
      },
      update: {},
      create: {
        eventId: event.id,
        slug: page.slug,
        title: page.title,
        isEnabled: true,
        sortOrder: page.sortOrder,
        content: {},
      },
    });
  }

  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

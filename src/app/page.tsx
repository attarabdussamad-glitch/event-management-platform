import Link from "next/link";
import prisma from "@/lib/prisma";

async function getEvent() {
  try {
    const event = await prisma.event.findFirst({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
    });
    return event;
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const event = await getEvent();

  const name = event?.name || "Professional Mega Career & Recruitment Fair";
  const tagline = event?.tagline || "Where Talent Meets Opportunity.";
  const location = event?.location || "Mumbai, Maharashtra, India";
  const description =
    event?.description ||
    "A large-scale event connecting job seekers, students, fresh graduates, working professionals, employers and recruiters through recruitment booths, career sessions and networking.";

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="font-semibold text-lg tracking-tight text-slate-900">
            Mega Career Fair
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/about" className="hover:text-slate-900 transition">About</Link>
            <Link href="/employers" className="hover:text-slate-900 transition">Employers</Link>
            <Link href="/speakers" className="hover:text-slate-900 transition">Speakers</Link>
            <Link href="/venue" className="hover:text-slate-900 transition">Venue</Link>
            <Link href="/register" className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition">Register</Link>
          </nav>
          <Link href="/register" className="md:hidden bg-slate-900 text-white px-3 py-1.5 rounded text-sm">Register</Link>
        </div>
      </header>

      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative">
          <p className="text-amber-400 font-medium tracking-wide text-sm uppercase mb-4">
            Mumbai · Career & Recruitment Fair
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance leading-tight">
            {name}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-2xl">
            {tagline}
          </p>
          <p className="mt-4 text-slate-400 max-w-xl">
            {location}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/register" className="inline-flex items-center justify-center bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-amber-400 transition">
              Register as Job Seeker
            </Link>
            <Link href="/register?type=employer" className="inline-flex items-center justify-center border border-slate-600 text-white font-medium px-6 py-3 rounded-md hover:bg-slate-800 transition">
              Employer / Recruiter
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Connecting Talent with Opportunity
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {description}
            </p>
            <Link href="/about" className="inline-block mt-6 text-amber-600 font-medium hover:text-amber-700">
              Learn more about the event →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Job Seekers", value: "Open" },
              { label: "Employers", value: "Participating" },
              { label: "Workshops", value: "Career Development" },
              { label: "Networking", value: "Industry Leaders" },
            ].map((item) => (
              <div key={item.label} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-1 font-semibold text-slate-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Ready to take the next step in your career?
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Register now to receive your unique QR ticket and stay updated with participating employers and session schedules.
          </p>
          <Link href="/register" className="inline-flex mt-8 bg-slate-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-slate-800 transition">
            Complete Registration
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="text-white font-semibold">Mega Career Fair</div>
              <p className="mt-2 text-sm max-w-xs">Professional Mega Career & Recruitment Fair · Mumbai</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/admin/login" className="hover:text-white">Admin</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-sm">
            © {new Date().getFullYear()} Professional Mega Career & Recruitment Fair. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

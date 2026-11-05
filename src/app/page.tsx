import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

async function getEvent() {
  try {
    return await prisma.event.findFirst({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
    });
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative bg-slate-900 text-white overflow-hidden min-h-[28rem] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=80"
            alt="Career fair audience"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
            <p className="text-amber-400 font-medium tracking-wide text-sm uppercase mb-4">
              Mumbai · Career & Recruitment Fair
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
              {name}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-200 max-w-2xl">
              {tagline}
            </p>
            <p className="mt-3 text-slate-400">
              {location}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-amber-400 transition"
              >
                Register as Job Seeker
              </Link>
              <Link
                href="/employers"
                className="inline-flex items-center justify-center border border-slate-500 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition"
              >
                Explore Employers
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Connecting Talent with Opportunity
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {description}
              </p>
              <Link href="/about" className="inline-block mt-6 text-amber-600 font-medium hover:text-amber-700">
                About the event →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Job Seekers", value: "Open registration" },
                { label: "Employers", value: "Hiring booths" },
                { label: "Workshops", value: "Career development" },
                { label: "Networking", value: "Industry leaders" },
              ].map((item) => (
                <div key={item.label} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
                  <div className="text-sm text-slate-500">
                    {item.label}
                  </div>
                  <div className="mt-1 font-semibold text-slate-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center">What you can explore</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  href: "/employers",
                  title: "Employers",
                  text: "Meet recruiters and explore openings across sectors.",
                  img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
                },
                {
                  href: "/agenda",
                  title: "Agenda",
                  text: "Recruitment floor, sessions, and networking blocks.",
                  img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
                },
                {
                  href: "/workshops",
                  title: "Workshops",
                  text: "Resume, interviews, skills, and career growth.",
                  img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
                },
                {
                  href: "/speakers",
                  title: "Speakers",
                  text: "Industry voices and leadership insights.",
                  img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
                },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition"
                >
                  <div className="relative h-36">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {card.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden min-h-[16rem] bg-slate-900 text-white p-8 flex flex-col justify-end">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80"
                alt="Job seekers"
                fill
                className="object-cover opacity-40"
              />
              <div className="relative">
                <h3 className="text-xl font-bold">For job seekers & students</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Register, build your profile, and get your QR ticket.
                </p>
                <Link href="/register" className="inline-block mt-4 text-amber-400 font-medium hover:text-amber-300">
                  Complete registration →
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden min-h-[16rem] bg-slate-900 text-white p-8 flex flex-col justify-end">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"
                alt="Employers"
                fill
                className="object-cover opacity-40"
              />
              <div className="relative">
                <h3 className="text-xl font-bold">For employers & partners</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Join as a recruiter, exhibitor, or sponsor.
                </p>
                <Link href="/register?type=employer" className="inline-block mt-4 text-amber-400 font-medium hover:text-amber-300">
                  Organisation registration →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready for the next step in your career?
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              Secure your place, receive a unique QR ticket, and stay informed about employers and sessions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/register" className="bg-amber-500 text-slate-900 font-semibold px-8 py-3 rounded-md hover:bg-amber-400">
                Register now
              </Link>
              <Link href="/venue" className="border border-slate-600 px-8 py-3 rounded-md hover:bg-slate-800">
                Venue info
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

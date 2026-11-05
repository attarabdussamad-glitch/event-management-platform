import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About the Event | Mega Career Fair Mumbai",
  description: "Learn about the Professional Mega Career & Recruitment Fair in Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-56 sm:h-72 bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80" alt="Conference hall" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 w-full">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">About</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Professional Mega Career & Recruitment Fair</h1>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Where Talent Meets Opportunity</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">The Professional Mega Career & Recruitment Fair is a large-scale career, employment, and networking event planned for Mumbai, Maharashtra. It brings together job seekers, students, fresh graduates, working professionals, employers, recruiters, sponsors, educational institutions, industry experts, and speakers under one roof.</p>
              <p className="mt-4 text-slate-600 leading-relaxed">Through recruitment booths, hiring activities, career development sessions, workshops, and networking, the fair aims to create meaningful connections between talent and opportunity across industries.</p>
              <p className="mt-4 text-slate-600 leading-relaxed">Exact dates, venue, capacity, and confirmed partners will be published by the organizers as they are finalized.</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden bg-slate-200">
              <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=80" alt="Networking" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "For Job Seekers", text: "Explore roles, meet recruiters, and submit profiles where consent is given." },
              { title: "For Employers", text: "Access candidates, run hiring activities, and build your employer brand." },
              { title: "For Students", text: "Learn from sessions, workshops, and early-career opportunities." },
              { title: "For Partners", text: "Sponsor, exhibit, or collaborate and gain visibility with a focused audience." },
            ].map((card) => (
              <div key={card.title} className="border border-slate-200 rounded-lg p-5 bg-white">
                <h3 className="font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/register" className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800">Register Now</Link>
            <Link href="/employers" className="border border-slate-300 px-6 py-3 rounded-md font-medium text-slate-800 hover:bg-slate-50">View Employers</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

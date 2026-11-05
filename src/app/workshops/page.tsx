import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Workshops & Career Development | Mega Career Fair",
  description: "Career workshops and networking sessions at the Mumbai Mega Career Fair.",
};

const tracks = [
  { title: "Resume & Profile Building", desc: "Structuring resumes, LinkedIn profiles, and portfolios for recruiters.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" },
  { title: "Interview Readiness", desc: "Mock frameworks, common questions, and presenting experience as a fresher or professional.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  { title: "Industry & Skills Outlook", desc: "In-demand skills, emerging roles, and aligning learning with hiring trends.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" },
  { title: "Networking for Careers", desc: "How to approach recruiters and follow up after the event.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" },
];

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 sm:h-64 bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80" alt="Workshop" fill className="object-cover opacity-45" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 w-full">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">Learn</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Workshops & Career Development</h1>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-slate-600 max-w-2xl">Career development sessions for students, fresh graduates, and working professionals.</p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <article key={t.title} className="border border-slate-200 rounded-lg overflow-hidden bg-white flex flex-col">
                <div className="relative h-40">
                  <Image src={t.img} alt={t.title} fill className="object-cover" />
                </div>
                <div className="p-5 flex-1">
                  <h2 className="font-semibold text-slate-900">{t.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/register" className="inline-flex bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800">Register to attend workshops</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

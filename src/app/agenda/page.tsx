import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Event Agenda | Mega Career Fair Mumbai",
  description: "Programme outline for the Professional Mega Career & Recruitment Fair.",
};

const blocks = [
  { time: "Morning", title: "Registration & Opening", items: ["Participant check-in with QR tickets", "Welcome address", "Overview of participating employers"] },
  { time: "Mid-morning", title: "Recruitment Floor Open", items: ["Employer booths and walk-in interactions", "Job seeker profile sharing (with consent)", "On-spot screening discussions"] },
  { time: "Afternoon", title: "Career Sessions & Workshops", items: ["Industry talks and leadership sessions", "Resume and interview workshops", "Career development panels"] },
  { time: "Late afternoon", title: "Networking & Closing", items: ["Structured networking zones", "Partner and sponsor highlights", "Closing remarks"] },
];

export default function AgendaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 sm:h-64 bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80" alt="Event stage" fill className="object-cover opacity-45" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 w-full">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">Programme</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Event Agenda</h1>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-slate-600 max-w-2xl">High-level structure for the fair. Detailed timings and speaker slots will be published once confirmed.</p>
          <div className="mt-10 space-y-6">
            {blocks.map((b) => (
              <div key={b.title} className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col sm:flex-row gap-4">
                <div className="sm:w-36 shrink-0">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-amber-700 bg-amber-50 px-2 py-1 rounded">{b.time}</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{b.title}</h2>
                  <ul className="mt-2 space-y-1 text-slate-600 text-sm">
                    {b.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg">Stay updated on the final schedule</h3>
              <p className="text-slate-300 text-sm mt-1">Register to receive announcements.</p>
            </div>
            <Link href="/register" className="bg-amber-500 text-slate-900 font-semibold px-5 py-2.5 rounded-md hover:bg-amber-400 shrink-0">Register</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

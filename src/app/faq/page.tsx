import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "FAQ | Mega Career Fair Mumbai",
  description: "Frequently asked questions about the Mumbai career fair.",
};

const faqs = [
  { q: "Who can attend?", a: "Students, fresh graduates, working professionals, employers, recruiters, sponsors, collaborators, and general visitors may register under the appropriate category." },
  { q: "Is registration free?", a: "Ticket categories and pricing are controlled by the event manager. Check the registration form for the selected category." },
  { q: "What is the QR code for?", a: "After successful registration you receive a unique ticket and QR code used for venue check-in. Do not share your QR code publicly." },
  { q: "Will my resume be shared with employers?", a: "Only if you register in a job-seeker related category and give explicit consent." },
  { q: "How do employers participate?", a: "Use the Employer / Recruiter registration category or contact the organizers." },
  { q: "When will exact dates and venue be announced?", a: "Final dates and venue are published by the organizers when confirmed. Register to receive updates." },
  { q: "Can I change or cancel my registration?", a: "Contact the organizers via the Contact page with your registration ID." },
  { q: "Is the event only for freshers?", a: "No. Tracks are designed for students, freshers, and experienced professionals." },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">Help</p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-1">Frequently Asked Questions</h1>
          </div>
        </section>
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group border border-slate-200 rounded-lg bg-white open:shadow-sm">
                <summary className="cursor-pointer list-none px-5 py-4 font-medium text-slate-900 flex justify-between items-center gap-4">
                  {item.q}
                  <span className="text-slate-400 group-open:rotate-45 transition text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate-500">
            Still need help? <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-medium">Contact the organizers</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

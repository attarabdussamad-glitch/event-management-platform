import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact | Mega Career Fair",
  description: "Contact the organizers of the Professional Mega Career & Recruitment Fair, Mumbai",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
        <p className="mt-2 text-slate-600">Get in touch with the organizers of the Professional Mega Career & Recruitment Fair, Mumbai.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            { title: "General Enquiries", desc: "Registration help, event information, and general questions.", email: "info@megacareerfair.in" },
            { title: "Employers & Recruiters", desc: "Booth bookings, hiring requirements, and partnerships.", email: "employers@megacareerfair.in" },
            { title: "Sponsors & Collaborators", desc: "Sponsorship packages and collaboration proposals.", email: "sponsors@megacareerfair.in" },
            { title: "Venue & Location", desc: "Mumbai, Maharashtra, India. Exact venue to be announced.", email: null },
          ].map((c) => (
            <div key={c.title} className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="font-semibold text-slate-900">{c.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              {c.email && (
                <p className="mt-4 text-sm">
                  <span className="text-slate-500">Email:</span>{" "}
                  <a href={`mailto:${c.email}`} className="text-amber-600 hover:text-amber-700 font-medium">{c.email}</a>
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="font-semibold text-slate-900">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/register" className="text-amber-600 hover:text-amber-700">Register for the Event →</Link></li>
            <li><Link href="/faq" className="text-slate-600 hover:text-slate-900">FAQ</Link></li>
            <li><Link href="/privacy" className="text-slate-600 hover:text-slate-900">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-slate-600 hover:text-slate-900">Terms and Conditions</Link></li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

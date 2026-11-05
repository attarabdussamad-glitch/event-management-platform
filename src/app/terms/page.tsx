import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms and Conditions | Mega Career Fair",
  description: "Terms and Conditions for the Professional Mega Career & Recruitment Fair",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-slate-900">Terms and Conditions</h1>
        <p className="mt-2 text-sm text-slate-500">Professional Mega Career & Recruitment Fair · Mumbai</p>
        <div className="mt-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">1. Acceptance</h2>
            <p className="mt-2">By using this website or registering for the Event, you agree to these terms.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">2. Registration</h2>
            <p className="mt-2">Provide accurate information. False details may lead to cancellation. Some categories require approval.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">3. Tickets & QR Codes</h2>
            <p className="mt-2">Tickets and QR codes are for check-in and are generally non-transferable.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Conduct</h2>
            <p className="mt-2">Professional behaviour is required. Organizers may refuse entry for disruptive conduct.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">5. Recruitment outcomes</h2>
            <p className="mt-2">The Event facilitates introductions. Employment decisions remain between candidates and employers.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">6. Governing law</h2>
            <p className="mt-2">Governed by the laws of India; courts in Mumbai, Maharashtra, unless otherwise required.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">7. Contact</h2>
            <p className="mt-2">Questions: <Link href="/contact" className="text-amber-600 underline">Contact page</Link>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

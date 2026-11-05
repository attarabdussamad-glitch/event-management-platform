import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Mega Career Fair",
  description: "Privacy Policy for the Professional Mega Career & Recruitment Fair",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Professional Mega Career & Recruitment Fair · Mumbai</p>
        <div className="mt-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">1. Introduction</h2>
            <p className="mt-2">This policy describes how organizers collect, use, store, and protect personal information submitted through this website and registration systems.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">2. Information We Collect</h2>
            <p className="mt-2">Name, email, phone, organization, city, education and career profile fields, resume or portfolio links if provided, consent preferences, and basic technical access data for security.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">3. How We Use Information</h2>
            <p className="mt-2">To process registration, issue tickets and QR codes, send event communications, support check-in, and—only with consent—facilitate recruitment sharing with participating employers.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">4. Sharing</h2>
            <p className="mt-2">Candidate profile data is shared with employers only when you explicitly consent. We do not sell personal data.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">5. Your Rights</h2>
            <p className="mt-2">You may request access, correction, or deletion via the <Link href="/contact" className="text-amber-600 underline">Contact</Link> page.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

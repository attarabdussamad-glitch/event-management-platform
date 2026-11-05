import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Sponsors & Partners | Mega Career Fair Mumbai",
  description: "Sponsorship and collaboration opportunities.",
};

export default function SponsorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 sm:h-64 bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80" alt="Partnership" fill className="object-cover opacity-45" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 w-full">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">Partners</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Sponsors & Collaborators</h1>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-slate-600 max-w-2xl">Support the fair through sponsorship, exhibition space, or collaboration. Confirmed partner logos will be displayed after approval.</p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {["Title / Platinum", "Gold", "Silver & Supporting"].map((tier) => (
              <div key={tier} className="border border-slate-200 rounded-lg p-6 bg-white text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{tier}</p>
                <p className="mt-3 text-sm text-slate-600">Visibility packages and booth options are customized with the organizing team.</p>
              </div>
            ))}
          </div>
          <div className="mt-12 relative h-48 rounded-xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1400&q=80" alt="Collaboration" fill className="object-cover" />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800">Enquire as Sponsor</Link>
            <Link href="/contact" className="border border-slate-300 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-50">Contact organizers</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

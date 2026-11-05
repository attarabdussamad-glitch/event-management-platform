import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Speakers | Mega Career Fair Mumbai",
  description: "Industry leaders and career speakers at the Mega Career Fair.",
};

export default function SpeakersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 sm:h-64 bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80" alt="Speaker" fill className="object-cover opacity-45" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 w-full">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">Thought leadership</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Speakers</h1>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-slate-600 max-w-2xl">Industry leaders, HR professionals, and career coaches will share insights. Confirmed names appear here once approved in the admin dashboard.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
            ].map((src, i) => (
              <div key={src} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <div className="relative h-44 bg-slate-200">
                  <Image src={src} alt="Speaker placeholder" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-amber-700 uppercase tracking-wide">To be announced</p>
                  <h3 className="mt-1 font-semibold text-slate-900">Speaker slot {i + 1}</h3>
                  <p className="mt-2 text-sm text-slate-600">Session title and bio will be published after confirmation.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/agenda" className="text-amber-600 font-medium hover:text-amber-700">View agenda structure →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

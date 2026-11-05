import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Venue & Location | Mega Career Fair Mumbai",
  description: "Venue information for the Professional Mega Career & Recruitment Fair in Mumbai.",
};

export default function VenuePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 sm:h-64 bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1600&q=80" alt="Mumbai" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 w-full">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">Location</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Venue & Location</h1>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Mumbai, Maharashtra, India</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">The exact venue name, address, and maps link will be published once confirmed by the organizers.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li><span className="text-amber-600 font-semibold">City:</span> Mumbai</li>
                <li><span className="text-amber-600 font-semibold">State:</span> Maharashtra</li>
                <li><span className="text-amber-600 font-semibold">Country:</span> India</li>
                <li><span className="text-amber-600 font-semibold">Timezone:</span> Asia/Kolkata (IST)</li>
                <li><span className="text-amber-600 font-semibold">Venue:</span> To be announced</li>
              </ul>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden bg-slate-200">
              <Image src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1000&q=80" alt="Venue" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
            <h3 className="font-semibold text-slate-900">Visitor information</h3>
            <p className="mt-2 text-sm text-slate-600">Bring a valid photo ID and your registration QR ticket for check-in.</p>
            <Link href="/faq" className="inline-block mt-4 text-sm text-amber-600 hover:text-amber-700 font-medium">Read FAQ →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

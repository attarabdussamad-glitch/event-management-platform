import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Participating Employers | Mega Career Fair Mumbai",
  description: "Explore career opportunities and participating employers.",
};

const sectors = [
  "Technology & IT Services",
  "Banking, Financial Services & Insurance",
  "Consulting & Professional Services",
  "Manufacturing & Engineering",
  "Retail, E-commerce & Consumer",
  "Healthcare & Life Sciences",
  "Education & EdTech",
  "Startups & Emerging Businesses",
];

export default function EmployersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-48 sm:h-64 bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" alt="Office" fill className="object-cover opacity-45" priority />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 w-full">
              <p className="text-amber-400 text-sm font-medium uppercase tracking-wide">Hiring</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">Participating Employers</h1>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Career opportunities across industries</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">Employers and recruiters participate through booths and hiring desks. Confirmed organizations will be listed as registrations are approved.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800">Register as Job Seeker</Link>
                <Link href="/register?type=employer" className="border border-slate-300 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-50">Employer Registration</Link>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80" alt="Team" fill className="object-cover" />
            </div>
          </div>
          <h3 className="mt-16 text-lg font-semibold text-slate-900">Sectors we aim to feature</h3>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {sectors.map((s) => (
              <div key={s} className="border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-700 bg-white">{s}</div>
            ))}
          </div>
          <div className="mt-12 border border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50">
            <p className="text-slate-600">Confirmed employer logos will appear here once added by the event team.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

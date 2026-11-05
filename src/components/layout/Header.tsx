import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/employers", label: "Employers" },
  { href: "/speakers", label: "Speakers" },
  { href: "/workshops", label: "Workshops" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/venue", label: "Venue" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-lg tracking-tight text-slate-900 shrink-0">
          Mega Career Fair
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900 transition whitespace-nowrap">
              {item.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition"
          >
            Register
          </Link>
        </nav>
        <Link
          href="/register"
          className="lg:hidden bg-slate-900 text-white px-3 py-1.5 rounded text-sm shrink-0"
        >
          Register
        </Link>
      </div>
      <div className="lg:hidden border-t border-slate-100 overflow-x-auto">
        <div className="flex gap-4 px-4 py-2 text-xs font-medium text-slate-600 whitespace-nowrap">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-white font-semibold">Mega Career Fair</div>
            <p className="mt-2 text-sm max-w-xs">
              Professional Mega Career & Recruitment Fair · Mumbai. Where talent meets opportunity.
            </p>
          </div>
          <div>
            <div className="text-white text-sm font-medium mb-3">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/agenda" className="hover:text-white">Agenda</Link></li>
              <li><Link href="/employers" className="hover:text-white">Employers</Link></li>
              <li><Link href="/speakers" className="hover:text-white">Speakers</Link></li>
              <li><Link href="/workshops" className="hover:text-white">Workshops</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white text-sm font-medium mb-3">Participate</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/register" className="hover:text-white">Register</Link></li>
              <li><Link href="/sponsors" className="hover:text-white">Sponsors</Link></li>
              <li><Link href="/venue" className="hover:text-white">Venue</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white text-sm font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/admin/login" className="hover:text-white">Admin</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-800 text-sm">
          © {new Date().getFullYear()} Professional Mega Career & Recruitment Fair. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

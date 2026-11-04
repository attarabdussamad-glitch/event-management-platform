import Link from "next/link";

export const metadata = {
  title: "Contact | Mega Career Fair",
  description: "Contact the organizers of the Professional Mega Career & Recruitment Fair, Mumbai",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-slate-900">
            Mega Career Fair
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
        <p className="mt-2 text-slate-600">
          Get in touch with the organizers of the Professional Mega Career &
          Recruitment Fair, Mumbai.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="font-semibold text-slate-900">General Enquiries</h2>
            <p className="mt-2 text-sm text-slate-600">
              For registration help, event information, and general questions.
            </p>
            <p className="mt-4 text-sm">
              <span className="text-slate-500">Email:</span>{" "}
              <a
                href="mailto:info@megacareerfair.in"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                info@megacareerfair.in
              </a>
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="font-semibold text-slate-900">Employers & Recruiters</h2>
            <p className="mt-2 text-sm text-slate-600">
              Booth bookings, hiring requirements, and partnership discussions.
            </p>
            <p className="mt-4 text-sm">
              <span className="text-slate-500">Email:</span>{" "}
              <a
                href="mailto:employers@megacareerfair.in"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                employers@megacareerfair.in
              </a>
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="font-semibold text-slate-900">Sponsors & Collaborators</h2>
            <p className="mt-2 text-sm text-slate-600">
              Sponsorship packages, visibility options, and collaboration proposals.
            </p>
            <p className="mt-4 text-sm">
              <span className="text-slate-500">Email:</span>{" "}
              <a
                href="mailto:sponsors@megacareerfair.in"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                sponsors@megacareerfair.in
              </a>
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="font-semibold text-slate-900">Venue & Location</h2>
            <p className="mt-2 text-sm text-slate-600">
              Mumbai, Maharashtra, India
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Exact venue details will be announced and updated on the event
              website closer to the date.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="font-semibold text-slate-900">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/register" className="text-amber-600 hover:text-amber-700">
                Register for the Event →
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-slate-600 hover:text-slate-900">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Email addresses above are placeholders. Update them with your final
          contact details when available.
        </p>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

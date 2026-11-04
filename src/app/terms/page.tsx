import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Mega Career Fair",
  description: "Terms and Conditions for the Professional Mega Career & Recruitment Fair",
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-slate-900">Terms and Conditions</h1>
        <p className="mt-2 text-sm text-slate-500">
          Professional Mega Career & Recruitment Fair · Mumbai
        </p>

        <div className="mt-8 space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing this website, registering for the Professional Mega
              Career & Recruitment Fair (the Event), or using any related
              services, you agree to these Terms and Conditions. If you do not
              agree, please do not register or use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Event Registration</h2>
            <p className="mt-2">
              Registration is subject to availability and the rules set by the
              organizers. Providing false or incomplete information may result in
              cancellation of your registration without notice. Some categories
              (such as employers or sponsors) may require approval before
              confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. Tickets and QR Codes</h2>
            <p className="mt-2">
              Upon successful registration you may receive a unique registration
              ID, ticket number, and QR code. Tickets are non-transferable unless
              the organizers expressly permit transfer. Duplicate check-ins may
              be blocked. Lost or misused tickets are the responsibility of the
              registrant.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Conduct at the Event</h2>
            <p className="mt-2">
              Attendees must behave in a professional and respectful manner.
              The organizers reserve the right to refuse entry or remove any
              person whose conduct is disruptive, unsafe, or contrary to the
              purpose of the Event, without refund where fees apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Job Seekers and Employers</h2>
            <p className="mt-2">
              The Event facilitates introductions between job seekers and
              employers. We do not guarantee employment, interviews, or hiring
              outcomes. Any employment relationship is solely between the
              candidate and the employer. Profile information is shared with
              employers only where consent has been given.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Intellectual Property</h2>
            <p className="mt-2">
              Content on this website is owned by or licensed to the Event
              organizers. You may not copy, reproduce, or redistribute it without
              prior written permission, except for personal non-commercial use
              related to your participation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Limitation of Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, the organizers and their
              partners are not liable for any indirect, incidental, or
              consequential loss arising from use of this website, registration,
              or attendance at the Event.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Changes and Cancellation</h2>
            <p className="mt-2">
              The organizers may change event dates, venue, programme, or
              speakers, or cancel the Event in whole or in part, for operational
              or force majeure reasons. Reasonable efforts will be made to notify
              registered participants.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">9. Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in Mumbai,
              Maharashtra, unless otherwise required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">10. Contact</h2>
            <p className="mt-2">
              For questions about these terms, please use the{" "}
              <Link href="/contact" className="text-amber-600 hover:text-amber-700 underline">
                Contact
              </Link>{" "}
              page.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

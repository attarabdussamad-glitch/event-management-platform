import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Mega Career Fair",
  description: "Privacy Policy for the Professional Mega Career & Recruitment Fair",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">
          Professional Mega Career & Recruitment Fair · Mumbai
        </p>

        <div className="mt-8 space-y-6 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">1. Introduction</h2>
            <p className="mt-2">
              This Privacy Policy describes how the organizers of the Professional
              Mega Career & Recruitment Fair collect, use, store, and protect
              personal information submitted through this website and related
              registration systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">2. Information We Collect</h2>
            <p className="mt-2">We may collect the following information when you register or interact with the Event:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Full name, email address, and mobile number</li>
              <li>Organization, designation, city, and country</li>
              <li>Education, skills, experience level, and preferred job roles (for job seekers)</li>
              <li>Resume or CV files, LinkedIn or portfolio URLs (if provided)</li>
              <li>Consent preferences regarding sharing of profile information</li>
              <li>Technical data such as browser type and access timestamps</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-2">Your information is used to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Process event registration and issue tickets or QR codes</li>
              <li>Communicate confirmation, updates, and event-related notices</li>
              <li>Facilitate recruitment activities where you have given consent</li>
              <li>Manage check-in and attendance at the venue</li>
              <li>Improve the event experience and maintain security of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">4. Sharing with Employers and Partners</h2>
            <p className="mt-2">
              If you register as a job seeker or candidate and provide consent,
              relevant profile information may be shared with participating
              employers and recruiters solely for recruitment purposes related
              to this Event. We do not sell personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Data Storage and Security</h2>
            <p className="mt-2">
              Data is stored on secure cloud infrastructure. Access is restricted
              to authorized personnel. While we take reasonable measures to protect
              your information, no method of transmission over the internet is
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">6. Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your
              personal data by contacting the event organizers using the details
              on the Contact page. You may also withdraw consent for sharing your
              profile with employers where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">7. Contact</h2>
            <p className="mt-2">
              For privacy-related questions, please use the{" "}
              <Link href="/contact" className="text-amber-600 hover:text-amber-700 underline">
                Contact
              </Link>{" "}
              page or the organizer email published on the event website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">8. Updates</h2>
            <p className="mt-2">
              This policy may be updated from time to time. The version published
              on this website is the current policy applicable to the Event.
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

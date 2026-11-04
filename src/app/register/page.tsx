"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type TicketType = {
  id: string;
  name: string;
  category: string;
  description: string | null;
  requiresApproval: boolean;
};

export default function RegisterPage() {
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    city: "",
    country: "India",
    education: "",
    qualification: "",
    skills: "",
    experienceLevel: "",
    preferredIndustry: "",
    preferredRole: "",
    locationPreference: "",
    linkedinUrl: "",
    portfolioUrl: "",
    consentGiven: false,
  });

  useEffect(() => {
    fetch("/api/ticket-types")
      .then((r) => r.json())
      .then((data) => {
        setTicketTypes(data.ticketTypes || []);
        if (data.ticketTypes?.length) {
          setSelectedType(data.ticketTypes[0].id);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const selected = ticketTypes.find((t) => t.id === selectedType);
  const isJobSeeker =
    selected?.category === "ATTENDEE" &&
    (selected?.name.toLowerCase().includes("job") ||
      selected?.name.toLowerCase().includes("student") ||
      selected?.name.toLowerCase().includes("professional") ||
      selected?.name.toLowerCase().includes("visitor"));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ticketTypeId: selectedType,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        setSubmitting(false);
        return;
      }

      setResult(data);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white border border-slate-200 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h1 className="text-2xl font-bold text-slate-900">
            Registration Successful
          </h1>
          <p className="mt-2 text-slate-600">
            Your registration has been received.
          </p>
          <div className="mt-6 bg-slate-50 rounded-md p-4 text-left text-sm space-y-1">
            <p>
              <span className="text-slate-500">Registration ID:</span>{" "}
              <strong>{result.registrationId}</strong>
            </p>
            <p>
              <span className="text-slate-500">Ticket Number:</span>{" "}
              <strong>{result.ticketNumber}</strong>
            </p>
            <p>
              <span className="text-slate-500">Status:</span>{" "}
              <strong>{result.status}</strong>
            </p>
          </div>
          <a
            href={result.ticketUrl}
            className="inline-block mt-6 bg-slate-900 text-white px-6 py-2.5 rounded-md font-medium"
          >
            View Ticket & QR Code
          </a>
          <div className="mt-4">
            <Link href="/" className="text-sm text-slate-500 hover:text-slate-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-slate-900">
            Mega Career Fair
          </Link>
          <Link href="/" className="text-sm text-slate-500">
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-slate-900">Registration</h1>
        <p className="mt-2 text-slate-600">
          Register for the Professional Mega Career & Recruitment Fair, Mumbai.
        </p>

        {loading ? (
          <p className="mt-8 text-slate-500">Loading form...</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 bg-white border border-slate-200 rounded-lg p-6 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Registration Category *
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                required
              >
                {ticketTypes.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              {selected?.description && (
                <p className="mt-1 text-xs text-slate-500">
                  {selected.description}
                </p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Organization / College
                </label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) =>
                    setForm({ ...form, organization: e.target.value })
                  }
                  className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  City
                </label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>

            {isJobSeeker && (
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="font-medium text-slate-900">
                  Career Profile (optional but recommended)
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Highest Qualification
                    </label>
                    <input
                      type="text"
                      value={form.qualification}
                      onChange={(e) =>
                        setForm({ ...form, qualification: e.target.value })
                      }
                      className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                      placeholder="e.g. B.Tech, MBA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Experience Level
                    </label>
                    <select
                      value={form.experienceLevel}
                      onChange={(e) =>
                        setForm({ ...form, experienceLevel: e.target.value })
                      }
                      className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                    >
                      <option value="">Select</option>
                      <option value="Fresher">Fresher</option>
                      <option value="0-1">0–1 years</option>
                      <option value="1-3">1–3 years</option>
                      <option value="3-5">3–5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Skills
                    </label>
                    <textarea
                      value={form.skills}
                      onChange={(e) =>
                        setForm({ ...form, skills: e.target.value })
                      }
                      rows={2}
                      className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                      placeholder="e.g. Java, React, Digital Marketing"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Preferred Job Role
                    </label>
                    <input
                      type="text"
                      value={form.preferredRole}
                      onChange={(e) =>
                        setForm({ ...form, preferredRole: e.target.value })
                      }
                      className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      value={form.linkedinUrl}
                      onChange={(e) =>
                        setForm({ ...form, linkedinUrl: e.target.value })
                      }
                      className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={form.consentGiven}
                onChange={(e) =>
                  setForm({ ...form, consentGiven: e.target.checked })
                }
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-slate-600">
                I consent to the processing of my data for event registration
                and, where applicable, sharing relevant profile information with
                participating employers and recruiters for recruitment purposes.
              </label>
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-slate-900 text-white font-semibold py-3 rounded-md hover:bg-slate-800 disabled:opacity-50 transition"
            >
              {submitting ? "Submitting..." : "Complete Registration"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}

import { Helmet } from "react-helmet";

export default function TermsOfService() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Helmet>
        <title>Terms of Service | AA Mods Store</title>
        <meta name="description" content="Read the Terms of Service for AA Mods Store, including acceptable use, content disclaimer, and user responsibilities." />
      </Helmet>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Legal</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Terms of Service</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using AA Mods Store, you agree to comply with these Terms of Service. If you do not agree with any part of these terms,
              please discontinue use of the website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">2. Website Purpose</h2>
            <p>
              This website provides app information, release notes, and external download redirection links. We strive to keep listings accurate and
              up to date, but availability, compatibility, and file integrity may change over time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">3. User Responsibilities</h2>
            <p>
              You are responsible for how you use third-party apps and links accessed through the website. You must comply with local laws, platform
              rules, and device security best practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">4. Limitation of Liability</h2>
            <p>
              AA Mods Store is provided on an “as is” and “as available” basis without guarantees of uninterrupted access. We are not liable for any
              direct or indirect damages resulting from use of app listings, linked resources, or downloaded software.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">5. Changes to Terms</h2>
            <p>
              We may update these terms to reflect legal, operational, or product updates. Continued use of the website after revisions indicates
              acceptance of the updated Terms of Service.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

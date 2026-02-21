import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Helmet>
        <title>Privacy Policy | AA Mods Store</title>
        <meta name="description" content="Learn how AA Mods Store handles website usage data, third-party links, and user privacy commitments." />
      </Helmet>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Legal</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">Last updated: {new Date().getFullYear()}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              We may collect limited technical data such as device type, browser information, and anonymous interaction metrics to improve website
              reliability and performance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">2. How We Use Data</h2>
            <p>
              Collected information is used to maintain website security, optimize page performance, and improve user experience. We do not sell your
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">3. Third-Party Services and Links</h2>
            <p>
              The website may include third-party links, analytics tools, and download destinations. Each third-party provider has its own privacy and
              data handling terms; please review them before use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">4. Data Security</h2>
            <p>
              We use reasonable safeguards to protect website systems and data processing workflows, but no transmission method over the internet is
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">5. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes take effect when posted on this page. Continued use of the website means you
              accept the revised policy.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

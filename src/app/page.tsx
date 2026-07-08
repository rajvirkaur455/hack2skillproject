import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          HealthGov AI
        </p>

        <h1 className="text-4xl font-semibold sm:text-5xl">
          Your Next.js deployment is ready.
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          The app shell has been updated to avoid the prerendering issue caused by the older pages-based setup.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="/contact"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </main>
  );
}
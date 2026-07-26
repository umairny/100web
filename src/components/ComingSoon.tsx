import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ComingSoonProps {
  siteName?: string;
  category?: string;
  description?: string;
  eyebrow?: string;
  launchLabel?: string;
  backHref?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  siteName = 'This website concept',
  category = 'Website',
  description = 'This concept is being polished and will be published soon with a complete homepage experience.',
  eyebrow = 'Coming soon',
  launchLabel = 'Launch window: soon',
  backHref = '/',
}) => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_32%),linear-gradient(135deg,_#f8fafc,_#e2e8f0)] px-4 py-16 text-slate-900">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
        <div className="border-b border-slate-200 bg-slate-950 px-8 py-6 text-white">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">{siteName}</h1>
          <p className="mt-3 text-sm text-slate-300">{category} concept • work in progress</p>
        </div>

        <div className="p-8 sm:p-10">
          <p className="text-lg leading-8 text-slate-600">{description}</p>

          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">What to expect</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>• A dedicated homepage tailored to this business or brand.</li>
              <li>• Responsive sections, polished visuals, and a clear conversion path.</li>
              <li>• A fresh experience that matches the rest of the collection.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={backHref}
              className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Back to overview
            </Link>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Go back
            </button>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{launchLabel}</p>
        </div>
      </div>
    </main>
  );
};

export default ComingSoon;

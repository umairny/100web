import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecruitFlowLayout } from "./RecruitFlowLayout";

export function RecruitFlowPricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openJobs, setOpenJobs] = useState(5);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const seedBase = isAnnual ? 79 : 99;
  const growthBase = isAnnual ? 199 : 249;
  const enterpriseBase = isAnnual ? 479 : 599;

  const faqs = [
    {
      q: "Are there any limits on candidate applications?",
      a: "No! All RecruitFlow plans include unlimited candidate applications, resume uploads, and internal team members without per-seat penalty fees.",
    },
    {
      q: "How does the 14-day free trial work?",
      a: "You get 14 days of unrestricted access to the Growth plan. No credit card is required. You can post test jobs, invite hiring managers, and test scorecards.",
    },
    {
      q: "Can we automatically syndicate to free job boards?",
      a: "Yes. Every job you post in RecruitFlow is automatically published to Google for Jobs, Indeed, ZipRecruiter, and Glassdoor free feeds with zero extra setup.",
    },
    {
      q: "Do you support custom career sites?",
      a: "Yes! Every workspace comes with a hosted career portal matching your company branding, plus embeddable widgets and REST API access for custom domains.",
    },
  ];

  return (
    <RecruitFlowLayout>
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Transparent Hiring Plans
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Plans Built for Growing Teams
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            Unlimited hiring managers, unlimited applicant resumes, and flat monthly pricing.
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-semibold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly billing
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-13 h-7 rounded-full bg-blue-600 p-1 relative transition-colors focus:outline-none"
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Annual billing
              <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                20% Off
              </span>
            </span>
          </div>

          <div className="mt-8 max-w-md mx-auto p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
              <span>Concurrent Open Job Requisitions:</span>
              <span className="text-blue-600 font-extrabold">{openJobs} Open Roles</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              value={openJobs}
              onChange={(e) => setOpenJobs(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
              <span>1 job</span>
              <span>10 jobs</span>
              <span>20 jobs</span>
              <span>30+ jobs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Seed */}
            <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-between bg-white hover:border-slate-300 transition-all">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Seed</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Startup Team</h3>
                <p className="text-slate-600 text-xs mt-2">
                  Up to 3 active job postings with automated Google &amp; Indeed distribution.
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-black text-slate-900">${seedBase}</span>
                  <span className="text-xs text-slate-500 ml-1">/ month</span>
                </div>

                <ul className="mt-8 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Up to 3 active jobs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Unlimited hiring managers</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Google &amp; Indeed syndication</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Visual drag-and-drop pipeline</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/saas/recruitflow/trial"
                  className="w-full inline-flex items-center justify-center py-3 rounded-lg border border-slate-200 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider text-slate-800 transition-colors"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Growth (Featured) */}
            <div className="rounded-2xl border-2 border-blue-600 p-8 flex flex-col justify-between bg-white shadow-xl shadow-blue-500/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-black text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                Most Popular
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Growth</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Scaling Company</h3>
                <p className="text-slate-600 text-xs mt-2">
                  Up to 15 active jobs, collaborative scorecards, and calendar sync.
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-black text-slate-900">${growthBase}</span>
                  <span className="text-xs text-slate-500 ml-1">/ month</span>
                </div>

                <ul className="mt-8 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Up to 15 active jobs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Team scorecards &amp; rating criteria</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Zoom, Google Meet &amp; Teams auto-sync</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Automated stage trigger emails</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Branded career portal &amp; custom domain</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/saas/recruitflow/trial"
                  className="w-full inline-flex items-center justify-center py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-between bg-white hover:border-slate-300 transition-all">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Enterprise</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">High Volume Org</h3>
                <p className="text-slate-600 text-xs mt-2">
                  Unlimited jobs, Workday HRIS sync, dedicated onboarding manager, and custom SLAs.
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-black text-slate-900">${enterpriseBase}</span>
                  <span className="text-xs text-slate-500 ml-1">/ month</span>
                </div>

                <ul className="mt-8 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Unlimited active jobs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Workday, BambooHR &amp; Rippling sync</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> EEOC &amp; OFCCP compliance reporting</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Single Sign-On (SAML / Okta)</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/saas/recruitflow/features"
                  className="w-full inline-flex items-center justify-center py-3 rounded-lg border border-slate-200 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider text-slate-800 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-sm flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-blue-600 text-lg">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </RecruitFlowLayout>
  );
}

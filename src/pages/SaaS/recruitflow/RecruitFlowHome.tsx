import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecruitFlowLayout } from "./RecruitFlowLayout";
import {
  GSuiteLogo,
  MicrosoftBrandLogo,
  SlackBrandLogo,
  LinkedInBrandLogo,
  ZipRecruiterLogo,
  GlassdoorLogo,
  ZoomBrandLogo,
  RecruitFlowLogo,
} from "./RecruitFlowIcons";

export function RecruitFlowHome() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setTimeout(() => {
      navigate(`/saas/recruitflow/trial?email=${encodeURIComponent(email)}&company=${encodeURIComponent(company)}`);
    }, 600);
  };

  return (
    <RecruitFlowLayout>
      <div className="bg-white">
        {/* HERO SECTION */}
        <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F7FF] via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Copy & CTAs */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-5.5xl font-black tracking-tight text-slate-900 leading-[1.08]">
                  STREAMLINE YOUR HIRING. <br />
                  <span className="text-blue-600">FIND TOP TALENT FASTER.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                  Stop juggling spreadsheets and chaotic emails. Centralize your entire hiring process, collaborate effectively, and make data-driven hiring decisions with RecruitFlow.
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <Link
                      to="/saas/recruitflow/trial"
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      START YOUR FREE TRIAL (No Credit Card)
                    </Link>
                  </div>

                  <div>
                    <Link
                      to="/saas/recruitflow/features"
                      className="inline-flex items-center text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider"
                    >
                      REQUEST A DEMO &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Hero Artwork */}
              <div className="lg:col-span-6">
                <img
                  src="/images/saas/recruitflow/recruitflow-hero.svg"
                  alt="RecruitFlow candidate network tree and collaborative interview scene"
                  className="w-full h-auto rounded-2xl shadow-xl shadow-blue-500/5 border border-slate-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CORE WORKFLOW (4 STEPS) */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Core Workflow: Simplified &amp; Fast.
            </h2>

            {/* 4 Steps in row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 transition-all">
                <div className="w-full mb-4 flex justify-center">
                  <img
                    src="/images/saas/recruitflow/workflow-step1-attract.svg"
                    alt="Step 1: Attract Candidates"
                    className="h-24 w-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                  ATTRACT CANDIDATES
                </h3>
                <p className="text-xs text-slate-600 mt-1.5">
                  Post jobs with one click across 20+ job boards.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 transition-all">
                <div className="w-full mb-4 flex justify-center">
                  <img
                    src="/images/saas/recruitflow/workflow-step2-pipeline.svg"
                    alt="Step 2: Organize Pipeline"
                    className="h-24 w-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                  ORGANIZE PIPELINE
                </h3>
                <p className="text-xs text-slate-600 mt-1.5">
                  Drag-and-drop candidates through visual stages.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 transition-all">
                <div className="w-full mb-4 flex justify-center">
                  <img
                    src="/images/saas/recruitflow/workflow-step3-collaborate.svg"
                    alt="Step 3: Collaborate as a Team"
                    className="h-24 w-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                  COLLABORATE AS A TEAM
                </h3>
                <p className="text-xs text-slate-600 mt-1.5">
                  Score candidates, share notes, sync calendars.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center group hover:border-blue-300 transition-all">
                <div className="w-full mb-4 flex justify-center">
                  <img
                    src="/images/saas/recruitflow/workflow-step4-hire.svg"
                    alt="Step 4: Make the Hire"
                    className="h-24 w-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                  MAKE THE HIRE
                </h3>
                <p className="text-xs text-slate-600 mt-1.5">
                  Manage offers, track time-to-hire performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY RECRUITFLOW? (3 FEATURE CARDS) */}
        <section className="py-20 bg-[#F9FBFE] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why RecruitFlow?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto text-center">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col items-center">
                <div className="w-full mb-6 flex justify-center">
                  <img
                    src="/images/saas/recruitflow/feature-visual-pipeline.svg"
                    alt="Visual Pipeline Management"
                    className="w-48 h-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
                  VISUAL PIPELINE MANAGEMENT
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Customizable stages, drag-and-drop organization, stage triggers.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col items-center">
                <div className="w-full mb-6 flex justify-center">
                  <img
                    src="/images/saas/recruitflow/feature-team-collaboration.svg"
                    alt="Team Collaboration"
                    className="w-48 h-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
                  TEAM COLLABORATION
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Shared feedback, scorecards, interview scheduling, candidate communications.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col items-center">
                <div className="w-full mb-6 flex justify-center">
                  <img
                    src="/images/saas/recruitflow/feature-integrations-insights.svg"
                    alt="Integrations & Insights"
                    className="w-48 h-auto transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
                  INTEGRATIONS &amp; INSIGHTS
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Connect popular tools, track candidate sources, analyze hiring efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              INTEGRATES WITH YOUR FAVORITE TOOLS
            </h2>

            {/* Grid of integration tool cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <GSuiteLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <MicrosoftBrandLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <SlackBrandLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <LinkedInBrandLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <LinkedInBrandLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <ZipRecruiterLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <GlassdoorLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <ZoomBrandLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <GlassdoorLogo />
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md transition-all">
                <ZoomBrandLogo />
              </div>
              {/* Blue Banner Button */}
              <div className="col-span-2 bg-[#2563EB] p-4 rounded-xl text-white flex flex-col items-center justify-center text-center shadow-md">
                <span className="font-bold text-xs">Connects with the tools you already love.</span>
                <span className="text-[10px] text-blue-100">Seamlessly connect your existing stack.</span>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER TRUST / TESTIMONIAL & LOGOS */}
        <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
              TRUSTED BY HIRING TEAMS AT INNOVATIVE COMPANIES
            </h2>

            {/* Testimonial Quote */}
            <div className="mt-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-lg font-bold text-slate-800 leading-snug">
                &ldquo;RecruitFlow has transformed our hiring process, making it faster and more collaborative than ever before.&rdquo;
              </p>
              <div className="mt-4 text-xs font-semibold text-slate-500">
                — Sarah J., Head of HR, Acme Corp.
              </div>
            </div>

            {/* Logo Bar */}
            <div className="mt-12 flex flex-wrap items-center justify-around gap-6 opacity-75">
              <div className="flex items-center gap-1 font-extrabold text-slate-800 text-sm">
                <RecruitFlowLogo className="w-5 h-5" />
                <span>RecruitFlow</span>
              </div>
              <MicrosoftBrandLogo />
              <SlackBrandLogo />
              <LinkedInBrandLogo />
              <span className="font-bold text-slate-700 text-xs">Company</span>
              <ZipRecruiterLogo />
              <GlassdoorLogo />
              <ZoomBrandLogo />
            </div>
          </div>
        </section>

        {/* LOW-FRICTION TRIAL PATH & CHECKLIST */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                READY TO FIND YOUR NEXT GREAT HIRE?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200">
              {/* Form on left (7 cols) */}
              <form onSubmit={handleTrialSubmit} className="md:col-span-7 space-y-4">
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all hover:shadow-lg disabled:opacity-75"
                >
                  {submitting ? "Provisioning..." : "START YOUR FREE TRIAL"}
                </button>

                <p className="text-[11px] text-slate-400 text-center font-medium">
                  14-day free trial. No credit card required. Cancel anytime.
                </p>
              </form>

              {/* Checklist on right (5 cols) */}
              <div className="md:col-span-5 md:pl-6 md:border-l md:border-slate-200 space-y-3 text-xs">
                <div className="font-extrabold text-slate-900 text-sm mb-2">
                  Why RecruitFlow?
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>No more chaos</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Data driven</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Faster hiring</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Better candidate experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RecruitFlowLayout>
  );
}

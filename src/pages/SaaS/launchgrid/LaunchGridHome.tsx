import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LaunchGridLayout } from "./LaunchGridLayout";
import {
  SlackLogo,
  GitHubLogo,
  JiraLogo,
  TrelloLogo,
  GoogleCalendarLogo,
  ZoomLogo,
  SalesforceLogo,
  NetflixBrandLogo,
  SpotifyBrandLogo,
  AmazonBrandLogo,
} from "./LaunchGridIcons";

export function LaunchGridHome() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      navigate(`/saas/launchgrid-pm/trial?email=${encodeURIComponent(email)}&company=${encodeURIComponent(company)}`);
    }, 600);
  };

  return (
    <LaunchGridLayout>
      {/* Background Soft Glows */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-60">
          <div className="absolute top-[-100px] left-[15%] w-[450px] h-[450px] bg-blue-100/70 rounded-full blur-3xl" />
          <div className="absolute top-[40px] right-[15%] w-[400px] h-[400px] bg-teal-100/60 rounded-full blur-3xl" />
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & CTAs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide uppercase">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Next-Gen Project Management
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                  LaunchGrid PM: <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                    Rocketing Your Projects
                  </span>{" "}
                  from Idea to Execution.
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                  Boost team collaboration, streamline workflows, and ship faster with the calmest PM platform.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/saas/launchgrid-pm/trial"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Start 14-Day Free Trial (No Credit Card)
                  </Link>

                  <Link
                    to="/saas/launchgrid-pm/demo"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm shadow-sm transition-all hover:border-slate-300"
                  >
                    <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <span>Watch Demo</span>
                  </Link>
                </div>

                {/* Trust Badges under CTA */}
                <div className="pt-2 flex items-center gap-6 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Free for 14 days</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No credit card</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Dashboard Graphic */}
              <div className="lg:col-span-6 relative">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/15 via-teal-400/15 to-indigo-500/15 blur-xl group-hover:blur-2xl transition duration-500" />
                  <img
                    src="/images/saas/launchgrid/launchgrid-hero-dashboard.svg"
                    alt="LaunchGrid PM Interactive Dashboard with Kanban sprints and Gantt timeline"
                    className="relative w-full h-auto rounded-xl shadow-2xl shadow-slate-900/10 border border-slate-200/80 transition-transform duration-300 hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT VALUE / CORE WORKFLOW SECTION */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Product Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                Core Workflow
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg">
                Define goals, prioritize tasks, and structure projects with intuitive tools.
              </p>
            </div>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card 1: Plan */}
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-100 p-2 mb-6">
                    <img
                      src="/images/saas/launchgrid/feature-kanban-plan.svg"
                      alt="Plan - Visualize Your Vision Kanban board"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                    Plan
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Visualize Your Vision
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Define goals, prioritize tasks, and structure projects with intuitive tools.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Kanban &amp; Roadmap views</span>
                  <Link
                    to="/saas/launchgrid-pm/features"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Planning</span> &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 2: Collaborate */}
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-100 p-2 mb-6">
                    <img
                      src="/images/saas/launchgrid/feature-collaboration.svg"
                      alt="Collaborate - Seamless Teamwork threaded messaging"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                    Collaborate
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Seamless Teamwork
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Real-time discussions, progress updates, and file sharing for everyone.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Live chat &amp; inline docs</span>
                  <Link
                    to="/saas/launchgrid-pm/features"
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Collaboration</span> &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 3: Analyze */}
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-100 p-2 mb-6">
                    <img
                      src="/images/saas/launchgrid/feature-analytics.svg"
                      alt="Analyze - Data-Driven Decisions throughput graphs"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                    Analyze
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Real-time insights, resource management, and risk prediction.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Velocity &amp; burn-down metrics</span>
                  <Link
                    to="/saas/launchgrid-pm/features"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Analytics</span> &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 4: Automate */}
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="overflow-hidden rounded-xl bg-slate-50 border border-slate-100 p-2 mb-6">
                    <img
                      src="/images/saas/launchgrid/feature-automation.svg"
                      alt="Automate - Work Smarter, Not Harder node graph"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-1">
                    Automate
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Work Smarter, Not Harder
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Connect tools, automate repetitive tasks, and save time.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">No-code triggers &amp; webhooks</span>
                  <Link
                    to="/saas/launchgrid-pm/features"
                    className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Automations</span> &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS SECTION */}
        <section className="py-20 bg-[#F9FBFE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Integrations
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                Connects with the Tools You Already Love
              </h2>
            </div>

            {/* 8 Integration Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {/* Slack */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-slate-300 transition-all group">
                <SlackLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                <span className="font-bold text-slate-800 text-sm">slack</span>
              </div>

              {/* GitHub */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-slate-300 transition-all group">
                <GitHubLogo className="w-8 h-8 text-slate-900 transition-transform group-hover:scale-110" />
                <span className="font-bold text-slate-800 text-sm">GitHub</span>
              </div>

              {/* Jira */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-slate-300 transition-all group">
                <JiraLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                <span className="font-bold text-slate-800 text-sm">Jira</span>
              </div>

              {/* Trello */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-slate-300 transition-all group">
                <TrelloLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                <span className="font-bold text-slate-800 text-sm">Trello</span>
              </div>

              {/* Google Calendar */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-slate-300 transition-all group">
                <GoogleCalendarLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                <span className="font-bold text-slate-800 text-xs text-center">Google Calendar</span>
              </div>

              {/* Zoom */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-slate-300 transition-all group">
                <ZoomLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                <span className="font-bold text-blue-500 text-sm">zoom</span>
              </div>

              {/* Salesforce */}
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-slate-300 transition-all group">
                <SalesforceLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
                <span className="font-bold text-sky-500 text-xs text-center">salesforce</span>
              </div>

              {/* Explore 50+ */}
              <Link
                to="/saas/launchgrid-pm/integrations"
                className="bg-blue-50/70 p-6 rounded-xl border border-blue-200/80 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-blue-100/70 transition-all group text-center"
              >
                <span className="font-bold text-blue-600 text-sm group-hover:translate-x-0.5 transition-transform">
                  Explore 50+ Integrations &rarr;
                </span>
                <span className="text-[11px] text-blue-500">API, Webhooks &amp; SDKs</span>
              </Link>
            </div>

            {/* Gradient banner: "Connects with the Tools You Already Love." */}
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="py-3 px-6 rounded-xl bg-gradient-to-r from-blue-100 via-teal-100 to-blue-100 border border-blue-200/60 text-center font-bold text-slate-800 text-sm tracking-wide">
                Connects with the Tools You Already Love.
              </div>
            </div>
          </div>
        </section>

        {/* BUYER TRUST / TESTIMONIALS SECTION */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Buyer Trust
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                Buyer Trust
              </h2>
            </div>

            {/* Testimonials Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Testimonial 1 */}
              <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 relative flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 flex gap-1 mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-lg font-bold text-slate-800 italic">
                    &ldquo;LaunchGrid changed how we build products.&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200/70">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm border border-blue-200">
                      SL
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Sarah Lee</div>
                      <div className="text-xs text-slate-500">Product Director, Soylent Tech</div>
                    </div>
                  </div>
                  {/* Brand emblem */}
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">
                    ▲
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 relative flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 flex gap-1 mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-lg font-bold text-slate-800 italic">
                    &ldquo;LaunchGrid changed how we controlled products.&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200/70">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm border border-emerald-200">
                      MC
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Marcus Chen</div>
                      <div className="text-xs text-slate-500">Product Director, SkyNet</div>
                    </div>
                  </div>
                  {/* Brand emblem */}
                  <div className="flex items-center gap-1 text-slate-900 font-black text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span>SkyNet</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Logo Bar */}
            <div className="mt-14 max-w-4xl mx-auto py-6 px-8 rounded-2xl bg-[#F0FDF4]/60 border border-emerald-100 flex flex-wrap items-center justify-around gap-8">
              <NetflixBrandLogo className="text-xl opacity-90" />
              <SpotifyBrandLogo className="text-xl opacity-90" />
              <AmazonBrandLogo className="text-xl opacity-90" />
              <AmazonBrandLogo className="text-xl opacity-75" />
            </div>
          </div>
        </section>

        {/* LOW-FRICTION TRIAL PATH SECTION */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F0F7FF]">
          <div className="max-w-xl mx-auto px-4 sm:px-6">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-xl shadow-blue-500/5 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Low-Friction Trial Path
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 tracking-tight">
                Ready to Level Up Your <br />
                Project Management?
              </h2>

              <form onSubmit={handleTrialSubmit} className="mt-8 space-y-4 text-left">
                <div>
                  <label htmlFor="workEmail" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Work Email
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-sm transition-all bg-slate-50/50 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full mt-2 py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.99] disabled:opacity-75 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating Your Workspace...
                    </>
                  ) : (
                    "Create Your Free Account"
                  )}
                </button>
              </form>

              <div className="mt-4 text-xs text-slate-500 font-medium">
                Free for 14 Days. No Credit Card. Cancel Anytime.
              </div>
            </div>
          </div>
        </section>
      </div>
    </LaunchGridLayout>
  );
}

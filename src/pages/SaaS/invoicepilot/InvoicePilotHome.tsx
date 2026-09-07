import React from "react";
import { Link } from "react-router-dom";
import { InvoicePilotLayout } from "./InvoicePilotLayout";
import {
  CalendarGearIcon,
  LayeredCardsIcon,
  GlobalCardIcon,
  StripeLogo,
  PayPalLogo,
  QuickBooksLogo,
  XeroLogo,
  NetSuiteLogo,
  PciDssBadge,
} from "./InvoicePilotIcons";

export function InvoicePilotHome() {
  return (
    <InvoicePilotLayout>
      {/* Background Ambience */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none opacity-40">
          <div className="absolute top-[-80px] left-[20%] w-[420px] h-[420px] bg-sky-100 rounded-full blur-3xl" />
          <div className="absolute top-[20px] right-[20%] w-[380px] h-[380px] bg-emerald-100/70 rounded-full blur-3xl" />
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 lg:pt-18 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12] max-w-4xl mx-auto">
              Simplify B2B Billing. Grow Your Subscription Business.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
              Automate invoicing, manage complex subscriptions, and get paid faster with InvoicePilot.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/saas/invoicepilot/trial"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-md shadow-sky-500/25 transition-all hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Your 14-Day Free Trial (No Credit Card)
              </Link>

              <Link
                to="/saas/invoicepilot/features"
                className="text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors py-2 px-3"
              >
                Request a Demo &rarr;
              </Link>
            </div>

            {/* Hero Artwork (Airplane + City + Dashboard) */}
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="relative group">
                <img
                  src="/images/saas/invoicepilot/invoicepilot-hero.svg"
                  alt="InvoicePilot origami invoice airplane and automated billing dashboard"
                  className="w-full h-auto rounded-2xl shadow-xl shadow-slate-900/8 border border-slate-200/80 transition-transform duration-500 hover:scale-[1.008]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT VALUE / 3 PILLARS */}
        <section className="py-20 bg-[#F9FBFE] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Product Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Streamline Your Entire Billing Process.
            </h2>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto text-center">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col items-center">
                <div className="p-3 rounded-2xl bg-blue-50/70 mb-5 transition-transform group-hover:scale-110">
                  <CalendarGearIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Automate Recurring Billing
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Handle varying cycles and models.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all group flex flex-col items-center">
                <div className="p-3 rounded-2xl bg-sky-50/70 mb-5 transition-transform group-hover:scale-110">
                  <LayeredCardsIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Flexible Subscription Management
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  From simple plans to tiered usage.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all group flex flex-col items-center">
                <div className="p-3 rounded-2xl bg-emerald-50/70 mb-5 transition-transform group-hover:scale-110">
                  <GlobalCardIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Global Payment Acceptance
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Integrate with leading gateways.
                </p>
              </div>
            </div>

            <p className="mt-10 text-sm font-semibold text-slate-500">
              Reduce errors, save time, and scale with confidence.
            </p>
          </div>
        </section>

        {/* INVOICING REVENUE ANALYTICS (FRAME 2) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Product Voice
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
                Invoicing Revenue Analytics
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                Track MRR, retention rate, and invoice status with real-time telemetry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
              <div className="lg:col-span-7">
                <img
                  src="/images/saas/invoicepilot/invoicepilot-analytics.svg"
                  alt="Invoicing Revenue Analytics Chart"
                  className="w-full h-auto rounded-2xl shadow-xl border border-slate-200"
                />
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-emerald-200/80">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    5x Faster Invoicing Velocity
                  </div>
                  <p className="text-xs text-emerald-900/80 leading-relaxed">
                    Get invoices out the door up to 5x faster with automatic tax calculations, localized currency conversion, and instant PDF delivery.
                  </p>
                </div>

                <div className="bg-[#F0F9FF] p-6 rounded-2xl border border-sky-200/80">
                  <div className="flex items-center gap-2 text-sky-800 font-bold text-sm mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                    Smart Dunning Retries
                  </div>
                  <p className="text-xs text-sky-900/80 leading-relaxed">
                    Reduce payment churn with automated retry cadences that recover over 94% of failed card transactions before subscriptions cancel.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/saas/invoicepilot/features"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                  >
                    <span>Try Dunning Simulator</span> &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS SECTION */}
        <section className="py-20 bg-[#F8FAFC] border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Works with Your Entire Business Stack.
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-xl mx-auto">
              Sync data, trigger workflows, and streamline accounting.
            </p>

            {/* 12-Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mt-12">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <span className="font-bold text-sky-500 text-xs">salesforce</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <span className="font-bold text-orange-500 text-xs">HubSpot</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <StripeLogo className="w-7 h-7" />
                <span className="font-bold text-indigo-600 text-xs">stripe</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <PayPalLogo className="w-7 h-7" />
                <span className="font-bold text-blue-800 text-xs">PayPal</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <span className="font-bold text-rose-500 text-xs"># slack</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <QuickBooksLogo className="w-7 h-7" />
                <span className="font-bold text-slate-800 text-xs">QuickBooks</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <XeroLogo className="w-7 h-7" />
                <span className="font-bold text-cyan-600 text-xs">Xero</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <NetSuiteLogo className="w-7 h-7" />
                <span className="font-bold text-slate-800 text-xs">NetSuite</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <span className="font-bold text-emerald-600 text-xs">Zapier</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <span className="font-bold text-slate-800 text-xs">AWS KMS</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all">
                <span className="font-bold text-purple-600 text-xs">Snowflake</span>
              </div>
              <Link
                to="/saas/invoicepilot/integrations"
                className="bg-emerald-50/80 p-5 rounded-xl border border-emerald-200 shadow-sm flex flex-col items-center justify-center gap-1 hover:bg-emerald-100 transition-all text-center"
              >
                <span className="font-bold text-emerald-700 text-xs">Explore 25+</span>
                <span className="text-[10px] text-emerald-600">Gateways &amp; APIs &rarr;</span>
              </Link>
            </div>

            <div className="mt-8">
              <Link
                to="/saas/invoicepilot/features"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
              >
                Schedule a Demo &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* CORE WORKFLOW (GET STARTED IN 3 SIMPLE STEPS) */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Core Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Define billing cycles, pricing, and features.
            </p>

            {/* 3 Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-full mb-5 overflow-hidden rounded-xl border border-slate-100">
                  <img
                    src="/images/saas/invoicepilot/workflow-step1-plans.svg"
                    alt="Step 1 Set Up Plans"
                    className="w-full h-auto"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                  Step 01
                </span>
                <h3 className="text-xl font-bold text-slate-900">Set Up Plans</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Define billing cycles, pricing tiers, feature gates, and usage thresholds.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-full mb-5 overflow-hidden rounded-xl border border-slate-100">
                  <img
                    src="/images/saas/invoicepilot/workflow-step2-onboard.svg"
                    alt="Step 2 Onboard Customers"
                    className="w-full h-auto"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
                  Step 02
                </span>
                <h3 className="text-xl font-bold text-slate-900">Onboard Customers</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Seamlessly create subscriptions, invite finance approvers, or send one-off invoices.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-full mb-5 overflow-hidden rounded-xl border border-slate-100">
                  <img
                    src="/images/saas/invoicepilot/workflow-step3-paid.svg"
                    alt="Step 3 Get Paid Automatically"
                    className="w-full h-auto"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  Step 03
                </span>
                <h3 className="text-xl font-bold text-slate-900">Get Paid Automatically</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Track payments, handle automated renewals, and manage churn without manual touch.
                </p>
              </div>
            </div>

            <p className="mt-10 text-xs font-bold uppercase tracking-wider text-slate-400">
              Integrated Billing from Proposal to Payment.
            </p>
          </div>
        </section>

        {/* BUYER TRUST / TESTIMONIAL & LOGO BAR */}
        <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Buyer Trust
            </span>

            {/* Testimonial Quote */}
            <div className="mt-8 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative">
              <div className="text-4xl text-emerald-500 font-serif leading-none mb-3">“</div>
              <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                InvoicePilot transformed our billing. We saved dozens of hours each month and reduced churn significantly.
              </p>
              <div className="mt-6 text-sm font-semibold text-slate-500">
                — Sarah L., CEO, Tech Solutions
              </div>
            </div>

            {/* Partner Brand Logos */}
            <div className="mt-12 flex flex-wrap items-center justify-around gap-8 opacity-80">
              <span className="font-black tracking-tight text-lg text-slate-800">Google</span>
              <span className="font-black tracking-tight text-lg text-[#FF7A59]">HubSpot</span>
              <span className="font-black tracking-tight text-lg text-[#FF0000]">Adobe</span>
              <span className="font-black tracking-tight text-lg text-slate-800">Microsoft</span>
              <span className="font-black tracking-tight text-lg text-slate-900">Apple Pay</span>
              <span className="font-black tracking-tight text-lg text-[#1A1F71] italic">VISA</span>
            </div>

            {/* Security Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <PciDssBadge className="w-4 h-4 text-blue-600" />
              <span>PCI-DSS Compliant &amp; Secure Data</span>
            </div>
          </div>
        </section>

        {/* LOW-FRICTION TRIAL PATH */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Low-Friction Trial Path
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Ready to Pilot Your Billing Success?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Full Feature Access. No Credit Card Required. Cancel Anytime.
            </p>

            <div className="mt-8">
              <Link
                to="/saas/invoicepilot/trial"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                CREATE YOUR FREE ACCOUNT
              </Link>
              <div className="mt-3 text-xs text-slate-400 font-medium">
                14-day free trial
              </div>
            </div>
          </div>
        </section>
      </div>
    </InvoicePilotLayout>
  );
}

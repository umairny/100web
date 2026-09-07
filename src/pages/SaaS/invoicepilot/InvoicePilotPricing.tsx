import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InvoicePilotLayout } from "./InvoicePilotLayout";

export function InvoicePilotPricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [mrrVolume, setMrrVolume] = useState(50000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const starterBase = isAnnual ? 39 : 49;
  const growthBase = isAnnual ? 119 : 149;
  const scaleBase = isAnnual ? 319 : 399;

  const faqs = [
    {
      q: "Does InvoicePilot take a percentage cut of my revenue?",
      a: "No! Unlike legacy billing systems that charge 0.5% - 1% on every transaction, InvoicePilot charges a simple predictable flat monthly subscription fee without revenue tax.",
    },
    {
      q: "Can I connect multiple payment processors simultaneously?",
      a: "Yes. You can route North American cards to Stripe, European payments to Adyen, and enterprise B2B bank wires to direct ACH — all under a single dashboard.",
    },
    {
      q: "How does the 14-day free trial work?",
      a: "You receive full, unrestricted access to the Growth plan for 14 days. No credit card is required to sign up. If you choose not to subscribe, your account transitions to read-only.",
    },
    {
      q: "Is InvoicePilot PCI-DSS Level 1 compliant?",
      a: "Yes. All credit card tokens, bank account details, and payment credentials are encrypted using bank-grade AES-256 and stored in certified PCI-DSS Level 1 vault isolation.",
    },
  ];

  return (
    <InvoicePilotLayout>
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Predictable Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            No Revenue Penalties. Just Flat Transparent Rates.
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            Scale your MRR without handing over a percentage cut of your growth.
          </p>

          {/* Annual Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-semibold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly billing
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-13 h-7 rounded-full bg-emerald-600 p-1 relative transition-colors focus:outline-none"
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Annual billing
              <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                20% Off
              </span>
            </span>
          </div>

          {/* Volume Calculator */}
          <div className="mt-8 max-w-md mx-auto p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
              <span>Your Estimated Monthly Revenue (MRR):</span>
              <span className="text-emerald-600 font-extrabold">${(mrrVolume / 1000).toFixed(0)}k / mo</span>
            </div>
            <input
              type="range"
              min={5000}
              max={250000}
              step={5000}
              value={mrrVolume}
              onChange={(e) => setMrrVolume(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
              <span>$5k</span>
              <span>$50k</span>
              <span>$100k</span>
              <span>$250k+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-between bg-white hover:border-slate-300 transition-all">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Starter</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Early Stage SaaS</h3>
                <p className="text-slate-600 text-xs mt-2">
                  Essential subscription automation for seed startups and product launches.
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-black text-slate-900">${starterBase}</span>
                  <span className="text-xs text-slate-500 ml-1">/ mo</span>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">
                    0% transaction revenue cut
                  </div>
                </div>

                <ul className="mt-8 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Up to $25k MRR processing</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 2 payment gateways (Stripe, PayPal)</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Automated PDF invoicing &amp; receipts</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Basic smart dunning email retries</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/saas/invoicepilot/trial"
                  className="w-full inline-flex items-center justify-center py-3 rounded-full border border-slate-200 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider text-slate-800 transition-colors"
                >
                  Start 14-Day Trial
                </Link>
              </div>
            </div>

            {/* Growth (Featured) */}
            <div className="rounded-2xl border-2 border-emerald-600 p-8 flex flex-col justify-between bg-white shadow-xl shadow-emerald-500/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                Most Popular
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Growth</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Scaling Business</h3>
                <p className="text-slate-600 text-xs mt-2">
                  Full multi-currency subscriptions, automated dunning, and CRM integrations.
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-black text-slate-900">${growthBase}</span>
                  <span className="text-xs text-slate-500 ml-1">/ mo</span>
                  <div className="text-xs text-emerald-600 font-semibold mt-1">
                    Up to $150k MRR processing
                  </div>
                </div>

                <ul className="mt-8 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Unlimited payment gateways</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Multi-currency (135+ FX rates)</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Machine learning dunning cadence</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> QuickBooks &amp; Xero sync</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Customer self-serve billing portal</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/saas/invoicepilot/trial"
                  className="w-full inline-flex items-center justify-center py-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Scale */}
            <div className="rounded-2xl border border-slate-200 p-8 flex flex-col justify-between bg-white hover:border-slate-300 transition-all">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Scale</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Global Enterprise</h3>
                <p className="text-slate-600 text-xs mt-2">
                  High-volume metering, custom contract terms, and dedicated technical architects.
                </p>

                <div className="mt-6">
                  <span className="text-4xl font-black text-slate-900">${scaleBase}</span>
                  <span className="text-xs text-slate-500 ml-1">/ mo</span>
                  <div className="text-xs text-slate-500 font-semibold mt-1">
                    Unlimited volume &amp; custom SLAs
                  </div>
                </div>

                <ul className="mt-8 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Unlimited MRR processing</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> NetSuite &amp; SAP enterprise sync</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> Dedicated compliance auditor</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500 font-bold">✓</span> 99.99% uptime SLA guarantee</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/saas/invoicepilot/trial"
                  className="w-full inline-flex items-center justify-center py-3 rounded-full border border-slate-200 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider text-slate-800 transition-colors"
                >
                  Contact Enterprise Sales
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
                  <span className="text-emerald-600 text-lg">{openFaq === idx ? "−" : "+"}</span>
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
    </InvoicePilotLayout>
  );
}

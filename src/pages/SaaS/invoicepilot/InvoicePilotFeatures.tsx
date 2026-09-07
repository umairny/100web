import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InvoicePilotLayout } from "./InvoicePilotLayout";
import { CalendarGearIcon, LayeredCardsIcon, GlobalCardIcon, PciDssBadge } from "./InvoicePilotIcons";

export function InvoicePilotFeatures() {
  const [activeScenario, setActiveScenario] = useState<"soft_decline" | "expired_card" | "upgrade_tier">("soft_decline");
  const [retryCadence, setRetryCadence] = useState<"smart" | "aggressive" | "conservative">("smart");
  const [simulationRun, setSimulationRun] = useState(false);
  const [recoveredAmount, setRecoveredAmount] = useState(2400);

  const handleRunSim = () => {
    setSimulationRun(true);
    if (activeScenario === "soft_decline") setRecoveredAmount(4800);
    if (activeScenario === "expired_card") setRecoveredAmount(1950);
    if (activeScenario === "upgrade_tier") setRecoveredAmount(8200);
  };

  return (
    <InvoicePilotLayout>
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Enterprise Billing Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Engineered for Subscription Longevity
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
            From automated tiered billing and usage metering to automated failed card recovery.
          </p>
        </div>
      </section>

      {/* 3 Core Pillars in Depth */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200">
              <CalendarGearIcon className="w-12 h-12 mb-4" />
              <h2 className="text-xl font-bold text-slate-900">Automate Recurring Billing</h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Run calendar, milestone, and anniversary billing cycles automatically. Generate invoices, apply credits, and calculate sales tax dynamically across jurisdictions.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Proration &amp; mid-cycle upgrades</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Net-30, Net-60 enterprise terms</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> TaxJar &amp; Avalara automated sync</li>
              </ul>
            </div>

            <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200">
              <LayeredCardsIcon className="w-12 h-12 mb-4" />
              <h2 className="text-xl font-bold text-slate-900">Flexible Subscriptions</h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Support seat tiers, overage fees, usage bursts, and add-ons in a single unified customer profile. Never maintain dual billing databases again.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Per-seat &amp; volume stair-step rates</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Usage metering via Kafka/REST webhooks</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Grandfathered legacy customer tiers</li>
              </ul>
            </div>

            <div className="bg-slate-50/70 p-8 rounded-2xl border border-slate-200">
              <GlobalCardIcon className="w-12 h-12 mb-4" />
              <h2 className="text-xl font-bold text-slate-900">Global Payment Gateways</h2>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Route transactions across Stripe, PayPal, Braintree, Adyen, and Direct Bank ACH for lowest interchange costs and peak approval rates.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Smart fallback routing on gateway outages</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> 135+ currencies with daily FX rates</li>
                <li className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✓</span> Level 3 B2B commercial card data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DUNNING & RECOVERY SIMULATOR */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Live Interactive Simulator
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Automated Smart Dunning Sandbox
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-lg mx-auto">
              Simulate payment failure scenarios and watch InvoicePilot&apos;s intelligent retry engine rescue recurring revenue in real time.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Controls */}
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    1. Select Failed Payment Trigger:
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: "soft_decline", label: "Soft Decline (Temporary Bank Hold - $4,800 invoice)" },
                      { id: "expired_card", label: "Expired Card / New CVV Required ($1,950 invoice)" },
                      { id: "upgrade_tier", label: "Mid-Month Usage Spike Exceeded Limit ($8,200 invoice)" },
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setActiveScenario(item.id as any);
                          setSimulationRun(false);
                        }}
                        className={`p-3 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                          activeScenario === item.id
                            ? "bg-sky-50 border-sky-500 text-sky-900"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
                        }`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    2. Choose Recovery Cadence:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "smart", label: "Smart AI (Recommended)" },
                      { id: "aggressive", label: "Aggressive (Daily)" },
                      { id: "conservative", label: "Gentle (Every 4d)" },
                    ].map((cad) => (
                      <button
                        key={cad.id}
                        type="button"
                        onClick={() => {
                          setRetryCadence(cad.id as any);
                          setSimulationRun(false);
                        }}
                        className={`p-2.5 rounded-lg border text-[11px] font-bold transition-all ${
                          retryCadence === cad.id
                            ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                            : "bg-slate-50 border-slate-200 text-slate-600"
                        }`}
                      >
                        {cad.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRunSim}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Run Recovery Sequence &rarr;
                </button>
              </div>

              {/* Simulation Result Output */}
              <div className="bg-slate-900 rounded-xl p-6 text-white flex flex-col justify-between font-mono text-xs">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-slate-400">EXECUTION LOG</span>
                    <span className="text-emerald-400 font-bold">
                      {simulationRun ? "● SEQUENCE FINISHED" : "READY"}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-[11px] leading-relaxed">
                    <div className="text-slate-400">
                      [00:00.00] Ingesting trigger: {activeScenario.toUpperCase()}
                    </div>
                    {simulationRun ? (
                      <>
                        <div className="text-sky-400">
                          [00:00.45] ML Model analyzes issuer decline code (Issuer: JPMorgan Chase)
                        </div>
                        <div className="text-amber-400">
                          [00:01.12] Optimal retry window calculated: 4:15 AM local time
                        </div>
                        <div className="text-slate-300">
                          [00:02.04] Branded self-update link dispatched to finance director
                        </div>
                        <div className="text-emerald-400 font-bold">
                          [00:03.20] ✓ TRANSACTION CLEARED: ${recoveredAmount.toLocaleString()} USD
                        </div>
                        <div className="text-slate-400">
                          [00:03.50] Accounting updated in QuickBooks &amp; Stripe metadata
                        </div>
                      </>
                    ) : (
                      <div className="text-slate-600 italic py-8 text-center">
                        Select parameters and click &quot;Run Recovery Sequence&quot; to test the automated dunning cadence.
                      </div>
                    )}
                  </div>
                </div>

                {simulationRun && (
                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400">Revenue Rescued:</span>
                    <span className="text-emerald-400 font-bold text-base">
                      +${recoveredAmount.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Ready to stop revenue churn?
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/saas/invoicepilot/trial"
            className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            Start Free 14-Day Trial
          </Link>
        </div>
      </section>
    </InvoicePilotLayout>
  );
}

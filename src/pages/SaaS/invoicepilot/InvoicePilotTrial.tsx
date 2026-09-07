import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InvoicePilotLayout } from "./InvoicePilotLayout";
import { InvoicePilotLogo, PciDssBadge } from "./InvoicePilotIcons";

export function InvoicePilotTrial() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [billingModel, setBillingModel] = useState("saas_recurring");
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [sandboxReady, setSandboxReady] = useState(false);

  const handleLaunchSandbox = () => {
    setIsProvisioning(true);
    setTimeout(() => {
      setIsProvisioning(false);
      setSandboxReady(true);
    }, 1200);
  };

  return (
    <InvoicePilotLayout>
      <div className="py-16 bg-gradient-to-b from-sky-50/50 to-white min-h-[calc(100vh-140px)]">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-3">
              <InvoicePilotLogo className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {sandboxReady ? "Your Billing Sandbox is Ready!" : "Start Your 14-Day Free Trial"}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Full Feature Access • No Credit Card Required • Cancel Anytime
            </p>

            {!sandboxReady && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-600"}`}>1</span>
                <div className={`w-10 h-0.5 ${step >= 2 ? "bg-emerald-600" : "bg-slate-200"}`} />
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-600"}`}>2</span>
                <div className={`w-10 h-0.5 ${step === 3 ? "bg-emerald-600" : "bg-slate-200"}`} />
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-600"}`}>3</span>
              </div>
            )}
          </div>

          {!sandboxReady && step === 1 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-900/5 space-y-4">
              <h2 className="font-bold text-slate-900 text-sm">Step 1: Your Account Information</h2>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@techsolutions.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Tech Solutions Inc."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="button"
                disabled={!email || !company}
                onClick={() => setStep(2)}
                className="w-full mt-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all disabled:opacity-50"
              >
                Continue to Currency &amp; Models &rarr;
              </button>
            </div>
          )}

          {!sandboxReady && step === 2 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-900/5 space-y-4">
              <h2 className="font-bold text-slate-900 text-sm">Step 2: Billing Model &amp; Currency</h2>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Settlement Currency</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-emerald-500 bg-white"
                >
                  <option value="USD">USD ($ - United States Dollar)</option>
                  <option value="EUR">EUR (€ - Euro Area)</option>
                  <option value="GBP">GBP (£ - British Pound)</option>
                  <option value="CAD">CAD ($ - Canadian Dollar)</option>
                  <option value="AUD">AUD ($ - Australian Dollar)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subscription Model</label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[
                    { id: "saas_recurring", name: "Fixed Monthly/Annual", desc: "Predictable recurring fee" },
                    { id: "tiered_seats", name: "Per-Seat Pricing", desc: "Scales per active user" },
                    { id: "usage_metered", name: "Usage / API Metered", desc: "Pay-as-you-go consumption" },
                    { id: "hybrid", name: "Hybrid Base + Overage", desc: "Platform base + excess fee" },
                  ].map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setBillingModel(m.id)}
                      className={`p-3 rounded-xl border cursor-pointer text-left transition-all ${
                        billingModel === m.id
                          ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold"
                          : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      <div className="text-xs">{m.name}</div>
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider shadow-md"
                >
                  Continue &rarr;
                </button>
              </div>
            </div>
          )}

          {!sandboxReady && step === 3 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-900/5 text-center space-y-4">
              <h2 className="font-bold text-slate-900 text-sm">Step 3: Instant Provisioning</h2>
              <p className="text-xs text-slate-600">
                Ready to initialize testing environment for <strong>{company}</strong> with {currency} currency settings.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Growth Plan Unlocked (14 Days Free)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Stripe Mock Test Gateway Connected
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Smart Dunning Cadence Activated
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3 px-4 rounded-full bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleLaunchSandbox}
                  disabled={isProvisioning}
                  className="flex-1 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider shadow-md disabled:opacity-75 flex items-center justify-center gap-2"
                >
                  {isProvisioning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Spinning Up Billing Ledger...
                    </>
                  ) : (
                    "Launch My Free Billing Sandbox"
                  )}
                </button>
              </div>
            </div>
          )}

          {sandboxReady && (
            <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-xl shadow-emerald-500/10 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-black text-2xl mx-auto border-4 border-emerald-50">
                ✓
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Welcome to {company || "Your Billing Workspace"}!
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your 14-day free trial has been provisioned with demo customers, mock payment webhooks, and invoice generation templates.
              </p>

              <div className="flex justify-center gap-4 pt-2">
                <Link
                  to="/saas/invoicepilot/features"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Open Invoicing Simulator &rarr;
                </Link>
                <Link
                  to="/saas/invoicepilot"
                  className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <PciDssBadge className="w-4 h-4 text-emerald-500" />
            <span>Encrypted with bank-grade 256-bit SSL &amp; PCI-DSS Level 1 Vaults</span>
          </div>
        </div>
      </div>
    </InvoicePilotLayout>
  );
}

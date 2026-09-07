import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecruitFlowLayout } from "./RecruitFlowLayout";
import { RecruitFlowLogo } from "./RecruitFlowIcons";

export function RecruitFlowTrial() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [firstRole, setFirstRole] = useState("Senior Fullstack Engineer");
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [sandboxReady, setSandboxReady] = useState(false);

  const handleLaunch = () => {
    setIsProvisioning(true);
    setTimeout(() => {
      setIsProvisioning(false);
      setSandboxReady(true);
    }, 1200);
  };

  return (
    <RecruitFlowLayout>
      <div className="py-16 bg-gradient-to-b from-[#F0F7FF] to-white min-h-[calc(100vh-140px)]">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-3">
              <RecruitFlowLogo className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {sandboxReady ? "Your Hiring Workspace is Ready!" : "Start Your 14-Day Free Trial"}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              No credit card required • Unlimited hiring managers &amp; applicant resumes
            </p>

            {!sandboxReady && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"}`}>1</span>
                <div className={`w-10 h-0.5 ${step >= 2 ? "bg-blue-600" : "bg-slate-200"}`} />
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"}`}>2</span>
                <div className={`w-10 h-0.5 ${step === 3 ? "bg-blue-600" : "bg-slate-200"}`} />
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"}`}>3</span>
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
                  placeholder="sarah.j@acmecorp.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Corp."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="button"
                disabled={!email || !company}
                onClick={() => setStep(2)}
                className="w-full mt-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all disabled:opacity-50"
              >
                Continue to First Role &rarr;
              </button>
            </div>
          )}

          {!sandboxReady && step === 2 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-900/5 space-y-4">
              <h2 className="font-bold text-slate-900 text-sm">Step 2: What role are you hiring for first?</h2>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Job Title</label>
                <input
                  type="text"
                  value={firstRole}
                  onChange={(e) => setFirstRole(e.target.value)}
                  placeholder="e.g. Senior Fullstack Engineer"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {[
                  "Software Engineer",
                  "Product Designer",
                  "Product Manager",
                  "Account Executive",
                ].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setFirstRole(preset)}
                    className="p-2.5 rounded-lg border border-slate-200 text-xs font-semibold hover:border-blue-500 hover:bg-blue-50/50 text-slate-700 text-left transition-all"
                  >
                    {preset}
                  </button>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-4 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md"
                >
                  Continue &rarr;
                </button>
              </div>
            </div>
          )}

          {!sandboxReady && step === 3 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-900/5 text-center space-y-4">
              <h2 className="font-bold text-slate-900 text-sm">Step 3: Instant Sandbox Generation</h2>
              <p className="text-xs text-slate-600">
                Ready to initialize hiring pipeline for <strong>{company}</strong> with initial job posting: <code>{firstRole}</code>.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Growth Plan Unlocked (14 Days Free)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Mock applicants loaded into pipeline
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> Interview scorecards enabled
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3 px-4 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleLaunch}
                  disabled={isProvisioning}
                  className="flex-1 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md disabled:opacity-75 flex items-center justify-center gap-2"
                >
                  {isProvisioning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating ATS Pipeline...
                    </>
                  ) : (
                    "Launch My Free Hiring Workspace"
                  )}
                </button>
              </div>
            </div>
          )}

          {sandboxReady && (
            <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-xl shadow-blue-500/10 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-2xl mx-auto border-4 border-blue-50">
                ✓
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Welcome to {company || "Your Recruitment Hub"}!
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your hiring pipeline has been provisioned with sample candidates, interview scorecards, and custom stages.
              </p>

              <div className="flex justify-center gap-4 pt-2">
                <Link
                  to="/saas/recruitflow/features"
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  Open Candidate Pipeline &rarr;
                </Link>
                <Link
                  to="/saas/recruitflow"
                  className="px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </RecruitFlowLayout>
  );
}

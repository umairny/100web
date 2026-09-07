import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { LaunchGridLayout } from "./LaunchGridLayout";
import { LaunchGridLogo } from "./LaunchGridIcons";

export function LaunchGridTrial() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [workspaceName, setWorkspaceName] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [email, setEmail] = useState("");
  const [template, setTemplate] = useState("agile");
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [workspaceReady, setWorkspaceReady] = useState(false);

  useEffect(() => {
    const queryEmail = searchParams.get("email");
    const queryCompany = searchParams.get("company");
    if (queryEmail) setEmail(queryEmail);
    if (queryCompany) {
      setWorkspaceName(queryCompany);
      setSubdomain(queryCompany.toLowerCase().replace(/[^a-z0-9]/g, ""));
    }
  }, [searchParams]);

  const handleCreateWorkspace = () => {
    setIsProvisioning(true);
    setTimeout(() => {
      setIsProvisioning(false);
      setWorkspaceReady(true);
    }, 1200);
  };

  return (
    <LaunchGridLayout>
      <div className="py-16 bg-gradient-to-b from-blue-50/60 to-white min-h-[calc(100vh-140px)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Top Brand & Step Indicator */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-3">
              <LaunchGridLogo className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {workspaceReady
                ? "Your Workspace is Ready!"
                : "Launch Your 14-Day Free Trial"}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              No credit card required • Unlimited Pro Team features for 14 days
            </p>

            {/* Stepper */}
            {!workspaceReady && (
              <div className="flex items-center justify-center gap-2 mt-6">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 1 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  1
                </span>
                <div className={`w-10 h-0.5 ${step >= 2 ? "bg-blue-600" : "bg-slate-200"}`} />
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 2 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  2
                </span>
                <div className={`w-10 h-0.5 ${step === 3 ? "bg-blue-600" : "bg-slate-200"}`} />
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step === 3 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  3
                </span>
              </div>
            )}
          </div>

          {/* Step 1: Workspace Basics */}
          {!workspaceReady && step === 1 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-blue-500/5 space-y-4">
              <h2 className="font-bold text-slate-900 text-base">Step 1: Workspace Details</h2>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company or Team Name
                </label>
                <input
                  type="text"
                  value={workspaceName}
                  onChange={(e) => {
                    setWorkspaceName(e.target.value);
                    setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ""));
                  }}
                  placeholder="Acme Product Team"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Workspace URL
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={subdomain || "mycompany"}
                    onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ""))}
                    className="flex-1 px-4 py-2.5 rounded-l-lg border border-r-0 border-slate-300 text-sm outline-none focus:border-blue-500 font-mono text-slate-800"
                  />
                  <span className="px-3 py-2.5 bg-slate-100 border border-slate-300 rounded-r-lg text-xs font-mono text-slate-500">
                    .launchgrid.io
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!email || !workspaceName}
                className="w-full mt-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
              >
                Continue to Template &rarr;
              </button>
            </div>
          )}

          {/* Step 2: Choose Template */}
          {!workspaceReady && step === 2 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-blue-500/5 space-y-4">
              <h2 className="font-bold text-slate-900 text-base">Step 2: Pick Your Starter Workflow</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: "agile",
                    name: "Agile Sprint & Kanban",
                    desc: "2-week sprints, backlog, velocity charts, and burndown.",
                  },
                  {
                    id: "roadmap",
                    name: "Executive Product Roadmap",
                    desc: "Quarterly OKR milestones and Gantt timeline dependencies.",
                  },
                  {
                    id: "bugs",
                    name: "Bug Tracking & Triage",
                    desc: "Severity prioritization, QA review, and GitHub sync.",
                  },
                  {
                    id: "marketing",
                    name: "Launch Campaign",
                    desc: "Cross-channel asset deliverables and approval pipelines.",
                  },
                ].map((tpl) => (
                  <div
                    key={tpl.id}
                    onClick={() => setTemplate(tpl.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      template === tpl.id
                        ? "bg-blue-50/70 border-blue-500 ring-2 ring-blue-200"
                        : "bg-slate-50/50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{tpl.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{tpl.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="py-3 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md"
                >
                  Continue to Provision &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Launch */}
          {!workspaceReady && step === 3 && (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-blue-500/5 text-center space-y-4">
              <h2 className="font-bold text-slate-900 text-base">Step 3: Instant Provisioning</h2>
              <p className="text-xs text-slate-600">
                Ready to generate your custom workspace for <strong>{workspaceName || "Your Team"}</strong> at <code>{subdomain || "team"}.launchgrid.io</code>.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Pro Team features enabled
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Template: {template.toUpperCase()}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> 14 days free (Expires Oct 2026)
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-3 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={handleCreateWorkspace}
                  disabled={isProvisioning}
                  className="flex-1 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md disabled:opacity-75 flex items-center justify-center gap-2"
                >
                  {isProvisioning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Spinning Up Database &amp; Sprints...
                    </>
                  ) : (
                    "Launch My Free Workspace"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Success / Ready State */}
          {workspaceReady && (
            <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-xl shadow-emerald-500/10 text-center space-y-5 animate-in zoom-in-95">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-black text-2xl mx-auto border-4 border-emerald-50">
                ✓
              </div>
              <h2 className="text-2xl font-black text-slate-900">
                Welcome to {workspaceName || "Your Workspace"}!
              </h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your sandbox has been initialized with demo sprint tasks, automated rules, and velocity tracking.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
                https://{subdomain || "acme"}.launchgrid.io/sprints/active
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <Link
                  to="/saas/launchgrid-pm/features"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  Open Interactive Sprint Simulator &rarr;
                </Link>
                <Link
                  to="/saas/launchgrid-pm"
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </LaunchGridLayout>
  );
}

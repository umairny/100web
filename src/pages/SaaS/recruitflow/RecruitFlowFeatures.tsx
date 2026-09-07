import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecruitFlowLayout } from "./RecruitFlowLayout";

interface Candidate {
  id: string;
  name: string;
  role: string;
  avatarColor: string;
  rating: number;
  stage: "sourced" | "screen" | "interview" | "offer" | "hired";
  source: string;
}

const initialCandidates: Candidate[] = [
  {
    id: "CAN-01",
    name: "Alex Rivera",
    role: "Senior Fullstack Engineer",
    avatarColor: "bg-blue-100 text-blue-800",
    rating: 4.9,
    stage: "interview",
    source: "LinkedIn",
  },
  {
    id: "CAN-02",
    name: "Maya Patel",
    role: "Lead Product Designer",
    avatarColor: "bg-emerald-100 text-emerald-800",
    rating: 4.8,
    stage: "offer",
    source: "ZipRecruiter",
  },
  {
    id: "CAN-03",
    name: "David Kim",
    role: "DevOps Architect",
    avatarColor: "bg-amber-100 text-amber-800",
    rating: 4.2,
    stage: "screen",
    source: "Glassdoor",
  },
  {
    id: "CAN-04",
    name: "Elena Rostova",
    role: "Customer Success Lead",
    avatarColor: "bg-purple-100 text-purple-800",
    rating: 4.7,
    stage: "sourced",
    source: "Referral",
  },
  {
    id: "CAN-05",
    name: "Jordan Vance",
    role: "Growth Marketing Director",
    avatarColor: "bg-rose-100 text-rose-800",
    rating: 5.0,
    stage: "hired",
    source: "Direct App",
  },
];

export function RecruitFlowFeatures() {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [newCandidateName, setNewCandidateName] = useState("");
  const [newCandidateRole, setNewCandidateRole] = useState("Software Engineer");
  const [autoEmailInterview, setAutoEmailInterview] = useState(true);
  const [autoSlackAlert, setAutoSlackAlert] = useState(true);

  const stages: Array<{ key: Candidate["stage"]; title: string; color: string }> = [
    { key: "sourced", title: "1. Sourced & Applied", color: "border-slate-300" },
    { key: "screen", title: "2. Phone Screen", color: "border-blue-400" },
    { key: "interview", title: "3. Team Interview", color: "border-indigo-500" },
    { key: "offer", title: "4. Offer Extended", color: "border-amber-500" },
    { key: "hired", title: "5. Hired & Signed", color: "border-emerald-500" },
  ];

  const moveCandidate = (id: string, targetStage: Candidate["stage"]) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, stage: targetStage } : c))
    );
  };

  const handleAddCandidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCandidateName.trim()) return;
    const newCand: Candidate = {
      id: `CAN-${Math.floor(10 + Math.random() * 90)}`,
      name: newCandidateName.trim(),
      role: newCandidateRole,
      avatarColor: "bg-blue-100 text-blue-800",
      rating: 4.5,
      stage: "sourced",
      source: "Quick Add",
    };
    setCandidates([...candidates, newCand]);
    setNewCandidateName("");
  };

  return (
    <RecruitFlowLayout>
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Interactive Product Sandbox
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Visual Hiring Pipeline Simulator
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            Test RecruitFlow&apos;s drag-and-drop candidate management, team scorecards, and stage automation triggers below.
          </p>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 gap-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Active Requisition: Engineering &amp; Product Hiring
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                5 active candidates in pipeline • Average time-to-hire: 14 days
              </p>
            </div>

            <form onSubmit={handleAddCandidate} className="flex gap-2">
              <input
                type="text"
                value={newCandidateName}
                onChange={(e) => setNewCandidateName(e.target.value)}
                placeholder="Candidate name..."
                className="px-3.5 py-2 text-xs rounded-lg border border-slate-300 outline-none focus:border-blue-600 w-44"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase shadow-sm"
              >
                + Add Candidate
              </button>
            </form>
          </div>

          {/* Kanban Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {stages.map((st) => {
              const stageCandidates = candidates.filter((c) => c.stage === st.key);
              return (
                <div
                  key={st.key}
                  className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200/80">
                      <span className="font-bold text-slate-800 text-xs">{st.title}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                        {stageCandidates.length}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {stageCandidates.length === 0 ? (
                        <div className="text-center py-8 text-[11px] text-slate-400 border-2 border-dashed border-slate-200 rounded-lg">
                          No candidates
                        </div>
                      ) : (
                        stageCandidates.map((cand) => (
                          <div
                            key={cand.id}
                            className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
                          >
                            <div className="flex items-start justify-between">
                              <span className={`w-6 h-6 rounded-full font-bold text-[10px] flex items-center justify-center ${cand.avatarColor}`}>
                                {cand.name.split(" ").map(n => n[0]).join("")}
                              </span>
                              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                                ★ {cand.rating}
                              </span>
                            </div>

                            <div className="font-bold text-slate-900 text-xs mt-2">{cand.name}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{cand.role}</div>

                            <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-100 text-[10px]">
                              <span className="text-slate-400 font-mono">{cand.source}</span>
                              <div className="flex gap-1">
                                {st.key !== "sourced" && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (st.key === "screen") moveCandidate(cand.id, "sourced");
                                      if (st.key === "interview") moveCandidate(cand.id, "screen");
                                      if (st.key === "offer") moveCandidate(cand.id, "interview");
                                      if (st.key === "hired") moveCandidate(cand.id, "offer");
                                    }}
                                    className="w-5 h-5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center"
                                  >
                                    &larr;
                                  </button>
                                )}
                                {st.key !== "hired" && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (st.key === "sourced") moveCandidate(cand.id, "screen");
                                      if (st.key === "screen") moveCandidate(cand.id, "interview");
                                      if (st.key === "interview") moveCandidate(cand.id, "offer");
                                      if (st.key === "offer") moveCandidate(cand.id, "hired");
                                    }}
                                    className="w-5 h-5 rounded bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-700 font-bold flex items-center justify-center transition-colors"
                                  >
                                    &rarr;
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Automation Triggers */}
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide mb-3">
              Automated Stage Triggers (Active):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center gap-2 text-xs text-slate-700 font-semibold cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoEmailInterview}
                  onChange={(e) => setAutoEmailInterview(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Auto-send Google Meet / Zoom calendar link on &quot;Phone Screen&quot; move</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-700 font-semibold cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoSlackAlert}
                  onChange={(e) => setAutoSlackAlert(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Notify hiring committee in Slack on &quot;Offer Extended&quot;</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#2563EB] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-black">Hire faster with RecruitFlow</h2>
          <p className="text-blue-100 text-sm mt-2">
            Centralize your recruiting process with a 14-day free trial. No credit card required.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/saas/recruitflow/trial"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-blue-50 transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </RecruitFlowLayout>
  );
}

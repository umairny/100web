import React, { useState } from "react";
import { RecruitFlowLayout } from "./RecruitFlowLayout";
import {
  GSuiteLogo,
  MicrosoftBrandLogo,
  SlackBrandLogo,
  LinkedInBrandLogo,
  ZipRecruiterLogo,
  GlassdoorLogo,
  ZoomBrandLogo,
} from "./RecruitFlowIcons";

interface IntegrationItem {
  id: string;
  name: string;
  category: "Job Boards" | "Communication" | "Scheduling" | "HRIS & Payroll";
  description: string;
  icon: React.ReactNode;
}

const integrationsList: IntegrationItem[] = [
  {
    id: "linkedin",
    name: "LinkedIn Recruiter",
    category: "Job Boards",
    description: "1-click InMail synchronization and candidate profile import directly into active pipelines.",
    icon: <LinkedInBrandLogo className="w-8 h-8" />,
  },
  {
    id: "gsuite",
    name: "Google Workspace",
    category: "Communication",
    description: "Bi-directional Google Calendar interview scheduling, room booking, and Gmail email thread tracking.",
    icon: <GSuiteLogo className="w-8 h-8" />,
  },
  {
    id: "microsoft",
    name: "Microsoft 365 & Teams",
    category: "Communication",
    description: "Outlook calendar scheduling, auto-generated Teams video interview links, and OneDrive resume sync.",
    icon: <MicrosoftBrandLogo className="w-8 h-8" />,
  },
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    description: "Receive scorecard alerts, interview reminders, and candidate offer approvals directly in Slack channels.",
    icon: <SlackBrandLogo className="w-8 h-8" />,
  },
  {
    id: "ziprecruiter",
    name: "ZipRecruiter",
    category: "Job Boards",
    description: "Distribute open requisitions across ZipRecruiter's network of 100+ partner job sites automatically.",
    icon: <ZipRecruiterLogo className="w-8 h-8" />,
  },
  {
    id: "glassdoor",
    name: "Glassdoor & Indeed",
    category: "Job Boards",
    description: "Unified syndication to Glassdoor and Indeed with sponsored campaign tracking and applicant attribution.",
    icon: <GlassdoorLogo className="w-8 h-8" />,
  },
  {
    id: "zoom",
    name: "Zoom Video Meetings",
    category: "Scheduling",
    description: "Generate password-protected Zoom interview links automatically upon candidate calendar confirmation.",
    icon: <ZoomBrandLogo className="w-8 h-8" />,
  },
  {
    id: "workday",
    name: "Workday HRIS",
    category: "HRIS & Payroll",
    description: "Seamlessly export hired candidates into Workday for onboarding, benefits, and payroll enrollment.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-blue-800 text-white font-bold flex items-center justify-center text-xs">
        WD
      </div>
    ),
  },
  {
    id: "greenhouse",
    name: "Greenhouse Data Migration",
    category: "HRIS & Payroll",
    description: "1-click data migrator for candidate history, tags, archives, and past interview notes.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#008A5E] text-white font-bold flex items-center justify-center text-xs">
        GH
      </div>
    ),
  },
];

export function RecruitFlowIntegrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [connectedIds, setConnectedIds] = useState<string[]>(["linkedin", "gsuite", "slack"]);
  const [activeModal, setActiveModal] = useState<IntegrationItem | null>(null);

  const categories = ["All", "Job Boards", "Communication", "Scheduling", "HRIS & Payroll"];

  const filtered = integrationsList.filter((item) => {
    const matchesCat = selectedCat === "All" || item.category === selectedCat;
    const matchesQuery =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleConnect = (id: string) => {
    if (connectedIds.includes(id)) {
      setConnectedIds(connectedIds.filter((x) => x !== id));
    } else {
      setConnectedIds([...connectedIds, id]);
    }
    setActiveModal(null);
  };

  return (
    <RecruitFlowLayout>
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Integrations Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Integrates with Your Favorite Tools
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            Connect popular job boards, email calendars, and video conferencing tools with 1-click sync.
          </p>

          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by tool name or capability (e.g. LinkedIn, Zoom, Slack)..."
              className="w-full px-5 py-3.5 pl-11 rounded-full border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white shadow-sm"
            />
            <svg
              className="w-5 h-5 text-slate-400 absolute left-4 top-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCat === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool) => {
              const isConnected = connectedIds.includes(tool.id);
              return (
                <div
                  key={tool.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        {tool.icon}
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {tool.category}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-lg">{tool.name}</h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold flex items-center gap-1.5 ${
                        isConnected ? "text-emerald-600 font-bold" : "text-slate-400"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isConnected ? "bg-emerald-500 animate-pulse" : "bg-slate-300"
                        }`}
                      />
                      {isConnected ? "Connected & Active" : "Not connected"}
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveModal(tool)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                        isConnected
                          ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {isConnected ? "Configure" : "Connect"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                {activeModal.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Connect {activeModal.name}</h3>
                <p className="text-xs text-slate-500">1-click Integration Simulator</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Grant RecruitFlow permission to read applicants, sync calendar bookings, and post open requisitions to {activeModal.name}.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="flex-1 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => toggleConnect(activeModal.id)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold text-white transition-colors ${
                  connectedIds.includes(activeModal.id)
                    ? "bg-rose-600 hover:bg-rose-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {connectedIds.includes(activeModal.id) ? "Disconnect" : "Authorize & Connect"}
              </button>
            </div>
          </div>
        </div>
      )}
    </RecruitFlowLayout>
  );
}

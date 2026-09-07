import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LaunchGridLayout } from "./LaunchGridLayout";
import {
  SlackLogo,
  GitHubLogo,
  JiraLogo,
  TrelloLogo,
  GoogleCalendarLogo,
  ZoomLogo,
  SalesforceLogo,
} from "./LaunchGridIcons";

interface IntegrationItem {
  id: string;
  name: string;
  category: "Development" | "Communication" | "Design" | "CRM" | "Productivity";
  description: string;
  popular?: boolean;
  icon: React.ReactNode;
}

const integrationsList: IntegrationItem[] = [
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    description: "Receive real-time task notifications, blocker alerts, and slash command actions directly in channels.",
    popular: true,
    icon: <SlackLogo className="w-8 h-8" />,
  },
  {
    id: "github",
    name: "GitHub",
    category: "Development",
    description: "Automatically link pull requests, commits, and releases directly to LaunchGrid sprint tasks.",
    popular: true,
    icon: <GitHubLogo className="w-8 h-8 text-slate-900" />,
  },
  {
    id: "jira",
    name: "Jira Software",
    category: "Development",
    description: "Bi-directional ticket synchronization with Jira Cloud and Data Center instances.",
    popular: true,
    icon: <JiraLogo className="w-8 h-8" />,
  },
  {
    id: "trello",
    name: "Trello",
    category: "Productivity",
    description: "1-click import boards, cards, and checklists from existing Trello workspaces.",
    popular: true,
    icon: <TrelloLogo className="w-8 h-8" />,
  },
  {
    id: "gcal",
    name: "Google Calendar",
    category: "Productivity",
    description: "Sync sprint milestones, release freezes, and team meetings to your company Google calendars.",
    popular: true,
    icon: <GoogleCalendarLogo className="w-8 h-8" />,
  },
  {
    id: "zoom",
    name: "Zoom",
    category: "Communication",
    description: "Attach Zoom meeting links directly to standup tasks and project kickoff meetings.",
    popular: true,
    icon: <ZoomLogo className="w-8 h-8" />,
  },
  {
    id: "salesforce",
    name: "Salesforce CRM",
    category: "CRM",
    description: "Connect customer feedback and deal escalations to product roadmap priorities.",
    popular: true,
    icon: <SalesforceLogo className="w-8 h-8" />,
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    description: "Embed live interactive Figma files directly inside project specs with frame versioning.",
    popular: true,
    icon: (
      <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
        Fig
      </div>
    ),
  },
  {
    id: "gitlab",
    name: "GitLab",
    category: "Development",
    description: "Sync merge requests and CI/CD pipeline completion badges to task delivery stages.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-orange-500 text-white font-bold flex items-center justify-center text-xs">
        GL
      </div>
    ),
  },
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description: "Bi-directional database sync for RFC docs, sprint retros, and internal wikis.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-slate-800 text-white font-serif font-black flex items-center justify-center text-sm">
        N
      </div>
    ),
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Track customer request volume from marketing campaigns directly against roadmap initiatives.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#FF7A59] text-white font-bold flex items-center justify-center text-xs">
        HS
      </div>
    ),
  },
  {
    id: "webhooks",
    name: "Custom Webhooks & REST API",
    category: "Development",
    description: "Build custom integrations with LaunchGrid's high-throughput JSON Webhook and OpenAPI engine.",
    popular: true,
    icon: (
      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
        API
      </div>
    ),
  },
];

export function LaunchGridIntegrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [connectedIds, setConnectedIds] = useState<string[]>(["slack", "github"]);
  const [activeModal, setActiveModal] = useState<IntegrationItem | null>(null);

  const categories = ["All", "Development", "Communication", "Design", "CRM", "Productivity"];

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
    <LaunchGridLayout>
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Ecosystem Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Connects with the Tools You Already Love
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
            Bring your engineering, design, and communication stacks together in one consolidated command center.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by tool name or capability (e.g. GitHub, Slack, Webhook)..."
              className="w-full px-5 py-3.5 pl-11 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white shadow-sm"
            />
            <svg
              className="w-5 h-5 text-slate-400 absolute left-3.5 top-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCat === cat
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool) => {
              const isConnected = connectedIds.includes(tool.id);
              return (
                <div
                  key={tool.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
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

                    <h3 className="font-black text-slate-900 text-lg">{tool.name}</h3>
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

      {/* Simulator Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                {activeModal.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Connect {activeModal.name}</h3>
                <p className="text-xs text-slate-500">Fast 1-click OAuth Simulator</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Grant LaunchGrid PM permission to read tickets, post webhook updates, and sync milestones with your {activeModal.name} workspace.
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
    </LaunchGridLayout>
  );
}

import React, { useState } from "react";
import { InvoicePilotLayout } from "./InvoicePilotLayout";
import {
  StripeLogo,
  PayPalLogo,
  QuickBooksLogo,
  XeroLogo,
  NetSuiteLogo,
} from "./InvoicePilotIcons";

interface IntegrationItem {
  id: string;
  name: string;
  category: "Gateways" | "Accounting" | "CRM" | "Analytics" | "Tax & Legal";
  description: string;
  icon: React.ReactNode;
}

const integrationsList: IntegrationItem[] = [
  {
    id: "stripe",
    name: "Stripe",
    category: "Gateways",
    description: "Credit cards, ACH, SEPA Direct Debit, and Apple Pay payment processing with tokenized security.",
    icon: <StripeLogo className="w-8 h-8" />,
  },
  {
    id: "paypal",
    name: "PayPal & Braintree",
    category: "Gateways",
    description: "Accept digital wallet balances and recurring PayPal subscriptions globally.",
    icon: <PayPalLogo className="w-8 h-8" />,
  },
  {
    id: "quickbooks",
    name: "QuickBooks Online",
    category: "Accounting",
    description: "Bi-directional ledger reconciliation, invoice syncing, and accounts receivable tracking.",
    icon: <QuickBooksLogo className="w-8 h-8" />,
  },
  {
    id: "xero",
    name: "Xero",
    category: "Accounting",
    description: "Automatic chart of accounts mapping and bank feed reconciliation for international entities.",
    icon: <XeroLogo className="w-8 h-8" />,
  },
  {
    id: "netsuite",
    name: "Oracle NetSuite",
    category: "Accounting",
    description: "Enterprise multi-subsidiary billing consolidation and GAAP revenue recognition schedule sync.",
    icon: <NetSuiteLogo className="w-8 h-8" />,
  },
  {
    id: "salesforce",
    name: "Salesforce CRM",
    category: "CRM",
    description: "Trigger subscription creation from closed-won opportunity deals with custom contract terms.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-sky-500 text-white font-bold flex items-center justify-center text-xs">
        SF
      </div>
    ),
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Sync payment status, failed charges, and customer plan tier directly to contact records.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#FF7A59] text-white font-bold flex items-center justify-center text-xs">
        HS
      </div>
    ),
  },
  {
    id: "slack",
    name: "Slack",
    category: "CRM",
    description: "Alert your executive or customer success channel whenever a high-value customer expands or risks churn.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-[#4A154B] text-white font-bold flex items-center justify-center text-xs">
        #
      </div>
    ),
  },
  {
    id: "taxjar",
    name: "TaxJar / Stripe Tax",
    category: "Tax & Legal",
    description: "Automate economic nexus monitoring and rooftop-accurate sales tax calculation in 11,000+ jurisdictions.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
        Tax
      </div>
    ),
  },
  {
    id: "snowflake",
    name: "Snowflake & BigQuery",
    category: "Analytics",
    description: "Stream raw transactional logs, chargeback events, and subscriber cohorts directly into your data lake.",
    icon: (
      <div className="w-8 h-8 rounded-lg bg-blue-500 text-white font-bold flex items-center justify-center text-xs">
        SQL
      </div>
    ),
  },
];

export function InvoicePilotIntegrations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [connectedIds, setConnectedIds] = useState<string[]>(["stripe", "quickbooks"]);
  const [activeModal, setActiveModal] = useState<IntegrationItem | null>(null);

  const categories = ["All", "Gateways", "Accounting", "CRM", "Analytics", "Tax & Legal"];

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
    <InvoicePilotLayout>
      <section className="bg-gradient-to-b from-sky-50/60 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Unified Ecosystem
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Works with Your Entire Business Stack
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto">
            Sync customer data, trigger automated accounting workflows, and eliminate manual spreadsheet reconciliation.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search gateways, accounting software, CRMs..."
              className="w-full px-5 py-3.5 pl-11 rounded-full border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none text-sm bg-white shadow-sm"
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

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCat === cat
                    ? "bg-emerald-600 text-white shadow-sm"
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
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
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
              Grant InvoicePilot permission to synchronize recurring invoices, tax schedules, and customer ledger entries with your {activeModal.name} workspace.
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
                    : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {connectedIds.includes(activeModal.id) ? "Disconnect" : "Authorize & Connect"}
              </button>
            </div>
          </div>
        </div>
      )}
    </InvoicePilotLayout>
  );
}

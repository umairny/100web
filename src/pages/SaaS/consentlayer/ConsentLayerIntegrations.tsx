import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConsentLayerLayout from "./ConsentLayerLayout";
import { 
  Search, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Sliders, 
  Code, 
  Copy, 
  Check,
  Globe,
  Database,
  Layers
} from "lucide-react";
import { 
  WordPressIcon, 
  ShopifyIcon, 
  SegmentIcon, 
  HubSpotIcon, 
  SalesforceIcon, 
  GTMIcon 
} from "./ConsentLayerIcons";

interface IntegrationItem {
  id: string;
  name: string;
  category: "cms" | "tag" | "crm" | "lake" | "analytics";
  desc: string;
  badge: string;
  iconBg: string;
  popular?: boolean;
}

export default function ConsentLayerIntegrations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalTool, setActiveModalTool] = useState<IntegrationItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const integrations: IntegrationItem[] = [
    {
      id: "gtm",
      name: "Google Tag Manager",
      category: "tag",
      desc: "Native Consent Mode v2 triggers that automatically gate GA4, Google Ads, and Floodlight tags based on user opt-ins.",
      badge: "Official Partner",
      iconBg: "bg-blue-50 text-blue-700",
      popular: true
    },
    {
      id: "segment",
      name: "Twilio Segment",
      category: "tag",
      desc: "Server-side destination filtering and client-side Consent Management wrapper for analytics.js.",
      badge: "Certified",
      iconBg: "bg-emerald-50 text-emerald-700",
      popular: true
    },
    {
      id: "shopify",
      name: "Shopify & Shopify Plus",
      category: "cms",
      desc: "1-click App Store install that intercepts checkout, cart, and tracking pixels automatically.",
      badge: "Built for Shopify",
      iconBg: "bg-lime-50 text-lime-700",
      popular: true
    },
    {
      id: "wordpress",
      name: "WordPress & WooCommerce",
      category: "cms",
      desc: "Zero-configuration plugin with automatic shortcodes and script enqueue interception.",
      badge: "50k+ Active",
      iconBg: "bg-sky-50 text-sky-700",
      popular: true
    },
    {
      id: "hubspot",
      name: "HubSpot CRM",
      category: "crm",
      desc: "Sync cookie consent tokens directly to contact subscription types and legal consent properties.",
      badge: "Bi-directional",
      iconBg: "bg-orange-50 text-orange-700",
      popular: true
    },
    {
      id: "salesforce",
      name: "Salesforce Marketing Cloud",
      category: "crm",
      desc: "Enterprise subscriber preference synchronization with Individual Object compliance tracking.",
      badge: "AppExchange",
      iconBg: "bg-cyan-50 text-cyan-700",
      popular: true
    },
    {
      id: "snowflake",
      name: "Snowflake Data Cloud",
      category: "lake",
      desc: "DSAR data subject lookup queries and automated column-level redaction procedures.",
      badge: "SQL Connector",
      iconBg: "bg-blue-50 text-blue-600"
    },
    {
      id: "bigquery",
      name: "Google BigQuery",
      category: "lake",
      desc: "Automated deletion and anonymization partitions triggered by verified DSAR erasure tickets.",
      badge: "Warehouse",
      iconBg: "bg-indigo-50 text-indigo-600"
    },
    {
      id: "stripe",
      name: "Stripe Billing",
      category: "crm",
      desc: "Anonymize customer payment profiles while safeguarding financial transaction tax audit records.",
      badge: "PCI Safe",
      iconBg: "bg-violet-50 text-violet-700"
    },
    {
      id: "mixpanel",
      name: "Mixpanel",
      category: "analytics",
      desc: "Automatically respect opt_out_tracking() calls and gate identity mapping until consent is logged.",
      badge: "Client SDK",
      iconBg: "bg-purple-50 text-purple-700"
    },
    {
      id: "klaviyo",
      name: "Klaviyo",
      category: "crm",
      desc: "E-commerce customer marketing preferences and SMS consent opt-in timestamps synchronizer.",
      badge: "API Sync",
      iconBg: "bg-emerald-50 text-emerald-800"
    },
    {
      id: "webflow",
      name: "Webflow",
      category: "cms",
      desc: "Embed our responsive customizer script into project settings for instant visual consistency.",
      badge: "No-Code",
      iconBg: "bg-blue-50 text-blue-800"
    }
  ];

  const categories = [
    { id: "all", label: "All Integrations" },
    { id: "cms", label: "CMS & E-Commerce" },
    { id: "tag", label: "Tag Managers & CDP" },
    { id: "crm", label: "CRM & Marketing" },
    { id: "lake", label: "Databases & Warehouses" },
    { id: "analytics", label: "Analytics" }
  ];

  const filteredIntegrations = integrations.filter(item => {
    const matchesCat = selectedCategory === "all" || item.category === selectedCategory;
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleCopy = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <ConsentLayerLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F0FDF4] via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            100+ Pre-Built Connectors
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto">
            Connects With Your Entire <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Modern Tech Stack
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            From Tag Managers and CDPs to databases and marketing automation platforms. Enforce privacy at every point of your data pipeline.
          </p>

          {/* Ecosystem Cloud Vector Graphic Display */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            <img 
              src="/images/saas/consentlayer/ecosystem-cloud.svg" 
              alt="ConsentLayer Ecosystem Cloud Diagram"
              className="w-full h-auto max-h-96 object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search connectors (e.g. Shopify, GTM, Snowflake)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalTool(item)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${item.iconBg}`}>
                      {item.id === "gtm" && <GTMIcon className="w-7 h-7" />}
                      {item.id === "segment" && <SegmentIcon className="w-7 h-7" />}
                      {item.id === "shopify" && <ShopifyIcon className="w-7 h-7" />}
                      {item.id === "wordpress" && <WordPressIcon className="w-7 h-7" />}
                      {item.id === "hubspot" && <HubSpotIcon className="w-7 h-7" />}
                      {item.id === "salesforce" && <SalesforceIcon className="w-7 h-7" />}
                      {item.id === "snowflake" && <Database className="w-6 h-6 text-blue-600" />}
                      {item.id === "bigquery" && <Database className="w-6 h-6 text-indigo-600" />}
                      {item.id === "stripe" && <Layers className="w-6 h-6 text-violet-700" />}
                      {item.id === "mixpanel" && <Sliders className="w-6 h-6 text-purple-700" />}
                      {item.id === "klaviyo" && <Globe className="w-6 h-6 text-emerald-700" />}
                      {item.id === "webflow" && <Code className="w-6 h-6 text-blue-700" />}
                    </div>

                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                  <span>View Setup Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-700 font-bold">No integrations found matching "{searchQuery}"</p>
              <p className="text-slate-500 text-xs mt-1">Try searching for Tag Managers, CRM, or E-Commerce platforms.</p>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Modal Setup Guide */}
      {activeModalTool && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setActiveModalTool(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${activeModalTool.iconBg}`}>
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{activeModalTool.name} Integration</h3>
                <span className="text-xs text-emerald-600 font-medium">Estimated Setup Time: 2 Minutes</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {activeModalTool.desc} Simply copy the initialization tag below and place it in your target container.
            </p>

            <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-emerald-400 relative mb-6">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[11px]">
                <span>connector-{activeModalTool.id}.js</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-emerald-400 hover:text-white"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCode ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto text-[11px] leading-relaxed">
{`window.ConsentLayer = window.ConsentLayer || [];
ConsentLayer.push({
  connector: "${activeModalTool.id}",
  autoSync: true,
  logLevel: "strict"
});`}
              </pre>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalTool(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
              <Link
                to="/saas/consentlayer-privacy/trial"
                className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
              >
                Test in Free Sandbox
              </Link>
            </div>
          </div>
        </div>
      )}
    </ConsentLayerLayout>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConsentLayerLayout from "./ConsentLayerLayout";
import { 
  Shield, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Lock, 
  Sliders, 
  FileText, 
  RefreshCw, 
  Cpu, 
  ArrowRight,
  Sparkles,
  Server,
  Fingerprint,
  FileCheck
} from "lucide-react";

export default function ConsentLayerProduct() {
  const [activeTab, setActiveTab] = useState<"cmp" | "preferences" | "policies" | "dsar">("cmp");

  const productModules = [
    {
      id: "cmp",
      title: "Universal CMP & Cookie Banners",
      tagline: "Sub-10ms edge-delivered banners with automated script blocking.",
      icon: Layers,
      description: "Deliver pixel-perfect, accessible, and legally compliant consent banners that adapt automatically to visitor geo-location and local legislation.",
      points: [
        "Smart Geo-IP detection across 180+ global jurisdictions (GDPR, CCPA, LGPD, PIPEDA, POPIA)",
        "Zero-delay script and iframe blocking before explicit consent is logged",
        "Google Consent Mode v2 & IAB TCF 2.2 certified integration out of the box",
        "A/B testing optimization engine to legitimately maximize opt-in rates without dark patterns"
      ],
      diagram: "/images/saas/consentlayer/workflow-step2-design.svg"
    },
    {
      id: "preferences",
      title: "Omnichannel Preference Center",
      tagline: "Unify user consent choices across web, mobile, and backend microservices.",
      icon: Sliders,
      description: "Give your users granular control over marketing channels, email frequencies, and third-party data sharing without breaking your data pipelines.",
      points: [
        "Embeddable iframe and headless React, Vue, & Swift UI components",
        "Bi-directional synchronization with Salesforce, HubSpot, Braze, and Klaviyo",
        "Granular opt-down alternatives instead of hard binary unsubscribes",
        "Single Sign-On (SSO) and magic-link verified user portal"
      ],
      diagram: "/images/saas/consentlayer/feature-unified-consent.svg"
    },
    {
      id: "policies",
      title: "Automated Policy Engine & Scanner",
      tagline: "Continuous cookie scanning with automated versioned legal disclosures.",
      icon: FileText,
      description: "Never worry about unmapped cookies or outdated legal disclosures. ConsentLayer continuously spiders your domains and updates your public notice.",
      points: [
        "Weekly automated web crawler detecting new trackers, beacons, and local storage items",
        "Crowdsourced tracker intelligence database of 120,000+ known ad-tech vendors",
        "Git-style version history of all published terms with diff viewer",
        "Automatic language translation in 35+ localized dialects"
      ],
      diagram: "/images/saas/consentlayer/feature-policy-management.svg"
    },
    {
      id: "dsar",
      title: "DSAR & Subject Rights Automation",
      tagline: "Handle Right-to-be-Forgotten and data export requests in minutes, not weeks.",
      icon: Lock,
      description: "Orchestrate complex data discovery and redaction pipelines across multiple SaaS applications, relational databases, and cloud warehouses.",
      points: [
        "Pre-built read/write connectors for Snowflake, BigQuery, Postgres, MongoDB, and Stripe",
        "Government ID verification and biometric fraud check workflows",
        "Automated PDF export bundle creation with automated PII masking",
        "Cryptographically signed audit receipts for legal compliance files"
      ],
      diagram: "/images/saas/consentlayer/feature-audit-trails.svg"
    }
  ];

  const currentModule = productModules.find(m => m.id === activeTab)!;

  return (
    <ConsentLayerLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F0FDF4] via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Architectural Overview
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto">
            The Enterprise Platform for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Modern Data Governance
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Engineered from the ground up for high-traffic websites, multi-tenant mobile applications, and heavily regulated global enterprises.
          </p>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {productModules.map((module) => {
              const Icon = module.icon;
              const isActive = activeTab === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveTab(module.id as any)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                  {module.title}
                </button>
              );
            })}
          </div>

          {/* Module Detail Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">
                  Core Module
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                  {currentModule.title}
                </h2>
                <p className="text-emerald-700 font-semibold text-sm mt-1">
                  {currentModule.tagline}
                </p>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {currentModule.description}
                </p>

                <div className="mt-6 space-y-3">
                  {currentModule.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    to="/saas/consentlayer-privacy/features"
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
                  >
                    Try Interactive Simulator
                  </Link>
                  <Link
                    to="/saas/consentlayer-privacy/trial"
                    className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex items-center justify-center bg-white rounded-2xl border border-slate-200/80 p-8 shadow-inner">
                <img 
                  src={currentModule.diagram} 
                  alt={currentModule.title}
                  className="max-h-80 w-auto object-contain transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Specs */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
              Under The Hood
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Engineered for Zero Latency and 100% Trust
            </h2>
            <p className="mt-3 text-slate-400 text-base">
              Consent enforcement should never slow down your critical page speed scores or degrade web vitals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">&lt; 9ms</h3>
              <p className="text-sm font-semibold text-emerald-400 mt-1">Global Edge Execution</p>
              <p className="text-xs text-slate-400 mt-2">
                Banners and consent rules are deployed via 280+ Cloudflare edge worker locations worldwide with zero roundtrips.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">99.995%</h3>
              <p className="text-sm font-semibold text-blue-400 mt-1">Guaranteed SLA Uptime</p>
              <p className="text-xs text-slate-400 mt-2">
                Multi-region active-active cluster redundancy ensuring your compliance tags never go offline.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">SHA-256</h3>
              <p className="text-sm font-semibold text-purple-400 mt-1">Cryptographic Proof Chain</p>
              <p className="text-xs text-slate-400 mt-2">
                Every consent event is digitally hashed and permanently preserved in an immutable, auditor-accessible ledger.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">3.2 kB</h3>
              <p className="text-sm font-semibold text-amber-400 mt-1">Ultralight JS Payload</p>
              <p className="text-xs text-slate-400 mt-2">
                Zero third-party dependencies or render-blocking scripts. Perfect Google Lighthouse Core Web Vitals score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Certifications Strip */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-slate-900">Audited and Certified by Global Standards</h3>
            <p className="text-xs text-slate-500 mt-1">Our platform undergoes rigorous third-party penetration testing and continuous automated compliance scanning.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="text-center">
              <div className="text-lg font-black text-slate-800 tracking-wider">SOC 2 TYPE II</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">Certified Secure</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-black text-slate-800 tracking-wider">ISO 27001</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">ISMS Certified</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-black text-slate-800 tracking-wider">GDPR COMPLIANT</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">Article 7 Verified</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-black text-slate-800 tracking-wider">CCPA / CPRA</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">Opt-Out Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-black text-slate-800 tracking-wider">HIPAA READY</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">BAA Agreement</div>
            </div>
          </div>
        </div>
      </section>
    </ConsentLayerLayout>
  );
}

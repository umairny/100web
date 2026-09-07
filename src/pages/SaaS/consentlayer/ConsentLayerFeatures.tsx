import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConsentLayerLayout from "./ConsentLayerLayout";
import { 
  CheckCircle2, 
  Shield, 
  Sliders, 
  Eye, 
  Code, 
  FileText, 
  Lock, 
  Globe, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight,
  RefreshCw,
  Layers,
  Database,
  Search
} from "lucide-react";

export default function ConsentLayerFeatures() {
  // Live Cookie Banner Customizer State
  const [bannerLayout, setBannerLayout] = useState<"bottom-bar" | "modal" | "floating-box">("floating-box");
  const [accentColor, setAccentColor] = useState<string>("#10B981");
  const [titleText, setTitleText] = useState<string>("We value your privacy");
  const [bodyText, setBodyText] = useState<string>("We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.");
  const [regulationPreset, setRegulationPreset] = useState<"gdpr" | "ccpa" | "hybrid">("gdpr");
  const [showRejectAll, setShowRejectAll] = useState<boolean>(true);
  const [cookieConsentSaved, setCookieConsentSaved] = useState<boolean>(false);
  const [copiedScript, setCopiedScript] = useState<boolean>(false);

  // Live Preference Center State
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    functional: true
  });

  const togglePref = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // strictly necessary always true
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopyScript = () => {
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const generatedScript = `<!-- ConsentLayer CMP Universal Tag -->
<script 
  src="https://cdn.consentlayer.io/v3/cmp.js" 
  data-client-id="cl_live_9941a8fd"
  data-layout="${bannerLayout}"
  data-theme="${accentColor}"
  data-preset="${regulationPreset}"
  data-reject-button="${showRejectAll}"
  async>
</script>`;

  return (
    <ConsentLayerLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#F0FDF4] via-[#F8FAFC] to-white border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-300/60 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Enterprise Privacy Engine
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto">
            Everything You Need to Power <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Autonomous Compliance</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our end-to-end toolkit: from real-time zero-code banner builders and user preference portals to cryptographic tamper-evident audit logs.
          </p>
        </div>
      </section>

      {/* Feature Deep Dive Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Three Pillars of Unified Consent
            </h2>
            <p className="mt-4 text-slate-600 text-base">
              Built on battle-tested cryptographic primitives, global geo-IP routing, and sub-10ms edge caching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-44 flex items-center justify-center bg-white rounded-xl border border-slate-200/60 p-4 mb-6 shadow-inner">
                <img 
                  src="/images/saas/consentlayer/feature-unified-consent.svg" 
                  alt="Unified Consent Across Devices"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md mb-3">
                <Sliders className="w-3.5 h-3.5" /> Omnichannel Sync
              </div>
              <h3 className="text-xl font-bold text-slate-900">Unified Consent Hub</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Synchronize choices across Web, iOS, Android, and backend APIs. Once a visitor accepts or rejects on one device, their preferences propagate across your brand in real-time.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Zero duplicate banner prompts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> REST & GraphQL Preference API</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Multi-domain & cross-subdomain sharing</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-44 flex items-center justify-center bg-white rounded-xl border border-slate-200/60 p-4 mb-6 shadow-inner">
                <img 
                  src="/images/saas/consentlayer/feature-policy-management.svg" 
                  alt="Automated Policy Management"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md mb-3">
                <Globe className="w-3.5 h-3.5" /> Global Jurisdictions
              </div>
              <h3 className="text-xl font-bold text-slate-900">Geo-Targeted Policy Engine</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Automatically detect visitor country, region, and city. Serve strict GDPR opt-in for EU visitors, CCPA/CPRA Do Not Sell notices for Californians, and LGPD banners in Brazil.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Automated vendor cookie scanning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Version-controlled policy diffs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> 35+ localized language translations</li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-44 flex items-center justify-center bg-white rounded-xl border border-slate-200/60 p-4 mb-6 shadow-inner">
                <img 
                  src="/images/saas/consentlayer/feature-audit-trails.svg" 
                  alt="Tamper-Proof Audit Trails"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md mb-3">
                <Lock className="w-3.5 h-3.5" /> Immutable Verification
              </div>
              <h3 className="text-xl font-bold text-slate-900">Cryptographic Audit Trails</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Every user choice is hashed with SHA-256 and appended to an append-only verifiable ledger. Meet regulatory inquiries with 1-click legal certificates and exportable proofs.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Tamper-evident hash chain</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Instant DSAR subject request resolution</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> 7-year compliant cloud archival</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Sandbox: Live Cookie Banner Customizer */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-emerald-500/30">
              Interactive Lab
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Live CMP Banner & Widget Builder
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              Test how your cookie consent banner and preference center look before deployment. Switch layouts, colors, and regulations in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Control Panel (5 cols) */}
            <div className="lg:col-span-5 bg-slate-800/90 backdrop-blur border border-slate-700/80 rounded-2xl p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6 pb-4 border-b border-slate-700">
                <Sliders className="w-5 h-5 text-emerald-400" /> Banner Customization Options
              </h3>

              {/* Layout Picker */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Display Layout
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "floating-box", label: "Floating Box" },
                    { id: "bottom-bar", label: "Bottom Bar" },
                    { id: "modal", label: "Center Modal" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setBannerLayout(item.id as any)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                        bannerLayout === item.id
                          ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-900/40"
                          : "bg-slate-750 text-slate-300 border-slate-700 hover:bg-slate-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Regulation Preset */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Jurisdiction Preset
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "gdpr", label: "GDPR (Opt-In)" },
                    { id: "ccpa", label: "CCPA (Opt-Out)" },
                    { id: "hybrid", label: "Global Smart" }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setRegulationPreset(p.id as any)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                        regulationPreset === p.id
                          ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-900/40"
                          : "bg-slate-750 text-slate-300 border-slate-700 hover:bg-slate-700"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent Color Picker */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Brand Color Accent
                </label>
                <div className="flex items-center gap-3">
                  {[
                    { color: "#10B981", name: "Emerald" },
                    { color: "#0EA5E9", name: "Sky" },
                    { color: "#6366F1", name: "Indigo" },
                    { color: "#F59E0B", name: "Amber" },
                    { color: "#EC4899", name: "Pink" }
                  ].map((c) => (
                    <button
                      key={c.color}
                      onClick={() => setAccentColor(c.color)}
                      style={{ backgroundColor: c.color }}
                      title={c.name}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        accentColor === c.color ? "scale-110 border-white ring-2 ring-emerald-400" : "border-slate-600 hover:scale-105"
                      }`}
                    />
                  ))}
                  <span className="text-xs font-mono text-slate-400 ml-2">{accentColor}</span>
                </div>
              </div>

              {/* Title Input */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Heading Text
                </label>
                <input
                  type="text"
                  value={titleText}
                  onChange={(e) => setTitleText(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Body text input */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Notice Copy
                </label>
                <textarea
                  rows={3}
                  value={bodyText}
                  onChange={(e) => setBodyText(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              {/* Toggles */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <span className="text-xs font-semibold text-slate-300">Show Explicit "Reject All" Button</span>
                <button 
                  onClick={() => setShowRejectAll(!showRejectAll)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${showRejectAll ? "bg-emerald-500" : "bg-slate-700"}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${showRejectAll ? "translate-x-6" : "translate-x-0"}`} />
                </button>
              </div>
            </div>

            {/* Live Interactive Preview Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between shadow-2xl relative min-h-[520px]">
              {/* Fake Website Header Bar */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-3 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                      https://yourwebsite.com/preview
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Simulated Browser
                  </span>
                </div>

                {/* Simulated Web Page Content */}
                <div className="space-y-4 opacity-40 select-none pointer-events-none mb-12">
                  <div className="h-6 bg-slate-800 rounded w-1/3" />
                  <div className="h-4 bg-slate-800 rounded w-2/3" />
                  <div className="h-4 bg-slate-800 rounded w-1/2" />
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="h-24 bg-slate-900 rounded-lg border border-slate-800" />
                    <div className="h-24 bg-slate-900 rounded-lg border border-slate-800" />
                    <div className="h-24 bg-slate-900 rounded-lg border border-slate-800" />
                  </div>
                </div>
              </div>

              {/* Dynamic Live Banner Simulation */}
              <div className={`transition-all duration-300 ${
                bannerLayout === "floating-box" 
                  ? "relative sm:max-w-md ml-auto mt-auto" 
                  : bannerLayout === "bottom-bar"
                  ? "relative w-full mt-auto"
                  : "relative mx-auto my-auto max-w-lg"
              }`}>
                <div className="bg-white text-slate-900 rounded-xl p-5 border border-slate-200 shadow-2xl relative">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{titleText}</h4>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                      {regulationPreset}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {bodyText}
                  </p>

                  {/* Category Pill Checkers */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 pb-4 border-b border-slate-100 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2 py-1 rounded">
                      <Lock className="w-3 h-3 text-emerald-600" /> Necessary
                    </div>
                    <button 
                      onClick={() => togglePref("analytics")}
                      className={`flex items-center justify-between px-2 py-1 rounded border transition-colors ${
                        preferences.analytics ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <span>Analytics</span>
                      <span className="text-[9px] font-bold">{preferences.analytics ? "ON" : "OFF"}</span>
                    </button>
                    <button 
                      onClick={() => togglePref("marketing")}
                      className={`flex items-center justify-between px-2 py-1 rounded border transition-colors ${
                        preferences.marketing ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <span>Ads</span>
                      <span className="text-[9px] font-bold">{preferences.marketing ? "ON" : "OFF"}</span>
                    </button>
                    <button 
                      onClick={() => togglePref("functional")}
                      className={`flex items-center justify-between px-2 py-1 rounded border transition-colors ${
                        preferences.functional ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <span>Functional</span>
                      <span className="text-[9px] font-bold">{preferences.functional ? "ON" : "OFF"}</span>
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <button 
                      onClick={() => {
                        setCookieConsentSaved(true);
                        setTimeout(() => setCookieConsentSaved(false), 2000);
                      }}
                      className="text-xs text-slate-600 hover:text-slate-900 underline font-medium mr-auto"
                    >
                      Manage Preferences
                    </button>
                    
                    {showRejectAll && (
                      <button 
                        onClick={() => {
                          setPreferences({ necessary: true, analytics: false, marketing: false, functional: false });
                          setCookieConsentSaved(true);
                          setTimeout(() => setCookieConsentSaved(false), 2000);
                        }}
                        className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                      >
                        Reject All
                      </button>
                    )}

                    <button 
                      onClick={() => {
                        setPreferences({ necessary: true, analytics: true, marketing: true, functional: true });
                        setCookieConsentSaved(true);
                        setTimeout(() => setCookieConsentSaved(false), 2000);
                      }}
                      style={{ backgroundColor: accentColor }}
                      className="px-4 py-1.5 text-xs font-bold text-white rounded-lg shadow hover:opacity-90 transition-opacity"
                    >
                      Accept All
                    </button>
                  </div>

                  {cookieConsentSaved && (
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 animate-bounce">
                      <Check className="w-3.5 h-3.5" /> Preference token logged to ledger!
                    </div>
                  )}
                </div>
              </div>

              {/* Embed Code Snippet Generator */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-emerald-400" /> Embed Script (Paste into &lt;head&gt;)
                  </span>
                  <button
                    onClick={handleCopyScript}
                    className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {copiedScript ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedScript ? "Copied!" : "Copy Snippet"}
                  </button>
                </div>
                <pre className="bg-slate-900 text-emerald-300 font-mono text-[11px] p-3 rounded-lg overflow-x-auto border border-slate-800 leading-tight">
                  {generatedScript}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Consent Analytics & DSAR Module */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Layers className="w-3.5 h-3.5 text-emerald-600" /> Real-Time DSAR Automation
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Turn Complex Subject Access Requests into a 30-Second Task
              </h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                When customers invoke "Right to be Forgotten" or "Right of Access" under GDPR or CCPA, ConsentLayer automatically crawls connected data lakes, CRMs, and email service providers to compile an export or purge records.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Self-Service User Portal</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Embed a white-labeled preference center where users authenticate and request their data securely.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Automated Pipeline Discovery</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Search across Snowflake, PostgreSQL, HubSpot, Stripe, and Zendesk using our 100+ native connectors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Signed Deletion Proof</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Receive an encrypted cryptographic certificate proving the deletion was completed across all target stores.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/saas/consentlayer-privacy/trial"
                  className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
                >
                  Test DSAR Sandbox <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/saas/consentlayer-privacy/pricing"
                  className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-all"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>

            {/* Visual Workflow Diagram */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="text-xs font-mono text-slate-500 mb-4 flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600" /> Pipeline Verification Agent
                </span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold">Active</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-800 font-medium">PostgreSQL Customer Lake</span>
                  </div>
                  <span className="text-emerald-700 text-[11px] font-semibold">2,140 rows masked</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-800 font-medium">HubSpot CRM Records</span>
                  </div>
                  <span className="text-emerald-700 text-[11px] font-semibold">Contact hard-deleted</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-800 font-medium">Stripe Billing Identifiers</span>
                  </div>
                  <span className="text-amber-700 text-[11px] font-semibold">Anonymized for tax compliance</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-800 font-medium">Google Analytics 4 Client ID</span>
                  </div>
                  <span className="text-emerald-700 text-[11px] font-semibold">User-deletion API dispatched</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Execution Time: <strong className="text-slate-800">412ms</strong></span>
                <span className="text-emerald-700 font-semibold">SHA-256 Ledger Verified ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Ready to automate privacy compliance in under 15 minutes?</h2>
          <p className="mt-3 text-emerald-100 max-w-2xl mx-auto text-base">
            Join 2,400+ modern engineering and privacy teams. Install the script or SDK today with no credit card required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/saas/consentlayer-privacy/trial"
              className="px-8 py-3.5 rounded-xl bg-white text-emerald-800 font-bold text-sm hover:bg-emerald-50 shadow-xl transition-all"
            >
              Start Free 14-Day Trial
            </Link>
            <Link
              to="/saas/consentlayer-privacy/integrations"
              className="px-8 py-3.5 rounded-xl bg-emerald-800/60 border border-emerald-400/40 text-white font-semibold text-sm hover:bg-emerald-800/90 transition-all"
            >
              Browse 100+ Integrations
            </Link>
          </div>
        </div>
      </section>
    </ConsentLayerLayout>
  );
}

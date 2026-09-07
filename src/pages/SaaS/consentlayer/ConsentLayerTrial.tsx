import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConsentLayerLayout from "./ConsentLayerLayout";
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Copy, 
  Check, 
  Globe, 
  Sparkles, 
  Code, 
  Server, 
  RefreshCw,
  Sliders,
  CheckCircle
} from "lucide-react";
import { ConsentLayerLogo } from "./ConsentLayerIcons";

export default function ConsentLayerTrial() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    companyName: "Acme Corp",
    workEmail: "alex@acmecorp.io",
    primaryDomain: "acmecorp.io",
    platform: "shopify",
    regulations: ["gdpr", "ccpa"],
    themeColor: "#10B981"
  });

  const [copiedCode, setCopiedCode] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const toggleRegulation = (reg: string) => {
    if (formData.regulations.includes(reg)) {
      setFormData(prev => ({ ...prev, regulations: prev.regulations.filter(r => r !== reg) }));
    } else {
      setFormData(prev => ({ ...prev, regulations: [...prev.regulations, reg] }));
    }
  };

  const handleCopy = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
    }, 1800);
  };

  const dynamicScript = `<!-- ConsentLayer Universal CMP Header Tag -->
<script 
  src="https://cdn.consentlayer.io/v3/cmp.js" 
  data-client-id="cl_sandbox_${formData.primaryDomain.replace(/[^a-zA-Z0-9]/g, '') || 'demo'}"
  data-theme="${formData.themeColor}"
  data-rules="${formData.regulations.join(',')}"
  data-platform="${formData.platform}"
  async>
</script>`;

  return (
    <ConsentLayerLayout>
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#F0FDF4] via-white to-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-300">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              14-Day Free Trial • No Credit Card Required
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Start Your Automated Compliance Sandbox
            </h1>
            <p className="mt-3 text-slate-600 text-sm max-w-lg mx-auto">
              Configure your organization, select your active jurisdictions, and generate your live CMP tag in under 2 minutes.
            </p>
          </div>

          {/* Stepper Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-lg mx-auto relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -z-0 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-emerald-600 -z-0 -translate-y-1/2 transition-all duration-300"
                style={{ width: currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%" }}
              />

              {[
                { step: 1, label: "Workspace" },
                { step: 2, label: "Jurisdictions" },
                { step: 3, label: "Deployment" }
              ].map((item) => {
                const isPassed = currentStep > item.step;
                const isCurrent = currentStep === item.step;
                return (
                  <div key={item.step} className="relative z-10 flex flex-col items-center">
                    <button
                      onClick={() => setCurrentStep(item.step)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-sm ${
                        isPassed
                          ? "bg-emerald-600 text-white"
                          : isCurrent
                          ? "bg-emerald-600 text-white ring-4 ring-emerald-100"
                          : "bg-white text-slate-400 border border-slate-300"
                      }`}
                    >
                      {isPassed ? "✓" : item.step}
                    </button>
                    <span className={`text-[11px] font-semibold mt-2 ${isCurrent ? "text-emerald-800" : "text-slate-500"}`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            {/* Step 1: Workspace */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1: Workspace & Primary Domain</h3>
                <p className="text-xs text-slate-500 mb-6">Enter your brand details to provision your dedicated consent ledger instance.</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / App Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
                      placeholder="e.g. Acme Corporation"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Website Domain
                      </label>
                      <input
                        type="text"
                        value={formData.primaryDomain}
                        onChange={(e) => setFormData({ ...formData, primaryDomain: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:bg-white"
                        placeholder="e.g. yoursite.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Web Technology / CMS
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: "shopify", label: "Shopify" },
                        { id: "wordpress", label: "WordPress" },
                        { id: "nextjs", label: "Next.js / React" },
                        { id: "gtm", label: "Google Tag Manager" }
                      ].map((plat) => (
                        <button
                          key={plat.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, platform: plat.id })}
                          className={`p-3 text-xs font-bold rounded-xl border text-center transition-all ${
                            formData.platform === plat.id
                              ? "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {plat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 flex items-center gap-2 shadow-md shadow-emerald-600/20"
                  >
                    Continue to Jurisdictions <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Jurisdictions */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Step 2: Legal Regulations & Styling</h3>
                <p className="text-xs text-slate-500 mb-6">Choose the legal frameworks you need to enforce automatically based on visitor geo-location.</p>

                <div className="space-y-4 mb-6">
                  {[
                    { id: "gdpr", label: "GDPR / ePrivacy Directive", desc: "Strict prior opt-in consent for European Union visitors." },
                    { id: "ccpa", label: "CCPA / CPRA", desc: "Do Not Sell/Share Personal Info opt-out for California residents." },
                    { id: "lgpd", label: "LGPD", desc: "Brazilian General Data Protection Law compliance." },
                    { id: "pipeda", label: "PIPEDA", desc: "Canadian privacy standard with implied and express opt-in." }
                  ].map((reg) => {
                    const isSelected = formData.regulations.includes(reg.id);
                    return (
                      <div
                        key={reg.id}
                        onClick={() => toggleRegulation(reg.id)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                          isSelected
                            ? "bg-emerald-50/70 border-emerald-500"
                            : "bg-slate-50 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div>
                          <div className="font-bold text-sm text-slate-900">{reg.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{reg.desc}</div>
                        </div>
                        <div className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold ${
                          isSelected ? "bg-emerald-600 text-white" : "border border-slate-300 bg-white"
                        }`}>
                          {isSelected && "✓"}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Banner Brand Color
                  </label>
                  <div className="flex items-center gap-3">
                    {["#10B981", "#0EA5E9", "#6366F1", "#0F172A"].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setFormData({ ...formData, themeColor: c })}
                        style={{ backgroundColor: c }}
                        className={`w-7 h-7 rounded-full border-2 ${formData.themeColor === c ? "scale-110 border-white ring-2 ring-emerald-500" : "border-slate-300"}`}
                      />
                    ))}
                    <span className="text-xs font-mono text-slate-500">{formData.themeColor}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 rounded-xl text-slate-600 font-semibold text-xs hover:bg-slate-100"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 flex items-center gap-2 shadow-md shadow-emerald-600/20"
                  >
                    Generate Live Script <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Deployment & Tag Verification */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Step 3: Deploy & Verify Script</h3>
                    <p className="text-xs text-slate-500 mt-1">Copy and paste this snippet into the &lt;head&gt; tag of {formData.primaryDomain}.</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    Ready to Ship
                  </span>
                </div>

                <div className="bg-slate-900 rounded-2xl p-4 text-xs font-mono text-emerald-300 relative shadow-inner mb-6">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-emerald-400" /> HTML &lt;head&gt; Tag
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 text-emerald-400 hover:text-white"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedCode ? "Copied to Clipboard!" : "Copy Code"}
                    </button>
                  </div>
                  <pre className="overflow-x-auto text-[11px] leading-relaxed">
                    {dynamicScript}
                  </pre>
                </div>

                {/* Simulated Verification */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">Domain Verification Ping</div>
                      <div className="text-[11px] text-slate-500">Checking for ConsentLayer CMP on {formData.primaryDomain}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleVerify}
                    disabled={isVerifying || isVerified}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      isVerified
                        ? "bg-emerald-600 text-white"
                        : isVerifying
                        ? "bg-slate-200 text-slate-500"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isVerified ? "✓ Tag Detected Live" : isVerifying ? "Scanning Domain..." : "Verify Installation"}
                  </button>
                </div>

                {isVerified && (
                  <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Success!</strong> CMP tag is active and responding from Cloudflare Edge in 8ms. Consent ledger initialized.</span>
                  </div>
                )}

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 rounded-xl text-slate-600 font-semibold text-xs hover:bg-slate-100"
                  >
                    Back
                  </button>
                  <Link
                    to="/saas/consentlayer-privacy"
                    className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 flex items-center gap-2 shadow-md shadow-emerald-600/20"
                  >
                    Enter Live Privacy Dashboard <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </ConsentLayerLayout>
  );
}

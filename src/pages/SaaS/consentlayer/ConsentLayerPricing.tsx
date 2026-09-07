import React, { useState } from "react";
import { Link } from "react-router-dom";
import ConsentLayerLayout from "./ConsentLayerLayout";
import { 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Zap, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";

export default function ConsentLayerPricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [trafficTier, setTrafficTier] = useState<number>(1); // 0: 25k, 1: 100k, 2: 500k, 3: 2M+
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trafficLabels = ["25k Pageviews", "100k Pageviews", "500k Pageviews", "2M+ Pageviews"];
  const multiplier = trafficTier === 0 ? 0.7 : trafficTier === 1 ? 1.0 : trafficTier === 2 ? 1.6 : 2.5;

  const starterPrice = Math.round((isAnnual ? 39 : 49) * multiplier);
  const growthPrice = Math.round((isAnnual ? 119 : 149) * multiplier);
  const enterprisePrice = Math.round((isAnnual ? 319 : 399) * multiplier);

  const faqs = [
    {
      q: "What counts towards monthly pageviews?",
      a: "A pageview is counted each time your website loads our lightweight JavaScript tag (less than 3kB). If a user visits 5 pages on your site, that counts as 5 pageviews. Background API-only sync calls do not count against your pageview quota."
    },
    {
      q: "Are your cookie banners compliant with Google Consent Mode v2?",
      a: "Yes! ConsentLayer is fully certified for Google Consent Mode v2 and IAB TCF 2.2. Our banner signals automatically update ad_storage, analytics_storage, and ad_user_data tags in Google Tag Manager."
    },
    {
      q: "Can I customize the visual style to match my brand completely?",
      a: "Absolutely. You can choose from floating boxes, bottom bars, or modals, custom hex colors, font families, dark/light modes, and custom CSS overrides."
    },
    {
      q: "How does the 14-day free trial work?",
      a: "You get full, unrestricted access to the Growth plan features for 14 days without entering a credit card. At the end of the trial, you can choose the plan that best fits your traffic volume."
    },
    {
      q: "What happens if our site experiences a viral traffic surge?",
      a: "We never take down or disable your consent banners. If you exceed your plan's traffic threshold, your compliance remains 100% active, and we will simply alert you to upgrade on your next billing cycle."
    }
  ];

  return (
    <ConsentLayerLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#F0FDF4] via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6 border border-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto">
            Predictable Plans for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Businesses of Any Scale
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            All plans include unlimited automated cookie scans, zero-code styling customizer, and SHA-256 audit logging.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-emerald-600 rounded-full p-1 cursor-pointer transition-colors relative shadow-inner"
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-2 ${isAnnual ? "text-slate-900" : "text-slate-500"}`}>
              Annual Billing
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                Save 20%
              </span>
            </span>
          </div>

          {/* Traffic Volume Selector */}
          <div className="mt-8 max-w-md mx-auto bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Select Your Monthly Web Traffic: <span className="text-emerald-700 font-bold">{trafficLabels[trafficTier]}</span>
            </label>
            <input
              type="range"
              min={0}
              max={3}
              step={1}
              value={trafficTier}
              onChange={(e) => setTrafficTier(parseInt(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
              <span>25k</span>
              <span>100k</span>
              <span>500k</span>
              <span>2M+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
                  Starter
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Small Business</h3>
                <p className="text-xs text-slate-500 mt-1">Essential GDPR & CCPA consent for single websites.</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${starterPrice}</span>
                  <span className="text-xs text-slate-500 font-medium">/ month</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {isAnnual ? "Billed annually" : "Billed monthly"}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Included Features</div>
                  {[
                    "1 Production Domain",
                    "GDPR & CCPA Compliant Banners",
                    "Automated Weekly Cookie Scanner",
                    "Standard Script Blocking",
                    "30-Day Audit Trail Storage",
                    "Email Support (24h SLA)"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/saas/consentlayer-privacy/trial"
                  className="w-full block text-center py-3 px-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Growth Plan (Popular) */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border-2 border-emerald-500 flex flex-col justify-between shadow-2xl relative scale-105 z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
                  Growth
                </div>
                <h3 className="text-2xl font-bold text-white">Scale & Multi-Brand</h3>
                <p className="text-xs text-slate-400 mt-1">For fast-growing companies and multi-region operations.</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">${growthPrice}</span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {isAnnual ? "Billed annually" : "Billed monthly"}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Everything in Starter plus:</div>
                  {[
                    "Up to 5 Domains & Subdomains",
                    "Google Consent Mode v2 & IAB TCF 2.2",
                    "Omnichannel Preference Center",
                    "Automated DSAR Intake & Workflows",
                    "35+ Auto-Translated Languages",
                    "1-Year Verifiable Ledger Storage",
                    "Priority Slack & Email Support"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/saas/consentlayer-privacy/trial"
                  className="w-full block text-center py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-xs hover:brightness-110 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  Start Free 14-Day Trial
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
                  Enterprise
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Global Enterprise</h3>
                <p className="text-xs text-slate-500 mt-1">Maximum scale, custom connectors, and dedicated compliance support.</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${enterprisePrice}</span>
                  <span className="text-xs text-slate-500 font-medium">/ month</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {isAnnual ? "Billed annually" : "Billed monthly"}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Everything in Growth plus:</div>
                  {[
                    "Unlimited Domains & Mobile Apps",
                    "Custom Database DSAR Connectors",
                    "7-Year Cryptographic Legal Storage",
                    "99.995% SLA Uptime Guarantee",
                    "Custom DPA & BAA Agreements",
                    "Dedicated DPO Privacy Architect",
                    "Custom Single Sign-On (SAML/Okta)"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/saas/consentlayer-privacy/trial"
                  className="w-full block text-center py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Contact Enterprise Sales
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Detailed Feature Matrix
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Compare capabilities across Starter, Growth, and Enterprise tiers.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Platform Features</th>
                  <th className="p-4 sm:p-5 text-center">Starter</th>
                  <th className="p-4 sm:p-5 text-center text-emerald-800 bg-emerald-50">Growth</th>
                  <th className="p-4 sm:p-5 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Supported Domains</td>
                  <td className="p-4 sm:p-5 text-center">1 Domain</td>
                  <td className="p-4 sm:p-5 text-center bg-emerald-50/50 font-bold text-emerald-900">5 Domains</td>
                  <td className="p-4 sm:p-5 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Google Consent Mode v2</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center bg-emerald-50/50 text-emerald-600 font-bold">✓ Included</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Universal Preference Center</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center bg-emerald-50/50 text-emerald-600 font-bold">✓ Included</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">DSAR Pipeline Automation</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center bg-emerald-50/50 text-slate-700">10 Requests / Mo</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Audit Ledger Retention</td>
                  <td className="p-4 sm:p-5 text-center">30 Days</td>
                  <td className="p-4 sm:p-5 text-center bg-emerald-50/50 text-emerald-900">1 Year</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-slate-900">7 Years (Immutable)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Custom SLA Uptime</td>
                  <td className="p-4 sm:p-5 text-center">99.9%</td>
                  <td className="p-4 sm:p-5 text-center bg-emerald-50/50">99.95%</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-slate-900">99.995% Financially Backed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">Have a question that is not covered here? Reach out to our 24/7 compliance team.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-sm">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-emerald-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ConsentLayerLayout>
  );
}

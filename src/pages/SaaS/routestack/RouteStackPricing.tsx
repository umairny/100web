import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RouteStackLayout } from './RouteStackLayout'
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Truck, 
  ChevronDown, 
  ChevronUp, 
  Fuel, 
  Zap 
} from 'lucide-react'

export default function RouteStackPricing() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [fleetTier, setFleetTier] = useState<number>(1) // 0: 5 vehicles, 1: 15 vehicles, 2: 40 vehicles, 3: 100+ vehicles
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const fleetLabels = ["5 Vehicles", "15 Vehicles", "40 Vehicles", "100+ Enterprise Fleet"]
  const multiplier = fleetTier === 0 ? 0.7 : fleetTier === 1 ? 1.0 : fleetTier === 2 ? 1.8 : 3.2

  const starterPrice = Math.round((isAnnual ? 59 : 79) * multiplier)
  const growthPrice = Math.round((isAnnual ? 159 : 199) * multiplier)
  const enterprisePrice = Math.round((isAnnual ? 399 : 499) * multiplier)

  const faqs = [
    {
      q: "How does the pricing scale with my fleet size?",
      a: "Pricing is based on the number of active delivery vehicles managed within the platform during the billing period. You can easily add temporary peak-season vehicles during high-volume holidays and scale back whenever needed."
    },
    {
      q: "Do drivers need special hardware or dedicated devices?",
      a: "No! The RouteStack Driver App runs natively on any modern iOS or Android smartphone or tablet. If your fleet already uses hardwired OBD-II or Samsara/Geotab telematics, our system connects directly via API."
    },
    {
      q: "Can RouteStack handle multi-depot and multi-day delivery waves?",
      a: "Yes. Our Growth and Enterprise tiers include full multi-depot optimization, allowing drivers to load at different warehouse hubs, execute dynamic routes, and return to regional bases automatically."
    },
    {
      q: "How does the 14-day free trial work?",
      a: "You get unrestricted access to the complete Growth plan features for 14 days without entering a credit card. You can upload CSV orders, invite drivers, and test live route optimization instantly."
    },
    {
      q: "What kind of ROI can we expect on fuel and driver hours?",
      a: "Most fleets experience an immediate 20% to 28% reduction in total miles driven, saving between $450 and $900 per vehicle per month in fuel alone, while increasing daily deliveries by 25% to 35%."
    }
  ]

  return (
    <RouteStackLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0B1528] via-[#0F1E36] to-[#0B1528] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-500/30">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Transparent Fleet Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto">
            Plans Built to Scale <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400">
              With Your Fleet
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            All plans include unlimited delivery stops, real-time dispatch dashboards, and digital proof-of-delivery receipts.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-sky-600 rounded-full p-1 cursor-pointer transition-colors relative shadow-inner"
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
              <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-500/40">
                Save 20%
              </span>
            </span>
          </div>

          {/* Fleet Vehicle Count Slider */}
          <div className="mt-8 max-w-md mx-auto bg-[#0F1E36] p-4 rounded-2xl border border-slate-700 shadow-xl">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
              Select Fleet Size: <span className="text-sky-400 font-extrabold">{fleetLabels[fleetTier]}</span>
            </label>
            <input
              type="range"
              min={0}
              max={3}
              step={1}
              value={fleetTier}
              onChange={(e) => setFleetTier(parseInt(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
              <span>5</span>
              <span>15</span>
              <span>40</span>
              <span>100+</span>
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
                <h3 className="text-2xl font-bold text-slate-900">Local Delivery</h3>
                <p className="text-xs text-slate-500 mt-1">Ideal for small local delivery fleets and retail couriers.</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${starterPrice}</span>
                  <span className="text-xs text-slate-500 font-medium">/ month</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {isAnnual ? 'Billed annually' : 'Billed monthly'}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Included Features</div>
                  {[
                    "Up to 5 Delivery Vehicles",
                    "Unlimited Delivery Stops",
                    "Multi-Stop Route Optimizer",
                    "iOS & Android Driver Mobile App",
                    "Digital Signature & Photo ePOD",
                    "Standard Email Support"
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
                  to="/saas/routestack-logistics/trial"
                  className="w-full block text-center py-3 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Growth Plan (Popular) */}
            <div className="bg-[#0B1528] text-white rounded-3xl p-8 border-2 border-sky-500 flex flex-col justify-between shadow-2xl relative scale-105 z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-400 to-emerald-400 text-slate-950 text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                Most Popular
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-500/30">
                  Growth
                </div>
                <h3 className="text-2xl font-bold text-white">Regional Fleet</h3>
                <p className="text-xs text-slate-400 mt-1">For expanding logistics, e-commerce, and commercial couriers.</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">${growthPrice}</span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {isAnnual ? 'Billed annually' : 'Billed monthly'}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">Everything in Starter plus:</div>
                  {[
                    "Up to 25 Active Vehicles",
                    "Dynamic Mid-Shift Re-Sequencing",
                    "Live Customer SMS Tracking Links",
                    "Vehicle Weight & Capacity Constraints",
                    "Camera Barcode & QR Scanner",
                    "Shopify & WooCommerce Connectors",
                    "Priority Phone & Chat Support"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/saas/routestack-logistics/trial"
                  className="w-full block text-center py-3.5 px-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-600/30 active:scale-95"
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
                <h3 className="text-2xl font-bold text-slate-900">National 3PL</h3>
                <p className="text-xs text-slate-500 mt-1">Custom multi-depot architectures, ERP pipelines, and 99.99% SLAs.</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${enterprisePrice}</span>
                  <span className="text-xs text-slate-500 font-medium">/ month</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {isAnnual ? 'Billed annually' : 'Billed monthly'}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Everything in Growth plus:</div>
                  {[
                    "Unlimited Vehicles & Warehouses",
                    "Custom SAP & Oracle NetSuite Sync",
                    "CAN-Bus & OBD-II Telematics Ingestion",
                    "Custom SLA Uptime (99.99%)",
                    "Dedicated Solutions Dispatch Architect",
                    "Single Sign-On (Okta/SAML)",
                    "24/7/365 Emergency Phone Dispatch Line"
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
                  to="/saas/routestack-logistics/trial"
                  className="w-full block text-center py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Contact Enterprise Sales
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Detailed Fleet Feature Matrix
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Comprehensive capabilities breakdown across Starter, Growth, and Enterprise tiers.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Dispatch Feature</th>
                  <th className="p-4 sm:p-5 text-center">Starter</th>
                  <th className="p-4 sm:p-5 text-center text-sky-900 bg-sky-50">Growth</th>
                  <th className="p-4 sm:p-5 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Delivery Vehicle Cap</td>
                  <td className="p-4 sm:p-5 text-center">Up to 5</td>
                  <td className="p-4 sm:p-5 text-center bg-sky-50/50 font-bold text-sky-900">Up to 25</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-slate-900">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Time-Window & Capacity Constraints</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center bg-sky-50/50 text-emerald-600 font-bold">✓ Included</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Live Customer SMS Tracking Portal</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center bg-sky-50/50 text-emerald-600 font-bold">✓ Included</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ White-Labeled</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">ERP & WMS Direct Connectors</td>
                  <td className="p-4 sm:p-5 text-center">CSV / Webhook</td>
                  <td className="p-4 sm:p-5 text-center bg-sky-50/50 text-slate-700">Shopify & WooCommerce</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">SAP, Oracle, Sage</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">Live Telematics Ingestion</td>
                  <td className="p-4 sm:p-5 text-center">Phone GPS</td>
                  <td className="p-4 sm:p-5 text-center bg-sky-50/50">Phone GPS</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-slate-900">OBD-II & CAN-Bus</td>
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
            <p className="text-slate-600 text-sm mt-2">Have a question about vehicle setup, hardware, or onboarding?</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
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
                    {isOpen ? <ChevronUp className="w-4 h-4 text-sky-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </RouteStackLayout>
  )
}

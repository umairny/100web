import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RouteStackLayout } from './RouteStackLayout'
import { 
  ApexGlobalLogo, 
  CoastalFreightLogo, 
  UrbanDeliveriesLogo, 
  SynergyLogisticsLogo 
} from './RouteStackIcons'
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Truck, 
  Navigation, 
  Sparkles,
  TrendingUp,
  Clock,
  Fuel,
  Check
} from 'lucide-react'

export function RouteStackHome() {
  const [trialEmail, setTrialEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation()

  const isShortPath = location.pathname.startsWith('/routestack')
  const basePath = isShortPath ? '/routestack' : '/saas/routestack-logistics'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trialEmail || !companyName) return
    setSubmitted(true)
  }

  return (
    <RouteStackLayout>
      {/* ========================================================================= */}
      {/* FRAME 1: HERO SECTION                                                     */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-[#0B1528] text-white overflow-hidden border-b border-slate-800">
        {/* Highway Glow & Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1528] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 border border-amber-500/30">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              RouteStack Logistics:
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              Streamline Fleet <br className="hidden sm:inline" />
              Coordination. Deliver Faster.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Maximize fleet efficiency, optimize routes, and reduce delivery costs with a unified, smart platform.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={`${basePath}/trial`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 active:scale-95 flex items-center justify-center gap-2"
              >
                GET STARTED FREE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Microcopy Trust Line */}
            <p className="mt-4 text-xs font-medium text-slate-400 flex items-center justify-center gap-2 flex-wrap">
              <span>• 14-Day Free Trial</span>
              <span>• No Credit Card Required</span>
              <span>• Set Up in Minutes</span>
            </p>
          </div>

          {/* Hero Isometric Illustration */}
          <div className="mt-12 max-w-5xl mx-auto rounded-3xl border border-slate-700/80 bg-[#0A1220] p-3 sm:p-5 shadow-2xl relative overflow-hidden">
            <img 
              src="/images/saas/routestack/routestack-hero.svg" 
              alt="RouteStack Logistics Isometric Fleet Coordination Platform"
              className="w-full h-auto rounded-2xl shadow-inner object-contain block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FRAME 1 & 2: WHY ROUTESTACK? (PRODUCT VALUE & FLEET METRICS)             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full uppercase tracking-widest mb-3 border border-slate-200">
              Product Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why RouteStack?
            </h2>
          </div>

          {/* 3 Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Reduce Fuel Costs */}
            <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-28 h-28 flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                <img 
                  src="/images/saas/routestack/value-fuel.svg" 
                  alt="Reduce Fuel Costs" 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reduce Fuel Costs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                Minimize miles driven, improve fuel economy by up to 25%.
              </p>
            </div>

            {/* Card 2: Improve Driver Productivity */}
            <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200 hover:border-sky-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-28 h-28 flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                <img 
                  src="/images/saas/routestack/value-driver.svg" 
                  alt="Improve Driver Productivity" 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Improve Driver Productivity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                Streamline dispatches, optimize schedules, and reduce idle time.
              </p>
            </div>

            {/* Card 3: Enhance Customer Satisfaction */}
            <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-28 h-28 flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                <img 
                  src="/images/saas/routestack/value-satisfaction.svg" 
                  alt="Enhance Customer Satisfaction" 
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enhance Customer Satisfaction</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                Provide real-time tracking, accurate ETAs, and reliable service.
              </p>
            </div>
          </div>

          {/* Key Fleet Metrics Dark Bar */}
          <div className="mt-14 bg-[#0B1528] rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Title & Progress Bar */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                    Key Fleet Metrics:
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    Trajectory High 86%
                  </span>
                </div>
                <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-amber-400"
                    style={{ width: '86%' }}
                  />
                </div>
              </div>

              {/* 3 Circular Dial Meters */}
              <div className="w-full lg:w-1/2 grid grid-cols-3 gap-4 text-center">
                {/* Dial 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-400"
                        strokeDasharray="94, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-extrabold text-white">94%</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 mt-1.5">Fuel Economy</span>
                </div>

                {/* Dial 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-sky-400"
                        strokeDasharray="98, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-extrabold text-white">98%</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 mt-1.5">On-Time ETA</span>
                </div>

                {/* Dial 3 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-800"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-amber-400"
                        strokeDasharray="92, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-xs font-extrabold text-white">92%</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 mt-1.5">Fleet Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FRAME 2: CORE WORKFLOW (DARK MIDNIGHT CANVAS)                            */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#0B1528] text-white relative border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-3.5 py-1 bg-sky-500/20 text-sky-400 text-xs font-bold rounded-full uppercase tracking-widest mb-3 border border-sky-500/30">
              End-to-End Orchestration
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Core Workflow
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              From order ingestion to multi-stop dynamic dispatch and customer ePOD receipts in 4 seamless stages.
            </p>
          </div>

          {/* Sequential 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Step 1: Upload Orders */}
            <div className="bg-[#0F1E36] rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-sky-500/80 transition-all shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-black text-xs">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white">Upload Orders</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  Import shipments from your ERP or e-commerce platform automatically via webhooks, CSV, or direct API.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#0A1220] border border-slate-800/80 p-4">
                <img 
                  src="/images/saas/routestack/workflow-step1-upload.svg" 
                  alt="Step 1: Upload Orders"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Step 2: Optimize Routes */}
            <div className="bg-[#0F1E36] rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-amber-500/80 transition-all shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-black text-xs">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white">Optimize Routes</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  Auto-optimize for dynamic conditions, live traffic, vehicle capacity, and delivery time windows.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#0A1220] border border-slate-800/80 p-4">
                <img 
                  src="/images/saas/routestack/workflow-step2-optimize.svg" 
                  alt="Step 2: Optimize Routes"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Step 3: Dispatch & Track Driver */}
            <div className="bg-[#0F1E36] rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-sky-500/80 transition-all shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center font-black text-xs">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white">Dispatch &amp; Track</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  Instantly send optimized routes to drivers; monitor real-time vehicle location, battery, and speed.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#0A1220] border border-slate-800/80 p-4">
                <img 
                  src="/images/saas/routestack/workflow-step3-dispatch.svg" 
                  alt="Step 3: Dispatch & Track Driver"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Step 4: Collect ePOD & Analytics */}
            <div className="bg-[#0F1E36] rounded-3xl p-8 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/80 transition-all shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-black text-xs">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-white">Collect ePOD &amp; Analytics</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  Capture digital delivery confirmation, photos, customer signatures, and generate insightful fleet reports.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#0A1220] border border-slate-800/80 p-4">
                <img 
                  src="/images/saas/routestack/workflow-step4-epod.svg" 
                  alt="Step 4: Collect ePOD & Analytics"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>

          <div className="mt-14 text-center">
            <Link
              to={`${basePath}/features`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-sky-400 font-bold text-xs uppercase tracking-wider transition-all border border-slate-700"
            >
              Test Interactive Route Optimizer Simulator <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FRAME 3: INTEGRATIONS (RADIAL SPOKE DIAGRAM)                              */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full uppercase tracking-widest mb-3 border border-slate-200">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connects to the Tools You Already Love.
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
            Direct two-way synchronization with leading ERP, warehouse management, and e-commerce platforms.
          </p>

          {/* Radial Spoke Graphic */}
          <div className="mt-10 max-w-3xl mx-auto">
            <img 
              src="/images/saas/routestack/ecosystem-radial.svg" 
              alt="RouteStack Integrations Ecosystem Radial Spoke"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <div className="mt-8">
            <Link
              to={`${basePath}/integrations`}
              className="text-xs font-bold text-sky-700 hover:text-sky-800 uppercase tracking-widest inline-flex items-center gap-1.5"
            >
              EXPLORE ALL 20+ CONNECTORS <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FRAME 3: BUYER TRUST & TESTIMONIALS                                       */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0B1528] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-bold rounded-full uppercase tracking-widest mb-3 border border-sky-500/30">
              Buyer Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Hundreds of Teams Worldwide.
            </h2>
          </div>

          {/* Partner Logo Bar */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-wrap items-center justify-around gap-6 sm:gap-12 mb-16">
            <ApexGlobalLogo />
            <CoastalFreightLogo />
            <UrbanDeliveriesLogo />
            <SynergyLogisticsLogo />
          </div>

          {/* 2 Glowing Blue Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Sarah J. */}
            <div className="bg-[#0F1E36] rounded-2xl p-6 sm:p-8 border border-sky-500/40 shadow-lg shadow-sky-950/50 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                "RouteStack coordinates our entire fleet with automated dispatches and real-time alerts. Fuel spending dropped 22% in our first quarter, and customer ETA calls have dropped to almost zero."
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400 bg-slate-700 flex items-center justify-center font-bold text-sm text-white">
                  SJ
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Sarah J.</div>
                  <div className="text-xs text-slate-400">Ops Manager, Apex Global</div>
                </div>
              </div>
            </div>

            {/* Card 2: Mike R. */}
            <div className="bg-[#0F1E36] rounded-2xl p-6 sm:p-8 border border-sky-500/40 shadow-lg shadow-sky-950/50 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                "The driver mobile app and instant ePOD capture reduced customer support inquiries by 40%. Drivers love the sequence clarity, and dispatchers save hours each day."
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400 bg-slate-700 flex items-center justify-center font-bold text-sm text-white">
                  MR
                </div>
                <div>
                  <div className="font-bold text-sm text-white">Mike R.</div>
                  <div className="text-xs text-slate-400">Logistics Director, Coastal Freight</div>
                </div>
              </div>
            </div>

          </div>

          {/* Big Stat Counters (+30%, -15%) */}
          <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400">
                +30%
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mt-2">
                More Deliveries Per Day
              </div>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-black text-sky-400">
                -15%
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mt-2">
                Operating Costs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FRAME 3: LOW-FRICTION TRIAL PATH (DIRECT SIGNUP FORM)                      */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#0B1528] to-[#07101E] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-bold rounded-full uppercase tracking-widest mb-3 border border-sky-500/30">
            Low-Friction Trial Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Level Up Your Logistics? Start Now.
          </h2>

          <div className="mt-4 text-xs font-mono text-emerald-400 bg-emerald-500/10 py-1.5 px-4 rounded-full inline-block border border-emerald-500/30">
            FREE 14-DAY TRIAL: Full feature access. No Credit Card required.
          </div>

          {/* Direct Interactive Trial Form */}
          <div className="mt-8 bg-[#0F1E36] rounded-3xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Account Provisioned!</h3>
                <p className="text-xs text-slate-400 mt-1">Check your inbox ({trialEmail}) for instant dispatcher login credentials.</p>
                <Link
                  to={`${basePath}/trial`}
                  className="mt-6 inline-block px-6 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Enter Dispatch Sandbox
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={trialEmail}
                    onChange={(e) => setTrialEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 border border-slate-200"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 border border-slate-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-sky-600/30 active:scale-95"
                >
                  CREATE MY FREE ACCOUNT
                </button>
              </form>
            )}

            {/* 4 Trust Checkmarks */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-slate-300 font-medium">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Real-time Dashboards</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Optimization Engine</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Mobile Driver App</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Reporting &amp; Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RouteStackLayout>
  )
}

export default RouteStackHome

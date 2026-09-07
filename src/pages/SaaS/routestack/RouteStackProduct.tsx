import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RouteStackLayout } from './RouteStackLayout'
import { 
  Truck, 
  Navigation, 
  MapPin, 
  CheckCircle2, 
  Zap, 
  Sliders, 
  Server, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Cpu,
  Radio,
  Share2
} from 'lucide-react'

export default function RouteStackProduct() {
  const [activeModule, setActiveModule] = useState<'dispatch' | 'driver' | 'telematics' | 'portal'>('dispatch')

  const modules = [
    {
      id: 'dispatch',
      title: 'Dynamic Dispatch Engine',
      tagline: 'Multi-vehicle algorithmic solver factoring real-world constraints.',
      icon: Cpu,
      description: 'RouteStack calculates optimal routes across hundreds of vehicles and thousands of stops simultaneously, balancing payload capacity, driver hours of service (HOS), and customer-specified time windows.',
      points: [
        'Heuristic multi-depot vehicle routing solver with traffic heuristics',
        'Dynamic mid-shift reassignment when emergency orders arrive',
        'Configurable vehicle constraints (refrigeration, lift-gates, hazmat)',
        'Automatic driver break and refuel schedule insertion'
      ],
      diagram: '/images/saas/routestack/workflow-step2-optimize.svg'
    },
    {
      id: 'driver',
      title: 'Driver Mobile GPS App',
      tagline: 'Turn-by-turn navigation with integrated barcode scanning & ePOD.',
      icon: Smartphone,
      description: 'Built for iOS and Android with complete offline resilience. Drivers receive sequenced stops with one-tap navigation, parcel barcode scanning, recipient signature collection, and damage photo attachments.',
      points: [
        'Offline caching prevents signal loss in parking garages and rural valleys',
        'Built-in camera barcode and QR code scanner for parcel verification',
        'Digital signature pad and geofenced automatic arrival detection',
        'Real-time two-way dispatch messaging and exception reporting'
      ],
      diagram: '/images/saas/routestack/workflow-step3-dispatch.svg'
    },
    {
      id: 'telematics',
      title: 'Fleet Telematics & Live Map',
      tagline: 'Sub-second GPS vehicle tracking with speed and idling alerts.',
      icon: Radio,
      description: 'Connect to OBD-II dongles, hardwired CAN-bus sensors, or smartphone GPS. Monitor active fleet positions on a high-refresh live map with geofence triggers and harsh braking diagnostics.',
      points: [
        'Live 3-second GPS heartbeat updates across all vehicles on the road',
        'Polygon geofencing around depots, customer docks, and restricted zones',
        'Driver safety scorecards tracking harsh acceleration, braking, and speeding',
        'Real-time fuel level monitoring and preventative maintenance logs'
      ],
      diagram: '/images/saas/routestack/workflow-step4-epod.svg'
    },
    {
      id: 'portal',
      title: 'Live Customer Tracking Portal',
      tagline: 'Delight recipients with Uber-like live delivery tracking.',
      icon: Share2,
      description: 'Eliminate "Where is my order?" calls by automatically sending recipients an SMS or email link with an interactive map, accurate countdown ETA, driver photo, and drop-off instructions.',
      points: [
        'White-labeled web portal matching your brand colors and logo',
        'Dynamic live countdown ETA that adjusts with real-time traffic',
        'Customer self-service delivery notes (e.g. gate code, leave with neighbor)',
        'Post-delivery instant CSAT rating and delivery feedback collection'
      ],
      diagram: '/images/saas/routestack/value-satisfaction.svg'
    }
  ]

  const current = modules.find(m => m.id === activeModule)!

  return (
    <RouteStackLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0B1528] via-[#0F1E36] to-[#0B1528] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-500/30">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Platform Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto">
            The Complete Operating System <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400">
              For Modern Fleets
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Four integrated pillars engineered to transform complex last-mile chaos into clockwork execution.
          </p>
        </div>
      </section>

      {/* Module Selector & Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {modules.map(mod => {
              const Icon = mod.icon
              const isActive = activeModule === mod.id
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id as any)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#0284C7] text-white shadow-lg shadow-sky-600/25 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  {mod.title}
                </button>
              )
            })}
          </div>

          {/* Module Card Display */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                  Core Module
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
                  {current.title}
                </h2>
                <p className="text-sky-700 font-bold text-xs sm:text-sm mt-1">
                  {current.tagline}
                </p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {current.description}
                </p>

                <div className="mt-6 space-y-3">
                  {current.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Link
                    to="/saas/routestack-logistics/features"
                    className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all"
                  >
                    Try in Simulator
                  </Link>
                  <Link
                    to="/saas/routestack-logistics/trial"
                    className="px-6 py-3 rounded-full bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0369A1] transition-all shadow-md shadow-sky-600/20"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#0B1528] rounded-2xl p-6 border border-slate-800 shadow-inner flex items-center justify-center">
                <img 
                  src={current.diagram} 
                  alt={current.title}
                  className="max-h-72 w-auto object-contain transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Under The Hood Enterprise Telematics Specs */}
      <section className="py-20 bg-[#0B1528] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/30">
              Technical Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Engineered for Massive Last-Mile Scale
            </h2>
            <p className="mt-3 text-slate-400 text-sm">
              Battle-tested algorithms handling millions of delivery waypoints worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0F1E36] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-black text-white">&lt; 180ms</h3>
              <p className="text-xs font-bold text-sky-400 mt-1 uppercase tracking-wider">Solver Compute Latency</p>
              <p className="text-xs text-slate-400 mt-2">
                Sequences 500+ delivery stops across 20 vehicles with time-windows in fractions of a second.
              </p>
            </div>

            <div className="bg-[#0F1E36] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-black text-white">99.99%</h3>
              <p className="text-xs font-bold text-emerald-400 mt-1 uppercase tracking-wider">High-Availability SLA</p>
              <p className="text-xs text-slate-400 mt-2">
                Multi-region active failover clusters ensuring dispatch tables are always online during peak delivery waves.
              </p>
            </div>

            <div className="bg-[#0F1E36] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-black text-white">3 Sec</h3>
              <p className="text-xs font-bold text-amber-400 mt-1 uppercase tracking-wider">Telemetry Ping Rate</p>
              <p className="text-xs text-slate-400 mt-2">
                Ultra-low latency vehicle telemetry updating speed, heading, and battery states in real-time.
              </p>
            </div>

            <div className="bg-[#0F1E36] border border-slate-800 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-3xl font-black text-white">256-Bit</h3>
              <p className="text-xs font-bold text-purple-400 mt-1 uppercase tracking-wider">ePOD Cryptographic Proof</p>
              <p className="text-xs text-slate-400 mt-2">
                Customer delivery signatures, photos, and timestamps are digitally hashed for dispute prevention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RouteStackLayout>
  )
}

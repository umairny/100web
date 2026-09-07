import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RouteStackLayout } from './RouteStackLayout'
import { 
  Truck, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Check, 
  Sliders, 
  Clock, 
  Fuel, 
  Navigation,
  Send
} from 'lucide-react'

export default function RouteStackTrial() {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState({
    companyName: 'Metro Express Logistics',
    workEmail: 'dispatch@metroexpress.io',
    depotCity: 'Chicago Central Depot',
    vehicleCount: '12',
    primaryVehicle: 'van',
    avoidTolls: false,
    maxHours: '8'
  })

  const [isDispatched, setIsDispatched] = useState(false)
  const [isSimulating, setIsSimulating] = useState(false)

  const handleSimulateDispatch = () => {
    setIsSimulating(true)
    setTimeout(() => {
      setIsSimulating(false)
      setIsDispatched(true)
    }, 1500)
  }

  return (
    <RouteStackLayout>
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#0B1528] via-[#0F1E36] to-[#0B1528] min-h-screen text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-4 border border-sky-500/30">
              <Sparkles className="w-4 h-4 text-sky-400" />
              14-Day Free Fleet Sandbox • No Credit Card Required
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              Start Your Live Dispatch Sandbox
            </h1>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
              Configure your depot, specify vehicle constraints, and test live AI route optimization in under 2 minutes.
            </p>
          </div>

          {/* Stepper Bar */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-lg mx-auto relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -z-0 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-sky-500 -z-0 -translate-y-1/2 transition-all duration-300"
                style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
              />

              {[
                { step: 1, label: 'Depot & Fleet' },
                { step: 2, label: 'Constraints' },
                { step: 3, label: 'Dispatch Live' }
              ].map(item => {
                const isPassed = currentStep > item.step
                const isCurrent = currentStep === item.step
                return (
                  <div key={item.step} className="relative z-10 flex flex-col items-center">
                    <button
                      onClick={() => setCurrentStep(item.step)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-sm ${
                        isPassed
                          ? 'bg-sky-600 text-white'
                          : isCurrent
                          ? 'bg-sky-500 text-slate-950 ring-4 ring-sky-500/20'
                          : 'bg-slate-900 text-slate-500 border border-slate-700'
                      }`}
                    >
                      {isPassed ? '✓' : item.step}
                    </button>
                    <span className={`text-[11px] font-semibold mt-2 ${isCurrent ? 'text-sky-400' : 'text-slate-400'}`}>
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-[#0F1E36] rounded-3xl p-8 sm:p-10 border border-slate-700/80 shadow-2xl">
            {/* Step 1: Depot & Fleet */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Step 1: Fleet Profile &amp; Primary Depot</h3>
                <p className="text-xs text-slate-400 mb-6">Enter your logistics team details to provision your dedicated dispatch portal.</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                      Logistics / Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500"
                      placeholder="e.g. Acme Freight & Logistics"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                        Dispatcher Work Email
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                        Central Hub / Depot Address
                      </label>
                      <input
                        type="text"
                        value={formData.depotCity}
                        onChange={(e) => setFormData({ ...formData, depotCity: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500"
                        placeholder="e.g. 500 Industrial Pkwy, Chicago, IL"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                      Fleet Size
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: '5', label: '1 - 5 Vehicles' },
                        { id: '15', label: '6 - 20 Vehicles' },
                        { id: '50', label: '21 - 50 Vehicles' },
                        { id: '100', label: '50+ Enterprise' }
                      ].map(f => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, vehicleCount: f.id })}
                          className={`p-3 text-xs font-bold rounded-xl border text-center transition-all ${
                            formData.vehicleCount === f.id
                              ? 'bg-sky-500/20 border-sky-500 text-sky-400 shadow-sm'
                              : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30"
                  >
                    Continue to Constraints <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Routing Constraints */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Step 2: Vehicle Constraints &amp; Rules</h3>
                <p className="text-xs text-slate-400 mb-6">Set operating parameters to train the AI route sequencing algorithm.</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">
                      Primary Vehicle Type
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'van', label: 'Delivery Sprinter Van' },
                        { id: 'box', label: '26ft Box Truck' },
                        { id: 'semi', label: 'Heavy Semi Tractor' }
                      ].map(v => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, primaryVehicle: v.id })}
                          className={`p-3 text-xs font-bold rounded-xl border text-center transition-all ${
                            formData.primaryVehicle === v.id
                              ? 'bg-sky-500/20 border-sky-500 text-sky-400'
                              : 'bg-slate-900 border-slate-700 text-slate-400'
                          }`}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Avoid Toll Roads &amp; High-Fee Bridges</div>
                      <div className="text-[11px] text-slate-400">Reduce toll expenses across regional highways</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, avoidTolls: !formData.avoidTolls })}
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${formData.avoidTolls ? 'bg-sky-500' : 'bg-slate-700'}`}
                    >
                      <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${formData.avoidTolls ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 rounded-full text-slate-400 font-semibold text-xs hover:bg-slate-800"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30"
                  >
                    Generate Live Route Plan <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Dispatch Live Preview */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Step 3: Test Dispatch Simulation</h3>
                    <p className="text-xs text-slate-400 mt-1">Simulating 15 test drop points for {formData.companyName}.</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
                    Algorithm Ready
                  </span>
                </div>

                {/* Simulated Dispatch Box */}
                <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-xs font-mono mb-6 space-y-2">
                  <div className="flex justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span>Depot Center</span>
                    <span className="text-white">{formData.depotCity}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span>Fleet Active</span>
                    <span className="text-sky-400">{formData.vehicleCount} Vehicles Allocated</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Mileage Saving</span>
                    <span className="text-emerald-400 font-bold">-28.4% (-48 miles)</span>
                  </div>
                </div>

                <div className="bg-[#0A1220] border border-slate-800 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Send className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Driver App Dispatch Ping</div>
                      <div className="text-[11px] text-slate-400">Send test manifests to {formData.workEmail}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateDispatch}
                    disabled={isSimulating || isDispatched}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      isDispatched
                        ? 'bg-emerald-600 text-white'
                        : isSimulating
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
                    }`}
                  >
                    {isDispatched ? '✓ Manifest Dispatched' : isSimulating ? 'Optimizing Routes...' : 'Dispatch Test Manifest'}
                  </button>
                </div>

                {isDispatched && (
                  <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Success!</strong> Manifest sequenced and dispatched. Live GPS tracking active on virtual driver units.</span>
                  </div>
                )}

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 rounded-full text-slate-400 font-semibold text-xs hover:bg-slate-800"
                  >
                    Back
                  </button>
                  <Link
                    to="/saas/routestack-logistics"
                    className="px-6 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30"
                  >
                    Enter Live Logistics Hub <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </RouteStackLayout>
  )
}

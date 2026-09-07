import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RouteStackLayout } from './RouteStackLayout'
import { 
  Truck, 
  Navigation, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Play, 
  Sliders, 
  FileCheck, 
  Camera, 
  Barcode, 
  PenTool, 
  Check, 
  Clock, 
  Fuel, 
  Zap,
  Plus,
  Trash2
} from 'lucide-react'

interface DeliveryStop {
  id: number
  title: string
  address: string
  timeWindow: string
  packages: number
  weightLbs: number
  completed?: boolean
}

export default function RouteStackFeatures() {
  // Simulator State: Route Optimizer
  const [vehicleType, setVehicleType] = useState<'van' | 'box-truck' | 'semi'>('van')
  const [avoidTolls, setAvoidTolls] = useState(false)
  const [isOptimized, setIsOptimized] = useState(true)
  const [isCalculating, setIsCalculating] = useState(false)

  const [stops, setStops] = useState<DeliveryStop[]>([
    { id: 1, title: "Downtown Grocery Hub", address: "404 Market St, Suite A", timeWindow: "08:00 - 10:00 AM", packages: 14, weightLbs: 210 },
    { id: 2, title: "Metro Health Center", address: "1200 Highland Ave", timeWindow: "09:30 - 11:30 AM", packages: 8, weightLbs: 95 },
    { id: 3, title: "Harbor Logistics Terminal", address: "88 Ocean Pier Rd", timeWindow: "11:00 - 01:00 PM", packages: 26, weightLbs: 540 },
    { id: 4, title: "North Suburb Retail", address: "642 Pine Ridge Blvd", timeWindow: "01:30 - 03:30 PM", packages: 12, weightLbs: 160 },
    { id: 5, title: "Apex Tech Campus", address: "100 Innovation Way", timeWindow: "03:00 - 05:00 PM", packages: 19, weightLbs: 280 },
  ])

  const [newStopTitle, setNewStopTitle] = useState('')

  const handleAddStop = () => {
    if (!newStopTitle) return
    const newId = stops.length + 1
    setStops(prev => [
      ...prev,
      {
        id: newId,
        title: newStopTitle,
        address: `${100 + newId * 45} Industrial Pkwy`,
        timeWindow: "02:00 - 04:00 PM",
        packages: 10,
        weightLbs: 150
      }
    ])
    setNewStopTitle('')
    setIsOptimized(false)
  }

  const handleRemoveStop = (id: number) => {
    setStops(prev => prev.filter(s => s.id !== id))
    setIsOptimized(false)
  }

  const handleRunOptimizer = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setIsCalculating(false)
      setIsOptimized(true)
    }, 1200)
  }

  // Interactive ePOD Signature Pad Canvas State
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  const [epodVerified, setEpodVerified] = useState(false)
  const [scannedBarcode, setScannedBarcode] = useState("PKG-889104-USA")
  const [photoUploaded, setPhotoUploaded] = useState(true)

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    setIsDrawing(true)
    setHasSignature(true)
    const rect = canvas.getBoundingClientRect()
    ctx.beginPath()
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const rect = canvas.getBoundingClientRect()
    ctx.lineWidth = 2.5
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#0F172A'
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
    setEpodVerified(false)
  }

  const handleGenerateEpod = () => {
    setEpodVerified(true)
  }

  // Savings Metrics Calculations
  const rawMiles = 64 + stops.length * 8
  const optimizedMiles = Math.round(rawMiles * 0.68)
  const savedMiles = rawMiles - optimizedMiles
  const rawTimeMins = 180 + stops.length * 20
  const optimizedTimeMins = Math.round(rawTimeMins * 0.72)
  const savedTimeMins = rawTimeMins - optimizedTimeMins
  const fuelSavingsUsd = Math.round(savedMiles * 0.65)

  return (
    <RouteStackLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0B1528] via-[#0F1E36] to-[#0B1528] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-500/30">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Interactive Fleet Engineering Lab
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto">
            Dynamic Route Optimizer &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400">
              Digital ePOD Studio
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Test the RouteStack algorithms in real time. Add delivery destinations, recalculate multi-vehicle routes, and experience our paperless proof-of-delivery workflow.
          </p>
        </div>
      </section>

      {/* Interactive Tool #1: Multi-Stop Route Optimizer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
              Simulator 01
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Multi-Stop AI Route Sequencing Engine
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Solve the Travelling Salesperson Problem (TSP) with strict vehicle capacity, customer delivery windows, and traffic constraints in &lt;200ms.
            </p>
          </div>

          {/* Simulator Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Fleet Controls & Stop Manager (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-sky-700" /> Dispatch Constraints
                </span>
                <span className="text-xs font-mono text-slate-500">Stops: {stops.length}</span>
              </h3>

              {/* Vehicle Type Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Assigned Vehicle Class
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'van', label: 'Cargo Van', cap: '1,500 lbs' },
                    { id: 'box-truck', label: 'Box Truck', cap: '5,000 lbs' },
                    { id: 'semi', label: 'Semi-Truck', cap: '24,000 lbs' }
                  ].map(v => (
                    <button
                      key={v.id}
                      onClick={() => setVehicleType(v.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        vehicleType === v.id
                          ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{v.label}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{v.cap}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Avoid Tolls Toggle */}
              <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200 mb-6">
                <div>
                  <div className="text-xs font-bold text-slate-800">Avoid Toll Highways</div>
                  <div className="text-[11px] text-slate-500">Prioritize non-toll secondary freeways</div>
                </div>
                <button
                  onClick={() => {
                    setAvoidTolls(!avoidTolls)
                    setIsOptimized(false)
                  }}
                  className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${avoidTolls ? 'bg-sky-600' : 'bg-slate-300'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${avoidTolls ? 'translate-x-6' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Add Stop Input */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Add Delivery Destination
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Westside Distribution Point"
                    value={newStopTitle}
                    onChange={(e) => setNewStopTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddStop()}
                    className="flex-1 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <button
                    onClick={handleAddStop}
                    className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </div>

              {/* Stops List */}
              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {stops.map((stop, idx) => (
                  <div 
                    key={stop.id}
                    className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-bold text-slate-900">{stop.title}</div>
                        <div className="text-[10px] text-slate-500">{stop.timeWindow} • {stop.weightLbs} lbs</div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveStop(stop.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      title="Remove stop"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Run Optimization Button */}
              <button
                onClick={handleRunOptimizer}
                disabled={isCalculating}
                className="mt-6 w-full py-3.5 px-6 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-600/30 active:scale-95 flex items-center justify-center gap-2"
              >
                {isCalculating ? (
                  <>
                    <RotateCcw className="w-4 h-4 animate-spin" /> Recalculating Matrix...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Run AI Route Optimization
                  </>
                )}
              </button>
            </div>

            {/* Right Column: Dynamic Route Results & Visual Matrix (7 cols) */}
            <div className="lg:col-span-7 bg-[#0B1528] rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl">
              {/* Header Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-sky-400" /> Dispatched Route Plan
                  </h4>
                  <span className="text-xs text-slate-400">
                    Depot: Central Logistics Terminal 04
                  </span>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 ${
                  isOptimized ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {isOptimized ? '✓ Algorithm Optimized' : '⚠ Custom Sequence'}
                </div>
              </div>

              {/* Key Impact ROI Metric Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-[#0F1E36] p-4 rounded-2xl border border-slate-800">
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" /> Total Miles
                  </div>
                  <div className="text-2xl font-black text-white mt-1">
                    {isOptimized ? optimizedMiles : rawMiles} <span className="text-xs font-normal text-slate-400">mi</span>
                  </div>
                  <div className="text-[10px] font-bold text-emerald-400 mt-1">
                    {isOptimized ? `-${savedMiles} mi saved (-32%)` : 'Standard route'}
                  </div>
                </div>

                <div className="bg-[#0F1E36] p-4 rounded-2xl border border-slate-800">
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> Drive Time
                  </div>
                  <div className="text-2xl font-black text-white mt-1">
                    {Math.floor((isOptimized ? optimizedTimeMins : rawTimeMins) / 60)}h {(isOptimized ? optimizedTimeMins : rawTimeMins) % 60}m
                  </div>
                  <div className="text-[10px] font-bold text-emerald-400 mt-1">
                    {isOptimized ? `-${savedTimeMins} mins saved` : 'Unsequenced'}
                  </div>
                </div>

                <div className="bg-[#0F1E36] p-4 rounded-2xl border border-slate-800">
                  <div className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                    <Fuel className="w-3.5 h-3.5 text-emerald-400" /> Fuel Saved
                  </div>
                  <div className="text-2xl font-black text-emerald-400 mt-1">
                    ${isOptimized ? fuelSavingsUsd : 0}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 mt-1">
                    Per vehicle/shift
                  </div>
                </div>
              </div>

              {/* Turn-by-Turn Waypoint Sequence */}
              <div className="bg-[#0A1220] rounded-2xl p-5 border border-slate-800 mb-6">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">
                  Optimal Stop Sequence (Turn-by-Turn)
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                      <span>START: Central Hub Depot</span>
                    </span>
                    <span>08:00 AM Departure</span>
                  </div>

                  {stops.map((stop, i) => (
                    <div 
                      key={stop.id}
                      className="flex items-center justify-between p-2.5 bg-[#0F1E36] rounded-xl border border-slate-700/80 text-white"
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-sky-500 text-slate-950 font-black text-[10px] flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="font-bold">{stop.title}</span>
                      </span>
                      <span className="text-emerald-400 font-bold text-[11px]">
                        ETA: 0{8 + i}:{(i * 24) % 60 < 10 ? '0' : ''}{(i * 24) % 60} AM
                      </span>
                    </div>
                  ))}

                  <div className="flex items-center justify-between p-2.5 bg-slate-900/80 rounded-xl border border-slate-800 text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span>FINISH: Return to Depot</span>
                    </span>
                    <span>Shift Completed ✓</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">
                  Ready to dispatch to driver smartphone?
                </span>
                <Link
                  to="/saas/routestack-logistics/trial"
                  className="px-5 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Dispatch to Mobile App →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool #2: Digital ePOD (Proof of Delivery) Studio */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Simulator 02
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Interactive Digital ePOD Canvas
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Try the paperless proof of delivery experience. Draw customer signatures on the digital canvas, verify barcode scans, and generate instant legal delivery certificates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Signature & Confirmation Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-sky-700" />
                    <h3 className="font-bold text-slate-900 text-base">Customer Signature Pad</h3>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    Order #RS-77291
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-3">
                  Sign below with your mouse or touchscreen to simulate recipient sign-off:
                </p>

                {/* HTML5 Canvas Signature Pad */}
                <div className="border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 relative overflow-hidden mb-3">
                  <canvas
                    ref={canvasRef}
                    width={520}
                    height={160}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="w-full h-40 cursor-crosshair touch-none"
                  />
                  {!hasSignature && (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-medium pointer-events-none select-none">
                      ✍ Draw signature here...
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs mb-6">
                  <button
                    onClick={clearSignature}
                    className="text-slate-500 hover:text-slate-800 underline font-medium"
                  >
                    Clear Signature Pad
                  </button>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    {hasSignature ? "Signature captured ✓" : "Awaiting signature"}
                  </span>
                </div>

                {/* Additional ePOD Verification Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <Barcode className="w-5 h-5 text-sky-700 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-800">Barcode Scan</div>
                      <div className="text-[10px] text-slate-500 font-mono">{scannedBarcode}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <Camera className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-800">Photo Proof</div>
                      <div className="text-[10px] text-emerald-700 font-bold">Front Porch Drop ✓</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Timestamp: <strong className="text-slate-800 font-mono">14:48:22 EST</strong>
                </span>
                <button
                  onClick={handleGenerateEpod}
                  className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2"
                >
                  <FileCheck className="w-4 h-4" /> Issue Signed ePOD
                </button>
              </div>
            </div>

            {/* Generated ePOD Receipt Output (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Live ePOD Certificate
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    STATUS: COMPLETED
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 text-xs space-y-3 font-mono">
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Consignment</span>
                    <span className="font-bold text-slate-800">RS-99214-NYC</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Carrier</span>
                    <span className="font-bold text-slate-800">RouteStack Fleet #12</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Driver</span>
                    <span className="font-bold text-slate-800">D. Rodriguez</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">GPS Coordinates</span>
                    <span className="font-bold text-slate-800">40.7128° N, 74.0060° W</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Recipient Verification</span>
                    <span className="font-bold text-emerald-700">Digital Signature Valid</span>
                  </div>
                </div>

                {epodVerified && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>ePOD dispatched to customer inbox and archived to cloud ERP.</span>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <Link
                  to="/saas/routestack-logistics/trial"
                  className="w-full block py-3 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Start Free 14-Day Fleet Sandbox
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RouteStackLayout>
  )
}

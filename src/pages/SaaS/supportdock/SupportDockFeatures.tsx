import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SupportDockLayout } from './SupportDockLayout'

export function SupportDockFeatures() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/supportdock') ? '/supportdock' : '/saas/supportdock-ai'

  // Interactive Live AI Chat / Ticket Resolution Simulator
  const [activeScenario, setActiveScenario] = useState<'order' | 'billing' | 'churn'>('order')

  const scenarios = {
    order: {
      channel: 'Shopify / Live Chat',
      customer: 'Sarah M.',
      inquiry: 'Hi, where is my order #9482? I ordered 3 days ago and the tracking link is showing pending.',
      sentiment: 'Neutral / Impatient (Score: 62)',
      resolutionType: 'Autonomous Resolution (0 Human Touch)',
      aiResponse: 'Hi Sarah! I checked order #9482. It was dispatched this morning via FedEx (Tracking: 7489-3829-1029). Delivery is estimated for tomorrow, Thursday by 4:00 PM. Would you like me to SMS you updates?',
      latency: '0.4 seconds',
      accuracy: '99.8%',
    },
    billing: {
      channel: 'Email / Zendesk',
      customer: 'David K., Finance Lead',
      inquiry: 'Can we switch our 15 user seats from monthly to annual billing to take advantage of the 20% discount?',
      sentiment: 'Positive / High Intent (Score: 94)',
      resolutionType: 'Autonomous Quoted Invoice Prepared',
      aiResponse: 'Hello David! Absolutely. Switching your 15 seats to annual saves $450/year. I generated your prorated annual renewal quote ($1,788/yr) and sent an approval link to your primary billing email.',
      latency: '0.6 seconds',
      accuracy: '100%',
    },
    churn: {
      channel: 'WhatsApp',
      customer: 'Elena R., Enterprise Ops',
      inquiry: 'Our export tool is throwing 502 errors during month-end audit. If this isn\'t fixed in 30 mins we will be forced to cancel our subscription.',
      sentiment: 'Negative / Urgent Churn Risk (Score: 18)',
      resolutionType: 'Smart Human Handoff (Tier 3 Escaped)',
      aiResponse: 'Elena, I understand this is critical for your month-end audit. I have immediately flagged this as P1 Urgent, attached your telemetry logs, and paged Senior On-Call Engineer Marcus on Slack. Standby for live voice transfer.',
      latency: '0.2 seconds',
      accuracy: 'Smart Escalate ✓',
    },
  }

  const current = scenarios[activeScenario]

  return (
    <SupportDockLayout>
      {/* Header */}
      <section className="bg-[#E8FBF4] py-16 md:py-24 text-center border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
            AI Support Capabilities
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Autonomous Customer Resolution at Scale.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Experience how SupportDock AI intercepts multi-channel support tickets, determines user sentiment, and resolves issues in milliseconds.
          </p>
        </div>
      </section>

      {/* Interactive Live AI Support Ticket Simulator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] border-2 border-emerald-300 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Interactive Simulator
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-slate-900">
                Test Inbound Ticket Autonomous Triage
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Select a real-world scenario to see SupportDock AI's analysis and execution in real time.
              </p>
            </div>

            {/* Scenario Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { key: 'order', label: '1. E-Commerce Tracking Query' },
                { key: 'billing', label: '2. SaaS Billing Upgrade Request' },
                { key: 'churn', label: '3. Urgent Bug & Churn Risk' },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActiveScenario(s.key as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeScenario === s.key
                      ? 'bg-[#10B981] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Live Chat Box Simulation */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm max-w-3xl mx-auto space-y-6">
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 text-xs">
                <span className="font-bold text-slate-800">
                  Channel: <span className="text-[#10B981]">{current.channel}</span> · User: {current.customer}
                </span>
                <span className="font-bold text-slate-500">
                  Latency: <span className="text-emerald-600">{current.latency}</span>
                </span>
              </div>

              {/* Inbound Customer Bubble */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                  👤
                </div>
                <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-none p-4 text-xs leading-relaxed max-w-lg">
                  <p className="font-bold text-slate-500 text-[10px] mb-1">Incoming Query</p>
                  "{current.inquiry}"
                </div>
              </div>

              {/* AI Real-time Triage Insight Tag */}
              <div className="my-2 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                  <span>🤖</span> Sentiment: {current.sentiment}
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 uppercase">
                  {current.resolutionType}
                </span>
              </div>

              {/* Robot Autonomous Response */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-[#0F2942] text-white rounded-2xl rounded-tr-none p-4 text-xs leading-relaxed max-w-lg">
                  <p className="font-bold text-emerald-400 text-[10px] mb-1 flex items-center gap-1">
                    <span>⚡ SupportDock AI</span> · Autonomous Output
                  </p>
                  "{current.aiResponse}"
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                  🤖
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Confidence Rating: {current.accuracy}</span>
                <Link
                  to={`${basePath}/pricing`}
                  className="font-bold text-[#10B981] hover:underline"
                >
                  Deploy this workflow to your stack →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Detailed Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center text-2xl mb-4">
                🌐
              </div>
              <h3 className="text-lg font-black text-slate-900">Omnichannel Unification</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Connect Zendesk, Gmail, Shopify chat, WhatsApp, and social inboxes. Manage your entire customer experience in one cohesive feed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center text-2xl mb-4">
                🧠
              </div>
              <h3 className="text-lg font-black text-slate-900">Contextual Brand Memory</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                SupportDock AI continuously reads your past ticket history, internal knowledge base, and return policies so it speaks with exact company tone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-lg font-black text-slate-900">Enterprise Hallucination Guardrails</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Strict semantic safety boundaries prevent generative hallucinations. If an answer cannot be verified with 95%+ confidence, it routes to a human.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SupportDockLayout>
  )
}

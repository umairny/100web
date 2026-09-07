import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SupportDockLayout } from './SupportDockLayout'

export function SupportDockBlog() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/supportdock') ? '/supportdock' : '/saas/supportdock-ai'

  const posts = [
    {
      title: 'How E-Commerce Brands Cut First Response Time from 4 Hours to 12 Seconds',
      category: 'Case Study',
      date: 'September 2, 2026',
      readTime: '4 min read',
      excerpt: 'Learn how apparel retailer Solstice automated 72% of "Where is my order?" inquiries during Black Friday while keeping CSAT above 96%.',
    },
    {
      title: 'The Smart Handoff: Why Human-in-the-Loop AI Is the Secret to 98% CSAT',
      category: 'Engineering & AI',
      date: 'August 28, 2026',
      readTime: '6 min read',
      excerpt: 'Autonomous resolution is powerful, but knowing precisely when to escalate to an experienced agent is what builds customer trust for life.',
    },
    {
      title: 'The 2026 State of Customer Service Automation Benchmark Report',
      category: 'Research Report',
      date: 'August 14, 2026',
      readTime: '8 min read',
      excerpt: 'Analyzing telemetry from 4.2M support tickets across SaaS, fintech, and DTC brands to benchmark resolution times and ticket deflection.',
    },
  ]

  return (
    <SupportDockLayout>
      {/* Header */}
      <section className="bg-[#E8FBF4] py-16 md:py-24 text-center border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
            Insights &amp; Guides
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            The SupportDock AI Blog.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Practical strategies, data benchmarks, and guides for scaling modern customer support teams.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((p, idx) => (
              <article
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mt-4 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-black text-slate-900">Ready to automate your support queues?</h3>
            <p className="text-xs text-slate-500 mt-2">
              Start your free 14-day trial in 2 minutes with pre-built templates for Shopify and Zendesk.
            </p>
            <div className="mt-6">
              <Link
                to={`${basePath}/trial`}
                className="inline-flex px-6 py-3 rounded-full bg-[#10B981] text-white text-xs font-bold hover:bg-[#059669] transition shadow-md"
              >
                Start Free 14-Day Trial →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SupportDockLayout>
  )
}

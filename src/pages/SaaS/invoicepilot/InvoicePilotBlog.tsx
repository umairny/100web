import React from "react";
import { Link } from "react-router-dom";
import { InvoicePilotLayout } from "./InvoicePilotLayout";

export function InvoicePilotBlog() {
  const posts = [
    {
      id: "tech-solutions-case-study",
      title: "Case Study: How Tech Solutions Scaled from $50k to $400k MRR Without a Full-Time Billing Hire",
      category: "Customer Story",
      readTime: "4 min read",
      date: "Sep 2026",
      summary: "Discover how CEO Sarah L. leveraged automated smart dunning to recover $14,800 monthly in soft credit card declines.",
      author: "Sarah Lee, CEO @ Tech Solutions",
    },
    {
      id: "2026-saas-dunning-benchmarks",
      title: "2026 B2B SaaS Dunning Report: Why 4:15 AM is the Golden Window for Payment Retries",
      category: "Data & Research",
      readTime: "6 min read",
      date: "Aug 2026",
      summary: "We analyzed 1.4 million recurring billing transactions across 300+ SaaS platforms to find the highest-converting retry windows.",
      author: "InvoicePilot Data Lab",
    },
    {
      id: "nexus-and-vat-guide",
      title: "The Zero-Stress Guide to Global SaaS Sales Tax, VAT, and Economic Nexus in 2026",
      category: "Compliance & Tax",
      readTime: "5 min read",
      date: "Jul 2026",
      summary: "Understand state-by-state economic thresholds and how automated rooftop tax engines eliminate compliance liability.",
      author: "Marcus Chen, VP of Finance",
    },
  ];

  return (
    <InvoicePilotLayout>
      <section className="bg-gradient-to-b from-sky-50/60 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Insights &amp; Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Subscription Economics &amp; Billing Best Practices
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            Practical strategies, data benchmarks, and customer stories to help you optimize MRR retention.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-3">
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{post.author}</span>
                  <span className="text-emerald-600 font-bold">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InvoicePilotLayout>
  );
}

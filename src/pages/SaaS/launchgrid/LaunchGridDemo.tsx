import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LaunchGridLayout } from "./LaunchGridLayout";

export function LaunchGridDemo() {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [booked, setBooked] = useState(false);
  const [demoName, setDemoName] = useState("");
  const [demoEmail, setDemoEmail] = useState("");
  const [demoTeamSize, setDemoTeamSize] = useState("10-50");

  const chapters = [
    {
      title: "01. Backlog & Sprint Planning",
      duration: "2:15",
      desc: "Watch how tasks move from roadmap ideation to prioritized 2-week sprints with velocity estimates.",
      img: "/images/saas/launchgrid/feature-kanban-plan.svg",
    },
    {
      title: "02. Real-Time Collaboration & Mentions",
      duration: "1:45",
      desc: "See threaded comments, live document co-editing, and instant Slack notifications in action.",
      img: "/images/saas/launchgrid/feature-collaboration.svg",
    },
    {
      title: "03. If-This-Then-That Automation",
      duration: "2:30",
      desc: "Learn how to build no-code trigger-action recipes that alert on-call leads and sync Jira issues.",
      img: "/images/saas/launchgrid/feature-automation.svg",
    },
    {
      title: "04. Burn-Down Velocity Analytics",
      duration: "1:55",
      desc: "Explore resource allocation heatmaps and predictive delivery milestones.",
      img: "/images/saas/launchgrid/feature-analytics.svg",
    },
  ];

  const handleBookDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoEmail) return;
    setBooked(true);
  };

  return (
    <LaunchGridLayout>
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Guided Platform Tour
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            See LaunchGrid PM in Action
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            Take a 5-minute interactive tour or schedule a personalized walkthrough with a product architect.
          </p>
        </div>
      </section>

      {/* Interactive Tour Player Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tour Chapters Navigation (Left) */}
            <div className="lg:col-span-5 space-y-3">
              <h2 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-wide">
                Tour Chapters
              </h2>
              {chapters.map((ch, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedChapter(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedChapter === idx
                      ? "bg-blue-50/80 border-blue-400 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-slate-900 text-sm">{ch.title}</span>
                    <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {ch.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>

            {/* Visual Screen Mockup (Right) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-800">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-slate-300">
                      demo_preview.mp4 — {chapters[selectedChapter].title}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[11px] animate-pulse">
                    ● PLAYING
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
                  <img
                    src={chapters[selectedChapter].img}
                    alt={chapters[selectedChapter].title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Active Feature
                      </div>
                      <div className="text-xl font-bold">{chapters[selectedChapter].title}</div>
                    </div>
                  </div>
                </div>

                {/* Video controls simulator */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
                    >
                      ▶
                    </button>
                    <span className="font-mono">0:45 / {chapters[selectedChapter].duration}</span>
                  </div>
                  <div className="flex-1 max-w-xs mx-4 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-2/5 rounded-full" />
                  </div>
                  <span className="text-slate-400">1080p HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book 1-on-1 Demo Scheduler */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Want a Personalized Walkthrough?
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Schedule a 20-minute tailored deep dive with one of our solution architects.
          </p>

          {booked ? (
            <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-bold">
              ✓ Demo Scheduled! We sent calendar invite details to {demoEmail}.
            </div>
          ) : (
            <form onSubmit={handleBookDemo} className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 text-left space-y-4 shadow-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                  placeholder="Sarah Lee"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  placeholder="sarah@soylenttech.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Team Size</label>
                <select
                  value={demoTeamSize}
                  onChange={(e) => setDemoTeamSize(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-blue-500 bg-white"
                >
                  <option value="1-10">1 - 10 members</option>
                  <option value="10-50">10 - 50 members</option>
                  <option value="50-200">50 - 200 members</option>
                  <option value="200+">200+ enterprise members</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
              >
                Schedule My 20-Min Demo
              </button>
            </form>
          )}
        </div>
      </section>
    </LaunchGridLayout>
  );
}

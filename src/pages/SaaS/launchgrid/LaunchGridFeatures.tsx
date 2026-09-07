import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LaunchGridLayout } from "./LaunchGridLayout";

interface TaskItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  assignee: string;
  assigneeColor: string;
  column: "backlog" | "inProgress" | "review" | "done";
  points: number;
}

const initialTasks: TaskItem[] = [
  {
    id: "TASK-101",
    title: "Customer Journey Mapping",
    tag: "RESEARCH",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    assignee: "SL",
    assigneeColor: "bg-blue-200 text-blue-800",
    column: "backlog",
    points: 5,
  },
  {
    id: "TASK-102",
    title: "Figma Design System v2.0",
    tag: "DESIGN",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    assignee: "MC",
    assigneeColor: "bg-amber-200 text-amber-800",
    column: "inProgress",
    points: 8,
  },
  {
    id: "TASK-103",
    title: "Gantt Drag & Drop Engine",
    tag: "FRONTEND",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    assignee: "AK",
    assigneeColor: "bg-emerald-200 text-emerald-800",
    column: "inProgress",
    points: 13,
  },
  {
    id: "TASK-104",
    title: "API Sync Webhooks",
    tag: "BACKEND",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    assignee: "DR",
    assigneeColor: "bg-purple-200 text-purple-800",
    column: "review",
    points: 5,
  },
  {
    id: "TASK-105",
    title: "Slack Alert Automation",
    tag: "AUTOMATION",
    tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    assignee: "MC",
    assigneeColor: "bg-rose-200 text-rose-800",
    column: "done",
    points: 3,
  },
];

export function LaunchGridFeatures() {
  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);
  const [activeTab, setActiveTab] = useState<"plan" | "collab" | "analyze" | "automate">("plan");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [automationSlack, setAutomationSlack] = useState(true);
  const [automationJira, setAutomationJira] = useState(true);
  const [automationArchive, setAutomationArchive] = useState(false);

  const moveTask = (taskId: string, targetCol: "backlog" | "inProgress" | "review" | "done") => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, column: targetCol } : t))
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: TaskItem = {
      id: `TASK-${Math.floor(100 + Math.random() * 900)}`,
      title: newTaskTitle.trim(),
      tag: "FEATURE",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      assignee: "ME",
      assigneeColor: "bg-indigo-200 text-indigo-800",
      column: "backlog",
      points: 3,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const columns: Array<{ key: "backlog" | "inProgress" | "review" | "done"; title: string; color: string }> = [
    { key: "backlog", title: "Backlog / Roadmap", color: "border-slate-300" },
    { key: "inProgress", title: "In Progress", color: "border-blue-500" },
    { key: "review", title: "Review & QA", color: "border-amber-500" },
    { key: "done", title: "Done (Resolved)", color: "border-emerald-500" },
  ];

  return (
    <LaunchGridLayout>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Platform Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Built for Velocity without the Chaos
          </h1>
          <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
            Experience our 4 core modules: Plan, Collaborate, Analyze, and Automate — complete with a live sprint simulator below.
          </p>

          {/* Module Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "plan"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              1. Plan &amp; Roadmap
            </button>
            <button
              onClick={() => setActiveTab("collab")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "collab"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              2. Seamless Teamwork
            </button>
            <button
              onClick={() => setActiveTab("analyze")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "analyze"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              3. Data-Driven Decisions
            </button>
            <button
              onClick={() => setActiveTab("automate")}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "automate"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              4. Automate Workflows
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Active Module Deep Dive */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "plan" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Module 01</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2">Visualize Your Vision</h2>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Turn product ideas into structured roadmaps. Use dual Kanban and Gantt timeline perspectives to establish milestones, prevent scope creep, and align every contributor.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Bi-directional sprint backlog prioritization with velocity estimates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Milestone dependencies with automatic critical path calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Cross-functional initiative mapping from leadership goals to pull requests
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/saas/launchgrid/feature-kanban-plan.svg"
                  alt="Visualize Your Vision"
                  className="w-full rounded-2xl shadow-xl border border-slate-200"
                />
              </div>
            </div>
          )}

          {activeTab === "collab" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 02</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2">Seamless Teamwork</h2>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Eliminate fragmented chat tools and endless update meetings. LaunchGrid PM unifies threaded discussions directly inside tasks, with inline document previews and activity feeds.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Threaded contextual comments directly linked to design files and code diffs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Live co-editing project specs and task descriptions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Async standup check-ins that auto-summarize daily progress
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/saas/launchgrid/feature-collaboration.svg"
                  alt="Seamless Teamwork"
                  className="w-full rounded-2xl shadow-xl border border-slate-200"
                />
              </div>
            </div>
          )}

          {activeTab === "analyze" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Module 03</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2">Data-Driven Decisions</h2>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Real-time telemetry on sprint health, team allocation, and forecasted release dates. Never guess whether a milestone is on track again.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Automated burn-down curves based on verified code commits and QA signoffs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Resource allocation heatmaps to spot team burnout early
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Predictive delivery dates powered by historical velocity patterns
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/saas/launchgrid/feature-analytics.svg"
                  alt="Data-Driven Decisions"
                  className="w-full rounded-2xl shadow-xl border border-slate-200"
                />
              </div>
            </div>
          )}

          {activeTab === "automate" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Module 04</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2">Work Smarter, Not Harder</h2>
                <p className="text-slate-600 mt-3 leading-relaxed">
                  Automate the tedious busywork. Set up visual if-this-then-that recipes to alert on call leads, sync statuses to Jira, or ping customer success when a feature deploys.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">✓</span>
                    No-code visual trigger &amp; action canvas with 40+ pre-built recipes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Instant two-way synchronization with Slack, GitHub, and Jira
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">✓</span>
                    Custom webhook execution for internal deployment pipelines
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/saas/launchgrid/feature-automation.svg"
                  alt="Work Smarter, Not Harder"
                  className="w-full rounded-2xl shadow-xl border border-slate-200"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* INTERACTIVE LIVE SPRINT SIMULATOR */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Live Interactive Sandbox
              </span>
              <h2 className="text-3xl font-black text-slate-900 mt-2">
                Try the Sprint Board Simulator
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Click any task arrow to advance it across the sprint pipeline in real time.
              </p>
            </div>

            {/* Inline Add Task Form */}
            <form onSubmit={handleAddTask} className="flex gap-2">
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Add new task title..."
                className="px-4 py-2 rounded-lg border border-slate-300 text-sm focus:border-blue-500 outline-none w-64 bg-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg shadow-sm"
              >
                + Add Task
              </button>
            </form>
          </div>

          {/* Kanban Board Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {columns.map((col) => {
              const colTasks = tasks.filter((t) => t.column === col.key);
              return (
                <div
                  key={col.key}
                  className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm flex flex-col"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="font-bold text-slate-800 text-sm">{col.title}</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">
                      {colTasks.length}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    {colTasks.length === 0 ? (
                      <div className="text-center py-8 text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-lg">
                        Drop or advance tasks here
                      </div>
                    ) : (
                      colTasks.map((task) => (
                        <div
                          key={task.id}
                          className="bg-slate-50/70 hover:bg-white rounded-lg p-3.5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded border ${task.tagColor}`}
                            >
                              {task.tag}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              {task.id}
                            </span>
                          </div>

                          <div className="font-semibold text-slate-900 text-sm mb-3">
                            {task.title}
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`w-5 h-5 rounded-full font-bold text-[9px] flex items-center justify-center ${task.assigneeColor}`}
                              >
                                {task.assignee}
                              </span>
                              <span className="text-slate-400 font-medium">
                                {task.points} pts
                              </span>
                            </div>

                            {/* Move Controls */}
                            <div className="flex items-center gap-1">
                              {col.key !== "backlog" && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (col.key === "inProgress") moveTask(task.id, "backlog");
                                    if (col.key === "review") moveTask(task.id, "inProgress");
                                    if (col.key === "done") moveTask(task.id, "review");
                                  }}
                                  title="Move Left"
                                  className="w-6 h-6 rounded bg-slate-200/70 hover:bg-slate-300 text-slate-600 flex items-center justify-center font-bold text-xs"
                                >
                                  &larr;
                                </button>
                              )}
                              {col.key !== "done" && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (col.key === "backlog") moveTask(task.id, "inProgress");
                                    if (col.key === "inProgress") moveTask(task.id, "review");
                                    if (col.key === "review") moveTask(task.id, "done");
                                  }}
                                  title="Move Right"
                                  className="w-6 h-6 rounded bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-700 flex items-center justify-center font-bold text-xs transition-colors"
                                >
                                  &rarr;
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Automation Controls simulation */}
          <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-4">
              Active Automation Rules in this Simulator:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex items-center gap-3 text-xs font-semibold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={automationSlack}
                  onChange={(e) => setAutomationSlack(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>Auto-ping Slack on &quot;Review&quot; transition</span>
              </label>

              <label className="flex items-center gap-3 text-xs font-semibold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={automationJira}
                  onChange={(e) => setAutomationJira(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>Sync resolved tickets to Jira backlog</span>
              </label>

              <label className="flex items-center gap-3 text-xs font-semibold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={automationArchive}
                  onChange={(e) => setAutomationArchive(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span>Auto-archive tasks completed &gt; 14 days</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black tracking-tight">Ready to ship your next release on time?</h2>
          <p className="mt-3 text-blue-100 text-base max-w-xl mx-auto">
            Set up your custom sprint board in under 2 minutes. Free for 14 days, no credit card required.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/saas/launchgrid-pm/trial"
              className="px-6 py-3 rounded-xl bg-white text-blue-600 font-bold text-sm hover:bg-blue-50 shadow-md transition-all"
            >
              Start Free 14-Day Trial
            </Link>
          </div>
        </div>
      </section>
    </LaunchGridLayout>
  );
}

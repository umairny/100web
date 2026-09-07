import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecruitFlowLayout } from "./RecruitFlowLayout";

interface JobOpening {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Product" | "Marketing" | "Operations";
  location: string;
  type: string;
  salary: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "JOB-1",
    title: "Senior Fullstack Engineer (React & Go)",
    department: "Engineering",
    location: "Remote (US/Canada)",
    type: "Full-Time",
    salary: "$145,000 - $180,000",
  },
  {
    id: "JOB-2",
    title: "Staff Cloud Infrastructure Architect",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-Time",
    salary: "$175,000 - $210,000",
  },
  {
    id: "JOB-3",
    title: "Lead Product Designer (Design Systems)",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$130,000 - $160,000",
  },
  {
    id: "JOB-4",
    title: "Principal Product Manager (ATS Core)",
    department: "Product",
    location: "New York, NY (Hybrid)",
    type: "Full-Time",
    salary: "$160,000 - $195,000",
  },
  {
    id: "JOB-5",
    title: "Growth Marketing Director (B2B SaaS)",
    department: "Marketing",
    location: "Austin, TX (Remote)",
    type: "Full-Time",
    salary: "$140,000 - $175,000",
  },
];

export function RecruitFlowCareers() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [appliedJob, setAppliedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const departments = ["All", "Engineering", "Design", "Product", "Marketing"];

  const filteredJobs = jobOpenings.filter(
    (job) => selectedDept === "All" || job.department === selectedDept
  );

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantEmail) return;
    setSubmitted(true);
  };

  return (
    <RecruitFlowLayout>
      <section className="bg-gradient-to-b from-[#F0F7FF] to-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Candidate Career Portal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Join the RecruitFlow Team
          </h1>
          <p className="text-slate-600 mt-3 text-lg max-w-xl mx-auto">
            This is an interactive preview of the modern, mobile-friendly career portal RecruitFlow generates for your company.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedDept === dept
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">• {job.type}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">{job.title}</h3>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-4">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setAppliedJob(job);
                      setSubmitted(false);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {appliedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="font-black text-slate-900 text-lg mb-1">
              Apply: {appliedJob.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{appliedJob.department} • {appliedJob.location}</p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                  ✓
                </div>
                <div className="text-emerald-900 font-bold text-sm">
                  Application Submitted to Pipeline!
                </div>
                <p className="text-xs text-emerald-800">
                  You can see this candidate appear in the &quot;Sourced &amp; Applied&quot; column in the Pipeline Simulator.
                </p>
                <button
                  type="button"
                  onClick={() => setAppliedJob(null)}
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Jordan Vance"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="jordan@example.com"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-xs outline-none focus:border-blue-600"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-center text-xs text-slate-500">
                  📁 Attach Resume / CV (PDF or Word)
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setAppliedJob(null)}
                    className="flex-1 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </RecruitFlowLayout>
  );
}

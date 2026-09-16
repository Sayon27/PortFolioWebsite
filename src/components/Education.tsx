import React from "react";
import { GraduationCapIcon, MapPinIcon } from "./icons/Icons";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-24 border-t border-zinc-200 dark:border-white/[0.06] relative scroll-mt-16"
      aria-label="Education"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
            <span>04</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-sans">
            Academic foundation &amp; studies.
          </h2>
        </div>

        {/* Education Highlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/[0.16] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-sky-500/[0.04] dark:bg-sky-500/[0.03] blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-zinc-100 dark:bg-white/[0.04] text-sky-600 dark:text-sky-400 border border-zinc-200 dark:border-white/[0.08] shrink-0 mt-1">
                <GraduationCapIcon size={24} />
              </div>
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-400/20 text-xs font-mono font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                  Currently in 5th Semester
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  B.Tech in Computer Science and Engineering (Data Science)
                </h3>
                <p className="text-base text-zinc-700 dark:text-zinc-300 font-medium">
                  Brainware University
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 pt-1">
                  <MapPinIcon size={14} className="text-zinc-500" />
                  <span>Barasat, Kolkata, West Bengal</span>
                </div>
              </div>
            </div>

            {/* University Tag / Status */}
            <div className="md:text-right shrink-0">
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 block">
                Undergraduate Degree
              </span>
              <span className="font-mono text-xs text-sky-600 dark:text-sky-400 mt-1 block font-medium">
                Data Science Specialization
              </span>
            </div>
          </div>

          {/* Academic Focus Areas */}
          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/[0.06]">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 font-semibold">
              Core Academic Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Database Management Systems (DBMS)",
                "Object-Oriented Programming (OOP)",
                "Operating Systems",
                "Computer Networks",
                "Probability & Statistics for Data Science",
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

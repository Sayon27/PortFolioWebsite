import React from "react";

const FOCUS_AREAS = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    detail: "Building end-to-end applications with clean client-server architecture and responsive UX.",
  },
  {
    id: "02",
    title: "React & Next.js",
    detail: "Mastering App Router, React Server Components, state management, and modern layouts.",
  },
  {
    id: "03",
    title: "TypeScript",
    detail: "Writing strictly typed, maintainable, and self-documenting code across web projects.",
  },
  {
    id: "04",
    title: "Data Structures & Algorithms",
    detail: "Practicing problem solving, tree/graph traversals, recursion, and algorithmic efficiency.",
  },
  {
    id: "05",
    title: "Database Systems",
    detail: "Deepening knowledge of relational data modeling, schema design, and SQL querying.",
  },
  {
    id: "06",
    title: "Strong CS Fundamentals",
    detail: "Solidifying OOP design principles, OS fundamentals, and core software engineering concepts.",
  },
];

export default function Focus() {
  return (
    <section
      className="py-16 border-t border-zinc-200 dark:border-white/[0.06] relative"
      aria-label="Current Focus Areas"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
              <span>Active Trajectory</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white mt-1">
              Current Focus
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 font-mono max-w-sm">
            What I am actively studying, practicing, and building with right now.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {FOCUS_AREAS.map((item) => (
            <div
              key={item.id}
              className="group p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/[0.15] hover:bg-zinc-50/70 dark:hover:bg-white/[0.03] shadow-sm shadow-zinc-200/30 dark:shadow-none transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors font-medium">
                    {item.id}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600 group-hover:bg-sky-500 transition-colors"></span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

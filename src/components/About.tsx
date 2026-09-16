import React from "react";
import { CodeIcon, TerminalIcon, DatabaseIcon } from "./icons/Icons";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 border-t border-zinc-200 dark:border-white/[0.06] relative scroll-mt-16"
      aria-label="About Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
            <span>01</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-sans">
            Curious student, active learner, and builder.
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am currently in my <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">5th semester</strong> pursuing a{" "}
              <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">B.Tech in Computer Science and Engineering (Data Science)</strong> at{" "}
              <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">Brainware University</strong>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              My journey centers on modern web development and full-stack applications.
              I enjoy translating ideas into fast, accessible, and responsive user interfaces using
              React, Next.js, and TypeScript, while building a solid foundation in backend concepts and database management.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Alongside web engineering, I place high value on core computer science foundations —
              consistently practicing Data Structures and Algorithms, analyzing time and space complexities, and understanding
              how systems operate beneath the abstractions.
            </p>
          </div>

          {/* Core Focus Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.07] hover:border-zinc-300 dark:hover:border-white/[0.14] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20 shrink-0">
                  <CodeIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                    Full-Stack Web Development
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-normal">
                    Building componentized, typed, and performant web apps using React, Next.js, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.07] hover:border-zinc-300 dark:hover:border-white/[0.14] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 shrink-0">
                  <TerminalIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                    DSA &amp; Problem Solving
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-normal">
                    Strengthening algorithmic thinking, data structures, and clean coding practices in C++ and Java.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.07] hover:border-zinc-300 dark:hover:border-white/[0.14] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-500/20 shrink-0">
                  <DatabaseIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                    Computer Science Fundamentals
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-normal">
                    Mastering Object-Oriented Programming, Database Management Systems (SQL), and computer systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

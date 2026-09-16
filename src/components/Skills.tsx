import React from "react";
import { CodeIcon, TerminalIcon, DatabaseIcon, LayersIcon } from "./icons/Icons";

interface SkillCategory {
  title: string;
  categoryTag: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-Stack Web Development",
    categoryTag: "Web & Frontend",
    icon: <CodeIcon size={18} className="text-sky-600 dark:text-sky-400" />,
    description: "Building modern responsive user interfaces and client-side experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Programming",
    categoryTag: "Languages",
    icon: <TerminalIcon size={18} className="text-indigo-600 dark:text-indigo-400" />,
    description: "Core languages used for problem solving, coursework, and systems programming.",
    skills: ["C++", "Java", "Python"],
  },
  {
    title: "Computer Science",
    categoryTag: "Core Theory",
    icon: <DatabaseIcon size={18} className="text-teal-600 dark:text-teal-400" />,
    description: "Foundational concepts for scalable, structured, and efficient software.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "SQL",
    ],
  },
  {
    title: "Tools & Workflow",
    categoryTag: "Development Tools",
    icon: <LayersIcon size={18} className="text-amber-600 dark:text-amber-400" />,
    description: "Version control and collaborative engineering environments.",
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-t border-zinc-200 dark:border-white/[0.06] relative scroll-mt-16"
      aria-label="Technical Skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
            <span>02</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>Technical Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-sans">
            Technical proficiencies &amp; core competencies.
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl font-normal pt-1">
            Carefully curated skill sets practiced through academic study, algorithmic problem solving, and hands-on web projects.
          </p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/[0.16] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100 dark:border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06]">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {category.title}
                      </h3>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {category.categoryTag}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-zinc-100/80 dark:bg-white/[0.03] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.08] hover:border-sky-500/40 dark:hover:border-sky-400/40 hover:text-sky-700 dark:hover:text-white hover:bg-sky-50/50 dark:hover:bg-sky-500/[0.05] transition-all cursor-default"
                    >
                      <span className="h-1 w-1 rounded-full bg-sky-500 dark:bg-sky-400/70" aria-hidden="true"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

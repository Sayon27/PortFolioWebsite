import React from "react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const PROJECTS: ProjectData[] = [
  {
    id: "project-01",
    index: "01",
    title: "Project 01",
    description:
      "Placeholder project description. Full-stack web application designed with modern React architecture, server-rendered routes, responsive layout, and robust data persistence.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/Sayon27",
    liveUrl: "https://example.com",
    previewType: "Web Application",
  },
  {
    id: "project-02",
    index: "02",
    title: "Project 02",
    description:
      "Placeholder project description. Interactive problem-solving interface exploring algorithms, efficient state updates, and clean modular component design.",
    technologies: ["React", "TypeScript", "Algorithms", "Tailwind CSS"],
    githubUrl: "https://github.com/Sayon27",
    liveUrl: "https://example.com",
    previewType: "Interactive System",
  },
  {
    id: "project-03",
    index: "03",
    title: "Project 03",
    description:
      "Placeholder project description. Database-driven application emphasizing schema normalization, structured SQL querying, and seamless user interaction.",
    technologies: ["Next.js", "SQL", "DBMS", "TypeScript"],
    githubUrl: "https://github.com/Sayon27",
    liveUrl: "https://example.com",
    previewType: "Database Application",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24 border-t border-zinc-200 dark:border-white/[0.06] relative scroll-mt-16"
      aria-label="Projects Showcase"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
              <span>03</span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span>Featured Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white font-sans">
              Selected projects &amp; development builds.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 font-mono max-w-sm">
            Showcasing architectural clarity, type safety, and responsive design across recent builds.
          </p>
        </div>

        {/* Editorial Project Showcase List */}
        <div className="space-y-10">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

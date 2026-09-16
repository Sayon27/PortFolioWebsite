import React from "react";
import { GithubIcon, ExternalLinkIcon } from "./icons/Icons";

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  previewType: string;
}

interface ProjectCardProps {
  project: ProjectData;
  isReversed?: boolean;
}

export default function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  return (
    <article
      className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/[0.16] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all duration-300 group"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Project Details (lg: 6 cols) */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Index & Type Tag */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-sky-600 dark:text-sky-400 font-semibold tracking-wider">
              {project.index}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden="true" />
            <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
              {project.previewType}
            </span>
          </div>

          {/* Project Title */}
          <h3
            id={`project-title-${project.id}`}
            className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors"
          >
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Action Links */}
          <div className="flex items-center gap-3.5 pt-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-white dark:text-zinc-100 hover:opacity-90 py-2 px-3.5 rounded-lg bg-zinc-900 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-zinc-900 dark:border-white/[0.1] transition-all shadow-sm"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLinkIcon size={15} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white py-2 px-3.5 rounded-lg bg-zinc-100 dark:bg-white/[0.02] hover:bg-zinc-200 dark:hover:bg-white/[0.06] border border-zinc-200 dark:border-white/[0.06] transition-all"
              aria-label={`View source code of ${project.title} on GitHub`}
            >
              <GithubIcon size={15} />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Project Preview Mockup (lg: 6 cols) */}
        <div
          className={`lg:col-span-6 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-[#0c0e15] border border-zinc-200 dark:border-white/[0.1] shadow-lg shadow-zinc-200/50 dark:shadow-xl group-hover:border-zinc-300 dark:group-hover:border-white/[0.2] transition-all">
            {/* Window header bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-200 dark:border-white/[0.08] bg-zinc-200/70 dark:bg-black/40 text-[11px] font-mono text-zinc-600 dark:text-zinc-500">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-zinc-400/60 dark:bg-white/[0.15]"></div>
                <div className="h-2 w-2 rounded-full bg-zinc-400/60 dark:bg-white/[0.15]"></div>
                <div className="h-2 w-2 rounded-full bg-zinc-400/60 dark:bg-white/[0.15]"></div>
              </div>
              <span className="text-[10px] text-zinc-500">
                {project.id.toLowerCase()}.app
              </span>
            </div>

            {/* Architectural mockup canvas */}
            <div className="relative aspect-[16/10] w-full bg-zinc-50 dark:bg-[#080a10] p-6 flex flex-col justify-between overflow-hidden">
              {/* Wireframe lines */}
              <div className="space-y-3 opacity-40 dark:opacity-30">
                <div className="h-3 w-1/3 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                <div className="h-2 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                <div className="h-2 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
              </div>

              {/* Center status badge */}
              <div className="self-center my-auto text-center p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06] shadow-sm shadow-zinc-200/40 dark:shadow-none">
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-300 font-semibold block">
                  {project.title} Preview
                </span>
                <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-600 mt-1 block">
                  [Ready to link live demo &amp; preview image]
                </span>
              </div>

              {/* Bottom decorative bar */}
              <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-white/[0.05] text-[10px] font-mono text-zinc-500 dark:text-zinc-600">
                <span>Next.js / TypeScript</span>
                <span className="text-sky-600 dark:text-sky-400/80 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

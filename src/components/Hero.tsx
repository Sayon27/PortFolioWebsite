"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  MapPinIcon,
} from "./icons/Icons";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Subtle architectural ambient background */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-sky-500/[0.08] dark:from-sky-500/[0.05] via-transparent to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-sans">
                Sayon
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-zinc-700 dark:text-zinc-300/90 leading-snug">
                Computer Science & Engineering Student{" "}
                <span className="text-sky-600 dark:text-sky-400 font-mono text-base block sm:inline font-normal mt-1 sm:mt-0">
                  / Aspiring Full-Stack Developer
                </span>
              </p>
            </div>

            {/* Natural Student-Focused Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl font-normal">
              I’m a Computer Science and Engineering student focused on building
              modern web applications while strengthening my foundations in data
              structures, algorithms, databases, and software development.
            </p>

            {/* Location & University Tagline */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-600 dark:text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                <MapPinIcon size={14} className="text-sky-500" />
                Barasat, Kolkata, West Bengal
              </span>
              <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>
              <span className="text-zinc-600 dark:text-zinc-400">Brainware University</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRightIcon size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-zinc-800 dark:bg-white/[0.04] dark:text-zinc-200 border border-zinc-300 dark:border-white/[0.1] font-medium text-sm hover:bg-zinc-50 dark:hover:bg-white/[0.08] hover:border-zinc-400 dark:hover:border-white/[0.2] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:scale-[0.98]"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Sayon27"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sayon on GitHub (Sayon27)"
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors py-1 px-2.5 rounded bg-zinc-100 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/[0.15]"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ArrowUpRightIcon size={12} className="opacity-60" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sayon-ghosh-266130437/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sayon on LinkedIn"
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors py-1 px-2.5 rounded bg-zinc-100 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/[0.15]"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRightIcon size={12} className="opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right / Editorial Profile Photo Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Asymmetric offset architectural background border */}
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-zinc-200/60 dark:from-white/[0.06] to-transparent border border-zinc-200 dark:border-white/[0.08] transform rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              {/* Technical framing box */}
              <div className="relative rounded-xl overflow-hidden bg-white dark:bg-[#0d0f17] border border-zinc-200 dark:border-white/[0.12] shadow-xl shadow-zinc-200/50 dark:shadow-2xl dark:shadow-black/60">
                {/* Top header bar */}
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-zinc-200 dark:border-white/[0.07] bg-zinc-50 dark:bg-black/40 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                    <span>Sayon Ghosh</span>
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-600 text-[10px]">CSE </span>
                </div>

                {/* Photo viewport */}
                <div className="relative aspect-[4/5] w-full bg-zinc-100 dark:bg-[#0a0c12] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/Myimge.jpg"
                    alt="Sayon - Computer Science and Engineering Student"
                    width={400}
                    height={500}
                    priority
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imageLoaded && !imageError ? "opacity-100" : "opacity-90"
                      }`}
                  />

                  {/* Editorial fallback layer when custom photo is not yet dropped in */}
                  {imageError && (
                    <div className="absolute inset-0 bg-zinc-50 dark:bg-[#0c0e14] flex flex-col items-center justify-center p-6 text-center">
                      <div className="h-20 w-20 rounded-2xl bg-white dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center font-mono text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-3 shadow-sm">
                        S
                      </div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">Sayon</span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                        B.Tech CSE (Data Science)
                      </span>
                      <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-white/[0.06] text-[11px] font-mono text-zinc-500">
                        Drop photo into <code className="text-zinc-700 dark:text-zinc-400 font-semibold">public/images/profile.jpg</code>
                      </div>
                    </div>
                  )}

                  {/* Subtle inner shadow and architectural vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/[0.04] dark:ring-white/[0.05]"
                    aria-hidden="true"
                  />
                </div>

                {/* Bottom caption footer */}
                <div className="px-3.5 py-2.5 border-t border-zinc-200 dark:border-white/[0.07] bg-zinc-50 dark:bg-black/40 flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <span>Brainware University</span>
                  <span className="text-sky-600 dark:text-sky-400 text-[11px] font-medium">Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

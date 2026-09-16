"use client";

import React, { useState } from "react";
import { PhoneIcon, MailIcon, MapPinIcon, CopyIcon, CheckIcon, GithubIcon, LinkedinIcon } from "./icons/Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("sayonghosh8768@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-white/[0.06] relative scroll-mt-16"
      aria-label="Contact Information"
    >
      {/* Subtle ambient light */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-sky-500/[0.05] dark:from-sky-500/[0.04] to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="space-y-3 mb-12 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
            <span>05</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white font-sans">
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
            I&apos;m always interested in learning, building, and connecting with people working on interesting ideas.
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Phone */}
          <a
            href="tel:+918927227071"
            className="group p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-sky-500/50 dark:hover:border-sky-400/40 hover:bg-zinc-50/60 dark:hover:bg-white/[0.04] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all duration-200 flex flex-col justify-between"
            aria-label="Call Sayon at +91 89272 27071"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-white/[0.03] text-sky-600 dark:text-sky-400 border border-zinc-200 dark:border-white/[0.06] group-hover:border-sky-500/30 transition-colors">
                  <PhoneIcon size={20} />
                </div>
                <span className="font-mono text-[11px] text-zinc-500 bg-zinc-100 dark:bg-white/[0.03] px-2 py-0.5 rounded border border-zinc-200 dark:border-white/[0.06]">
                  Phone
                </span>
              </div>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Direct Call
              </h3>
              <p className="text-base sm:text-lg font-mono font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                +91 89272 27071
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>+918927227071</span>
              <span className="text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                Call &rarr;
              </span>
            </div>
          </a>

          {/* Card 2: Email */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-sky-500/50 dark:hover:border-sky-400/40 hover:bg-zinc-50/60 dark:hover:bg-white/[0.04] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-white/[0.03] text-sky-600 dark:text-sky-400 border border-zinc-200 dark:border-white/[0.06] group-hover:border-sky-500/30 transition-colors">
                  <MailIcon size={20} />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] hover:bg-zinc-200/60 dark:hover:bg-white/[0.08] transition-colors"
                  aria-label="Copy email address to clipboard"
                  title="Copy email"
                >
                  {copiedEmail ? <CheckIcon size={14} className="text-emerald-500" /> : <CopyIcon size={14} />}
                </button>
              </div>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Email
              </h3>
              <a
                href="mailto:sayonghosh8768@gmail.com"
                className="text-base sm:text-lg font-mono font-medium text-zinc-900 dark:text-zinc-100 hover:text-sky-600 dark:hover:text-sky-300 transition-colors block break-all"
                aria-label="Send email to sayonghosh8768@gmail.com"
              >
                sayonghosh8768@gmail.com
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>sayonghosh8768@gmail.com</span>
              <a
                href="mailto:sayonghosh8768@gmail.com"
                className="text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity hover:underline font-medium"
              >
                Send Email &rarr;
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="group p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/[0.16] shadow-sm shadow-zinc-200/40 dark:shadow-none transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-zinc-100 dark:bg-white/[0.03] text-sky-600 dark:text-sky-400 border border-zinc-200 dark:border-white/[0.06]">
                  <MapPinIcon size={20} />
                </div>
                <span className="font-mono text-[11px] text-zinc-500 bg-zinc-100 dark:bg-white/[0.03] px-2 py-0.5 rounded border border-zinc-200 dark:border-white/[0.06]">
                  Location
                </span>
              </div>
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                Based in
              </h3>
              <p className="text-base font-sans font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
                Barasat, Kolkata, West Bengal — 700125
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-500">
              <span></span>
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                Open to work
              </span>
            </div>
          </div>
        </div>

        {/* Direct Profiles Shortcut */}
        <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-zinc-500">
            Professional profiles &amp; active repositories:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Sayon27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1.5 px-3 rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] hover:border-sky-500/40 transition-all"
              aria-label="Sayon's GitHub profile (Sayon27)"
            >
              <GithubIcon size={15} />
              <span>github.com/Sayon27</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sayon-ghosh-266130437/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1.5 px-3 rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] hover:border-sky-500/40 transition-all"
              aria-label="Sayon Ghosh's LinkedIn profile"
            >
              <LinkedinIcon size={15} />
              <span>Sayon Ghosh on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

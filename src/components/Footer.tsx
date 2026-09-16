import React from "react";
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon } from "./icons/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/[0.07] bg-zinc-100/80 dark:bg-[#07080c] py-10 relative transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-semibold text-zinc-950 dark:text-white">
                Sayon
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span className="font-mono text-xs text-zinc-500">
                CSE (Data Science)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal">
              Building, learning, and growing through code.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Sayon27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sayon's GitHub (Sayon27)"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
                <ArrowUpRightIcon size={12} className="opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/sayon-ghosh-266130437/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sayon's LinkedIn"
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
                <ArrowUpRightIcon size={12} className="opacity-60" />
              </a>
            </div>

            <div className="h-4 w-[1px] bg-zinc-300 dark:bg-white/[0.1] hidden sm:block" aria-hidden="true" />

            <a
              href="#"
              className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              aria-label="Back to top of page"
            >
              Back to Top &uarr;
            </a>
          </div>
        </div>

        {/* Bottom subtle copyright / status line */}
        <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-600 gap-2">
          <span>&copy; {new Date().getFullYear()} Sayon. All rights reserved.</span>
          <span>Designed with simplicity &amp; modern engineering.</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./icons/Icons";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-250 ${
          mobileMenuOpen
            ? "bg-white dark:bg-[#090a0f] border-b border-zinc-200 dark:border-white/[0.08]"
            : isScrolled
            ? "bg-white/90 dark:bg-[#090a0f]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-white/[0.08] shadow-sm shadow-black/[0.03] dark:shadow-black/40"
            : "bg-white/60 dark:bg-[#090a0f]/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 rounded-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="font-mono text-base font-medium tracking-normal text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-white transition-colors">
              Sayon Ghosh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full bg-zinc-100/70 dark:bg-white/[0.03] border border-zinc-200/70 dark:border-white/[0.06] px-3 py-1.5"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-200/50 dark:hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Socials, Theme Toggle & CTA */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-lg bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.08] hover:bg-zinc-200/60 dark:hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <SunIcon size={18} className="text-amber-400" />
              ) : (
                <MoonIcon size={18} className="text-zinc-700" />
              )}
            </button>

            <a
              href="https://github.com/Sayon27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sayon's GitHub (opens in new tab)"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/sayon-ghosh-266130437/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sayon's LinkedIn (opens in new tab)"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-md hover:bg-zinc-100 dark:hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              <LinkedinIcon size={19} />
            </a>
            <div className="h-4 w-[1px] bg-zinc-200 dark:bg-white/[0.1] mx-1" aria-hidden="true" />
            <a
              href="#contact"
              className="text-xs font-mono font-medium px-3 py-1.5 rounded-md border border-zinc-300 dark:border-white/[0.12] bg-zinc-100/50 dark:bg-white/[0.02] text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-sky-500/50 hover:bg-sky-50 dark:hover:bg-sky-500/[0.06] transition-all"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Hamburger Toggle & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08]"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <SunIcon size={18} className="text-amber-400" />
              ) : (
                <MoonIcon size={18} className="text-zinc-700" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors rounded-lg bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-white dark:bg-[#090a0f] border-b border-zinc-200 dark:border-white/[0.08] flex flex-col justify-between px-6 py-6 md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-2 shrink-0" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 text-base font-medium text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.05] rounded-lg transition-colors border-l-2 border-transparent hover:border-sky-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 shrink-0 border-t border-zinc-200 dark:border-white/[0.08] flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Sayon27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 py-2 px-3 rounded-md bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] flex-1 justify-center"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sayon-ghosh-266130437/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 py-2 px-3 rounded-md bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] flex-1 justify-center"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/25 font-mono text-sm font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}

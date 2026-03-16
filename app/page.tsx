"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ---- Data ---- */
const features = [
  { icon: "fa-microphone", title: "Hands-Free Voice", desc: "Always-on recognition. Talk naturally — auto-sends after you pause." },
  { icon: "fa-wand-magic-sparkles", title: "3D Anime Avatar", desc: "VRM character with real-time lip sync, idle animations, and reactions." },
  { icon: "fa-eye", title: "Vision", desc: "Front camera feeds to AI. She sees what you see. Privacy-first." },
  { icon: "fa-brain", title: "Persistent Memory", desc: "Remembers details across every conversation. Context that compounds." },
  { icon: "fa-bolt", title: "Multi-Provider LLM", desc: "Gemini, OpenAI, Claude, Ollama, xAI, Together. Switch anytime." },
  { icon: "fa-volume-high", title: "Premium TTS", desc: "ElevenLabs, OpenAI TTS, or native iOS. Expressive and natural." },
];

const tags = [
  "HANDS-FREE VOICE", "3D AVATAR", "VISION", "MEMORY", "MULTI-LLM",
  "ELEVENLABS", "ON-DEVICE STT", "OPEN SOURCE", "PRIVACY FIRST", "VRM",
];

/* ---- SVG components ---- */
function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ---- Page ---- */
export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* IntersectionObserver for scroll-reveal */
    const els = document.querySelectorAll(".sr");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
      els.forEach((el) => observer.observe(el));
    });

    /* Word reveal for hero headline */
    const words = document.querySelectorAll(".word-reveal");
    const wordObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            wordObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    words.forEach((w, i) => {
      const span = w.querySelector("span");
      if (span) span.style.transitionDelay = `${0.15 + i * 0.1}s`;
      wordObserver.observe(w);
    });

    return () => {
      observer.disconnect();
      wordObserver.disconnect();
    };
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">

      {/* ====== NAV ====== */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-6 lg:px-10 bg-[#0a0a0a]/70 backdrop-blur-2xl border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-2.5 text-[14px] font-semibold tracking-[0.1em] text-white/80 uppercase">
          <Image src="/logo.png" alt="" width={20} height={20} className="opacity-70" />
          Scowld
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/privacy" className="nav-link px-3 py-1.5 text-[12px] font-medium text-white/25 hover:text-white/60 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="nav-link px-3 py-1.5 text-[12px] font-medium text-white/25 hover:text-white/60 transition-colors">
            Terms
          </Link>
          <a
            href="https://github.com/apoorvdarshan/scowld"
            target="_blank"
            className="social-icon ml-1 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] text-white/20 hover:text-white/60 hover:border-white/[0.12]"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* ====== HERO ====== */}
      <section className="relative flex items-center justify-center" style={{ minHeight: "calc(100dvh - 52px)" }}>
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">

          {/* Left column */}
          <div className="pt-20 pb-2 lg:pt-0 lg:pb-0 max-w-[540px]">

            {/* Badge */}
            <div className="sr sr-delay-1 inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 badge-pulse" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.14em] text-white/30 uppercase" style={{ fontFamily: "var(--font-mono), monospace" }}>
                Open source on GitHub
              </span>
            </div>

            {/* Headline with word reveal */}
            <h1 className="text-[clamp(36px,7vw,88px)] font-semibold leading-[0.92] tracking-[-0.03em] text-white">
              <span className="word-reveal"><span>Talk to her.</span></span>
              <br />
              <span className="word-reveal"><span className="text-white/15">She remembers.</span></span>
            </h1>

            {/* Description */}
            <p className="sr sr-delay-2 mt-4 lg:mt-7 max-w-[400px] text-[13px] lg:text-[15px] leading-[1.75] text-white/30 font-light">
              An AI companion with a 3D anime avatar, hands-free voice, real-time vision, and memory that grows. Built in the open.
            </p>

            {/* Buttons */}
            <div className="sr sr-delay-3 mt-6 lg:mt-10 flex items-center gap-3 flex-wrap">
              <a
                href="https://github.com/apoorvdarshan/scowld"
                target="_blank"
                className="btn-primary inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3 text-[13px] font-semibold text-[#0a0a0a]"
              >
                <GitHubIcon /> View on GitHub
              </a>
              <a
                href="#features"
                className="btn-secondary inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-7 py-3 text-[13px] text-white/35 hover:border-white/[0.15] hover:text-white/60"
              >
                Features <span className="text-[11px]">&darr;</span>
              </a>
            </div>
          </div>

          {/* Right column -- Phone mockup */}
          <div className="flex items-center justify-center" style={{ perspective: "1200px" }}>
            <div className="sr sr-delay-4 phone-float">
              <Image
                src="/mockup.png"
                alt="Scowld app screenshot"
                width={320}
                height={654}
                priority
                className="relative select-none max-h-[30vh] lg:max-h-[65vh] w-auto"
                style={{
                  borderRadius: "32px",
                  filter: "brightness(0.95)",
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== MARQUEE ====== */}
      <div className="border-y border-white/[0.04] py-3.5 overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-12">
              {tags.map((t) => (
                <span
                  key={t + k}
                  className="flex items-center gap-3 whitespace-nowrap text-[10px] font-medium tracking-[0.18em] text-white/10 uppercase"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  <span className="h-1 w-1 rounded-full bg-white/15" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ====== FEATURES ====== */}
      <section id="features" className="mx-auto max-w-[1100px] px-6 lg:px-12 pt-28 pb-20 scroll-mt-20">
        {/* Section header */}
        <div className="mb-14">
          <p
            className="sr sr-delay-1 text-[10px] font-semibold tracking-[0.22em] text-white/25 uppercase mb-4 flex items-center gap-3"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            <span className="w-5 h-px bg-white/15" />
            Capabilities
          </p>
          <h2 className="sr sr-delay-2 text-[clamp(28px,3.5vw,44px)] font-semibold tracking-[-0.02em] text-white leading-tight">
            Everything built in.
          </h2>
          <p className="sr sr-delay-3 text-[14px] text-white/20 mt-3 max-w-[380px] font-light">
            Natural conversation. Privacy by default. Your choice of AI.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`sr sr-delay-${i + 3} card-shimmer group p-7 transition-all duration-300 hover:bg-[#141414] hover:-translate-y-1 cursor-default`}
            >
              <span className="card-icon relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] mb-5">
                <i className={`fa-solid ${f.icon} text-sm text-white/40`} />
              </span>
              <h3 className="relative text-[14px] font-bold text-white/80 mb-2.5">{f.title}</h3>
              <p className="relative text-[12px] leading-[1.85] text-white/25 font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="mx-auto max-w-[1100px] border-t border-white/[0.04] px-6 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: logo, links, copyright */}
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <Link href="/" className="flex items-center gap-2 text-white/35 text-[12px] font-semibold tracking-[0.06em] uppercase">
              <Image src="/logo.png" alt="" width={15} height={15} className="opacity-40" />
              Scowld
            </Link>
            <span className="hidden sm:block w-px h-3 bg-white/[0.06]" />
            <div className="flex items-center gap-4">
              <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="nav-link text-[11px] text-white/15 hover:text-white/50 transition-colors">GitHub</a>
              <Link href="/privacy" className="nav-link text-[11px] text-white/15 hover:text-white/50 transition-colors">Privacy</Link>
              <Link href="/terms" className="nav-link text-[11px] text-white/15 hover:text-white/50 transition-colors">Terms</Link>
            </div>
            <span className="hidden sm:block w-px h-3 bg-white/[0.06]" />
            <p className="text-[10px] text-white/10" style={{ fontFamily: "var(--font-mono), monospace" }}>
              &copy; 2026 Apoorv Darshan
            </p>
          </div>

          {/* Right: social icons */}
          <div className="flex gap-1.5">
            {[
              {
                href: "mailto:ad13dtu@gmail.com",
                icon: (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4l-10 8L2 4" />
                  </svg>
                ),
              },
              {
                href: "https://x.com/apoorvdarshan",
                icon: (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com/in/apoorvdarshan",
                icon: (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                href: "https://github.com/apoorvdarshan/scowld",
                icon: <GitHubIcon className="w-3 h-3" />,
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                className="social-icon flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.04] text-white/15 hover:text-white/50 hover:border-white/[0.1]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const features = [
  { icon: "fa-microphone", title: "Hands-Free Voice", desc: "Always-on recognition. Talk naturally — auto-sends after you pause." },
  { icon: "fa-wand-magic-sparkles", title: "3D Anime Avatar", desc: "VRM character with real-time lip sync, idle animations, and reactions." },
  { icon: "fa-eye", title: "Vision", desc: "Front camera feeds to AI. She sees what you see. Privacy-first." },
  { icon: "fa-brain", title: "Persistent Memory", desc: "Remembers details across every conversation. Context that compounds." },
  { icon: "fa-bolt", title: "Multi-Provider LLM", desc: "Gemini, OpenAI, Claude, Ollama, xAI, Together. Switch anytime." },
  { icon: "fa-volume-high", title: "Premium TTS", desc: "ElevenLabs, OpenAI TTS, or native iOS. Expressive and natural." },
];

const tags = ["HANDS-FREE VOICE", "3D AVATAR", "VISION", "MEMORY", "MULTI-LLM", "ELEVENLABS", "ON-DEVICE STT", "OPEN SOURCE", "PRIVACY FIRST", "VRM"];

function GH({ c = "w-4 h-4" }: { c?: string }) {
  return <svg className={c} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
}

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden">

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-6 lg:px-10 bg-[#0a0a0a]/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-2.5 text-[14px] font-bold tracking-[0.08em] text-white/80">
          <Image src="/logo.png" alt="" width={20} height={20} className="opacity-70" />
          SCOWLD
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/privacy" className="px-3 py-1.5 text-[12px] text-white/25 hover:text-white/60 transition-colors">Privacy</Link>
          <Link href="/terms" className="px-3 py-1.5 text-[12px] text-white/25 hover:text-white/60 transition-colors">Terms</Link>
          <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="ml-1 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] text-white/20 hover:text-white/60 hover:border-white/[0.12] transition-all">
            <GH c="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-48px)] flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

          {/* Left */}
          <div className="pt-24 pb-6 lg:pt-0 lg:pb-0 max-w-[520px]">
            <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.12em] text-white/30 uppercase">Open source on GitHub</span>
            </div>

            <h1 className="animate-fade-up delay-1 text-[clamp(48px,7vw,90px)] font-semibold leading-[0.92] tracking-[-0.02em] text-white" style={{ fontFamily: "'Clash Display', sans-serif" }}>
              Talk to her.
              <br />
              <span className="text-white/15">She remembers.</span>
            </h1>

            <p className="animate-fade-up delay-2 mt-6 max-w-[380px] text-[15px] leading-[1.8] text-white/30">
              An AI companion with a 3D anime avatar, hands-free voice, real-time vision, and memory that grows. Built in the open.
            </p>

            <div className="animate-fade-up delay-3 mt-10 flex items-center gap-3 flex-wrap">
              <a href="https://github.com/apoorvdarshan/scowld" target="_blank"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-[#0a0a0a] transition-all hover:shadow-[0_0_50px_rgba(0,212,255,0.12)] hover:-translate-y-px">
                <GH /> View on GitHub
              </a>
              <a href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-6 py-3 text-[13px] text-white/35 hover:border-white/[0.15] hover:text-white/60 transition-all">
                Features ↓
              </a>
            </div>
          </div>

          {/* Right — Phone (desktop only) */}
          <div className="hidden lg:flex items-center justify-center" style={{ perspective: "1000px" }}>
            <div className="animate-fade-up delay-4 relative" style={{ animation: "float 6s ease-in-out infinite" }}>
              <Image
                src="/mockup.png"
                alt="Scowld"
                width={320}
                height={654}
                priority
                className="relative select-none max-h-[65vh] w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                style={{ borderRadius: "28px", filter: "brightness(0.95)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-white/[0.04] py-3.5 overflow-hidden">
        <div className="flex w-max gap-10 animate-[marquee_35s_linear_infinite]">
          {[0, 1].map(k => (
            <div key={k} className="flex gap-10">
              {tags.map(t => (
                <span key={t + k} className="flex items-center gap-2.5 whitespace-nowrap font-[family-name:var(--font-mono)] text-[10px] font-medium tracking-[0.16em] text-white/10 uppercase">
                  <span className="h-1 w-1 rounded-full bg-cyan-400/40" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" className="mx-auto max-w-[1100px] px-6 lg:px-12 pt-28 pb-20 scroll-mt-20">
        <div className="mb-14">
          <p className="animate-fade-up font-[family-name:var(--font-mono)] text-[10px] font-semibold tracking-[0.2em] text-cyan-400/50 uppercase mb-4 flex items-center gap-2.5">
            <span className="w-4 h-px bg-cyan-400/40" />
            Capabilities
          </p>
          <h2 className="animate-fade-up delay-1 text-[clamp(28px,3.5vw,44px)] font-semibold tracking-[-0.02em] text-white leading-tight" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            Everything built in.
          </h2>
          <p className="animate-fade-up delay-2 text-[14px] text-white/20 mt-3 max-w-[360px]">
            Natural conversation. Privacy by default. Your choice of AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`animate-fade-up delay-${i + 2} group relative rounded-2xl border border-white/[0.04] bg-[#111] p-7 transition-all duration-300 hover:border-white/[0.08] hover:bg-[#141414] hover:-translate-y-1`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,rgba(0,212,255,0.04),transparent_60%)]" />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] mb-4">
                <i className={`fa-solid ${f.icon} text-sm text-white/40`} />
              </span>
              <h3 className="relative text-[14px] font-bold text-white/80 mb-2">{f.title}</h3>
              <p className="relative text-[12px] leading-[1.8] text-white/25">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-[1100px] border-t border-white/[0.04] px-6 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <Link href="/" className="flex items-center gap-2 text-white/35 text-[12px] font-semibold tracking-wide">
              <Image src="/logo.png" alt="" width={15} height={15} className="opacity-40" />
              Scowld
            </Link>
            <span className="hidden sm:block w-px h-3 bg-white/[0.06]" />
            <div className="flex items-center gap-4">
              <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="text-[11px] text-white/15 hover:text-white/50 transition-colors">GitHub</a>
              <Link href="/privacy" className="text-[11px] text-white/15 hover:text-white/50 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[11px] text-white/15 hover:text-white/50 transition-colors">Terms</Link>
            </div>
            <span className="hidden sm:block w-px h-3 bg-white/[0.06]" />
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-white/10">&copy; 2026 Apoorv Darshan</p>
          </div>
          <div className="flex gap-1.5">
            {[
              { href: "mailto:ad13dtu@gmail.com", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg> },
              { href: "https://x.com/apoorvdarshan", icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { href: "https://linkedin.com/in/apoorvdarshan", icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: "https://github.com/apoorvdarshan/scowld", icon: <GH c="w-3 h-3" /> },
            ].map(s => (
              <a key={s.href} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.04] text-white/15 hover:text-white/50 hover:border-white/[0.1] transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

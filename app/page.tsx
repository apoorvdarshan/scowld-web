import Image from "next/image";
import Link from "next/link";

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    label: "Hands-Free Voice",
    desc: "Always-on recognition. Talk naturally -- she listens, understands, and responds after a pause.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: "3D Anime Avatar",
    desc: "VRM character with real-time lip sync, idle animations, and expressive reactions.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    label: "Vision",
    desc: "Front camera feeds to AI in real time. She sees what you see. Privacy-first, always.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    label: "Persistent Memory",
    desc: "Remembers details across every conversation. Context that compounds over time.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "Multi-Provider LLM",
    desc: "Gemini, OpenAI, Claude, Ollama, xAI, Together. Choose any model. Switch anytime.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    label: "Premium TTS",
    desc: "ElevenLabs, OpenAI TTS, or native iOS voices. Expressive, natural, and fast.",
  },
];

const marqueeItems = [
  "HANDS-FREE VOICE",
  "3D AVATAR",
  "VISION",
  "PERSISTENT MEMORY",
  "MULTI-LLM",
  "ELEVENLABS TTS",
  "ON-DEVICE STT",
  "OPEN SOURCE",
  "PRIVACY FIRST",
  "VRM SUPPORT",
];

/* ────────────────────────────────────────────
   GitHub SVG (reused)
   ──────────────────────────────────────────── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ────────────────────────────────────────────
   Page
   ──────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0e0e0e] overflow-x-hidden">

      {/* ═══════════════════════════════════════
          NAV
          ═══════════════════════════════════════ */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 lg:px-12 bg-[#0e0e0e]/70 backdrop-blur-2xl border-b border-white/[0.04]">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.18em] text-white/90 uppercase select-none"
        >
          <Image
            src="/logo.png"
            alt="Scowld"
            width={20}
            height={20}
            className="opacity-80"
          />
          Scowld
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/privacy"
            className="px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-white/25 hover:text-white/60 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-white/25 hover:text-white/60 transition-colors duration-200"
          >
            Terms
          </Link>
          <a
            href="https://github.com/apoorvdarshan/scowld"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] text-white/25 hover:text-white/60 hover:border-white/[0.12] transition-all duration-200"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
          </a>
        </nav>
      </header>

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[calc(100dvh-56px)] flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">

        {/* ── Left: Copy ── */}
        <div className="relative z-10 pt-32 pb-12 lg:pt-0 lg:pb-0 max-w-[560px]">

          {/* Badge */}
          <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00d4ff] opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
            </span>
            <span className="text-[10px] font-semibold tracking-[0.12em] text-white/30 uppercase">
              Open source on GitHub
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(48px,7.5vw,96px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white">
            Talk to her.
            <br />
            <span className="text-white/15">She remembers.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-7 max-w-[400px] text-[15px] leading-[1.75] text-white/30 font-light">
            An AI companion with a 3D anime avatar, hands-free voice,
            real-time vision, and memory that grows. Built in the open.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex items-center gap-4">
            <a
              href="https://github.com/apoorvdarshan/scowld"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-[#0e0e0e] transition-all duration-200 hover:shadow-[0_0_48px_rgba(0,212,255,0.1)]"
            >
              <GitHubIcon className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-px" />
              View on GitHub
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-6 py-3 text-[13px] font-medium text-white/35 transition-all duration-200 hover:border-white/[0.15] hover:text-white/60"
            >
              Features
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-px">
                <path d="M5 2v6M2 5l3 3 3-3" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right: Phone mockup ── */}
        <div
          className="relative flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-[#00d4ff] pointer-events-none blur-[160px]"
            style={{ animation: "glow-pulse 6s ease-in-out infinite" }}
          />

          {/* Phone */}
          <div
            className="relative"
            style={{
              animation: "phone-float 8s ease-in-out infinite",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/mockup.png"
              alt="Scowld app running on iPhone"
              width={340}
              height={696}
              priority
              className="relative select-none drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] max-h-[70vh] w-auto"
              style={{
                filter: "brightness(0.94) contrast(1.02)",
                borderRadius: "32px",
              }}
            />
          </div>
        </div>

        </div>{/* close grid */}

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
          ═══════════════════════════════════════ */}
      <div className="relative border-y border-white/[0.04] py-4 overflow-hidden select-none">
        <div className="flex w-max gap-10 animate-[marquee_40s_linear_infinite]">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10">
              {marqueeItems.map((t) => (
                <span
                  key={t + k}
                  className="flex items-center gap-3 whitespace-nowrap font-mono text-[10px] font-medium tracking-[0.18em] text-white/12 uppercase"
                >
                  <span className="h-[3px] w-[3px] rounded-full bg-[#00d4ff]/40" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          FEATURES
          ═══════════════════════════════════════ */}
      <section
        id="features"
        className="mx-auto max-w-[1100px] px-6 lg:px-12 pt-32 pb-24 scroll-mt-24"
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#00d4ff]/60 uppercase mb-4 flex items-center gap-2.5">
            <span className="inline-block w-4 h-px bg-[#00d4ff]/40" />
            Capabilities
          </p>
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold tracking-[-0.03em] text-white/90 leading-[1.1] mb-3">
            Everything built in.
          </h2>
          <p className="text-[14px] text-white/20 max-w-[360px] leading-relaxed">
            Natural conversation. Privacy by default. Your choice of AI model.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/[0.03]">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`group relative bg-[#131313] p-8 transition-colors duration-200 hover:bg-[#161616] animate-fade-in-up stagger-${i + 1}`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.03),transparent_70%)]" />

              {/* Icon */}
              <span className="relative mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#00d4ff]/50">
                {f.icon}
              </span>

              {/* Title */}
              <h3 className="relative text-[14px] font-semibold text-white/80 mb-2 tracking-[-0.01em]">
                {f.label}
              </h3>

              {/* Description */}
              <p className="relative text-[12px] leading-[1.8] text-white/20">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="mx-auto max-w-[1100px] border-t border-white/[0.04] px-6 lg:px-12 pt-14 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

          {/* Brand */}
          <div className="max-w-[260px]">
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Scowld"
                width={18}
                height={18}
                className="opacity-50"
              />
              <span className="text-[13px] font-bold tracking-wide text-white/50">
                Scowld
              </span>
            </div>
            <p className="text-[11px] leading-[1.8] text-white/16">
              Open-source AI companion with a 3D avatar, voice, vision, and persistent memory.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <h4 className="font-mono text-[9px] font-bold tracking-[0.18em] text-white/18 uppercase mb-3">
                Product
              </h4>
              <div className="flex flex-col gap-1.5">
                <a
                  href="https://github.com/apoorvdarshan/scowld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-white/18 hover:text-white/50 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://github.com/apoorvdarshan/scowld/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-white/18 hover:text-white/50 transition-colors duration-200"
                >
                  Releases
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[9px] font-bold tracking-[0.18em] text-white/18 uppercase mb-3">
                Legal
              </h4>
              <div className="flex flex-col gap-1.5">
                <Link
                  href="/privacy"
                  className="text-[12px] text-white/18 hover:text-white/50 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-[12px] text-white/18 hover:text-white/50 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-[9px] font-bold tracking-[0.18em] text-white/18 uppercase mb-3">
                Connect
              </h4>
              <div className="flex flex-col gap-1.5">
                <a
                  href="mailto:ad13dtu@gmail.com"
                  className="text-[12px] text-white/18 hover:text-white/50 transition-colors duration-200"
                >
                  Email
                </a>
                <a
                  href="https://x.com/apoorvdarshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-white/18 hover:text-white/50 transition-colors duration-200"
                >
                  X / Twitter
                </a>
                <a
                  href="https://linkedin.com/in/apoorvdarshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-white/18 hover:text-white/50 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="font-mono text-[10px] text-white/10 tracking-wider">
            &copy; 2026 Apoorv Darshan
          </p>
          <div className="flex gap-2">
            {/* Email */}
            <a
              href="mailto:ad13dtu@gmail.com"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.05] text-white/18 hover:text-white/50 hover:border-white/[0.1] transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4l-10 8L2 4" />
              </svg>
            </a>
            {/* X */}
            <a
              href="https://x.com/apoorvdarshan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.05] text-white/18 hover:text-white/50 hover:border-white/[0.1] transition-all duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/apoorvdarshan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.05] text-white/18 hover:text-white/50 hover:border-white/[0.1] transition-all duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/apoorvdarshan/scowld"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.05] text-white/18 hover:text-white/50 hover:border-white/[0.1] transition-all duration-200"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

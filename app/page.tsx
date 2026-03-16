import Image from "next/image";
import Link from "next/link";

const features = [
  { icon: "🎙", label: "Hands-Free Voice", desc: "Always-on recognition. Talk naturally — auto-sends after a pause." },
  { icon: "✦", label: "3D Anime Avatar", desc: "VRM character with lip sync, idle animations, and expressions." },
  { icon: "◉", label: "Vision", desc: "Front camera feeds to AI. She sees what you see. Privacy-first." },
  { icon: "◎", label: "Persistent Memory", desc: "Remembers details across conversations. Context that compounds." },
  { icon: "⚡", label: "Multi-Provider LLM", desc: "Gemini, OpenAI, Claude, Ollama, xAI, Together. Your choice." },
  { icon: "♬", label: "Premium TTS", desc: "ElevenLabs, OpenAI TTS, or native iOS. Expressive and natural." },
];

const marqueeItems = [
  "HANDS-FREE VOICE", "3D AVATAR", "VISION", "MEMORY",
  "MULTI-LLM", "ELEVENLABS", "ON-DEVICE STT", "OPEN SOURCE",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#111] overflow-x-hidden">

      {/* ── NAV ── */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between px-6 lg:px-10 bg-[#111]/60 backdrop-blur-2xl border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-2 text-[13px] font-bold tracking-[0.15em] text-white/90 uppercase">
          <Image src="/logo.png" alt="" width={18} height={18} className="opacity-80" />
          Scowld
        </Link>
        <nav className="flex items-center gap-1">
          {[
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="px-3 py-1 text-[12px] text-white/30 hover:text-white/70 transition-colors rounded-md">
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/apoorvdarshan/scowld"
            target="_blank"
            className="ml-1 flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.06] text-white/25 hover:text-white/60 hover:border-white/10 transition-all"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="relative grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_auto] items-center">
        {/* left */}
        <div className="relative z-10 px-6 pt-36 pb-16 lg:pl-[max(40px,6vw)] lg:pr-0 lg:pt-0 lg:pb-0 max-w-[620px]">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1 text-[10px] font-semibold tracking-[0.1em] text-white/30 uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            AI companion on your iPhone
          </span>

          <h1 className="text-[clamp(52px,7vw,88px)] font-extrabold leading-[0.92] tracking-[-0.045em] text-white">
            Talk to her.
            <br />
            <span className="text-white/20">She remembers.</span>
          </h1>

          <p className="mt-6 max-w-[380px] text-[14px] leading-[1.8] text-white/30">
            Your AI companion with a 3D anime avatar. Talk hands-free,
            let her see through your camera, and watch the relationship
            grow. Open&nbsp;source.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <a
              href="https://github.com/apoorvdarshan/scowld"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#111] transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.12)]"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-y-px" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              View on GitHub
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] px-5 py-2.5 text-[13px] font-medium text-white/40 transition-all hover:border-white/15 hover:text-white/70"
            >
              Explore&ensp;↓
            </a>
          </div>

          <p className="mt-6 font-mono text-[11px] text-white/15 tracking-wide">
            <a href="https://github.com/apoorvdarshan/scowld/releases" target="_blank" className="hover:text-white/40 transition-colors">
              ↳ see latest release →
            </a>
          </p>
        </div>

        {/* right — phone */}
        <div
          className="relative z-0 hidden lg:flex items-center justify-end self-stretch"
          style={{ perspective: "1200px" }}
        >
          {/* subtle glow behind phone */}
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[500px] h-[700px] rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none" />
          <div
            className="relative -mr-[60px]"
            style={{
              transform: "rotateY(-8deg) rotateX(2deg) rotateZ(2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/mockup.png"
              alt="Scowld App"
              width={420}
              height={860}
              priority
              className="drop-shadow-[0_60px_120px_rgba(0,0,0,0.8)] select-none"
              style={{ filter: "brightness(0.95)" }}
            />
          </div>
        </div>

        {/* mobile phone (centered, below text) */}
        <div className="lg:hidden flex justify-center px-6 pb-12" style={{ perspective: "800px" }}>
          <div style={{ transform: "rotateY(-4deg) rotateZ(1deg)" }}>
            <Image
              src="/mockup.png"
              alt="Scowld App"
              width={260}
              height={530}
              priority
              className="drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111] to-transparent" />
      </section>

      {/* ── MARQUEE ── */}
      <div className="relative border-y border-white/[0.04] py-3 overflow-hidden">
        <div className="flex w-max gap-8 animate-[marquee_35s_linear_infinite]">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-8">
              {marqueeItems.map((t) => (
                <span key={t + k} className="flex items-center gap-2 whitespace-nowrap font-mono text-[10px] font-semibold tracking-[0.14em] text-white/15 uppercase">
                  <span className="h-[3px] w-[3px] rounded-full bg-cyan-400/60" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="mx-auto max-w-[1060px] px-6 lg:px-10 pt-28 pb-20 scroll-mt-20">
        <p className="font-mono text-[10px] font-bold tracking-[0.18em] text-cyan-400/70 uppercase mb-3">
          <span className="inline-block w-3 h-px bg-cyan-400/50 mr-2 align-middle" />
          Features
        </p>
        <h2 className="text-[clamp(24px,3.2vw,38px)] font-bold tracking-tight text-white/90 mb-2 leading-tight">
          Everything built&nbsp;in.
        </h2>
        <p className="text-[14px] text-white/25 mb-14 max-w-[380px]">
          Natural conversation. Privacy by default. Your&nbsp;choice&nbsp;of&nbsp;AI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] rounded-2xl overflow-hidden bg-white/[0.04]">
          {features.map((f) => (
            <div
              key={f.label}
              className="group relative bg-[#151515] p-7 transition-colors hover:bg-[#181818]"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.04),transparent_60%)]" />
              <span className="relative mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] text-[15px] text-cyan-300/60">
                {f.icon}
              </span>
              <h3 className="relative text-[13px] font-bold text-white/80 mb-1.5 tracking-tight">{f.label}</h3>
              <p className="relative text-[12px] leading-[1.7] text-white/25">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mx-auto max-w-[1060px] border-t border-white/[0.04] px-6 lg:px-10 pt-10 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-[240px]">
            <div className="flex items-center gap-2 mb-2.5">
              <Image src="/logo.png" alt="" width={16} height={16} className="opacity-60" />
              <span className="text-[13px] font-bold text-white/60">Scowld</span>
            </div>
            <p className="text-[11px] leading-[1.7] text-white/20">
              Open-source AI companion. 3D avatar, voice, vision,&nbsp;memory.
            </p>
          </div>
          <div className="flex gap-14">
            <div>
              <h4 className="font-mono text-[9px] font-bold tracking-[0.15em] text-white/20 uppercase mb-2.5">Product</h4>
              <div className="flex flex-col gap-1">
                <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">GitHub</a>
                <a href="https://github.com/apoorvdarshan/scowld/blob/main/CONTRIBUTING.md" target="_blank" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">Contribute</a>
              </div>
            </div>
            <div>
              <h4 className="font-mono text-[9px] font-bold tracking-[0.15em] text-white/20 uppercase mb-2.5">Legal</h4>
              <div className="flex flex-col gap-1">
                <Link href="/privacy" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">Privacy</Link>
                <Link href="/terms" className="text-[12px] text-white/20 hover:text-white/50 transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.04]">
          <p className="font-mono text-[10px] text-white/12 tracking-wide">© 2026 Apoorv Darshan</p>
          <div className="flex gap-1.5">
            {[
              { href: "mailto:ad13dtu@gmail.com", label: "✉" },
              { href: "https://x.com/apoorvdarshan", label: "𝕏" },
              { href: "https://linkedin.com/in/apoorvdarshan", label: "in" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.05] text-[10px] text-white/20 hover:text-white/50 hover:border-white/10 transition-all"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

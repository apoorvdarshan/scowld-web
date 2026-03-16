import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111]">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 h-14 flex items-center justify-between bg-[#111]/70 backdrop-blur-xl border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2.5 text-white font-semibold text-[15px] tracking-wide">
          <Image src="/logo.png" alt="Scowld" width={20} height={20} />
          SCOWLD
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <Link href="/privacy" className="text-[13px] text-[#555] hover:text-white px-3 py-1.5 rounded-md transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[13px] text-[#555] hover:text-white px-3 py-1.5 rounded-md transition-colors">Terms</Link>
          <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="text-[13px] text-[#555] hover:text-white px-3 py-1.5 rounded-md transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center pt-20">
        {/* Left content */}
        <div className="flex-1 px-6 md:px-12 lg:px-24 py-20 lg:py-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[11px] font-medium text-[#555] tracking-[0.08em] uppercase mb-10">
            <svg className="w-3 h-3 text-[#00d4ff]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            AI Companion on your iPhone
          </div>

          <h1 className="text-[clamp(48px,6vw,80px)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white mb-6">
            Talk to her.<br />
            <span className="text-[#444]">She remembers.</span>
          </h1>

          <p className="text-[15px] text-[#555] leading-[1.7] max-w-[400px] mb-10">
            Connect with your AI companion through a 3D anime avatar. Talk hands-free, let her see through your camera, and build a relationship that grows over time. Open source.
          </p>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111] text-[14px] font-semibold hover:translate-y-[-1px] hover:shadow-[0_8px_30px_rgba(0,212,255,0.1)] transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              View on GitHub
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.1] text-[#888] text-[14px] font-medium hover:border-white/20 hover:text-white transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>
              Explore
            </a>
          </div>

          <a href="https://github.com/apoorvdarshan/scowld/releases" target="_blank" className="text-[12px] text-[#444] font-mono hover:text-[#00d4ff] transition-colors inline-flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 01-9 9"/></svg>
            See latest release →
          </a>
        </div>

        {/* Right - phone mockup */}
        <div className="flex-1 flex items-center justify-center lg:justify-end lg:pr-12 pb-10 lg:pb-0">
          <Image
            src="/mockup.png"
            alt="Scowld App"
            width={380}
            height={780}
            className="rotate-[3deg] drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>
      </section>

      {/* Marquee */}
      <div className="border-t border-b border-white/[0.06] py-3.5 overflow-hidden">
        <div className="flex gap-10 animate-[marquee_40s_linear_infinite] w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              {["HANDS-FREE VOICE", "3D ANIME AVATAR", "VISION CAPABLE", "PERSISTENT MEMORY", "MULTI-PROVIDER LLM", "ON-DEVICE SPEECH", "ELEVENLABS TTS", "OPEN SOURCE"].map((t) => (
                <span key={t + i} className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.1em] text-[#444] font-mono whitespace-nowrap">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-28">
        <p className="text-[11px] font-bold text-[#00d4ff] tracking-[0.12em] uppercase font-mono mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-[#00d4ff]" />
          Features
        </p>
        <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-white tracking-tight mb-3">Everything built in</h2>
        <p className="text-[15px] text-[#555] mb-14 max-w-[420px]">Natural conversation. Privacy by default. Your choice of AI.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {[
            { icon: "🎙", title: "Hands-Free Voice", desc: "Always-on speech recognition. Talk naturally, auto-sends after a pause. Live captions for both sides." },
            { icon: "✨", title: "3D Anime Avatar", desc: "Animated VRM character with lip sync, idle animations, and expressions. Three.js + Amica engine." },
            { icon: "👁", title: "Vision", desc: "Front camera feeds to AI. No preview by default. She sees what you see, privacy-first." },
            { icon: "🧠", title: "Persistent Memory", desc: "Extracts and remembers key details across conversations. Context that grows over time." },
            { icon: "⚡", title: "Multi-Provider LLM", desc: "Gemini, OpenAI, Claude, Ollama, OpenRouter, xAI, Together AI. Switch anytime." },
            { icon: "🔊", title: "Premium TTS", desc: "ElevenLabs, OpenAI TTS, or native iOS. Expressive text-to-speech that brings her to life." },
          ].map((f) => (
            <div key={f.title} className="bg-[#181818] p-8 hover:bg-[#1c1c1c] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/[0.06] border border-[#00d4ff]/[0.1] flex items-center justify-center text-base mb-5">
                {f.icon}
              </div>
              <h3 className="text-[14px] font-bold text-white mb-2">{f.title}</h3>
              <p className="text-[13px] text-[#555] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] max-w-[1000px] mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
          <div className="max-w-[260px]">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="Scowld" width={20} height={20} />
              <span className="text-[14px] font-bold text-white">Scowld</span>
            </div>
            <p className="text-[12px] text-[#444] leading-relaxed">Open-source AI companion with a 3D anime avatar, hands-free voice, vision, and memory.</p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-[10px] font-bold text-[#444] tracking-[0.1em] uppercase font-mono mb-3">Product</h4>
              <div className="flex flex-col gap-1.5">
                <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="text-[13px] text-[#444] hover:text-white transition-colors">GitHub</a>
                <a href="https://github.com/apoorvdarshan/scowld/blob/main/CONTRIBUTING.md" target="_blank" className="text-[13px] text-[#444] hover:text-white transition-colors">Contribute</a>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-[#444] tracking-[0.1em] uppercase font-mono mb-3">Legal</h4>
              <div className="flex flex-col gap-1.5">
                <Link href="/privacy" className="text-[13px] text-[#444] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-[13px] text-[#444] hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/[0.06]">
          <p className="text-[11px] text-[#333] font-mono">© 2026 Apoorv Darshan</p>
          <div className="flex gap-2">
            <a href="mailto:ad13dtu@gmail.com" className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-[#444] hover:text-white hover:border-white/20 transition-all text-xs">✉</a>
            <a href="https://x.com/apoorvdarshan" target="_blank" className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-[#444] hover:text-white hover:border-white/20 transition-all text-xs">𝕏</a>
            <a href="https://linkedin.com/in/apoorvdarshan" target="_blank" className="w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-[#444] hover:text-white hover:border-white/20 transition-all text-xs">in</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

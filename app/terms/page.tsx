import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Terms of Service — Scowld" };

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#111]">
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 h-14 flex items-center bg-[#111]/70 backdrop-blur-xl border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2.5 text-white font-semibold text-[15px] tracking-wide">
          <Image src="/logo.png" alt="Scowld" width={20} height={20} />
          SCOWLD
        </Link>
      </nav>
      <div className="max-w-[680px] mx-auto px-6 pt-28 pb-20">
        <Link href="/" className="text-[13px] text-[#444] font-mono hover:text-[#00d4ff] transition-colors mb-8 inline-block">← Back to home</Link>
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Terms of Service</h1>
        <p className="text-[13px] text-[#444] font-mono mb-10">Last updated: March 16, 2026</p>

        <div className="space-y-6 text-[15px] text-[#666] leading-[1.75]">
          <div><h2 className="text-base font-bold text-white mb-2">Acceptance</h2><p>By using Scowld, you agree to these terms.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">Description</h2><p>Scowld is an open-source AI companion app provided &quot;as is&quot; without warranties.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">Your Responsibilities</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You are responsible for your API keys and charges.</li>
              <li>Comply with third-party AI provider terms.</li>
              <li>Do not use for illegal purposes.</li>
            </ul>
          </div>
          <div><h2 className="text-base font-bold text-white mb-2">Limitations</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>AI responses may be inaccurate.</li>
              <li>We are not responsible for API costs.</li>
              <li>Internet required for AI features.</li>
            </ul>
          </div>
          <div><h2 className="text-base font-bold text-white mb-2">Open Source</h2><p>Released under MIT License.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">Contact</h2><p><a href="mailto:ad13dtu@gmail.com" className="text-[#00d4ff] hover:text-white">ad13dtu@gmail.com</a></p></div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Privacy Policy — Scowld" };

export default function Privacy() {
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
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-[13px] text-[#444] font-mono mb-10">Last updated: March 16, 2026</p>

        <div className="space-y-6 text-[15px] text-[#666] leading-[1.75]">
          <div><h2 className="text-base font-bold text-white mb-2">Overview</h2><p>Scowld is designed with privacy in mind. Your data stays on your device unless you explicitly choose to use cloud AI providers.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">Data Collection</h2><p>Scowld does <strong className="text-white">not</strong> collect, store, or transmit any personal data to our servers. We do not have servers. The app runs entirely on your device.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">Third-Party Services</h2><p>When you configure an AI provider, your messages are sent to that provider&apos;s API:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Google Gemini: <a href="https://ai.google.dev/terms" target="_blank" className="text-[#00d4ff] hover:text-white">ai.google.dev/terms</a></li>
              <li>OpenAI: <a href="https://openai.com/policies/privacy-policy" target="_blank" className="text-[#00d4ff] hover:text-white">openai.com/policies/privacy-policy</a></li>
              <li>Anthropic: <a href="https://www.anthropic.com/privacy" target="_blank" className="text-[#00d4ff] hover:text-white">anthropic.com/privacy</a></li>
              <li>ElevenLabs: <a href="https://elevenlabs.io/privacy" target="_blank" className="text-[#00d4ff] hover:text-white">elevenlabs.io/privacy</a></li>
            </ul>
          </div>
          <div><h2 className="text-base font-bold text-white mb-2">Camera & Microphone</h2><p>Processed on-device. Sent to your AI provider only when you send a message.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">API Keys</h2><p>Stored in iOS Keychain. Never transmitted to us.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">Local Storage</h2><p>Chat history stored locally via CoreData. Clear anytime in Settings.</p></div>
          <div><h2 className="text-base font-bold text-white mb-2">Contact</h2><p><a href="mailto:ad13dtu@gmail.com" className="text-[#00d4ff] hover:text-white">ad13dtu@gmail.com</a></p></div>
        </div>
      </div>
    </div>
  );
}

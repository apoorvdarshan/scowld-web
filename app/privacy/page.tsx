import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Privacy Policy — Scowld" };

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 h-14 flex items-center bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-2.5 text-white/80 font-bold text-[14px] tracking-[0.08em]">
          <Image src="/logo.png" alt="Scowld" width={20} height={20} className="opacity-70" />
          SCOWLD
        </Link>
      </nav>
      <div className="max-w-[700px] mx-auto px-6 pt-28 pb-20">
        <Link href="/" className="text-[12px] text-white/20 font-mono hover:text-white/50 transition-colors mb-8 inline-block">← Back to home</Link>
        <h1 className="text-[32px] font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-[12px] text-white/20 font-mono mb-12">Last updated: March 16, 2026</p>

        <div className="space-y-8 text-[14px] text-white/40 leading-[1.85]">

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">1. Overview</h2>
            <p>Scowld is an open-source AI companion application for iOS. It is designed with a privacy-first architecture — your personal data stays on your device unless you explicitly configure a third-party AI provider. Scowld does not operate any backend servers, does not collect analytics, and does not track users in any way.</p>
            <p className="mt-2">The complete source code is publicly available at <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="text-white/60 hover:text-white underline underline-offset-2">github.com/apoorvdarshan/scowld</a> under the MIT License. You can audit exactly what the app does at any time.</p>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">2. Data Collection</h2>
            <p>Scowld collects <strong className="text-white/70">zero</strong> personal data. Specifically:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>We do not have servers, databases, or any cloud infrastructure.</li>
              <li>We do not collect, store, or transmit your name, email, location, device ID, or any other personal identifier.</li>
              <li>We do not use analytics SDKs, crash reporting services, or advertising frameworks.</li>
              <li>We do not track your usage patterns, session duration, or feature engagement.</li>
              <li>There is no account creation, login, or registration of any kind.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">3. Camera Access</h2>
            <p>Scowld requests access to your device&apos;s front-facing camera for the Vision feature. When enabled:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Camera frames are captured on-device and sent to your configured AI provider <strong className="text-white/70">only</strong> when you explicitly send a message.</li>
              <li>No images or video are stored on your device or transmitted anywhere else.</li>
              <li>No images are saved to your photo library.</li>
              <li>Camera data is never processed, cached, or buffered beyond the immediate frame capture.</li>
              <li>The camera can be disabled at any time using the eye icon toggle in the app.</li>
              <li>When the camera is disabled, no frames are captured and no camera data is accessed.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">4. Microphone Access</h2>
            <p>Scowld requests microphone access for the hands-free voice chat feature. When enabled:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Speech is processed entirely on-device using Apple&apos;s built-in Speech framework (SFSpeechRecognizer).</li>
              <li>Audio is <strong className="text-white/70">never</strong> recorded, stored, or transmitted to any server.</li>
              <li>Speech-to-text conversion happens locally — the recognized text (not audio) is what gets sent to your AI provider when a message is sent.</li>
              <li>The microphone automatically pauses during AI text-to-speech playback to prevent feedback loops.</li>
              <li>Voice mode can be toggled on/off at any time using the waveform icon.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">5. Third-Party AI Providers</h2>
            <p>Scowld supports multiple AI providers. When you configure one, your text messages (and optionally camera frames) are sent to that provider&apos;s API for processing. This is the <strong className="text-white/70">only</strong> network communication the app makes. Each provider has its own privacy policy:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong className="text-white/60">Google Gemini</strong> — <a href="https://ai.google.dev/terms" target="_blank" className="text-white/50 hover:text-white underline underline-offset-2">ai.google.dev/terms</a></li>
              <li><strong className="text-white/60">OpenAI</strong> — <a href="https://openai.com/policies/privacy-policy" target="_blank" className="text-white/50 hover:text-white underline underline-offset-2">openai.com/policies/privacy-policy</a></li>
              <li><strong className="text-white/60">Anthropic (Claude)</strong> — <a href="https://www.anthropic.com/privacy" target="_blank" className="text-white/50 hover:text-white underline underline-offset-2">anthropic.com/privacy</a></li>
              <li><strong className="text-white/60">ElevenLabs</strong> (TTS) — <a href="https://elevenlabs.io/privacy" target="_blank" className="text-white/50 hover:text-white underline underline-offset-2">elevenlabs.io/privacy</a></li>
              <li><strong className="text-white/60">OpenRouter, xAI, Together AI</strong> — refer to their respective privacy policies.</li>
              <li><strong className="text-white/60">Ollama</strong> — runs locally on your own machine. No data leaves your network.</li>
            </ul>
            <p className="mt-3">You choose which provider to use. If you use Ollama, no data ever leaves your device/network. We have no relationship with, control over, or access to any of these third-party services.</p>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">6. API Keys</h2>
            <p>Your API keys for AI providers are stored securely in the <strong className="text-white/70">iOS Keychain</strong> — Apple&apos;s hardware-backed encrypted storage. API keys are:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Never transmitted to us or any party other than the respective AI provider.</li>
              <li>Never logged, cached, or stored in plain text.</li>
              <li>Never included in crash reports or diagnostics (we don&apos;t collect those either).</li>
              <li>Accessible only to the Scowld app on your device.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">7. Local Data Storage</h2>
            <p>The following data is stored locally on your device using Apple&apos;s CoreData framework:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong className="text-white/60">Chat history</strong> — your messages and AI responses.</li>
              <li><strong className="text-white/60">Memory logs</strong> — AI-extracted summaries of key conversation details.</li>
              <li><strong className="text-white/60">Memory slots</strong> — organizational containers for different conversation contexts.</li>
              <li><strong className="text-white/60">Settings</strong> — your preferences (provider, model, TTS backend, etc.).</li>
            </ul>
            <p className="mt-3">All of this data lives exclusively on your iPhone. It is not synced to iCloud, not backed up to any server, and not accessible to anyone but you. You can clear all data at any time from Settings → Clear All Memories.</p>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">8. Text-to-Speech</h2>
            <p>When using ElevenLabs or OpenAI TTS, the AI&apos;s response text is sent to the respective service to generate audio. When using Native iOS TTS, speech synthesis happens entirely on-device with no network requests.</p>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">9. Children&apos;s Privacy</h2>
            <p>Scowld is not directed at children under 13. We do not knowingly collect any data from anyone, including children.</p>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">10. Open Source Transparency</h2>
            <p>Scowld is fully open source under the MIT License. Every line of code is publicly auditable. There are no hidden data collection mechanisms, no obfuscated network calls, and no proprietary SDKs. If you have concerns about what the app does, you can read the source code yourself at <a href="https://github.com/apoorvdarshan/scowld" target="_blank" className="text-white/50 hover:text-white underline underline-offset-2">github.com/apoorvdarshan/scowld</a>.</p>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">11. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be reflected on this page with an updated date. Since the app has no server component, there is no way to push policy changes to users — you would need to check this page.</p>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white/80 mb-3">12. Contact</h2>
            <p>For any privacy concerns or questions, contact:<br />
            <strong className="text-white/60">Apoorv Darshan</strong> — <a href="mailto:ad13dtu@gmail.com" className="text-white/50 hover:text-white underline underline-offset-2">ad13dtu@gmail.com</a></p>
          </div>

        </div>
      </div>
    </div>
  );
}

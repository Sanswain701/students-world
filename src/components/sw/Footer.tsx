import { BRAND, NAV, waLink, WA_MESSAGES } from "@/lib/sw-data";

export function Footer() {
  const services = ["Aadhaar Card", "PAN Card", "Govt Certificates", "Exam Forms", "Print & Scan", "GST Services"];
  return (
    <footer className="relative pt-16 pb-8 bg-[#050810] border-t border-white/5">
      <div
        className="absolute top-0 left-0 right-0 h-[2px] origin-center"
        style={{
          background: "linear-gradient(90deg, transparent, #1A6DFF, #00F0FF, #7B61FF, transparent)",
          animation: "wave-breath 4s ease-in-out infinite",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display font-bold text-2xl text-gradient-blue">{BRAND.name}</div>
          <p className="mt-3 text-white/55 text-sm leading-relaxed max-w-xs">
            Government-approved digital services center in Konark, Odisha. Trusted since over a decade.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
              aria-label="Chat with Students World on WhatsApp"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 hover:border-[#25D366] transition-all">💬</a>
            <a href={`tel:${BRAND.phoneRaw}`} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 hover:border-[#1A6DFF] transition-all">📞</a>
            <a href={`mailto:${BRAND.email}`} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 hover:border-[#00F0FF] transition-all">📧</a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/70 uppercase mb-3">Services</div>
            <ul className="space-y-2 text-white/65 text-sm">
              {services.map((s) => <li key={s} className="hover:text-white transition cursor-pointer">{s}</li>)}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/70 uppercase mb-3">Navigate</div>
            <ul className="space-y-2 text-white/65 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button onClick={() => document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition">{n.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] text-white/70 uppercase mb-3">Opening Hours</div>
          <ul className="space-y-1.5 text-white/65 text-sm">
            <li><span className="text-white/70">Mon–Sat</span> · 9:00 AM – 7:00 PM</li>
            <li><span className="text-white/70">Sunday</span> · 10:00 AM – 4:00 PM</li>
          </ul>
          <div className="mt-5 text-white/55 text-sm leading-relaxed">{BRAND.address}</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-xs font-mono tracking-wider">© 2025 STUDENTS WORLD, KONARK · ALL RIGHTS RESERVED</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 rounded-full glass flex items-center justify-center text-[#00F0FF] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          aria-label="Back to top"
        >↑</button>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-7 mb-5 flex flex-col items-center justify-center">
        <a
          href="https://instagram.com/sanfrfr._"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-sans font-medium text-xs tracking-tight text-white/70 transition-all duration-300 hover:text-white/90 hover:-translate-y-0.5"
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(135deg, rgba(26,109,255,0.08), rgba(0,240,255,0.05), rgba(123,97,255,0.08))" }}
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "linear-gradient(135deg, rgba(26,109,255,0.12), rgba(0,240,255,0.08), rgba(123,97,255,0.12))" }}
          />
          <span className="pointer-events-none absolute inset-0 rounded-full border border-white/[0.06] group-hover:border-[#00F0FF]/25 transition-colors duration-300" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 text-[#00F0FF] transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="relative z-10">
            <span className="text-white/70 group-hover:text-white/90 transition-colors duration-300">✨ Designed & Developed by </span>
            <span className="bg-gradient-to-r from-[#1A6DFF] via-[#00F0FF] to-[#7B61FF] bg-clip-text text-transparent underline decoration-transparent underline-offset-4 transition-all duration-300 group-hover:decoration-[#00F0FF]/50 group-hover:underline-offset-4">@sanfrfr._</span>
          </span>
        </a>
      </div>
    </footer>
  );
}

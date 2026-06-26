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
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase mb-3">Services</div>
            <ul className="space-y-2 text-white/65 text-sm">
              {services.map((s) => <li key={s} className="hover:text-white transition cursor-pointer">{s}</li>)}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase mb-3">Navigate</div>
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
          <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase mb-3">Opening Hours</div>
          <ul className="space-y-1.5 text-white/65 text-sm">
            <li><span className="text-white/45">Mon–Sat</span> · 9:00 AM – 7:00 PM</li>
            <li><span className="text-white/45">Sunday</span> · 10:00 AM – 4:00 PM</li>
          </ul>
          <div className="mt-5 text-white/55 text-sm leading-relaxed">{BRAND.address}</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs font-mono tracking-wider">© 2025 STUDENTS WORLD, KONARK · ALL RIGHTS RESERVED</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 rounded-full glass flex items-center justify-center text-[#00F0FF] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          aria-label="Back to top"
        >↑</button>
      </div>
    </footer>
  );
}

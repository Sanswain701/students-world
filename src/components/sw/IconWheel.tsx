import { motion } from "framer-motion";
import { WHEEL_ICONS } from "@/lib/sw-data";

export function IconWheel() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-50" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="eyebrow mb-5"><span className="live-dot" />About Students World</div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            A decade of <span className="text-gradient">digital trust</span> in Konark.
          </h2>
          <p className="mt-5 text-white/65 leading-relaxed max-w-md">
            Students World is a government-approved digital services center serving citizens of
            Konark and surrounding Puri district. We make complex paperwork simple —
            in Odia, Hindi, or English — with same-day delivery on most services.
          </p>
          <ul className="mt-7 space-y-3 text-white/75 text-[15px]">
            <li className="flex items-start gap-3"><span className="text-[#00F0FF]">✦</span> 30+ government services under one roof</li>
            <li className="flex items-start gap-3"><span className="text-[#00F0FF]">✦</span> Officially authorised submission portals</li>
            <li className="flex items-start gap-3"><span className="text-[#00F0FF]">✦</span> Real-time application tracking</li>
            <li className="flex items-start gap-3"><span className="text-[#00F0FF]">✦</span> Trilingual support — never get confused</li>
          </ul>
        </motion.div>

        <div className="relative mx-auto" style={{ width: "min(500px, 88vw)", aspectRatio: "1 / 1" }}>
          {/* Outer dashed ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(0,240,255,0.18)]" />
          <div className="absolute inset-[8%] rounded-full border border-dashed border-[rgba(255,255,255,0.08)]" />

          {/* Center */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex items-center justify-center font-display font-bold text-white text-2xl"
            style={{
              background: "linear-gradient(135deg, #1A6DFF, #00F0FF)",
              boxShadow: "0 0 40px rgba(26,109,255,0.5), 0 0 80px rgba(26,109,255,0.25)",
              animation: "pulse 3s ease-in-out infinite",
            }}
          >
            SW
          </div>

          {/* Orbit */}
          <div
            className="absolute inset-[6%] group"
            style={{ animation: "orbit-spin 26s linear infinite" }}
          >
            {WHEEL_ICONS.map((ic, i) => {
              const angle = (i / WHEEL_ICONS.length) * Math.PI * 2 - Math.PI / 2;
              const r = 42; // percent
              const x = (50 + Math.cos(angle) * r).toFixed(4);
              const y = (50 + Math.sin(angle) * r).toFixed(4);
              return (
                <div
                  key={i}
                  className="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full glass flex items-center justify-center text-xl hover:scale-150 hover:border-[#00F0FF] hover:shadow-[0_0_24px_rgba(0,240,255,0.5)] transition-all duration-300"
                  style={{
                    left: `${x}%`, top: `${y}%`,
                    animation: "counter-spin 26s linear infinite",
                    transformOrigin: "center",
                  }}
                  aria-hidden="true"
                >
                  {ic}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

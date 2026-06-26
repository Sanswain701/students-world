import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, FLIP_SERVICES } from "@/lib/sw-data";
import { ParticleCanvas } from "./ParticleCanvas";

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % FLIP_SERVICES.length), 2500);
    return () => clearInterval(t);
  }, []);

  const studentsLetters = "Students".split("");
  const worldLetters = "World".split("");

  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center text-center pt-32 pb-24 px-6">
      {/* Aurora */}
      <div
        className="absolute inset-0 aurora-bg"
        style={{ animation: "aurora-shift 22s ease-in-out infinite", backgroundSize: "200% 200%" }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-70" />

      {/* Floating shapes (CSS-only 3D-ish) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[8%] top-[18%] w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(26,109,255,0.35), transparent 60%)",
            filter: "blur(20px)", animation: "float-slow 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[6%] top-[28%] w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(0,240,255,0.28), transparent 60%)",
            filter: "blur(24px)", animation: "float-slower 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[28rem] h-[28rem] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(123,97,255,0.22), transparent 60%)",
            filter: "blur(30px)", animation: "float-slow 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0"><ParticleCanvas density={90} /></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex eyebrow mb-8">
          <span className="live-dot" />
          Government · Digital · Services · Konark
        </motion.div>

        <h1 className="font-display font-bold leading-[0.95] tracking-[-0.04em] text-white" style={{ fontSize: "clamp(48px, 10vw, 110px)" }}>
          <span className="block">
            {studentsLetters.map((c, i) => (
              <span key={i} className="inline-block"
                style={{ animation: `letter-up .8s cubic-bezier(.16,1,.3,1) ${0.3 + i * 0.04}s both` }}>
                {c}
              </span>
            ))}
          </span>
          <span className="block text-gradient">
            {worldLetters.map((c, i) => (
              <span key={i} className="inline-block"
                style={{ animation: `letter-up .8s cubic-bezier(.16,1,.3,1) ${0.6 + i * 0.05}s both` }}>
                {c}
              </span>
            ))}
          </span>
        </h1>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.5 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 font-display text-2xl md:text-4xl">
          <span className="text-white/70">Your one stop for</span>
          <span className="relative inline-block h-[1.2em] overflow-hidden align-middle" style={{ minWidth: "min(78vw, 460px)" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 text-left text-[#00F0FF] font-semibold whitespace-nowrap"
              >
                {FLIP_SERVICES[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-8 max-w-xl mx-auto text-white/65 text-base md:text-lg leading-relaxed">
          Fast. Secure. Government Approved.<br />
          Trusted by <span className="text-white font-semibold">10,000+ citizens</span> across Odisha.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
            ✦ Apply Now →
          </a>
          <a href={`tel:${BRAND.phoneRaw}`} className="btn-ghost">📞 Call Now</a>
          <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost">📍 Find Us</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" style={{ animation: "bar-bounce 2s ease-in-out infinite" }}>
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-[#00F0FF] to-transparent" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/40">SCROLL</span>
      </div>
    </section>
  );
}

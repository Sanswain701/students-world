import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/sw-data";

function Counter({ to, suffix, delay }: { to: number; suffix: string; delay: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !triggered.current) {
        triggered.current = true;
        const start = performance.now();
        const dur = 2000;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start - delay) / dur);
          if (p < 0) { requestAnimationFrame(tick); return; }
          const eased = 1 - Math.pow(1 - p, 4);
          setV(Math.floor(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, delay]);

  return <div ref={ref} className="font-display font-bold text-gradient-blue tabular-nums leading-none break-words" style={{ fontSize: "clamp(26px, 7vw, 48px)" }}>{v.toLocaleString()}{suffix}</div>;
}

export function Stats() {
  return (
    <section className="relative py-24 bg-[#080B14] px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass shimmer-top relative rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <Counter to={s.value} suffix={s.suffix} delay={i * 150} />
            <div className="mt-2 font-mono text-[11px] tracking-[0.2em] text-white/55 uppercase">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

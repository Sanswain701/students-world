import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SERVICES, waLink } from "@/lib/sw-data";

function Card({ icon, title, desc, wa, i }: { icon: string; title: string; desc: string; wa: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.a
        href={waLink(wa)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp about ${title}`}
        ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="glass group relative rounded-3xl p-7 h-full overflow-hidden block hover:border-[rgba(0,240,255,0.25)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(26,109,255,0.18)] transition-shadow duration-500"
      >
        <div className="absolute -inset-px rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "conic-gradient(from var(--angle, 0deg), #1A6DFF, #00F0FF, #7B61FF, #1A6DFF)", filter: "blur(14px)", zIndex: -1 }} />
        <div className="text-4xl mb-5 inline-flex w-14 h-14 items-center justify-center rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(26,109,255,0.25), rgba(0,240,255,0.12))", border: "1px solid rgba(0,240,255,0.2)" }}>
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-white/60 text-[14px] leading-relaxed mb-6">{desc}</p>
        <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#00F0FF]">
          💬 Chat on WhatsApp <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </motion.a>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="eyebrow mb-5"><span className="live-dot" />Our Services</div>
          <h2 className="font-display font-semibold tracking-[-0.03em] text-white" style={{ fontSize: "clamp(34px, 5vw, 56px)" }}>
            Everything you need — <span className="text-gradient">under one roof</span>
          </h2>
          <p className="mt-4 text-white/55 max-w-xl mx-auto">
            From identity papers to scholarship forms, we handle the paperwork so you don't have to.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => <Card key={s.title} {...s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/sw-data";

export function WhyUs() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="eyebrow mb-5"><span className="live-dot" />Why Students World</div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Built on <span className="text-gradient">trust, speed</span> and precision.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {WHY_US.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass relative rounded-2xl p-6 group hover:-translate-y-2 hover:border-[rgba(0,240,255,0.25)] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, #1A6DFF, #00F0FF)" }} />
              <div className="text-3xl mb-4">{w.icon}</div>
              <h3 className="font-display font-semibold text-white text-lg mb-1.5 tracking-tight">{w.title}</h3>
              <p className="text-white/55 text-[13px] leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

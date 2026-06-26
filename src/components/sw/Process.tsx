import { motion } from "framer-motion";
import { PROCESS } from "@/lib/sw-data";

export function Process() {
  return (
    <section id="process" className="relative py-28 px-6 bg-[#080B14]">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="eyebrow mb-5"><span className="live-dot" />How it works</div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Five steps. <span className="text-gradient">Zero hassle.</span>
          </h2>
        </motion.div>

        <div className="relative pl-[72px]">
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px opacity-50"
            style={{ background: "linear-gradient(to bottom, transparent, #1A6DFF 10%, #00F0FF 50%, #7B61FF 90%, transparent)" }}
          />
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0 group"
            >
              <div className="absolute -left-[72px] top-0 w-14 h-14 rounded-full glass flex items-center justify-center font-display font-semibold text-white group-hover:border-[#00F0FF] group-hover:bg-[rgba(26,109,255,0.15)] group-hover:shadow-[0_0_24px_rgba(0,240,255,0.35)] transition-all">
                {step.n}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

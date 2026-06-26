import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/sw-data";

function Card({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="glass shrink-0 w-[340px] md:w-[380px] rounded-2xl p-7 hover:border-[rgba(0,240,255,0.3)] hover:scale-[1.02] transition-all duration-300">
      <div className="text-[#00F0FF] mb-3">★★★★★</div>
      <p className="text-white/85 leading-relaxed text-[15px] mb-5">"{quote}"</p>
      <div>
        <div className="font-display font-semibold text-white">{name}</div>
        <div className="text-white/50 text-[12px] font-mono tracking-wider uppercase mt-0.5">{role}</div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-28 bg-[#080B14] overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14 px-6">
        <div className="eyebrow mb-5"><span className="live-dot" />Testimonials</div>
        <h2 className="font-display font-semibold text-white tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
          From the citizens of <span className="text-gradient">Konark.</span>
        </h2>
      </motion.div>

      <div className="marquee overflow-hidden">
        <div className="marquee-track marquee-left" style={{ animationDuration: "40s" }}>
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => <Card key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
}

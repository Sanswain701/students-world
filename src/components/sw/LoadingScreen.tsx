import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    let p = 0;
    const tick = () => {
      p += Math.random() * 7 + 2;
      if (p >= 100) { p = 100; setProgress(100); setTimeout(() => setShow(false), 400); return; }
      setProgress(p);
      raf = window.setTimeout(tick, 90) as unknown as number;
    };
    const start = window.setTimeout(tick, 600);
    return () => { clearTimeout(start); clearTimeout(raf); };
  }, []);

  const letters = "Students World".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute inset-0 aurora-bg opacity-60" />
          <div className="relative flex flex-col items-center gap-8">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
              {letters.map((ch, i) => (
                <span
                  key={i}
                  className="inline-block text-gradient-blue"
                  style={{ animation: `letter-up .7s cubic-bezier(.16,1,.3,1) ${0.2 + i * 0.04}s both` }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
              className="font-mono text-[11px] tracking-[0.3em] text-white/50 uppercase"
            >
              Your Digital Service Partner
            </motion.div>
            <div className="h-[2px] w-[220px] rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1A6DFF] to-[#00F0FF] transition-[width] duration-150"
                style={{ width: `${progress}%`, boxShadow: "0 0 12px #00F0FF" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

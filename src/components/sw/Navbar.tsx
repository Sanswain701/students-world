import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, BRAND, waLink, WA_MESSAGES } from "@/lib/sw-data";

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      if (y > 80 && y > lastY) setVisible(false);
      else setVisible(true);
      lastY = y;

      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom > 120) { setActive(item.id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: visible ? 0 : -140, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.3 }}
        className={`fixed left-1/2 top-5 z-[1000] -translate-x-1/2 flex items-center gap-6 px-6 py-3 rounded-full ${scrolled ? "glass-strong" : "glass"}`}
        style={{ width: "min(94vw, 920px)" }}
      >
        <button onClick={() => go("home")} className="font-display font-bold text-lg text-gradient-blue tracking-tight">
          SW
        </button>
        <div className="hidden md:flex items-center gap-6 mx-auto">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative font-sans text-[14px] font-medium transition-colors ${active === item.id ? "text-[#00F0FF]" : "text-white/65 hover:text-white"}`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[1.5px] bg-gradient-to-r from-[#1A6DFF] to-[#00F0FF] transition-all duration-300 ${active === item.id ? "w-full" : "w-0"}`}
              />
            </button>
          ))}
        </div>
        <a href={`tel:${BRAND.phoneRaw}`} className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
          Contact Us →
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto w-9 h-9 rounded-full glass flex items-center justify-center text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[999] md:hidden glass-strong flex flex-col items-center justify-center gap-8 px-6"
          >
            {NAV.map((item) => (
              <button key={item.id} onClick={() => go(item.id)} className="font-display text-4xl font-bold text-white">
                {item.label}
              </button>
            ))}
            <a href={`tel:${BRAND.phoneRaw}`} className="btn-primary mt-4">Contact Us →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

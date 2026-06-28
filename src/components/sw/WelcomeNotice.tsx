import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "sw_welcome_dismissed_v1";

export function WelcomeNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(KEY)) return;
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => setOpen(true), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => dismiss(), 8000);
    return () => clearTimeout(t);
  }, [open]);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const explore = () => {
    dismiss();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(6px)" }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
          role="dialog"
          aria-label="Welcome to Students World"
          className="fixed z-[9997] left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 w-[min(94vw,420px)] glass-strong rounded-2xl p-4 sm:p-5"
          style={{
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,240,255,0.12), 0 0 40px rgba(26,109,255,0.18)",
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,109,255,0.35), rgba(0,240,255,0.18))",
                border: "1px solid rgba(0,240,255,0.25)",
              }}
              aria-hidden="true"
            >
              👋
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display font-semibold text-white text-[15px] leading-tight">
                Welcome to Students World
              </div>
              <p className="mt-1 text-[13px] text-white/70 leading-snug">
                Your Digital Service Center in Konark. Explore our services with a premium experience.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={explore}
                  className="btn-primary !py-2 !px-4 text-xs"
                >
                  Explore →
                </button>
                <button
                  onClick={dismiss}
                  className="text-xs text-white/60 hover:text-white px-3 py-2 rounded-full transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
            <button
              onClick={dismiss}
              aria-label="Close welcome notice"
              className="shrink-0 -mt-1 -mr-1 w-7 h-7 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

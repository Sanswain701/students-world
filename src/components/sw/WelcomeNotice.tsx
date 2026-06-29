import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Laptop, X } from "lucide-react";

const SESSION_KEY = "sw_announce_closed_session_v1";
const REAPPEAR_MS = 45000;
const AUTO_HIDE_MS = 6000;
const INITIAL_DELAY_MS = 800;

export function WelcomeNotice() {
  const [open, setOpen] = useState(false);
  const [closedForSession, setClosedForSession] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        setClosedForSession(true);
        return;
      }
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => setOpen(true), INITIAL_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Auto-hide after AUTO_HIDE_MS, then re-show after REAPPEAR_MS — until user closes.
  useEffect(() => {
    if (closedForSession) return;
    if (!open) {
      const t = setTimeout(() => setOpen(true), REAPPEAR_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setOpen(false), AUTO_HIDE_MS);
    return () => clearTimeout(t);
  }, [open, closedForSession]);

  const close = () => {
    setOpen(false);
    setClosedForSession(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const explore = () => {
    close();
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {open && !closedForSession && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.97, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(6px)" }}
          transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
          role="dialog"
          aria-label="Best experience announcement"
          className="fixed left-1/2 -translate-x-1/2 z-[9997] w-[min(94vw,620px)]
                     top-[calc(env(safe-area-inset-top,0px)+88px)]
                     md:top-[calc(env(safe-area-inset-top,0px)+96px)]"
        >
          <motion.div
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
            className="relative rounded-[28px] p-4 sm:p-5"
            style={{
              background: "rgba(10,15,25,0.72)",
              backdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(0,255,255,0.15)",
              boxShadow:
                "0 25px 70px rgba(0,170,255,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex items-start gap-3 sm:gap-4 pr-8">
              <motion.div
                initial={{ rotate: -8, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 14 }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #e8f4ff 100%)",
                  boxShadow:
                    "0 8px 24px rgba(0,170,255,0.35), 0 0 0 1px rgba(0,240,255,0.25), inset 0 -2px 6px rgba(0,109,255,0.1)",
                }}
                aria-hidden="true"
              >
                <Laptop size={20} strokeWidth={2.2} className="text-[#0A1018]" />
              </motion.div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold text-white text-[14px] sm:text-[15px] leading-tight">
                  For the Best Experience, Visit from a Desktop or Laptop!
                </h3>
                <p className="mt-1.5 text-[12px] sm:text-[13px] text-white/70 leading-snug">
                  Students World is fully functional on mobile, but advanced animations
                  and visual effects shine on larger screens.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    onClick={close}
                    className="btn-primary !py-2 !px-4 text-xs min-h-[40px]"
                    aria-label="Continue on Mobile"
                  >
                    Continue on Mobile →
                  </button>
                  <button
                    onClick={explore}
                    className="btn-ghost !py-2 !px-4 text-xs min-h-[40px]"
                    aria-label="Explore Features"
                  >
                    Explore Features
                  </button>
                </div>
              </div>
            </div>

            <motion.button
              onClick={close}
              aria-label="Close announcement"
              whileHover={{ rotate: 90, scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <X size={14} strokeWidth={2.4} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

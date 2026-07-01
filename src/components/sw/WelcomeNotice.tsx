import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Laptop, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const SESSION_KEY = "sw_announce_closed_session_v1";
const REAPPEAR_MS = 45000;
const AUTO_HIDE_MS = 6000;
const INITIAL_DELAY_MS = 800;

export function WelcomeNotice() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const [closedForSession, setClosedForSession] = useState(false);

  useEffect(() => {
    if (!isMobile || typeof window === "undefined") return;
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
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || closedForSession) return;
    if (!open) {
      const t = setTimeout(() => setOpen(true), REAPPEAR_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setOpen(false), AUTO_HIDE_MS);
    return () => clearTimeout(t);
  }, [isMobile, open, closedForSession]);

  const close = () => {
    setOpen(false);
    setClosedForSession(true);
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  // Do not render at all on tablets, laptops, or desktops.
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {open && !closedForSession && (
        <motion.div
          initial={{ opacity: 0, y: -30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.8 }}
          aria-live="polite"
          className="fixed left-1/2 -translate-x-1/2 z-[9997] w-[92%] top-[calc(env(safe-area-inset-top,0px)+84px)]"
        >
          <div
            className="relative flex items-center gap-3 h-[70px] pl-3 pr-3 rounded-full"
            style={{
              background: "rgba(10,15,25,0.62)",
              backdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(0,240,255,0.12)",
              boxShadow: "0 20px 50px rgba(0,170,255,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #e8f4ff 100%)",
                boxShadow: "0 6px 18px rgba(0,170,255,0.28), 0 0 0 1px rgba(0,240,255,0.2)",
              }}
              aria-hidden="true"
            >
              <Laptop size={18} strokeWidth={2.2} className="text-[#0A1018]" />
            </div>

            <p className="flex-1 min-w-0 font-display font-semibold text-white text-[13px] leading-snug pr-1">
              For the Best Experience, Visit from a Desktop or Laptop!
            </p>

            <motion.button
              onClick={close}
              aria-label="Close announcement"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <X size={14} strokeWidth={2.4} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type T = { id: number; msg: string; type?: "success" | "info" | "warning" };
type Ctx = { push: (t: Omit<T, "id">) => void };

const ToastCtx = createContext<Ctx>({ push: () => {} });
export const useToast = () => useContext(ToastCtx);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<T[]>([]);
  const push = useCallback((t: Omit<T, "id">) => {
    const id = Date.now() + Math.random();
    setToasts((p) => [...p, { ...t, id }]);
    setTimeout(() => setToasts((p) => p.filter((x) => x.id !== id)), 2600);
  }, []);

  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="fixed top-6 right-6 z-[99999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => {
            const color = t.type === "warning" ? "#F59E0B" : t.type === "success" ? "#22D3A4" : "#00F0FF";
            return (
              <motion.div
                key={t.id}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="glass-strong pointer-events-auto rounded-xl px-4 py-3 text-white text-sm flex items-center gap-3 min-w-[240px]"
                style={{ borderColor: `${color}55`, boxShadow: `0 8px 30px ${color}22` }}
              >
                <span style={{ color }}>●</span>
                <span>{t.msg}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  );
}

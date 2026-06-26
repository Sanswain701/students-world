import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9998] transition-[width] duration-100"
      style={{
        width: `${w}%`,
        background: "linear-gradient(90deg, #1A6DFF, #00F0FF)",
        boxShadow: "0 0 8px #00F0FF",
      }}
    />
  );
}

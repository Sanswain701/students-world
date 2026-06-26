import { TICKER_ROW_1, TICKER_ROW_2 } from "@/lib/sw-data";

function Card({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="glass shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl hover:border-[rgba(0,240,255,0.4)] hover:shadow-[0_0_24px_rgba(0,240,255,0.18)] transition-all duration-300 hover:-translate-y-1">
      <span className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
        style={{ background: "linear-gradient(135deg, rgba(26,109,255,0.25), rgba(0,240,255,0.15))", border: "1px solid rgba(0,240,255,0.18)" }}>
        {icon}
      </span>
      <span className="text-sm font-medium text-white/85 whitespace-nowrap">{name}</span>
    </div>
  );
}

export function ServicesTicker() {
  return (
    <section className="marquee relative py-10 bg-[#080B14] border-y border-white/5 overflow-hidden">
      <div className="overflow-hidden mb-3">
        <div className="marquee-track marquee-left">
          {[...TICKER_ROW_1, ...TICKER_ROW_1].map((s, i) => <Card key={`r1-${i}`} {...s} />)}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track marquee-right">
          {[...TICKER_ROW_2, ...TICKER_ROW_2].map((s, i) => <Card key={`r2-${i}`} {...s} />)}
        </div>
      </div>
    </section>
  );
}

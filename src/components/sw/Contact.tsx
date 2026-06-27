import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/sw-data";
import { useToast } from "./Toast";

function InfoCard({ icon, label, value, onClick, href }: { icon: string; label: string; value: string; onClick?: () => void; href?: string }) {
  const Comp = (href ? "a" : "button") as "a";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className="glass w-full rounded-2xl p-5 flex items-center gap-4 text-left hover:translate-x-1 hover:border-[rgba(0,240,255,0.3)] hover:shadow-[0_0_24px_rgba(0,240,255,0.15)] transition-all"
    >
      <span className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: "linear-gradient(135deg, rgba(26,109,255,0.25), rgba(0,240,255,0.12))", border: "1px solid rgba(0,240,255,0.18)" }}>
        {icon}
      </span>
      <div className="min-w-0">
        <div className="font-mono text-[10px] tracking-[0.25em] text-white/70 uppercase">{label}</div>
        <div className="text-white text-[15px] font-medium truncate">{value}</div>
      </div>
    </Comp>
  );
}

export function Contact() {
  const { push } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const copy = async (text: string, label: string) => {
    try { await navigator.clipboard.writeText(text); push({ msg: `${label} copied! ✓`, type: "success" }); }
    catch { push({ msg: "Could not copy", type: "warning" }); }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    (["name", "phone", "service", "message"] as const).forEach((k) => { if (!form[k].trim()) errs[k] = true; });
    setErrors(errs);
    if (Object.keys(errs).length) { push({ msg: "Please fill in all fields ⚠️", type: "warning" }); return; }
    const text = `Hi Students World!%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    push({ msg: "Opening WhatsApp… ✓", type: "success" });
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="eyebrow mb-5"><span className="live-dot" />Contact</div>
          <h2 className="font-display font-semibold text-white tracking-[-0.03em]" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
            Let's get your <span className="text-gradient">paperwork done.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left */}
          <div className="space-y-4">
            <InfoCard icon="📧" label="Email" value={BRAND.email} onClick={() => copy(BRAND.email, "Email")} />
            <InfoCard icon="📞" label="Phone" value={BRAND.phone} onClick={() => copy(BRAND.phone, "Phone")} />
            <InfoCard icon="📍" label="Address" value={BRAND.address} href={BRAND.mapsUrl} />

            <div className="relative glass rounded-2xl overflow-hidden mt-4" style={{ height: 280 }}>
              <iframe
                title="Students World location"
                src={`https://www.google.com/maps?q=${BRAND.coords.lat},${BRAND.coords.lng}&z=15&output=embed`}
                width="100%" height="100%" loading="lazy"
                style={{ border: 0, filter: "hue-rotate(180deg) invert(0.92) brightness(0.85) contrast(1.1) saturate(1.2)" }}
              />
              <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer"
                className="absolute bottom-4 right-4 btn-primary !py-2 !px-4 text-sm">
                📍 Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={submit} className="glass rounded-3xl p-7 md:p-9">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-white tracking-tight">Send us a message</h3>
            <p className="text-white/55 text-sm mt-1.5">We'll get back to you within a few hours.</p>

            <div className="mt-7 space-y-4">
              {[
                { k: "name", label: "Your Name", type: "text" },
                { k: "phone", label: "Phone Number", type: "tel" },
                { k: "service", label: "Service Required", type: "text" },
              ].map((f) => (
                <input
                  key={f.k}
                  type={f.type}
                  placeholder={f.label}
                  value={form[f.k as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className={`w-full bg-white/[0.04] rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 outline-none border transition-all focus:border-[#00F0FF] focus:shadow-[0_0_0_3px_rgba(0,240,255,0.1)] ${errors[f.k] ? "border-red-500/60 animate-pulse" : "border-white/10"}`}
                />
              ))}
              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`w-full bg-white/[0.04] rounded-xl px-4 py-3.5 text-white placeholder:text-white/60 outline-none border transition-all focus:border-[#00F0FF] focus:shadow-[0_0_0_3px_rgba(0,240,255,0.1)] resize-none ${errors.message ? "border-red-500/60 animate-pulse" : "border-white/10"}`}
              />
              <button type="submit" className="btn-primary w-full">💬 Send via WhatsApp →</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

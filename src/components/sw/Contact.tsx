import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/sw-data";
import { useToast } from "./Toast";
import buildingImage from "@/assets/students-world-building.jpg";

function InfoCard({ icon, label, value, onClick, href }: { icon: string; label: string; value: string; onClick?: () => void; href?: string }) {
  const Comp = (href ? "a" : "button") as "a";
  return (
    <Comp
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
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
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [lightbox]);

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

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left */}
          <div className="space-y-4 min-w-0">
            <InfoCard icon="📧" label="Email" value={BRAND.email} onClick={() => copy(BRAND.email, "Email")} />
            <InfoCard icon="📞" label="Phone" value={BRAND.phone} onClick={() => copy(BRAND.phone, "Phone")} />
            <InfoCard icon="📍" label="Address" value={BRAND.address} href={BRAND.mapsUrl} />

            {/* Building photo — click to open lightbox */}
            <button
              type="button"
              onClick={() => setLightbox(true)}
              aria-label="View larger photo of Students World building"
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_-12px_rgba(0,240,255,0.25)] transition-all duration-300 hover:border-[rgba(0,240,255,0.35)] hover:shadow-[0_18px_60px_-10px_rgba(0,240,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              style={{ aspectRatio: "16 / 10" }}
            >
              <img
                src={buildingImage}
                alt="Students World service center — building exterior near Madhipur Chhaka, Konark"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-mono text-[10px] tracking-[0.25em] text-white/70 uppercase">Our Center</div>
                  <div className="text-white text-sm font-medium truncate">Students World, Konark</div>
                </div>
                <span className="shrink-0 rounded-full bg-white/10 backdrop-blur px-2.5 py-1 text-[11px] text-white/90 border border-white/15">Tap to expand</span>
              </div>
            </button>

            {/* Map */}
            <a
              href="https://maps.app.goo.gl/b76we2Q2NeL7gaEh6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Students World location in Google Maps"
              className="relative glass rounded-2xl overflow-hidden mt-4 w-full block group transition-all duration-300 hover:border-[rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
              style={{ height: 280 }}
            >
              <iframe
                title="Students World location on Google Maps"
                src={`https://www.google.com/maps?q=${BRAND.coords.lat},${BRAND.coords.lng}&z=17&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full border-0 pointer-events-none"
                style={{ filter: "hue-rotate(180deg) invert(0.92) brightness(0.85) contrast(1.1) saturate(1.2)" }}
              />
              <span
                className="absolute bottom-3 right-3 btn-primary !py-2 !px-3 text-xs sm:text-sm sm:!px-4 max-w-[calc(100%-1.5rem)] truncate"
              >
                📍 Open in Maps
              </span>
            </a>
          </div>

          {/* Right — form */}
          <form onSubmit={submit} className="glass rounded-3xl p-5 sm:p-7 md:p-9 min-w-0 w-full">
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog" aria-modal="true" aria-label="Students World building photo"
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[88vh] overflow-auto rounded-2xl border border-white/10 shadow-[0_30px_120px_-20px_rgba(0,240,255,0.35)]"
              style={{ touchAction: "pinch-zoom" }}
            >
              <img
                src={buildingImage}
                alt="Students World service center — building exterior, Konark"
                className="block w-full h-auto select-none"
                draggable={false}
              />
            </motion.div>
            <button
              type="button"
              onClick={() => setLightbox(false)}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg flex items-center justify-center backdrop-blur transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

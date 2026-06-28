import { BRAND, waLink, WA_MESSAGES } from "@/lib/sw-data";

export function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-8 z-[999] flex flex-col gap-3">
      <a
        href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer"
        aria-label="Chat with Students World on WhatsApp"
        className="group float-bob float-pulse w-[52px] h-[52px] rounded-full flex items-center justify-center text-xl text-[#25D366] hover:scale-110 hover:-translate-y-1 active:scale-95 transition-transform"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 6px 24px rgba(37,211,102,0.45)" }}
      >
        <span className="text-white">💬</span>
      </a>
      <a
        href={`tel:${BRAND.phoneRaw}`} aria-label="Call now"
        className="group float-bob float-pulse w-[52px] h-[52px] rounded-full flex items-center justify-center text-xl text-[#00F0FF] hover:scale-110 hover:-translate-y-1 active:scale-95 transition-transform"
        style={{ background: "linear-gradient(135deg, #1A6DFF, #00F0FF)", boxShadow: "0 6px 24px rgba(26,109,255,0.5)", animationDelay: "0.8s" }}
      >
        <span className="text-white">📞</span>
      </a>
    </div>
  );
}

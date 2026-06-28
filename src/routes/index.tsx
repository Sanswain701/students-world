import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/sw/LoadingScreen";
import { Navbar } from "@/components/sw/Navbar";
import { Hero } from "@/components/sw/Hero";
import { ServicesTicker } from "@/components/sw/ServicesTicker";
import { Stats } from "@/components/sw/Stats";
import { ServicesGrid } from "@/components/sw/ServicesGrid";
import { IconWheel } from "@/components/sw/IconWheel";
import { Process } from "@/components/sw/Process";
import { WhyUs } from "@/components/sw/WhyUs";
import { Testimonials } from "@/components/sw/Testimonials";
import { Contact } from "@/components/sw/Contact";
import { Footer } from "@/components/sw/Footer";
import { FloatingButtons } from "@/components/sw/FloatingButtons";
import { ScrollProgress } from "@/components/sw/ScrollProgress";
import { ToastProvider } from "@/components/sw/Toast";
import { SmoothScroll } from "@/components/sw/SmoothScroll";
import { WelcomeNotice } from "@/components/sw/WelcomeNotice";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Students World — Government & Digital Services in Konark, Odisha" },
      { name: "description", content: "Students World offers fast, trusted, government-approved digital services in Konark — Aadhaar, PAN, certificates, exam forms, printing & more." },
      { name: "keywords", content: "cyber cafe Konark, Aadhaar card Konark, PAN card Konark, government certificates Odisha, Students World Konark" },
      { name: "geo.region", content: "IN-OR" },
      { name: "geo.placename", content: "Konark, Odisha" },
      { name: "geo.position", content: "19.8924999;86.0878677" },
      { property: "og:title", content: "Students World — Your Digital Service Partner" },
      { property: "og:description", content: "Fast, secure, government-approved digital services in Konark, Odisha." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ToastProvider>
      <SmoothScroll />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="bg-black text-white">
        <Hero />
        <ServicesTicker />
        <Stats />
        <ServicesGrid />
        <IconWheel />
        <Process />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <WelcomeNotice />
    </ToastProvider>
  );
}

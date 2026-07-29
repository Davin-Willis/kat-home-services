import MotionProvider from "@/components/MotionProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import BeforeAfter from "@/components/BeforeAfter";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/components/Footer";

/**
 * The "/" route. This stays a Server Component — it just composes the
 * sections in order. Anything animated is a Client Component underneath.
 */
export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <BeforeAfter />
        <ServiceArea />
      </main>
      <Footer />
    </MotionProvider>
  );
}

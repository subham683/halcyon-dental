import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ChatWidget from "@/components/ChatWidget";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <ChatWidget />
      <FAQ />
      <AppointmentForm />
      <ContactSection />
      <Footer />
      <FloatingChatButton />
    </main>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import InvitationCard from "@/components/wedding/InvitationCard";
import KidsSection from "@/components/wedding/KidsSection";
import CalendarSection from "@/components/wedding/CalendarSection";
import RsvpSection from "@/components/wedding/RsvpSection";
import InstapaySection from "@/components/wedding/InstapaySection";
import LocationSection from "@/components/wedding/LocationSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {!envelopeOpened ? (
          <motion.div key="hero" exit={{ opacity: 0, y: -50 }} transition={{ duration: 1 }}>
            <HeroSection onOpen={() => setEnvelopeOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <InvitationCard />
            <KidsSection />
            <CalendarSection />
            <RsvpSection />
            <InstapaySection />
            <LocationSection />
            <DressCodeSection />
            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;

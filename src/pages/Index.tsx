import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesPageContent from "@/components/sections/ServicesPageContent";
import RecruitmentProcessCards from "@/components/sections/RecruitmentProcessCards";
import PartnerSection from "@/components/sections/PartnerSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection showAll={true} />
    
    {/* Full Services Data - replaced simple ServicesSection to avoid duplication */}
    <div id="services-detailed">
      <ServicesPageContent />
    </div>

    {/* Recruitment Process Phase */}
    <div id="recruitment-process-detailed">
      <RecruitmentProcessCards />
    </div>

    {/* Strategic Partnership & Differentiators from Why Us page */}
    <div id="partnership-data" className="bg-surface/10">
      <PartnerSection />
    </div>
    
    <div id="differentiators-data" className="bg-surface/30">
      <DifferentiatorsSection />
    </div>

    {/* The Why Us Section (Base) */}
    <WhyUsSection />

    {/* Direct Contact Form & HQ Info */}
    <div id="contact-detailed">
      <ContactSection />
    </div>

    <CTASection />
    <Footer />
  </>
);

export default Index;

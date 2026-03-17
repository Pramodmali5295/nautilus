import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PartnerSection from "@/components/sections/PartnerSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import { useEffect } from "react";
import { motion } from "framer-motion";

const WhyUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background font-display">
            <Navbar />
            <main className="flex-grow">
                <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 md:pt-32 bg-navy">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="/assets/images/office_landscape.png"
                            alt="Strategic Excellence"
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-navy/30" />
                    </motion.div>

                    <div className="relative z-10 w-full px-4 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block text-white tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase text-[10px] sm:text-xs md:text-sm mb-6 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full gradient-gold shadow-lg border border-white/20 backdrop-blur-sm"
                        >
                            Strategic Advantage
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight py-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                        >
                            Why <span className="text-gradient-gold italic">Nautilus? </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed px-4 text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] font-medium"
                        >
                            The preferred partner for organizations that demand precision, reliability, and world-class talent architecture.
                        </motion.p>
                    </div>

                    </header>



                <div className="bg-surface/10">
                    <PartnerSection />
                </div>

                <div className="bg-surface/30">
                    <DifferentiatorsSection />
                </div>

                <div className="bg-background">
                    <WhyUsSection />
                </div>

                <CTASection />


            </main>
            <Footer />
        </div>
    );
};

export default WhyUs;


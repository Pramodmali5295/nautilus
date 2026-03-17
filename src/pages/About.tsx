import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background font-display">
            <Navbar />
            <main className="flex-grow">
                <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden font-display pt-32 md:pt-32 bg-navy">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="/assets/images/office_landscape.png"
                            alt="Office Background"
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
                            className="inline-block text-white tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase text-[10px] sm:text-xs md:text-sm mb-6 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-blue-600 shadow-lg border border-white/20 backdrop-blur-sm"
                        >
                            Discover Nautilus
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight py-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                        >
                            About <span className="text-gradient-gold italic">Nautilus</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed px-4 text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] font-medium"
                        >
                            We are the strategic link between visionary organizations and the world-class talent they need to thrive.
                        </motion.p>
                    </div>

                </header>

                <div>
                    <AboutSection />
                </div>
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default About;

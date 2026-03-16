import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RecruitmentProcessSection from "@/components/sections/RecruitmentProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import RecruitmentProcessCards from "@/components/sections/RecruitmentProcessCards";
import CTASection from "@/components/sections/CTASection";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Target } from "lucide-react";

const RecruitmentProcess = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background overflow-hidden font-display">
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
                            alt="Precision Methodology"
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                        />
                        <div className="absolute inset-0 bg-navy/30" />
                    </motion.div>

                    <div className="relative z-10 w-full px-6 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block text-white tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase text-[10px] sm:text-xs md:text-sm mb-6 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-blue-600 shadow-lg border border-white/20 backdrop-blur-sm"
                        >
                            Methodology Brief
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-tight py-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                        >
                            Our <span className="text-gradient-gold italic">Process</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed px-4 text-pretty drop-shadow-[0_2_8px_rgba(0,0,0,0.4)] font-medium"
                        >
                            A precision-engineered recruitment lifecycle designed to bridge the gap between world-class talent and visionary organizations.
                        </motion.p>
                    </div>

                </header>

                {/* Professional Interview Imagery Section */}
                <section className="py-8 bg-background relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24">
                    <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
                        >
                            <img
                                src="/assets/images/female_professional.png"
                                alt="Employer and Candidate Consulting with Us"
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_24,_43,_0.1)] relative group"
                        >
                            <img
                                src="/assets/images/interview.png"
                                alt="Formal Interview Process"
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                        </motion.div>
                    </div>
                </section>

                <div className="bg-background pb-16">
                    <RecruitmentProcessCards />
                </div>
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default RecruitmentProcess;


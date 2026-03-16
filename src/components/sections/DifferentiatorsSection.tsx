import { TrendingUp, ShieldCheck, Heart, MessageCircle, Zap, Briefcase, Handshake, Infinity as InfinityIcon, Settings2, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const differentiators = [
    {
        title: "High Joining Ratio",
        icon: TrendingUp,
        desc: "Our commitment to quality candidates is reflected in our impressive joining ratio of over 80%. We do not just find candidates; we ensure they are ready and eager to join your team.",
        size: "large",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Robust Vetting Process",
        icon: ShieldCheck,
        desc: "Unlike many agencies, we implement a thorough vetting process that significantly reduce last-minute dropouts. This ensures that the candidates presented are reliable and committed.",
        size: "small",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Personalized Service",
        icon: Heart,
        desc: "Each client receives dedicated support from recruitment experts who take the time to understand both the technical requirements and cultural fit of your organization. This personalized approach sets us apart from impersonal, one-size-fits-all services offered by competitors.",
        size: "small",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Continuous Engagement",
        icon: MessageCircle,
        desc: "We maintain contact with candidates even after job offers are made, ensuring they feel valued and informed. This unique post-offer engagement helps secure their commitment to joining your organization.",
        size: "small",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Streamlined Process",
        icon: Zap,
        desc: "Our end-to-end recruitment solutions take the hassle out of hiring. Where other agencies might leave you to manage multiple stages, we handle everything from sourcing to final placement, offering a seamless experience.",
        size: "large",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Industry Expertise",
        icon: Briefcase,
        desc: "Our team is comprised of specialists with extensive knowledge across diverse sectors, allowing us to tailor our approach and provide insights that other agencies may not offer.",
        size: "small",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Trustworthy Partnership",
        icon: Handshake,
        desc: "We emphasize reliability and transparency in our operations. Our clients can depend on us to deliver quality results consistently, unlike other agencies that may prioritize volume over quality.",
        size: "small",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Long-Term Focus",
        icon: InfinityIcon,
        desc: "We are invested in the long-term success of both our clients and candidates. Our goal is not just to fill positions, but to build lasting relationships and teams that contribute meaningfully to your organizational goals.",
        size: "small",
        color: "text-gold",
        bgColor: "bg-navy/5"
    },
    {
        title: "Tailored Recruitment Strategies",
        icon: Settings2,
        desc: "We customize our recruitment strategies to align with your specific needs, unlike competitors who often utilize standardized methods that may not suit every organization.",
        size: "small",
        color: "text-slate-500",
        bgColor: "bg-slate-50"
    }
];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const DifferentiatorsSection = () => {
    return (
        <section className="pt-10 md:pt-16 pb-16 md:pb-24 bg-surface/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-12 md:mb-16 text-center"
                >
                    <p className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4">The Competitive Edge</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-navy mb-6 md:mb-8 leading-[1.1]">
                        What <span className="text-gradient-gold italic">Differentiates</span> Us?
                    </h2>
                    <p className="text-navy text-xs md:text-base max-w-4xl mx-auto leading-relaxed italic border-l-2 md:border-l-0 md:border-y border-navy/10 py-4 md:py-6 pl-5 md:pl-0">
                        "Nautilus International stands out from other recruitment agencies through a multitude of unique features and benefits engineered for your organizational success."
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                >
                    {differentiators.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="group relative bg-white border border-navy/5 rounded-[1.5rem] p-6 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_45px_80px_-20px_rgba(15,23,42,0.1)] transition-all duration-700 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-5">
                                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:bg-navy group-hover:text-white transition-all duration-500 shadow-sm border border-navy/5`}>
                                        <Icon size={24} />
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <CheckCircle2 size={20} className="text-emerald-500" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="font-display font-bold text-navy mb-3 group-hover:text-gold transition-colors text-lg">
                                        {item.title}
                                    </h3>

                                    <p className="text-navy leading-relaxed italic text-xs md:text-sm font-bold">
                                        "{item.desc}"
                                    </p>
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <div className="w-8 h-1 bg-navy/5 rounded-full group-hover:bg-gold group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-20 relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold via-navy to-gold rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
                    <div className="relative bg-navy rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl">
                        {/* Abstract Background Detail */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full -mr-32 -mt-32 blur-3xl" />

                        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8"
                            >
                                <Handshake size={36} />
                            </motion.div>

                            <h3 className="text-xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                Commitment to <span className="text-gold italic underline decoration-gold/20 underline-offset-8">Excellence</span>
                            </h3>

                            <p className="text-white/80 text-sm md:text-xl italic leading-relaxed">
                                "Choosing Nautilus International means choosing a partner that truly prioritizes your success in recruitment and beyond, with a commitment to excellence that differentiates us from the competition."
                            </p>

                            <div className="mt-10 flex items-center gap-8 justify-center">
                                <div className="w-16 md:w-24 h-px bg-white/20" />
                                <div className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs">
                                    The Nautilus Standard
                                </div>
                                <div className="w-16 md:w-24 h-px bg-white/20" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DifferentiatorsSection;


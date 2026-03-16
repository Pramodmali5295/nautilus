import { Search, Users, Zap, ShieldCheck, Heart, Settings2, BarChart3, Target, Layout, Rocket, Briefcase, GraduationCap, ClipboardCheck, MessageSquare, UserCheck, Lightbulb, TrendingUp, Award, Layers, Globe, Shield, Handshake, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

const RecruitmentSection = () => {
    const whyCollaborate = [
        { title: "Industry Expertise", desc: "Leverage our deep knowledge, proven methodologies, and extensive resources.", icon: GraduationCap, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Seamless Integration", desc: "Our team works as an extension of your HR function, blending effortlessly.", icon: Target, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Tailored Strategies", desc: "We design customized talent acquisition plans that fit your unique business needs.", icon: Settings2, color: "text-gold", bgColor: "bg-navy/5" },
    ];

    const expertiseItems = [
        { title: "Candidate Sourcing & Attraction", desc: "Identifying the right channels and methods to reach top talent.", icon: Search },
        { title: "Optimized Job Advertising", desc: "Crafting impactful job postings to maximize visibility and engagement.", icon: Rocket },
        { title: "Assessment & Selection Tools", desc: "Utilizing advanced evaluation techniques to ensure the best fit.", icon: ClipboardCheck },
        { title: "Candidate Engagement", desc: "Building strong connections with potential hires to enhance retention.", icon: MessageSquare },
        { title: "Onboarding Support", desc: "Streamlining the transition from hire to productive employee.", icon: UserCheck },
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="w-full px-4 sm:px-10 lg:px-20 xl:px-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-6 md:mb-8 leading-tight">
                        Recruitment & <span className="text-gradient-gold italic">Talent Acquisition</span>
                    </h2>
                    <p className="text-navy text-lg md:text-2xl leading-relaxed font-medium">
                        We specialize in delivering comprehensive recruitment and talent acquisition solutions designed to meet the evolving workforce needs of modern businesses. Our approach covers the entire recruitment lifecycle from candidate sourcing and selection to hiring and onboarding—ensuring that every step is aligned with your organization’s goals, values, and long-term growth strategy.
                    </p>
                </motion.div>

                <div className="mb-16 md:mb-20 text-center">
                    <h3 className="text-base md:text-xl font-bold text-navy mb-8 md:mb-10 uppercase tracking-widest border-b border-navy/10 pb-4 inline-block">Why Collaborate with Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {whyCollaborate.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 md:p-8 rounded-3xl bg-surface/30 border border-navy/5 hover:border-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-500`}>
                                    <item.icon size={26} />
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
                                <p className="text-navy text-sm md:text-base leading-relaxed mb-6 font-medium">{item.desc}</p>
                                <div className="w-12 h-1 bg-gold/20 rounded-full group-hover:w-full transition-all duration-700 mt-auto" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-navy mb-8 uppercase tracking-widest border-b border-navy/10 pb-4 inline-block">Our Expertise</h3>
                        <div className="space-y-4">
                            {expertiseItems.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 p-5 rounded-2xl hover:bg-navy/5 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-all shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-navy text-sm md:text-base">{item.title}</h5>
                                        <p className="text-navy text-sm md:text-base font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-navy rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <h3 className="text-xl md:text-2xl font-display font-bold mb-6 border-b border-white/10 pb-6">Consultative & Project-Based Support</h3>
                        <p className="text-white text-base md:text-lg leading-relaxed mb-8 italic font-medium">
                            Beyond ongoing recruitment, we also provide strategic guidance on a project basis.
                        </p>
                        <ul className="space-y-6">
                            {[
                                "Partnering with your team to define hiring needs.",
                                "Assisting in candidate identification and selection.",
                                "Offering actionable insights throughout the recruitment process."
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                                        <Zap size={14} className="text-gold" />
                                    </div>
                                    <span className="text-white text-base md:text-lg font-medium">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 bg-surface/50 rounded-[2.5rem] border border-navy/5 text-center"
                >
                    <p className="text-navy text-xl md:text-2xl italic leading-relaxed max-w-4xl mx-auto font-medium">
                        "At Nautilus International, we are dedicated to delivering exceptional service and value, ensuring your organization has the talent it needs to thrive in today’s competitive landscape."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ExecutiveSearchSection = () => {
    const strategicSupport = [
        { title: "Talent Mapping & Market Analysis", desc: "Gain insights into industry-specific talent pools, market trends, and competitor benchmarks.", icon: Search, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Confidential Search", desc: "Handle sensitive recruitment assignments with the highest level of discretion and security.", icon: Shield, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Customized Assessments", desc: "Conduct tailored screenings and interviews to ensure role-specific requirements are met.", icon: BadgeCheck, color: "text-gold", bgColor: "bg-navy/5" },
    ];

    const clientCentric = [
        { title: "Director-Level Oversight", desc: "Every project is led by a senior consultant ensuring accountability at the highest level.", icon: Award },
        { title: "Strategic Partnership", desc: "We work closely with leadership teams to deliver talent solutions that drive success.", icon: Handshake },
        { title: "Trusted Process", desc: "Our methodology ensures precision and alignment with your business vision.", icon: CheckCircle2 },
    ];

    return (
        <section className="py-16 md:py-24 bg-surface/30 relative overflow-hidden">
            <div className="w-full px-4 sm:px-10 lg:px-20 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy mb-6 md:mb-8 leading-tight">
                        Executive <span className="text-gradient-gold italic">Search</span>
                    </h2>
                    <p className="text-navy text-lg md:text-xl leading-relaxed font-medium">
                        Our Executive Search Team specializes in identifying, attracting, and recruiting middle to senior-level executives for critical leadership positions. We combine extensive research, established networks, and targeted strategies to secure candidates with the right qualifications, experience, and cultural fit.
                    </p>
                </motion.div>

                <div className="relative mb-16 md:mb-20 max-w-5xl mx-auto px-4 sm:px-0">
                    <div className="absolute -inset-2 md:-inset-4 bg-navy/5 rounded-[3rem] rotate-1" />
                    <img 
                        src="/assets/images/team_meeting.png" 
                        alt="Executive Search" 
                        className="relative z-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl transition-all duration-700 w-full h-[250px] md:h-[400px] object-cover"
                    />
                </div>

                <div className="mb-20">
                    <h3 className="text-xl font-bold text-navy mb-12 uppercase tracking-widest text-center">Strategic Support</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {strategicSupport.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-500`}>
                                    <item.icon size={26} />
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h4>
                                <p className="text-navy text-sm md:text-base leading-relaxed mb-6 flex-grow font-medium">{item.desc}</p>
                                <div className="w-12 h-1 bg-gold/20 rounded-full group-hover:w-full transition-all duration-700 mt-auto" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-navy mb-12 uppercase tracking-widest text-center">Client-Centric Approach</h3>
                    <div className="grid md:grid-cols-3 gap-12">
                        {clientCentric.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-inner">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
                                <p className="text-navy text-sm md:text-base leading-relaxed max-w-xs font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HRAdvisorySection = () => {
    const advisoryAreas = [
        { title: "Organization Design", desc: "Tailoring structures to enhance efficiency and effectiveness.", icon: Layout, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Leadership Development", desc: "Cultivating strong leaders through personalized coaching programs.", icon: GraduationCap, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Roles & Responsibilities", desc: "Clarifying roles to ensure optimal performance and accountability.", icon: Users, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Policy Formulation", desc: "Developing HR policies that promote positive culture and compliance.", icon: ClipboardCheck, color: "text-gold", bgColor: "bg-navy/5" },
        { title: "Compensation & Rewards", desc: "Crafting competitive strategies to attract and retain talent.", icon: Award, color: "text-gold", bgColor: "bg-navy/5" },
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            
            <div className="w-full px-4 sm:px-10 lg:px-20 xl:px-24 text-navy">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">
                        HR Advisory <span className="text-gradient-gold italic">Services</span>
                    </h2>
                    <p className="text-navy text-lg md:text-xl leading-relaxed font-medium">
                        Our HR advisory services are driven by a team of seasoned HR experts, each bringing decades of rich and diverse experience. We employ well-researched methodologies to deliver tailored solutions that meet the unique needs of your business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                    {advisoryAreas.map((area, i) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card p-8 rounded-3xl shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${area.bgColor} ${area.color} flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-500`}>
                                <area.icon size={26} />
                            </div>
                            <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{area.title}</h4>
                            <p className="text-navy text-sm md:text-base leading-relaxed mb-6 flex-grow font-medium">{area.desc}</p>
                            <div className="w-12 h-1 bg-gold/20 rounded-full group-hover:w-full transition-all duration-700 mt-auto" />
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-card p-8 rounded-3xl border border-navy/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-center items-center text-center group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -mr-16 -mt-16" />
                        <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                            <Lightbulb size={26} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-display font-bold text-navy mb-4 group-hover:text-gold transition-colors">Transform Your HR</h4>
                        <p className="text-navy text-sm md:text-base italic mb-6 flex-grow font-medium">"Let our expertise guide you towards better alignment of human resources with strategic objectives."</p>
                        <div className="w-12 h-1 bg-gold/20 rounded-full group-hover:w-full transition-all duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const BadgeCheck = ({ size, className }: { size?: number, className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <CheckCircle2 size={size} />
    </div>
);

const ServicesPageContent = () => {
    return (
        <div className="flex flex-col">
            <RecruitmentSection />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
            <ExecutiveSearchSection />
            <HRAdvisorySection />
        </div>
    );
};

export default ServicesPageContent;

import { Award, Settings2, Users, Zap, Handshake, TrendingUp, CheckCircle2, Search, Megaphone, ClipboardCheck, MessageSquare, UserCheck, Lightbulb } from "lucide-react";
import { motion, Variants } from "framer-motion";

const whyCollaborate = [
    {
        title: "Industry Expertise",
        desc: "Leverage our deep knowledge, proven methodologies, and extensive resources across manufacturing, engineering, services, BFSI, IT & ITES services industries.",
        icon: Award,
        colorClass: "text-amber-500",
        bgColor: "bg-amber-50",
        accentColor: "bg-amber-500"
    },
    {
        title: "Seamless Integration",
        desc: "Our team works as an extension of your HR function, blending effortlessly with your existing recruitment structure for a friction-free partnership.",
        icon: Handshake,
        colorClass: "text-teal-600",
        bgColor: "bg-teal-50",
        accentColor: "bg-teal-500"
    },
    {
        title: "Tailored Strategies",
        desc: "We design customized talent acquisition plans that fit your unique business needs, ensuring every strategy is as distinct as your organization.",
        icon: Settings2,
        colorClass: "text-indigo-500",
        bgColor: "bg-indigo-50",
        accentColor: "bg-indigo-500"
    },
];

const ourExpertise = [
    {
        title: "Candidate Sourcing & Attraction",
        desc: "Identifying the right channels and methods to reach top talent across every relevant industry vertical.",
        icon: Search,
        colorClass: "text-rose-500",
        bgColor: "bg-rose-50",
        accentColor: "bg-rose-500"
    },
    {
        title: "Optimized Job Advertising",
        desc: "Crafting impactful job postings to maximize visibility and engagement with the right candidates.",
        icon: Megaphone,
        colorClass: "text-orange-500",
        bgColor: "bg-orange-50",
        accentColor: "bg-orange-500"
    },
    {
        title: "Assessment & Selection Tools",
        desc: "Utilizing advanced evaluation techniques to ensure the best fit for every role and team dynamic.",
        icon: ClipboardCheck,
        colorClass: "text-emerald-500",
        bgColor: "bg-emerald-50",
        accentColor: "bg-emerald-500"
    },
    {
        title: "Candidate Engagement",
        desc: "Building strong connections with potential hires to enhance trust, retention, and long-term commitment.",
        icon: MessageSquare,
        colorClass: "text-cyan-500",
        bgColor: "bg-cyan-50",
        accentColor: "bg-cyan-500"
    },
    {
        title: "Onboarding Support",
        desc: "Streamlining the transition from hire to productive employee, ensuring a smooth and welcoming start.",
        icon: UserCheck,
        colorClass: "text-violet-500",
        bgColor: "bg-violet-50",
        accentColor: "bg-violet-500"
    },
    {
        title: "Consultative Project Support",
        desc: "Strategic guidance on a project basis—partnering with your team to define needs, identify talent, and provide actionable insights throughout the process.",
        icon: Lightbulb,
        colorClass: "text-sky-500",
        bgColor: "bg-sky-50",
        accentColor: "bg-sky-500"
    },
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

const FeatureCard = ({ item }: { item: typeof ourExpertise[0] }) => (
    <motion.div variants={fadeInUp} className="group relative h-full flex flex-col">
        <div className="relative z-10 p-6 sm:p-8 bg-white border border-navy/5 rounded-[1.5rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col overflow-hidden">
            {/* Visual Accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 rounded-full blur-2xl -mr-12 -mt-12 transition-colors duration-500 ${item.accentColor}`} />

            {/* Icon Container */}
            <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.colorClass} flex items-center justify-center mb-6 transition-all duration-500 shadow-sm border border-navy/5 group-hover:bg-navy group-hover:text-white`}>
                <item.icon size={24} />
            </div>

            <div className="flex-grow">
                <h4 className="text-lg sm:text-xl font-display font-bold text-navy mb-3 leading-tight tracking-tight group-hover:text-gold transition-colors">
                    {item.title}
                </h4>
                <p className="text-navy/70 text-xs sm:text-sm leading-relaxed font-semibold italic">
                    "{item.desc}"
                </p>
            </div>

            {/* Decorative Footer Detail */}
            <div className="mt-6 pt-5 border-t border-navy/5 flex items-center justify-between">
                <div className="w-8 h-1 rounded-full bg-navy/5 overflow-hidden">
                    <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ${item.accentColor}`} />
                </div>
                <CheckCircle2 size={16} className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors" />
            </div>
        </div>
    </motion.div>
);

const PartnerSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -ml-64 pointer-events-none" />

            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">Talent Acquisition</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-navy mb-8 leading-[1.1]">
                        Why <span className="text-gradient-gold italic">Partnership with us?</span>
                    </h2>
                    <p className="text-navy/60 text-lg md:text-2xl font-bold italic leading-relaxed px-4">
                        We specialize in delivering comprehensive recruitment and talent acquisition solutions designed to meet the evolving workforce needs of modern businesses—covering the entire recruitment lifecycle from candidate sourcing and selection to hiring and onboarding.
                    </p>
                </motion.div>

                {/* Why Collaborate — 3 Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <p className="text-navy font-black uppercase tracking-[0.3em] text-xs mb-10 text-center">
                        Why Partnership with us?
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8 xl:gap-10 items-start mb-20"
                >
                    {whyCollaborate.map(item => (
                        <FeatureCard key={item.title} item={item} />
                    ))}
                </motion.div>

                {/* Our Expertise — 6 Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <p className="text-navy font-black uppercase tracking-[0.3em] text-xs mb-10 text-center">
                        Our Expertise
                    </p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-start"
                >
                    {ourExpertise.map(item => (
                        <FeatureCard key={item.title} item={item} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PartnerSection;

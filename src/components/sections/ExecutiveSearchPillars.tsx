import { Briefcase, Search, Shield, Settings, Users, Handshake, Zap, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

const executivePillars = [
    {
        title: "Talent Mapping & Market Analysis",
        icon: Search,
        desc: "Gain insights into industry-specific talent pools, market trends, and competitor benchmarks to support informed leadership decisions.",
        color: "text-teal-600",
        bgColor: "bg-teal-50"
    },
    {
        title: "Confidential Search",
        icon: Shield,
        desc: "Handle sensitive recruitment assignments with the highest level of discretion, ensuring complete confidentiality for both clients and candidates.",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50"
    },
    {
        title: "Customized Assessments",
        icon: Settings,
        desc: "Conduct tailored screenings, evaluations, and interviews to ensure candidates meet role-specific requirements before presentation.",
        color: "text-rose-500",
        bgColor: "bg-rose-50"
    },
    {
        title: "Director-Level Oversight",
        icon: Users,
        desc: "Every Executive Search project is led by a senior consultant, providing a single point of contact and ensuring accountability at the highest level.",
        color: "text-amber-500",
        bgColor: "bg-amber-50"
    },
    {
        title: "Strategic Partnership",
        icon: Handshake,
        desc: "We work closely with client leadership teams to understand organizational goals and deliver talent solutions that drive long-term success.",
        color: "text-cyan-600",
        bgColor: "bg-cyan-50"
    },
    {
        title: "Trusted Process",
        icon: Zap,
        desc: "From initial research to final onboarding, our methodology ensures precision, confidentiality, and alignment with your business vision.",
        color: "text-violet-600",
        bgColor: "bg-violet-50"
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

const ExecutiveSearchPillars = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none" />

            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <p className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4">The Strategic Framework</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-8 leading-[1.1]">
                        Executive <span className="text-gradient-gold italic">Search</span>
                    </h2>
                    <p className="text-navy/60 text-base md:text-xl font-medium max-w-4xl mx-auto leading-relaxed italic border-l-4 md:border-l-0 md:border-y border-navy/10 py-4 md:py-6 pl-8 md:pl-0">
                        "Our Executive Search Team specializes in identifying, attracting, and recruiting middle to senior-level executives for critical leadership positions. We combine extensive research, established networks, and targeted strategies to secure candidates with the right qualifications, experience, and cultural fit."
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
                >
                    {executivePillars.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="group relative bg-white border border-navy/5 rounded-[2rem] p-8 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_45px_80px_-20px_rgba(15,23,42,0.1)] transition-all duration-700 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center ${item.color} group-hover:bg-navy group-hover:text-white transition-all duration-500 shadow-sm border border-navy/5`}>
                                        <Icon size={28} />
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <CheckCircle2 size={24} className="text-emerald-500" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="font-display font-bold text-navy mb-4 group-hover:text-gold transition-colors text-xl">
                                        {item.title}
                                    </h3>

                                    <p className="text-navy/60 leading-relaxed font-semibold italic text-sm">
                                        "{item.desc}"
                                    </p>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <div className="w-8 h-1 bg-navy/5 rounded-full group-hover:bg-gold group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ExecutiveSearchPillars;

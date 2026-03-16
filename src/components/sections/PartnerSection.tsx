import { Award, Settings2, Users, Zap, Handshake, TrendingUp, CheckCircle2, Search, Megaphone, ClipboardCheck, MessageSquare, UserCheck, Lightbulb } from "lucide-react";
import { motion, Variants } from "framer-motion";

const whyCollaborate = [
    {
        title: "Expert Talent Acquisition",
        desc: "Our specialized team combines industry knowledge with advanced recruitment technology to attract and identify top-tier talent that aligns with your organization’s values and objectives.",
        icon: Search,
        colorClass: "text-gold",
        bgColor: "bg-navy/5",
        accentColor: "bg-navy"
    },
    {
        title: "Customized Solutions",
        desc: "We understand that every organization is unique. We tailor our recruitment strategies to meet your specific needs, ensuring that we find the right individuals who can contribute to your vision.",
        icon: Settings2,
        colorClass: "text-gold",
        bgColor: "bg-navy/5",
        accentColor: "bg-navy"
    },
    {
        title: "Enhanced Diversity",
        desc: "Our commitment to inclusivity means you will benefit from a diverse talent pool, offering a range of perspectives, ideas, and experiences that can drive innovation and creativity within your organization.",
        icon: Users,
        colorClass: "text-gold",
        bgColor: "bg-navy/5",
        accentColor: "bg-navy"
    },
    {
        title: "Streamlined Hiring Process",
        desc: "By merging technology with human expertise, we optimize and simplify your hiring process, saving you time and resources while increasing the quality of candidates presented.",
        icon: Zap,
        colorClass: "text-gold",
        bgColor: "bg-navy/5",
        accentColor: "bg-navy"
    },
    {
        title: "Long-Term Relationships",
        desc: "We believe in building lasting partnerships with our clients, providing ongoing support and guidance as your organization evolves and your talent needs change.",
        icon: Handshake,
        colorClass: "text-gold",
        bgColor: "bg-navy/5",
        accentColor: "bg-navy"
    },
    {
        title: "Future-Focused Growth",
        desc: "Together, we will assemble dynamic teams that not only meet today’s challenges but are also equipped to tackle future opportunities, positioning your organization as a leader in your industry.",
        icon: TrendingUp,
        colorClass: "text-gold",
        bgColor: "bg-navy/5",
        accentColor: "bg-navy"
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
                <p className="text-navy text-xs sm:text-sm leading-relaxed italic font-bold">
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
                    className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
                >
                    <p className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4">Strategic Alliance</p>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-navy mb-8 leading-[1.1]">
                        Why <span className="text-gradient-gold italic">Partner with Us?</span>
                    </h2>
                    <p className="text-navy text-base md:text-lg italic leading-relaxed px-4 mb-6 font-bold">
                        Partnering with Nautilus International goes beyond traditional recruitment; it is about building a strategic alliance that transforms potential into achievement.
                    </p>
                    <p className="text-navy text-sm md:text-base max-w-2xl mx-auto font-black uppercase tracking-tight">
                        By collaborating with us, you gain access to:
                    </p>
                </motion.div>


                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-start mb-20"
                >
                    {whyCollaborate.map(item => (
                        <FeatureCard key={item.title} item={item} />
                    ))}
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="max-w-4xl mx-auto text-center mt-12 mb-4"
                >
                    <div className="bg-navy/5 p-8 md:p-12 rounded-[2.5rem] border border-navy/5 backdrop-blur-sm shadow-inner">
                        <p className="text-navy text-lg md:text-xl italic leading-relaxed font-bold">
                            "In choosing Nautilus International, you are not just filling vacancies; you are investing in the future success and growth of your organization. Let us help you forge a path towards innovation and achievement through the right talent."
                        </p>
                    </div>
                </motion.div>



            </div>
        </section>
    );
};

export default PartnerSection;

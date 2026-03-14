import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <section className="py-10 bg-surface">
            <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`w-full ${isHomePage ? 'bg-black border-white/10' : 'bg-slate-50 border-navy/10'} border px-8 py-6 md:py-8 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6`}
                >
                    {/* Decorative blobs */}
                    <div className={`absolute top-0 right-0 w-64 h-64 ${isHomePage ? 'bg-teal/20' : 'bg-teal/5'} rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none`} />
                    <div className={`absolute bottom-0 left-0 w-64 h-64 ${isHomePage ? 'bg-gold/10' : 'bg-gold/5'} rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none`} />

                    {/* Text */}
                    <div className="relative z-10 text-center md:text-left">
                        <h2 className={`text-2xl sm:text-3xl font-display font-bold ${isHomePage ? 'text-white' : 'text-navy'} mb-2`}>
                            Your Transformation Starts Here
                        </h2>
                        <p className={`${isHomePage ? 'text-white/80' : 'text-foreground/70'} text-sm sm:text-base leading-relaxed max-w-2xl font-medium`}>
                            Whether you're a visionary company or an ambitious professional, let's create your success story together.
                        </p>
                    </div>

                    {/* Button */}
                    <div className="relative z-10 shrink-0">
                        <Link
                            to="/contact"
                            className="gradient-teal text-accent-foreground px-8 py-3.5 rounded-full font-bold tracking-wide hover:scale-105 transition-all shadow-xl inline-block whitespace-nowrap"
                        >
                            Submit Your CV
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;

import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const HeroSection = () => {
  const heroImage = "/assets/images/office_landscape.png";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Full-screen Background Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Professional Corporate Background"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />
        {/* Lighter overlay so image is clearly visible */}
        <div className="absolute inset-0 bg-navy/55" />
        {/* Subtle vignette gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/70" />
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 xl:px-24 py-32 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial="visible"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-blue-600 backdrop-blur-md border border-blue-500/30 px-4 py-1.5 rounded-full mb-8 shadow-lg shadow-blue-900/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white font-semibold tracking-widest uppercase text-[10px] md:text-xs">
              Excellence in Global Recruitment
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-8 leading-[1.05]">
            Nautilus <br />
            <span className="text-gradient-gold italic">International</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-primary-foreground/85 text-lg md:text-xl lg:text-2xl leading-relaxed mb-14 font-semibold px-4">
            We bridge the gap between world-class talent and visionary organizations.
            Experience a new standard in specialized executive search and HR advisory.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              to="/services"
              className="gradient-teal text-white px-10 md:px-12 py-4 md:py-4.5 rounded-md font-bold tracking-wider hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1 text-center text-sm w-full sm:w-auto"
            >
              OUR SERVICES
            </Link>
            <Link
              to="/contact"
              className="group relative overflow-hidden px-10 md:px-12 py-4 md:py-4.5 rounded-md font-bold tracking-wider text-primary-foreground border border-primary-foreground/30 text-center text-sm w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-0 bg-primary-foreground transition-all duration-300 group-hover:w-full" />
              <span className="relative z-10 group-hover:text-navy transition-colors">SUBMIT YOUR CV</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-primary-foreground/40 uppercase tracking-[0.5em]">Scroll</span>
        <motion.div
          animate={{ height: [48, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>

      {/* Side Decorative line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 opacity-20">
        <div className="w-px h-32 bg-primary-foreground" />
        <span className="rotate-90 text-xs tracking-[1em] uppercase text-primary-foreground flex-shrink-0">Nautilus</span>
        <div className="w-px h-32 bg-primary-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;

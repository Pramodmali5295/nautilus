import { Link, useLocation } from "react-router-dom";
import { Users, Globe, Heart, Lightbulb, Shield, Star, Target, Award, CheckCircle2, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

const aboutMeeting = "/assets/images/team_meeting.png";
const visionSummit = "/assets/images/office_landscape.png";

const values = [
  { icon: Users, title: "Collaboration", desc: "We believe in the power of teamwork uniting diverse perspectives to foster innovation and achieve shared goals.", color: "text-gold", bgColor: "bg-navy/5" },
  { icon: Shield, title: "Integrity", desc: "We operate with honesty and transparency in all interactions, ensuring trust and respect among clients and candidates alike.", color: "text-gold", bgColor: "bg-navy/5" },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace cutting-edge technology and progressive ideas to stay ahead of the curve and offer the best solutions for our clients.", color: "text-gold", bgColor: "bg-navy/5" },
  { icon: Heart, title: "Inclusivity", desc: "We are committed to promoting diversity in talent acquisition, creating a more equitable and varied workforce.", color: "text-gold", bgColor: "bg-navy/5" },
  { icon: Star, title: "Excellence", desc: "We strive for the highest standards in our services, consistently delivering exceptional results and value to our partners.", color: "text-gold", bgColor: "bg-navy/5" },
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Placements Made", value: 2000, suffix: "+" },
  { label: "Global Partners", value: 100, suffix: "+" },
  { label: "Success Rate", value: 88, suffix: "%" },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
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

const AboutSection = ({ showAll = false }: { showAll?: boolean }) => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isHomePage = location.pathname === "/";
  const displayFull = showAll || isAboutPage;

  return (
    <div className="bg-background overflow-hidden font-display">
      {/* Company Story */}
      <section className="py-10 md:py-16 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl opacity-50 sm:opacity-100" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-teal/30 rounded-br-3xl opacity-50 sm:opacity-100" />

              <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border/50 relative z-10 mx-auto max-w-lg lg:max-w-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                  src={aboutMeeting}
                  alt="Team Meeting"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-10 -left-10 bg-card p-8 rounded-2xl shadow-2xl border border-border hidden xl:block z-20"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 shadow-lg border border-amber-100/50">
                    <Award size={28} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground tracking-tight">Top Rated</p>
                    <p className="text-navy text-sm font-medium uppercase tracking-wider">Agency of the Year 2024</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-12 h-[2px] bg-gold" />
                <p className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Our Heritage</p>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-[1.1]">
                Nautilus International <br />
                <span className="text-gradient-gold italic">Catalysts for Success</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-foreground text-base md:text-lg leading-relaxed font-medium">
                <p>
                  At <span className="text-foreground font-semibold">Nautilus International</span>, we understand that innovation thrives through collaboration and the collective
                  power of people. Your goal is to challenge the status quo, pioneer new solutions, and propel industries into
                  the future. Our mission is to connect you with the exceptional talent that can make that vision a reality.
                </p>
                <p>
                  We harness advanced recruitment technology to enhance your hiring process, expand your outreach, and
                  create a more inclusive talent pool. By merging intelligent technology with human expertise, we ensure
                  that each hire is not only a perfect match for your organization but also a driving force for growth,
                  creativity, and sustainable success.
                </p>
                <p>
                  Partnering with Nautilus International means transcending the conventional approach to recruitment.
                  You are not just filling vacancies; you are assembling dynamic teams that transform potential into
                  achievement. Let us help you forge the future you envision through the right talent.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-border/50">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <p className="text-2xl md:text-3xl font-bold text-navy mb-1 tracking-tight">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-navy text-[10px] md:text-xs uppercase font-bold tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Team Imagery Section - Hidden on Home and About per essential requirement */}
      {isHomePage && false && (
        <section className="py-16 bg-background relative z-10 w-full px-4 sm:px-10 lg:px-20 xl:px-24">
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
                alt="Professional Business Woman Working on Laptop at Desk"
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
                src="/assets/images/collaboration.png"
                alt="Team Discussing Strategies at Table"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
            </motion.div>
          </div>
        </section>
      )}

      {/* Vision & Mission Sections */}
      {displayFull && (
        <section className="relative py-10 md:py-16 overflow-hidden bg-background">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full px-4 sm:px-10 lg:px-20 xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="group bg-white border border-navy/10 shadow-lg p-7 md:p-10 rounded-[2rem] hover:shadow-2xl hover:border-black transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 border border-black group-hover:bg-white transition-colors duration-500">
                <Target className="text-white group-hover:text-black transition-colors" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-navy text-lg md:text-xl leading-relaxed font-medium italic">
                "To redefine the future of work by connecting organizations with exceptional talent that drives innovation, growth, and sustainable success."
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="group bg-white border border-navy/10 shadow-lg p-7 md:p-10 rounded-[2rem] hover:shadow-2xl hover:border-black transition-all duration-500 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 border border-black group-hover:bg-white transition-colors duration-500">
                <Award className="text-white group-hover:text-black transition-colors" size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-navy text-lg md:text-xl leading-relaxed font-medium">
                "We combine advanced recruitment technology with human expertise to deliver HR solutions that empower organizations and guide professionals in their career journeys. As a dependable partner, we ensure every solution we provide contributes to creativity, progress, and long-term value."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      )}

      {/* Core Values */}
      {displayFull && (
        <section className="py-10 md:py-16 bg-surface/50 relative">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
            <SectionTitle label="The Foundation" title="Our Core Values" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 mt-12 md:mt-16"
            >
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className="relative bg-card rounded-2xl p-6 xl:p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-navy/5 group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-gold/20 transition-all duration-500 overflow-hidden"
                  >
                    {/* Glossy Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-navy/20 rounded-tl-2xl transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-transparent group-hover:border-navy/20 rounded-br-2xl transition-colors duration-500" />

                    <div className={`w-14 h-14 xl:w-16 xl:h-16 mx-auto rounded-2xl ${v.bgColor} flex items-center justify-center mb-5 xl:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl border border-navy/5 relative z-10 group-hover:bg-navy group-hover:text-white`}>
                      <Icon className={`${v.color} group-hover:text-white transition-colors`} size={24} />
                    </div>
                    <h4 className="font-display font-bold text-foreground text-lg xl:text-xl mb-3 group-hover:text-navy transition-colors relative z-10">{v.title}</h4>
                    <p className="text-navy text-sm xl:text-base leading-relaxed font-medium group-hover:text-black transition-colors relative z-10">{v.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Our Team & Our Edge Section */}
      {displayFull && (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal/5 rounded-full blur-[100px] -ml-36 pointer-events-none" />
          <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
            <div className="max-w-6xl mx-auto">
              <SectionTitle label="The People" title="Our Team and Our Edge" />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-8 md:gap-10 mt-4"
              >
                {/* Our Team Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-slate-50 border border-navy/10 shadow-lg p-7 md:p-10 rounded-[2rem] hover:shadow-2xl hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-60 h-60 bg-gold/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-gold/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">The Team</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-navy mb-4">Our Team</h3>
                    <div className="space-y-4 text-navy text-base md:text-lg leading-relaxed font-medium">
                      <p>
                        Our Management and Execution Team brings together over <span className="font-bold text-navy">20 years</span> of collective professional experience,
                        ensuring consistent value across every client engagement and business process. We are a team of seasoned
                        consultants with expertise spanning multiple sectors.
                      </p>
                      <p>
                        Supporting our core team is a non-executive advisory panel of senior industry experts. Their insights and
                        networks extend our global reach and strengthen our ability to deliver solutions across diverse markets.
                      </p>
                    </div>
                  </div>
                </motion.div> 

                {/* Our Edge Card */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-amber-50/30 border border-navy/10 shadow-lg p-7 md:p-10 rounded-[2rem] hover:shadow-2xl hover:border-gold/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-teal/10 transition-colors duration-700" />
                  <div className="relative z-10">
                    <span className="text-teal font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">Competitive Advantage</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-navy mb-4">Our Edge</h3>
                    <p className="text-navy text-sm md:text-base mb-4 font-bold">We believe our advantage lies in three pillars:</p>

                    <ul className="space-y-3 mb-6">
                      {[
                        { title: "Quality of People", desc: "Professionals committed to excellence" },
                        { title: "Global Network", desc: "Connections that open doors worldwide" },
                        { title: "Personalized Service", desc: "Solutions that fit unique needs" },
                      ].map((item) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <p className="text-foreground text-sm md:text-base">
                            <span className="font-bold text-navy">{item.title}</span> – {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <p className="text-navy text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-gold pl-4">
                      Our consultants deliver recruitment expertise on the ground, with a deep understanding of local market dynamics.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Team Pillars */}
      {displayFull && (
        <section className="py-12 md:py-16 gradient-navy text-primary-foreground">
          <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
            <div className="text-center mb-10 md:mb-16">
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3">Our Strength</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">Built on Expertise</h2>
              <div className="w-16 h-1 gradient-gold mx-auto rounded-full" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {[
                { icon: Star, title: "Quality of People", desc: "Our recruiters are industry veterans with deep domain technical expertise.", color: "text-gold", bgColor: "bg-white/10" },
                { icon: Globe, title: "Global Network", desc: "Access to an international talent pool that transcends geographic boundaries.", color: "text-gold", bgColor: "bg-white/10" },
                { icon: Zap, title: "Agile Service", desc: "A bespoke, responsive recruitment lifecycle designed to scale with your needs.", color: "text-gold", bgColor: "bg-white/10" },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div key={p.title} variants={fadeInUp} className="text-center group">
                    <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full ${p.bgColor} border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500`}>
                      <Icon className={`${p.color} group-hover:text-navy transition-colors`} size={28} />
                    </div>
                    <h4 className="font-display font-bold text-xl md:text-2xl mb-4 text-white">{p.title}</h4>
                    <p className="text-primary-foreground/75 text-sm md:text-base leading-relaxed font-semibold italic">{p.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials - Hidden on Home for essential feel */}
      {!isAboutPage && !isHomePage && (
        <section className="py-16">
          <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
            <SectionTitle label="Success Stories" title="Partner Feedback" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { name: "Rajesh Kumar", role: "CEO, TechVista", text: "Nautilus International didn't just find us employees; they found us partners. Their deep understanding of our company culture was remarkable." },
                { name: "Sarah Jenkins", role: "HR head, GlobalFlow", text: "The executive search team provided a level of discretion and quality that we haven't found elsewhere in 10 years." },
                { name: "Michael Chen", role: "MD, Innovate Asia", text: "Speed and quality are often at odds. Nautilus managed to deliver both for our critical expansion project." },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeInUp}
                  className="bg-card p-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all border-b-4 border-b-teal"
                >
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-gold font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-foreground">{t.name}</h5>
                      <p className="text-teal text-sm font-semibold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

    </div>
  );
};


const SectionTitle = ({ label, title }: { label: string; title: string }) => (
  <div className="text-center mb-10">
    <p className="text-teal font-semibold tracking-[0.2em] uppercase text-sm mb-3">{label}</p>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">{title}</h2>
    <div className="w-20 h-1.5 gradient-gold mx-auto mt-6 rounded-full" />
  </div>
);

export default AboutSection;

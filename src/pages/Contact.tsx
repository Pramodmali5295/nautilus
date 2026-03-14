import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Upload, CheckCircle2, Send, Globe, Clock, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [fileName, setFileName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // Mobile number validation: Only allow numbers and max 10 digits
        if (name === "phone") {
            const numericValue = value.replace(/[^0-9]/g, "");
            if (numericValue.length <= 10) {
                setForm({ ...form, phone: numericValue });
            }
            return;
        }
        
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Mobile number length validation
        if (form.phone.length !== 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
        
        // Construct the WhatsApp message
       const whatsappNumber = "917410775779";
        const messageText = `*New Inquiry from Nautilus website*
        
*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
${fileName ? `*Document:* ${fileName} (User will attach in chat)` : ""}
*Message:* ${form.message}`;

        const encodedMessage = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, "_blank");
        
        alert("Thank you for your inquiry! Redirecting you to WhatsApp. Please remember to attach your CV/Portfolio once the chat opens.");
        setForm({ name: "", email: "", phone: "", message: "" });
        setFileName("");
    };

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

    return (
        <div className="min-h-screen flex flex-col bg-background overflow-hidden font-display">
            <Navbar />
            <main className="flex-grow">
                {/* Cinematic Header */}
                <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 md:pt-36 bg-navy">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src="/assets/images/office_landscape.png"
                            alt="Executive Office"
                            className="w-full h-full object-cover"
                            fetchPriority="low"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
                    </motion.div>

                    <div className="relative z-10 w-full px-6 text-center">
                        <motion.span
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block text-white font-black tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.6em] uppercase text-[10px] sm:text-xs md:text-sm mb-6 mt-8 md:mt-12 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-blue-600 shadow-lg border border-white/20"
                        >
                            Connect Excellence
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 text-center"
                        >
                            Our <span className="text-gradient-gold italic">Global Office</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-white/90 drop-shadow-md max-w-3xl mx-auto text-base md:text-2xl font-medium leading-relaxed text-center text-pretty mb-8"
                        >
                            Ready to architect your organization's most critical transitions? Experience a new echelon of strategic engagement.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
                </header>



                 <section id="contact-interface" className="relative py-16 z-20 bg-slate-50/50">
                    <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20">
                        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">

                                {/* Sidebar: Professional Identity & Info */}
                                <motion.div
                                    initial="visible"
                                    animate="visible"
                                    variants={staggerContainer}
                                    className="lg:col-span-5 space-y-6 md:space-y-8"
                                >
                                    <motion.div
                                        variants={fadeInUp}
                                        className="bg-navy rounded-[2.5rem] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden group border border-white/10"
                                    >
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none group-hover:bg-gold/30 transition-all duration-700" />
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

                                        <div className="relative z-10">
                                            <span className="inline-block text-[10px] font-black tracking-[0.4em] text-white uppercase mb-5 px-5 py-2 rounded-full gradient-gold border border-white/20 shadow-lg backdrop-blur-md">
                                                Elite Presence
                                            </span>
                                             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-tight">
                                                 The <span className="text-gradient-gold italic">Nautilus</span> HQ
                                             </h2>

                                            <div className="space-y-8">
                                                {[
                                                    {
                                                        customIcon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Headquarters" className="w-8 h-8 object-contain" />,
                                                        label: "Headquarters",
                                                        value: "Vishnu Capital, Office 214, Pune, India",
                                                        detail: "City Pride School Lane, Chikhali - Moshi, 411062",
                                                        bg: "bg-white",
                                                        border: "border-white/20"
                                                    },
                                                    {
                                                        customIcon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Secure Digital Line" className="w-9 h-9 object-contain" />,
                                                        label: "Secure Digital Line",
                                                        value: "+91 7410775779",
                                                        isLink: true,
                                                        href: "tel:+917410775779",
                                                        bg: "bg-white",
                                                        border: "border-white/20"
                                                    },
                                                    {
                                                        customIcon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Strategic Inquiry" className="w-8 h-8 object-contain" />,
                                                        label: "Strategic Inquiry",
                                                        value: "hr@nautilusinternational.in",
                                                        isLink: true,
                                                        href: "mailto:hr@nautilusinternational.in",
                                                        bg: "bg-white",
                                                        border: "border-white/20"
                                                     }
                                                 ].map((item, id) => (
                                                     <div key={id} className="flex gap-4 md:gap-6 group/item">
                                                         <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-all duration-500 shadow-xl relative`}>
                                                             {item.customIcon}
                                                         </div>
                                                         <div className="flex flex-col justify-center">
                                                             <span className="inline-block text-[10px] font-bold tracking-[0.1em] text-gold/80 mb-1 uppercase">
                                                                 {item.label}
                                                             </span>
                                                             {item.isLink ? (
                                                                 <a href={item.href} className="text-lg md:text-xl font-bold text-white hover:text-gold transition-all block tracking-tight font-display">
                                                                     {item.value}
                                                                 </a>
                                                             ) : (
                                                                 <div className="text-lg md:text-xl font-bold text-white leading-tight tracking-tight font-display">
                                                                     {item.value}
                                                                     {item.detail && <p className="text-xs font-medium text-white/50 mt-1 italic tracking-normal font-display">"{item.detail}"</p>}
                                                                 </div>
                                                             )}
                                                         </div>
                                                     </div>
                                                 ))}
                                             </div>

                                            <div className="mt-14 pt-10 border-t border-white/10">
                                                <div className="flex items-center gap-6 text-white/60 text-base md:text-lg font-bold italic">
                                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shadow-inner border border-white/10">
                                                        <Clock size={24} className="text-gold" />
                                                    </div>
                                                    <span>Global Operations: 24/7 Strategic Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Secondary Info Cards */}
                                    <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                                        <div className="bg-surface/50 backdrop-blur-md border border-navy/5 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:border-gold/30 transition-all duration-500">
                                            <Globe size={24} className="text-teal mb-4 group-hover:rotate-12 transition-transform" />
                                            <div>
                                                <p className="text-[10px] font-black tracking-widest text-navy/30 uppercase mb-1">Coverage</p>
                                                <h4 className="text-xl font-bold text-navy">Global Network</h4>
                                            </div>
                                        </div>
                                        <div className="bg-surface/50 backdrop-blur-md border border-navy/5 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:border-gold/30 transition-all duration-500">
                                            <CheckCircle2 size={24} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                                            <div>
                                                <p className="text-[10px] font-black tracking-widest text-navy/30 uppercase mb-1">Standard</p>
                                                <h4 className="text-xl font-bold text-navy">ISO Certified</h4>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Main Form: The Strategic Interface */}
                                <motion.div
                                    initial="visible"
                                    animate="visible"
                                    transition={{ duration: 0.8 }}
                                    className="lg:col-span-7"
                                >
                                    <div className="bg-white rounded-[2.5rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] relative overflow-hidden border border-navy/5">
                                        {/* Colored Top Header */}
                                        <div className="gradient-navy p-8 md:p-10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                                             <div className="relative z-10">
                                                 <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 italic">Inquiry <span className="text-gold">Form</span></h3>
                                                 <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed">
                                                     Provide your details for a confidential executive consultation. Our experts will process your inquiry with the highest priority.
                                                 </p>
                                             </div>
                                        </div>

                                        <div className="p-8 md:p-12 relative z-10">
                                            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
                                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/[0.03] rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-[11px] font-bold tracking-[0.15em] text-navy/70 ml-1 uppercase">Full Name</label>
                                                        <div className="relative group">
                                                            <input
                                                                type="text" name="name" required placeholder="Legal Name" value={form.name} onChange={handleChange}
                                                                className="w-full bg-white border border-navy/10 rounded-xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all font-display"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[11px] font-bold tracking-[0.15em] text-navy/70 ml-1 uppercase">Email Address</label>
                                                        <div className="relative group">
                                                            <input
                                                                type="email" name="email" required placeholder="name@organization.com" value={form.email} onChange={handleChange}
                                                                className="w-full bg-white border border-navy/10 rounded-xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all font-display"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-bold tracking-[0.15em] text-navy/70 ml-1 uppercase">Phone Number</label>
                                                    <div className="relative group">
                                                        <input
                                                            type="tel" name="phone" placeholder="+00 000 000 0000" value={form.phone} onChange={handleChange}
                                                            className="w-full bg-white border border-navy/10 rounded-xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all font-display"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-bold tracking-[0.15em] text-navy/70 ml-1 uppercase">Upload CV / Portfolio (Optional)</label>
                                                    <div className="relative group/file">
                                                        <input
                                                            type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange}
                                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                        />
                                                        <div className="w-full rounded-xl border border-dashed border-navy/20 group-hover/file:border-gold/50 group-hover/file:bg-gold/5 bg-surface/30 p-4 flex flex-row items-center justify-center gap-4 transition-all duration-500">
                                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${fileName ? "bg-gold text-white" : "bg-navy/5 text-navy/20"}`}>
                                                                <Upload size={20} />
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span className={`text-sm tracking-wide font-display ${fileName ? "text-navy font-bold" : "text-navy/40 font-medium"}`}>
                                                                    {fileName || "Click to browse or drag & drop"}
                                                                </span>
                                                                {!fileName && <span className="text-[9px] text-navy/30 uppercase font-bold tracking-widest mt-0.5">PDF, DOCX up to 10MB</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[11px] font-bold tracking-[0.15em] text-navy/70 ml-1 uppercase">Message</label>
                                                    <div className="relative group">
                                                        <textarea
                                                            name="message" rows={4} placeholder="Briefly describe your objectives..." value={form.message} onChange={handleChange}
                                                            className="w-full bg-white border border-navy/10 rounded-xl py-4 px-5 text-base text-navy placeholder:text-navy/20 focus:outline-none focus:border-gold/50 focus:ring-4 focus:ring-gold/5 transition-all resize-none font-display"
                                                        />
                                                    </div>
                                                </div>

                                                <motion.button
                                                    whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit"
                                                    className="w-full group relative h-16 rounded-2xl gradient-gold text-white font-bold tracking-[0.4em] text-sm md:text-base shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] overflow-hidden transition-all"
                                                >
                                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                                        SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                    </div>
                                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                                                </motion.button>
                                            </form>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                {/* Spacer Section for Footer Transition */}
                <div className="h-10 md:h-16 bg-background" />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;


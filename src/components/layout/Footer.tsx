import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, Globe, MapPin, Linkedin, Instagram, MessageCircle, Facebook, Twitter, Youtube, Send } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/MainLogo.png";

const Footer = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Process", path: "/recruitment-process" },
    { label: "Why Us", path: "/why-us" },
    { label: "Contact", path: "/contact" },
  ];

  const expertises = [
    { label: "Executive Search", path: "/services" },
    { label: "Talent Acquisition", path: "/services" },
    { label: "HR Advisory", path: "/services" },
    { label: "Market Analysis", path: "/services" },
  ];

  const socials = [
    { 
      href: "#", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "bg-[#0077b5]" 
    },
    { 
      href: "https://wa.me/917410775779", 
      icon: MessageCircle, 
      label: "WhatsApp",
      color: "bg-[#25D366]" 
    },
    { 
      href: "#", 
      icon: Facebook, 
      label: "Facebook",
      color: "bg-[#1877F2]" 
    },
    { 
      href: "#", 
      icon: Instagram, 
      label: "Instagram",
      color: "bg-[#E4405F]" 
    },
    { 
      href: "#", 
      icon: Twitter, 
      label: "Twitter",
      color: "bg-[#1DA1F2]" 
    },
    { 
      href: "#", 
      icon: Youtube, 
      label: "YouTube",
      color: "bg-[#FF0000]" 
    },
    { 
      href: "#", 
      icon: Send, 
      label: "Telegram",
      color: "bg-[#0088cc]" 
    },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy/5 via-gold/40 to-navy/5" />
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

      <div className="w-full px-4 sm:px-10 lg:px-20 xl:px-24 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-5">
            <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <img src={logo} alt="Nautilus International" className="h-20 md:h-24 w-auto object-contain" />
            </Link>
            <h3 className="text-gold text-xl md:text-2xl font-display font-bold leading-tight">
              Talent and HR Solutions that Transform Industries
            </h3>
            <p className="text-navy text-sm md:text-base leading-relaxed max-w-md font-medium">
              We connect visionary organizations with exceptional talent, blending advanced recruitment technology and human expertise to build diverse, dynamic teams. With Nautilus International, you are not just hiring—you are shaping the future through innovation, creativity, and sustainable success.
            </p>
            <div className="flex flex-wrap gap-4 mt-1">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-xl ${s.color} text-white flex items-center justify-center shadow-lg transition-all duration-300`}
                  aria-label={s.label}
                >
                  <s.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-black uppercase tracking-[0.4em] text-navy border-b border-gold/30 pb-3 inline-block">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-2 text-navy hover:text-gold transition-all duration-300 font-bold text-base"
                  >
                    <ArrowUpRight size={16} className="text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-black uppercase tracking-[0.4em] text-navy border-b border-gold/30 pb-3 inline-block">
              Expertise
            </h4>
            <ul className="space-y-3">
              {expertises.map(item => (
                <li key={item.label}>
                  <Link 
                    to={item.path} 
                    className="group flex items-center gap-2 text-navy hover:text-gold transition-all duration-300 font-bold text-base"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-black uppercase tracking-[0.4em] text-navy border-b border-gold/30 pb-3 inline-block">
              Headquarters
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-navy group">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-all text-gold shadow-sm">
                  <MapPin size={20} />
                </div>
                <p className="text-base leading-relaxed font-bold">
                  Office No 214, Vishnu Capital, <br />
                  City Pride School Lane, Chikhali-Moshi, <br />
                  Pune, Maharashtra, India - 411062
                </p>
              </div>
              <div className="flex items-center gap-4 text-navy group">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-all text-gold shadow-sm">
                  <Phone size={20} />
                </div>
                <a href="tel:+917410775779" className="text-base font-black hover:text-gold transition-colors">+91 7410775779</a>
              </div>
              <div className="flex items-center gap-4 text-navy group">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-all text-gold shadow-sm">
                  <Mail size={20} />
                </div>
                <a href="mailto:hr@nautilusinternational.in" className="text-base font-black hover:text-gold transition-colors break-all">hr@nautilusinternational.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-navy/70 font-bold">
            © {new Date().getFullYear()} Nautilus International · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

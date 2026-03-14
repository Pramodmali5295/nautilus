import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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

  const socials = [
    {
      href: "#",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
      alt: "LinkedIn",
    },
    {
      href: "#",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      alt: "Instagram",
    },
    {
      href: "https://wa.me/917410775779",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
      alt: "WhatsApp",
    },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 py-10">

        {/* Main row: logo | nav | contact | socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-start justify-between gap-x-10 gap-y-8 pb-8 border-b border-gray-100"
        >
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3 min-w-[160px]">
            <Link to="/">
              <img src={logo} alt="Nautilus International" className="h-24 w-auto object-contain" loading="lazy" />
            </Link>
            <p className="text-base text-gray-500 font-normal leading-relaxed max-w-[220px]">
              Architecture of recruitment, engineered for executive success.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-primary mb-2">Navigation</p>
            <div className="flex flex-col gap-y-2">
              {navLinks.map(link => (
                <Link key={link.label} to={link.path} className="flex items-center gap-1.5 text-base text-gray-600 hover:text-gold transition-colors group">
                  <ArrowUpRight size={14} className="text-gold/30 group-hover:text-gold transition-colors shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-primary mb-2">Contact</p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-base text-gray-600">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" className="w-4 h-4 mt-0.5 shrink-0" alt="loc" />
                <span className="max-w-[200px] leading-relaxed">Office No 214, Vishnu Capital, Chikhali-Moshi, Pune 411062</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-4 h-4 shrink-0" alt="wa" />
                <a href="tel:+917410775779" className="text-gray-600 hover:text-gold transition-colors">+91 7410775779</a>
              </div>
              <div className="flex items-center gap-2 text-base">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" className="w-4 h-4 shrink-0" alt="mail" />
                <a href="mailto:hr@nautilusinternational.in" className="text-gray-600 hover:text-gold transition-colors">hr@nautilusinternational.in</a>
              </div>
              <div className="flex items-center gap-2 text-base">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" className="w-4 h-4 shrink-0" alt="web" />
                <a href="https://www.nautilusinternational.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors">nautilusinternational.in</a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-primary mb-2">Follow Us</p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <img src={s.icon} alt={s.alt} className="w-5 h-5 object-contain" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4">
          <p className="text-sm text-gray-400 tracking-wide">
            © {new Date().getFullYear()} Nautilus International · All rights reserved
          </p>
          <p className="text-sm text-gray-400 tracking-wide">
            Developed by <span className="text-orange-500 font-semibold">Infoyashonand Technology Pvt. Ltd.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// local logo asset
// updated to new filename added by user
import logo from "@/assets/MainLogo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/recruitment-process" },
  { label: "Why Us", href: "/why-us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* force the navbar to use the project's primary colour (matches logo) instead
          of the old navy gradient.  scrolled state still shrinks and adds shadow. */}
      <nav className="fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-white shadow-md py-1.5 md:py-2 border-b border-gray-100">
        <div className="w-full flex items-center justify-between px-4 md:px-8 lg:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.01] z-50 shrink-0">
            <img
              src={logo}
              alt="Nautilus International"
              loading="lazy"
              // adjusted logo heights for smoother scaling
              className="h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 w-auto object-contain transition-all duration-300"
              onError={(e) => {
                // Fallback text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const span = document.createElement('span');
                span.className = `text-base sm:text-lg md:text-xl font-display font-bold tracking-tight whitespace-nowrap transition-colors duration-500 ${scrolled || mobileOpen ? "text-navy" : "text-white"}`;
                span.innerHTML = 'Nautilus <span class="text-gradient-gold">International</span>';
                target.parentElement?.appendChild(span);
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`relative text-[15px] tracking-wide uppercase font-bold transition-all duration-300 py-1.5 px-4 rounded-md group ${
                      isActive(item.href)
                        ? "text-gold bg-primary/5"
                        : "text-navy hover:text-gold"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold rounded-full transition-all duration-300 ${isActive(item.href) ? "w-4/5" : "w-0 group-hover:w-4/5"
                        }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-px h-6 mx-2 bg-gray-200" />

            {/* Contact Button */}
            <Link
              to="/contact"
              className={`gradient-gold text-white px-6 py-2.5 rounded-md text-[15px] font-bold tracking-widest uppercase transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 whitespace-nowrap ${isActive("/contact") ? "opacity-80" : ""
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden transition-colors duration-500 p-2 z-50 relative text-navy hover:text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Removed static spacer to allow hero sections to flow under the transparent navbar */}

      {/* Mobile Menu Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-auto max-h-[90vh] rounded-bl-3xl w-[70%] sm:w-[280px] z-50 bg-white/95 backdrop-blur-md border-l border-b border-gray-100 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col pt-24 px-6 pb-10 overflow-y-auto ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col items-start gap-1">
          {navItems.map((item) => (
            <li key={item.href} className="w-full">
              <Link
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[15px] tracking-wide uppercase font-bold transition-all block py-3 px-4 rounded-xl ${isActive(item.href)
                  ? "text-gold bg-primary/5 shadow-sm"
                  : "text-navy hover:text-gold hover:bg-primary/5"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <div className="w-full h-px bg-white/10 my-3" />
          <li className="w-full">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="gradient-gold text-white px-4 py-2.5 rounded-md text-sm font-bold tracking-widest uppercase shadow-lg text-center block w-full hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

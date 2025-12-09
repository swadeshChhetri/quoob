import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Plans", path: "/plans" },
    { name: "Contact", path: "/contact" },
  ];

  // Hide on scroll
  const controlHeader = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 40);

    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const headerClasses = `
    fixed left-1/2 -translate-x-1/2
    w-[92%] max-w-[1350px]
    z-50 transition-all duration-300
    ${isVisible ? "opacity-100 translate-y-0" : "-translate-y-8 opacity-0"}
    ${
      isScrolled
        ? "bg-black/80 backdrop-blur-lg border border-[#2a2a2a] shadow-lg"
        : "bg-black/50 backdrop-blur-md border border-[#1f1f1f]"
    }
    flex items-center justify-between px-6 py-4 rounded-2xl
  `;

  return (
    <>
      <header className={headerClasses}>
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/image/logo.svg" alt="Logo" className="w-32" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex max-[900px]:hidden items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-white font-medium transition
                  hover:text-[#baff00] ${isActive ? "text-[#baff00]" : ""}
                `}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#baff00] rounded-full transition-all
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons (show only at ≥1024px) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            className="bg-lime-300 hover:bg-lime-400 text-black font-medium px-5 py-2 rounded-full transition-all hover:scale-105"
            onClick={() => navigate("/contact")}
          >
            Book a Demo
          </button>

          <button
            className="border border-lime-400 text-white px-6 py-2 rounded-full hover:bg-lime-400 hover:text-black transition-all hover:scale-105 font-semibold"
            onClick={() => (window.location.href = "https://app.qyoob.ai")}
          >
            Login
          </button>
        </div>

        {/* Mid-size Single CTA (900px–1024px) */}
        <button
          className="hidden md:block lg:hidden bg-lime-400 text-black font-medium px-5 py-2 rounded-full"
          onClick={() => navigate("/contact")}
        >
          Demo
        </button>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl md:hidden max-[900px]:block"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[999] flex flex-col p-10"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="absolute top-6 right-6 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X size={36} />
            </motion.button>

            {/* Menu Items */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1, duration: 0.4 },
                },
              }}
              className="flex flex-col items-center justify-center gap-8 flex-1"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  onClick={() => {
                    navigate(link.path);
                    setMenuOpen(false);
                  }}
                  className="text-white text-3xl font-light tracking-wide hover:text-[#baff00] transition"
                >
                  {link.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Bottom Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <button
                className="bg-lime-300 text-black py-3 rounded-full text-xl"
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
              >
                Book a Demo
              </button>

              <button
                className="border border-lime-400 text-white py-3 rounded-full text-xl hover:bg-lime-400 hover:text-black transition"
                onClick={() => (window.location.href = "https://app.qyoob.ai")}
              >
                Login
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

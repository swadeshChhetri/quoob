import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    // { name: "Services", path: "/services" },
    { name: "Plans", path: "/plans" },
    // { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll hide/show
  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 50);

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);   // Hide
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);    // Show
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader, { passive: true });
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
      } ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-[#2a2a2a] shadow-[0_0_20px_rgba(128,255,0,0.15)]"
          : "bg-black/80 backdrop-blur-sm border-[#1b1b1b] shadow-[0_0_15px_rgba(128,255,0,0.1)]"
      } flex justify-between items-center px-6 py-4 rounded-2xl border`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/image/logo.svg" alt="Qyoob Logo" className="w-30" />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-white transition-colors duration-300 hover:text-[#baff00] group ${
                isActive ? "text-[#baff00]" : ""
              }`}
            >
              {link.name}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#baff00] rounded-full transition-all duration-500 ease-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          );
        })}
      </nav>

      {/* CTA */}
      <div className="flex gap-2">
      <button className="bg-lime-300 hover:bg-lime-400 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 transition hover:scale-105" onClick={() => navigate("/contact")}>
        Book a Demo
      </button>
      <button className="bg-lime-300 hover:bg-lime-400 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 transition hover:scale-105" onClick={() => navigate("/login")}>
        Login
      </button>
      </div>
    </header>
  );
}



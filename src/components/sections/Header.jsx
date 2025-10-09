import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Plans", id: "plans" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Check if scrolled past 50px for background change
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show/hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader, { passive: true });

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
      } ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-[#2a2a2a] shadow-[0_0_20px_rgba(128,255,0,0.15)]"
          : "bg-black/80 backdrop-blur-sm border-[#1b1b1b] shadow-[0_0_15px_rgba(128,255,0,0.1)]"
      } flex justify-between items-center px-6 py-4 rounded-2xl border`}
    >
      {/* Left Logo Section */}
      <div className="flex items-center space-x-2">
        <img src="/image/logo.svg" alt="Qyoob Logo" className="w-30" />
      </div>

      {/* Center Nav Links */}
      <nav className="flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            smooth={true}
            duration={600}
            spy={true}
            offset={-70}
            activeClass="active-link"
            className="relative text-white cursor-pointer transition-colors duration-300 hover:text-[#baff00] group"
          >
            {link.name}
            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#baff00] rounded-full transition-all duration-500 ease-out group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Right Button */}
      <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-2 rounded-full flex items-center gap-2 transition hover:scale-105">
        Book a Demo
      </button>
    </header>
  );
}

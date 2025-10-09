import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-4 border-t border-t-gray-200   shadow-[0_0_15px_rgba(128,255,0,0.1)]">
      {/* Left Logo Section */}
      {/* Left Logo Section */}
      <div className="flex items-center space-x-2 ">
        <img
          src="/image/logo.svg" // <-- replace with your logo path
          alt="Qyoob Logo"
          className="w-30"
        />
      </div>

      {/* Right Button */}
      <div className="flex text-gray-400 space-x-5">
        <Link to={"/"}>Privacy Policy</Link>
        <Link to={"/"}>Terms & Conditions</Link>
        <p>@ 2025 Quoob. All rights reserved.</p>
      </div>
    </footer>
  );
}

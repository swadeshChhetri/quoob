import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Plans from "../pages/Plans";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Products from "../pages/Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/products" element={<Products />} />
      <Route path="/plans" element={<Plans />} />
      {/* <Route path="/faq" element={<FAQ />} /> */}
      <Route path="/contact" element={<Contact />} />

      {/* Optional: 404 page if you want */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

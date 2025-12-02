import React from "react";

import Header from "../components/sections/Header";
import PricingTableSection from "../components/sections/PricingTable";
import FAQSection from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";

export default function Plans() {
  return (
    <section className="font-[var(--font-hanken)] space-y-40 mx-auto max-w-7xl px-2">
      <Header />
      <PricingTableSection />
      <FAQSection />
      <Footer />
    </section>
  );
}

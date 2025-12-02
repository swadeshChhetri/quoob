import React from "react";

import Header from "../components/sections/Header";
import AgenticSection from "../components/sections/AgenticSection";
import MultimodalSection from "../components/sections/MultiModal";
import UseCases from "../components/sections/UseCases";
import DataSource from "../components/sections/DataSource";
import Footer from "../components/sections/Footer";

export default function Services() {
  return (
    <section className="font-[var(--font-hanken)] space-y-40 mx-auto max-w-7xl px-2">
      <Header />
      <div className="pt-18">
      <AgenticSection />
      <MultimodalSection />
      <UseCases />
      <DataSource />
      <Footer />
      </div>
    </section>
  );
}

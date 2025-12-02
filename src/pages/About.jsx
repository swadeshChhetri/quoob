import React from "react";

import Header from "../components/sections/Header";
import Overview from "../components/sections/Overview";
import StatsSection from "../components/sections/StatsData";
import Footer from "../components/sections/Footer";

export default function About() {
  return (
    <section className="font-[var(--font-hanken)] space-y-40 mx-auto max-w-7xl px-2">
      <Header />
      <Overview />
      <StatsSection />
      <Footer />
    </section>
  );
}

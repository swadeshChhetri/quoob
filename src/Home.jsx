import React from "react";
import Header from "./components/sections/Header";
import HeroSection from "./components/sections/Hero";
import DemoVideoSection from "./components/sections/DemoVideo";
import DemoImage from "./components/sections/DemoImage";

const Home = () => {
  return (
    <section className="font-[var(--font-hanken)] mx-auto max-w-7xl px-2">
      <Header />
      {/* <DemoVideoSection /> */}
      <HeroSection />
      <DemoImage />
    </section>
  );
};

export default Home;

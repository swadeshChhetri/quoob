import React from "react";
import Header from "./components/sections/Header";
import HeroSection from "./components/sections/Hero";
import MultimodalSection from "./components/sections/MultiModal";
import UseCases from "./components/sections/UseCases";
import Overview from "./components/sections/Overview";
import Footer from "./components/sections/Footer";
import DataSource from "./components/sections/DataSource";
import AgenticSection from "./components/sections/AgenticSection";
import ScrollAnimationSection from "./components/sections/ScrollAnimation";
import DemoVideoSection from "./components/sections/DemoVideo";
import DemoImage from "./components/sections/DemoImage";
import StatsSection from "./components/sections/StatsData";
import AgentPlatformSection from "./components/sections/AgenticPlatform";
import PricingTableSection from "./components/sections/PricingTable";
import FAQSection from "./components/sections/FAQ";
import ContactForm from "./components/sections/Contact";
import MiddleVideo from './components/sections/MiddleVideo';

const Home = () => {
  return (
    <>
      {/* <section> */}
      <section className="font-[var(--font-hanken)] space-y-40 mx-auto max-w-7xl px-2">
        <Header />
        <DemoVideoSection />
        <HeroSection />
        <DemoImage />
        <AgenticSection />
        <AgentPlatformSection />
        <MultimodalSection />
        <MiddleVideo />
        <UseCases />
        <DataSource />
        <ScrollAnimationSection />
        <StatsSection />
        <Overview />
        <PricingTableSection />
        <FAQSection />
        <ContactForm />
        <Footer />
      </section>
    </>
  );
};

export default Home;

import React from "react";
import HeroSection from "../components/sections/Hero";

import MainLayout from "./../components/layout/MainLayout";
import SectionSupervision from "./../components/sections/SectionSuperVision";
import SectionAgents from "../components/sections/sectionAgents";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SectionAgents />
      <SectionSupervision />
    </MainLayout>
  );
}

import React from "react";

import Header from "../components/sections/Header";
import AgenticSection from "../components/sections/AgenticSection";
import AgentPlatformSection from "../components/sections/AgenticPlatform";
import MultimodalSection from "../components/sections/MultiModal";
import UseCases from "../components/sections/UseCases";
import DataSource from "../components/sections/DataSource";
import DemoVideoSection from "../components/sections/DemoVideo";
import DemoImage from "../components/sections/DemoImage";
import Footer from "../components/sections/Footer";
import MainLayout from "../components/layout/MainLayout";

export default function Products() {
  return (
    <MainLayout>
      <AgenticSection />
      <AgentPlatformSection />
      <MultimodalSection />
      <UseCases />
      <DataSource />
    </MainLayout>
  );
}

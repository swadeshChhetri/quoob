import React from "react";

import Header from "../components/sections/Header";
import AgenticSection from "../components/sections/AgenticSection";
import AgentPlatformSection from "../components/sections/AgenticPlatform";
import MultimodalSection from "../components/sections/MultiModal";
import UseCases from "../components/sections/UseCases";
import DemoVideoSection from "../components/sections/MainVideo";
import DemoImage from "../components/sections/DemoImage";
import Footer from "../components/sections/Footer";
import MainLayout from "../components/layout/MainLayout";
import DataSourceImageSection from "../components/sections/DataSourceImage";
import ConnectorsSection from './../components/sections/ConnectorsSection';
import FieldProductivity from './../components/sections/FieldProductivity';
import RetailPlaybooks from './../components/sections/RetailPlaybooks';
import OverviewSection from './../components/sections/OverviewSection';

export default function Products() {
  return (
    <MainLayout>
      <OverviewSection />
      <AgenticSection />
      <AgentPlatformSection />
      <MultimodalSection />
      <ConnectorsSection />
      <UseCases />
      <DataSourceImageSection />
      <FieldProductivity />
      <RetailPlaybooks />
    </MainLayout>
  );
}

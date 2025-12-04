import React from "react";
import HeroSection from "../components/sections/Hero";
import DemoVideoSection from "../components/sections/DemoVideo";
import MainLayout from "./../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <DemoVideoSection />
      <HeroSection />
    </MainLayout>
  );
}

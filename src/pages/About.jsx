import React from "react";
import Overview from "../components/sections/Overview";
import StatsSection from "../components/sections/StatsData";
import MainLayout from "./../components/layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <Overview />
      <StatsSection />
    </MainLayout>
  );
}

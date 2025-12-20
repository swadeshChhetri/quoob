import React from "react";

import StatsSection from "../components/sections/StatsData";
import MainLayout from "./../components/layout/MainLayout";
import OurValues from "../components/sections/Ourvalues";
import Overview from './../components/sections/Overview';

export default function About() {
  return (
    <MainLayout>
      <Overview />
      <StatsSection />
      <OurValues />
    </MainLayout>
  );
}

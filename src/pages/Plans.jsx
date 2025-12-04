import React from "react";

import Header from "../components/sections/Header";
import PricingTableSection from "../components/sections/PricingTable";
import FAQSection from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";
import MainLayout from "./../components/layout/MainLayout";

export default function Plans() {
  return (
    <MainLayout>
      <PricingTableSection />
      <FAQSection />
    </MainLayout>
  );
}

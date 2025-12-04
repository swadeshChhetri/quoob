import React from "react";

import Header from "../components/sections/Header";
import ContactForm from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import MainLayout from "./../components/layout/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <ContactForm />
    </MainLayout>
  );
}

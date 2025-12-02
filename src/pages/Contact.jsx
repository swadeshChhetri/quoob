import React from "react";

import Header from "../components/sections/Header";
import ContactForm from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Contact() {
  return (
    <section className="font-[var(--font-hanken)] space-y-40 mx-auto max-w-7xl px-2">
      <Header />
      <div className="pt-20">
      <ContactForm />
      <Footer />
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import HeroSectionVideo from "./DemoVideo";
import { Link } from "react-router-dom";

const dynamicContent = [
  {
    heading: "Autonomous AI agents built for enterprise",
    paragraph:
      "Securely integrated with your tools and systems, working together to automate complex workflows across your organization.",
    button: "Contact Us",
    image: "/image/mainpage.png",
  },
  {
    heading: "Seamless, human-like collaboration with AI",
    paragraph: "Across text, voice, images, video, and your desktop.",
    button: "Try Demo",
    image: "/image/mainpage.png",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { heading, paragraph, button, image } = dynamicContent[currentIndex];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };


  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* -------------------- TOP TEXT BLOCK -------------------- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl">
          Agentic AI for the Modern Enterprise
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Qyoob empowers enterprises to build and deploy advanced AI agents that
          automate complex, multi-step workflows. With powerful orchestration,
          secure data connectivity, and seamless integrations across enterprise
          tools, Qyoob enables faster decisions, smarter operations, and
          natural, human-like interactions for every team.
        </p>
      </div>

      {/* -------------------- DEMO VIDEO SECTION -------------------- */}
      <div className="mt-14 sm:mt-20">
        <HeroSectionVideo />
      </div>

      {/* -------------------- DYNAMIC CONTENT SECTION --------------------
      <div className="container mx-auto mt-20">
        <div
          className="
      flex flex-col md:flex-row items-center justify-between
      bg-black/80 border border-[#1b1b1b] rounded-xl 
      px-4 sm:px-6 lg:px-10 py-10 gap-12 md:gap-16
    "
        >
          {/* LEFT TEXT AREA (Only this animates) *
          <div className="flex-1 text-left min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-xl space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {heading}
                </h1>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>

                <Link
                  to="/contact"
                  className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-3 rounded-md"
                >
                  {button}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT IMAGE AREA (Static — no animation) *
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              alt="AI Agent Builder Preview"
              className="
          w-full max-w-[360px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px]
          rounded-lg shadow-lg border border-[#1b1b1b]
        "
            />
          </div>
        </div>
      </div> */}

      {/* -------------------- DYNAMIC CONTENT SECTION -------------------- */}

      <div className="container mx-auto mt-20">
        <div
          className="
      w-full bg-black/80 border border-[#1b1b1b] rounded-3xl overflow-hidden
      flex flex-col md:flex-row
    "
        >
          {/* LEFT SIDE — Dynamic Animated Text */}
          <div
            className="
    w-full md:w-1/2 bg-black/80 border border-[#1b1b1b] rounded-3xl overflow-hidden
    flex flex-col md:flex-row 
    min-h-[420px] 
  "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5 max-w-xl p-8"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {heading}
                </h1>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>

                <Link
                  to="/contact"
                  className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-3 rounded-md"
                >
                  {button}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE — Full Height Responsive Image */}
          <div className="w-full md:w-1/2 bg-[#151515] flex items-stretch">
            <img
              src={image}
              alt="AI Agent Builder Preview"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

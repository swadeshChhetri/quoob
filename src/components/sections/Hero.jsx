import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dynamicContent = [
  {
    heading: "Autonomous AI agents built for enterprise",
    paragraph:
      "Securely integrated with your tools and systems, working together to automate complex workflows across your organization.",
    button: "Contact Us",
    image: "/image/createagent.png",
  },
  {
    heading: "Seamless, human-like collaboration with AI",
    paragraph: "Across text, voice, images, video, and your desktop.",
    button: "Try Demo",
    image: "/image/createagent.png",
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
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between relative rounded-xl bg-black/80">
        {/* Left Content */}
        <div className=" flex-1 text-left space-y-6 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight">
                {heading}
              </h1>
              <p className="text-gray-300 text-lg mt-4">{paragraph}</p>
              <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-6 py-3 rounded-md mt-4">
                {button}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center">
       
            <img
              key={currentIndex}
              src="/image/createagent.png"
              alt="AI Agent Builder Preview"
              className="rounded-lg shadow-lg border border-[#1b1b1b] w-full max-w-[700px]"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
   
        </div>
      </div>
    </section>
  );
}

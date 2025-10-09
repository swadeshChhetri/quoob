import React from "react";
import { motion } from "framer-motion";

const AgenticSection = () => {
  return (
    <section
      id="about"
      className="bg-black text-white flex flex-col-reverse md:flex-row items-center justify-between gap-12"
    >
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <p className="text-lime-400 font-semibold tracking-wide uppercase">
          Intelligent Automation
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Agentic AI for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Enterprise
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Powered by MCP and A2A protocols, Agentic AI transforms operations
          through secure, multi-agent collaboration that automates complex
          enterprise workflows from start to finish.
        </p>
      </div>

      {/* Right Image / Animation */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        animate={{
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.img
          src="https://cdn.prod.website-files.com/689afa31276b60a32fa171e5/689c7e03780865058475c51c_Group%2040.svg"
          alt="Agentic AI Diagram"
          className="w-[80%] md:w-[70%] rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default AgenticSection;


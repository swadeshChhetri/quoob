import React from "react";
import { MessagesSquare, AudioLines, Workflow, ImagePlus } from "lucide-react";

export default function MultimodalSection() {
  const features = [
    { icon: <MessagesSquare size={36} />, label: "CHAT" },
    { icon: <AudioLines size={36} />, label: "VOICE" },
    { icon: <Workflow size={36} />, label: "API" },
    { icon: <ImagePlus size={36} />, label: "IMAGE" },
  ];

  return (
    <section className="relative text-white py-16 sm:py-20 lg:py-28 overflow-hidden bg-black">
      {/* Soft glowing background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      <div className="relative z-10 container mx-auto text-center max-w-5xl">
        
        {/* Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="text-lime-400">{f.icon}</div>
              <span className="text-white text-base sm:text-lg font-medium tracking-wide">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-lime-400 text-sm sm:text-base mb-3 tracking-wide uppercase">
          Tagline
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Multimodal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Interfaces
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Build AI agents that communicate naturally — voice or text — and
          integrate seamlessly with tools like Teams and Slack.
        </p>
      </div>
    </section>
  );
}


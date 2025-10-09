import React from "react";
import { MessagesSquare, AudioLines, Workflow, ImagePlus } from "lucide-react";

export default function MultimodalSection() {
  const features = [
    { icon: <MessagesSquare size={40} />, label: "CHAT" },
    { icon: <AudioLines size={40} />, label: "VOICE" },
    { icon: <Workflow size={40} />, label: "API" },
    { icon: <ImagePlus size={40} />, label: "IMAGE" },
  ];

  return (
    <section className="relative flex items-center justify-center text-center text-white overflow-hidden">
      {/* Soft glowing background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Top icons */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 mb-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-2 text-lime-400"
            >
              <div>{f.icon}</div>
              <span className="text-white text-lg font-medium">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-lime-400 mb-3">Tagline</p>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Multimodal
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Interfaces
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Build AI agents that communicate naturally, by voice or text — and
          connect effortlessly with Teams, Slack, and more.
        </p>
      </div>
    </section>
  );
}

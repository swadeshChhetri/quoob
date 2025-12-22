import React from "react";
import {
  MessagesSquare,
  AudioLines,
  Workflow,
  ImagePlus,
} from "lucide-react";
import Section from "../layout/Section";
import MaxWrapper from "../layout/MaxWrapper";

/* -----------------------------
   Config
------------------------------ */
const FEATURES = [
  { id: "chat", label: "CHAT", Icon: MessagesSquare },
  { id: "voice", label: "VOICE", Icon: AudioLines },
  { id: "api", label: "API", Icon: Workflow },
  { id: "image", label: "IMAGE", Icon: ImagePlus },
];

/* -----------------------------
   Subcomponent
------------------------------ */
function FeatureItem({ label, Icon }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Icon size={36} className="text-lime-400" />
      <span className="text-white text-base sm:text-lg font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
}

/* -----------------------------
   Main Section
------------------------------ */
export default function MultimodalSection() {
  return (
    <Section className="relative bg-black text-white overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"
      />

      <MaxWrapper>
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          {/* Tagline */}
          <p className="text-lime-400 text-sm sm:text-base tracking-wide uppercase">
            Tagline
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Multimodal
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              Interfaces
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Build AI agents that communicate naturally — voice or text — and
            integrate seamlessly with tools like Teams and Slack.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 pt-6">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}

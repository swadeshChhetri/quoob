import React from "react";
import MaxWrapper from "./../../layout/MaxWrapper";
import Section from "../../layout/Section";



/* -----------------------------
   Main Section
------------------------------ */
export default function OverviewSection() {
  return (
    <Section
      id="overview"
      className="relative overflow-hidden bg-black text-white py-20"
    >
      <MaxWrapper>
        {/* Header */}
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Built for the future of
            <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
              AI-driven work
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We’re building an AI agent platform designed for real business
            operations — where multiple agents coordinate work across tools,
            data, and teams to move from intent to execution at scale.
          </p>
        </div>

        {/* Visual */}
        <div className="mx-auto mt-20 max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-black bg-[#151515] aspect-[16/8]">
            <img
              src="/image/qyoobTeam.jpg"
              alt="Enterprise AI platform overview"
              loading="lazy"
              className="h-full w-full object-fill"
            />
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="mx-auto mt-24 px-6">
          <div className="space-y-20">
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Enabling teams to think bigger and execute faster
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                As organizations adopt AI, the challenge is no longer generating
                ideas — it’s coordinating action. Our platform helps teams turn
                complex goals into structured, repeatable workflows powered by
                collaborative AI agents.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Built from the ground up for enterprise reality
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Modern enterprises operate across fragmented systems, processes,
                and teams. Our approach is designed for this complexity —
                enabling multi-agent workflows that respect organizational
                boundaries, shared context, and long-term scale.
              </p>
            </div>
          </div>
        </div>

      </MaxWrapper>
    </Section>
  );
}

import React from "react";
import { User, Users, Network } from "lucide-react";

export default function SectionAgents() {
  return (
    <section className="relative bg-black text-white py-20">
      {/* Row 1 — Title */}
      <div className="text-center mb-14">
        <h2 className="text-md font-bold tracking-[0.2em] text-lime-400 mb-4">
          WHY QYOOB
        </h2>

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          The Future of Enterprise Automation Starts
          <br /> with
          <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            AI Agents.
          </span>
        </h1>
      </div>

      {/* Outer Section — full width like the reference */}

      <div className="w-full bg-[#0f0f0f] rounded-3xl overflow-hidden mt-10 flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 bg-[#1b1b1b] px-10 md:px-14 py-14 flex flex-col justify-center">
          <h3 className="text-2xl font-medium mb-10">
            AI that powers your people, teams, and enterprise
          </h3>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-lime-400 p-3 rounded-full">
                <User size={20} className="text-black" />
              </div>
              <div>
                <p className="text-lg font-medium mb-1">Enterprise-Focused</p>
                <p className="text-gray-300">
                  AI that scales from individuals to the entire enterprise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-lime-400 p-3 rounded-full">
                <Users size={20} className="text-black" />
              </div>
              <div>
                <p className="text-lg font-medium mb-1">Outcome-Driven</p>
                <p className="text-gray-300">
                  AI that boosts productivity, accelerates teams, and transforms
                  enterprises.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-lime-400 p-3 rounded-full">
                <Network size={20} className="text-black" />
              </div>
              <div>
                <p className="text-lg font-medium mb-1">Tech-Forward</p>
                <p className="text-gray-300">
                  Intelligent agents for people, teams, and enterprise systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Perfect Responsive Image */}
        <div className="w-full md:w-1/2 bg-[#151515] flex items-stretch">
          <img src="/image/ai_work.png" className="w-full h-full object-fill" />
        </div>
      </div>
    </section>
  );
}

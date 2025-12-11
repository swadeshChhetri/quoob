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

      {/* Container Card */}
      <div className="bg-[#1b1b1b] border border-gray-800 rounded-3xl p-10 md:p-14 mt-10">
        {/* Row 2 — Subtitle Left */}
        <div className="max-w-3xl mb-14">
          <h3 className="text-xl md:text-2xl font-medium">
            AI that works with your team — and for you
          </h3>
        </div>

        {/* Row 3 — Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column — Bullet Points */}
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-lime-400 p-3 rounded-full">
                <User size={20} className="text-black" />
              </div>
              <div>
                <p className="text-lg font-medium mb-1">
                  Individual productivity
                </p>
                <p className="text-gray-300">
                  Research, analyze, ideate, and execute
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-lime-400 p-3 rounded-full">
                <Users size={20} className="text-black" />
              </div>
              <div>
                <p className="text-lg font-medium mb-1">Team efficiency</p>
                <p className="text-gray-300">
                  Automate workflows and work in parallel
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-lime-400 p-3 rounded-full">
                <Network size={20} className="text-black" />
              </div>
              <div>
                <p className="text-lg font-medium mb-1">
                  Enterprise transformation
                </p>
                <p className="text-gray-300">
                  Coordinate work across teams & systems
                </p>
              </div>
            </div>

            <button className="text-lime-500 hover:opacity-80 transition flex items-center gap-2">
              Learn more about use cases →
            </button>
          </div>

          {/* Right Column — Placeholder for Image */}
          <div className="w-full aspect-[20/10] bg-[#222]/40 rounded-3xl border border-gray-700 flex items-center justify-center overflow-hidden">
            <img
              src="/image/ai_work.jpg"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

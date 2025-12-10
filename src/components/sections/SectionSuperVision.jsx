import React from "react";
import { Shield, Landmark, Boxes } from "lucide-react";

export default function SectionSupervision() {
  return (
    <section className="w-full bg-black text-white py-24">
      <div className="bg-[#1b1b1b] border border-gray-800 rounded-3xl p-10 md:p-14 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT PANEL */}
          <div className="rounded-3xl h-full flex flex-col justify-center">
            <h4 className="text-sm tracking-[0.25em] text-lime-400 mb-5">
              AI SUPERVISION
            </h4>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-10">
              IT-friendly and built for
              <br />
              enterprise
              <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
                scale
              </span>
            </h2>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-lime-400 p-3 rounded-full">
                  <Landmark className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-lg font-medium">Always-on governance</p>
                  <p className="text-gray-300">
                    Visibility and controls for enterprise scale
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-lime-400 p-3 rounded-full">
                  <Shield className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-lg font-medium">Trust and security</p>
                  <p className="text-gray-300">
                    AI-native safety features mitigate risk
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-lime-400 p-3 rounded-full">
                  <Boxes className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-lg font-medium">Interoperable platform</p>
                  <p className="text-gray-300">
                    Plugs right into your existing tech stack
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full aspect-[16/10] bg-[#222]/40 rounded-3xl border border-gray-700 flex items-center justify-center overflow-hidden">
            <img
              src="/image/ai_supervision.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

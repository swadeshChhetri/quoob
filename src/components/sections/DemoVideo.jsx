import React from "react";
import { CirclePlay } from "lucide-react";

export default function HeroSectionVideo() {
  return (
    <section id="home" className="relative py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto ">
        {/* Video Wrapper */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
          {/* Video with proper responsive aspect ratio */}
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[15/7]">
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
            >
              <source
                src="https://swadeshnewsportal.s3.ap-south-1.amazonaws.com/Final Video.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* CTA Button */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 sm:pb-10 pointer-events-none">
            <button
              className="
              pointer-events-auto flex items-center gap-2
              bg-lime-400 hover:bg-lime-500 
              text-black font-semibold
              px-6 sm:px-8 py-3 rounded-full 
              transition shadow-lg hover:shadow-lime-400/30"
            >
              <CirclePlay size={20} />
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

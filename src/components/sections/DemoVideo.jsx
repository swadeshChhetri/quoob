import React from "react";
import { CirclePlay } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-22 relative w-full flex justify-center items-center overflow-hidden">
      {/* Video container with rounded corners */}
      <div className="w-full overflow-hidden rounded-3xl relative">
        <video
          className="w-full h-135 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://swadeshnewsportal.s3.ap-south-1.amazonaws.com/Final Video.mp4" type="video/mp4" />
        </video>

        {/* Watch Demo button over video */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-full flex items-center gap-2 transition">
            <CirclePlay size={20} /> {/* CirclePlay icon in front */}
            Start free trial
          </button>
        </div>
      </div>
    </section>
  );
}

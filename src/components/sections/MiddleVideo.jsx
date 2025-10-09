import React from "react";
import { CirclePlay } from "lucide-react";

export default function MiddleVideo() {
  return (
    <section id="home" className="relative w-full flex justify-center items-center overflow-hidden">
      {/* Video container with rounded corners */}
      <div className="w-full max-w-7xl overflow-hidden rounded-3xl relative">
        <video
          className="w-full  object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/middle.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

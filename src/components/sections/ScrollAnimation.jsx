import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationSection = () => {
  const sectionRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "image/fullchart.png",
    "image/createagent.png",
    "image/hero.webp",
  ];

  useEffect(() => {
    const lines = gsap.utils.toArray(".line");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * lines.length),
            images.length - 1
          );
          setCurrentImage(index);

          // Fill lines progressively
          lines.forEach((line, i) => {
            const fill = gsap.utils.clamp(0, 1, progress * lines.length - i);
            gsap.to(line, {
              scaleX: fill,
              transformOrigin: "left",
              duration: 0.1,
            });
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [images.length]);

  return (
    <div
      ref={sectionRef}
      className="h-screen flex flex-col md:flex-row items-center justify-between md:text-left px-4 md:px-8"
    >
      {/* Left: Heading & Content */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Interactive Scroll
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Animation
          </span>
        </h2>

        {/* Horizontal Lines */}
        <div className="flex space-x-6 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-1 w-32 bg-gray-300 rounded-full overflow-hidden"
            >
              <div className="h-full bg-lime-400 line scale-x-0 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 max-w-md mt-4">
          Scroll to see the lines fill progressively in deep green as the image
          changes.
        </p>
      </div>

      {/* Right: Images */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="w-[99%] h-[400px] relative bg-black rounded-2xl border-[8px] border-[#1f1f1f] shadow-[0_0_30px_rgba(0,255,0,0.15)] flex items-center justify-center overflow-hidden">
          {/* Inner Screen Frame */}
          <div className="absolute top-2 left-2 right-2 bottom-2 bg-[#0a0a0a] rounded-xl border border-[#333] overflow-hidden">
            <img
              src={images[currentImage]}
              alt="Scroll Animation"
              className="w-full h-full object-cover rounded-lg transition-all duration-300 ease-out"
            />
          </div>

          {/* Optional TV Stand / Base Line */}
          <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-32 h-[6px] bg-[#1f1f1f] rounded-full shadow-[0_2px_10px_rgba(0,255,0,0.2)]"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationSection;

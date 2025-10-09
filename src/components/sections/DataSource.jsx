import React, { useState } from "react";
import { motion } from "framer-motion";

const DataSource = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // reduce from 20 → 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10; // reduce from -20 → -10
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative flex items-center justify-center">
      <motion.img
        src="image/fullchart.png"
        alt="Full Chart"
        className="w-full h-full bg-[#0a0a0a] rounded-xl border border-[#333] hover:border-lime-400/40
        hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
        overflow-hidden shadow-lg p-6"
        style={{ perspective: 1000 }}
        animate={{
          rotateX: mousePos.y,
          rotateY: mousePos.x,
          scale: mousePos.x || mousePos.y ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </section>
  );
};

export default DataSource;

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
    <section className="relative">
      <motion.img
        src="image/fullchart.png"
        alt="Full Chart"
        className="w-full max-w-6xl h-auto rounded-lg shadow-lg"
        style={{ perspective: 1000 }}
        animate={{
          rotateX: mousePos.y,
          rotateY: mousePos.x,
          scale: mousePos.x || mousePos.y ? 1.02 : 1, // reduce scale slightly
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }} // smoother spring
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </section>
  );
};

export default DataSource;

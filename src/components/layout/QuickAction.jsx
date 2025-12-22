import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const QuickAction = () => {
  return (
    <Section className="text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white">
        Start transforming work with
        <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
          agents
        </span>
      </h2>

      <div className="flex items-center justify-center gap-6 font-semibold">
        <Link
          to="/contact"
          className="px-8 py-3 rounded-full border border-lime-400 text-white hover:bg-lime-400 hover:text-black transition"
        >
          Request a demo
        </Link>
      </div>
    </Section>
  );
};

export default QuickAction;

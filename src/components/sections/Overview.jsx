import React from "react";

const overviewData = [
  {
    number: "1",
    title: "Orchestration",
    description:
      "The Qyoob Agent orchestrates user interactions across modalities (chat, voice, API). It routes requests through the Agent Registry and MCP Gateway, coordinating tasks across services and agents. The LLM Registry dynamically selects and serves appropriate models, supporting modular workflows.",
  },
  {
    number: "2",
    title: "Document Stores",
    description:
      "Establish secure connections to your enterprise data sources including Google Drive, Microsoft SharePoint, Amazon S3, and other cloud storage platforms. Full compatibility with major document formats: (pdf, docx, json, txt, csv ...).",
  },
  {
    number: "3",
    title: "Tools Management",
    description:
      "The MCP Gateway connects to external enterprise tools (e.g., GitHub, Jira, Notion, Slack) while the Agent Registry manages callable agents. These enable composable, multi-agent workflows powered by external data and services, accessible via APIs.",
  },
];

const Overview = () => {
  return (
    <section
      id="overview"
      className="text-white relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="container mx-auto space-y-24">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
          Built for the future of
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 ml-3">
            AI-driven work
          </span>
        </h2>

        <div className="w-[80%] mx-auto bg-[#151515] flex items-center justify-center h-[75vh] overflow-hidden">
          <img
            src="/image/qyoobTeam.jpg"
            alt="Enterprise AI platform overview"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Paragraph */}
        <p className="mt-8 text-gray-400 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto text-center">
          We’re building an AI agent platform designed for real business
          operations — where multiple agents coordinate work across tools, data,
          and teams to move from intent to execution at scale.
        </p>

        <h2 className="mt-20 text-3xl text-lime-300">
          Enabling teams to think bigger and execute faster
        </h2>

        <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-4xl">
          As organizations adopt AI, the challenge is no longer generating ideas
          — it’s coordinating action. Our platform helps teams turn complex
          goals into structured, repeatable workflows powered by collaborative
          AI agents.
        </p>

        <h2 className="mt-20 text-3xl text-lime-300">
          Built from the ground up for enterprise reality
        </h2>

        <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-4xl">
          Modern enterprises operate across fragmented systems, processes, and
          teams. Our approach is designed for this complexity — enabling
          multi-agent workflows that respect organizational boundaries, shared
          context, and long-term scale. The result is AI that fits how large
          organizations actually work.
        </p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {overviewData.map((item, index) => (
            <div
              key={index}
              className="
              group rounded-2xl border border-lime-400/20
              p-6 sm:p-8
              shadow-[0_0_40px_-15px_rgba(163,255,102,0.2)]
              transition-all duration-500 relative
              hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
              hover:border-lime-400/40 hover:-translate-y-2
            "
            >
              {/* Number Badge */}
              <div className="bg-lime-400 text-black font-bold text-lg w-10 h-10 flex items-center justify-center rounded-md shadow-md transition-transform duration-500 group-hover:scale-110">
                {item.number}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-lime-300 transition-colors duration-500">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;

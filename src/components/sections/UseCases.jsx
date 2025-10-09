import React from "react";
import { FaSalesforce, FaGithub } from "react-icons/fa";
import {
  // SiMicrosoftTeams,
  SiGoogledrive,
  SiJira,
  SiZapier,
  SiMeta,
} from "react-icons/si";

const useCases = [
  {
    title: "Customer Support Agent",
    description:
      "Interact with a Customer Support Agent through multiple modalities to get your issues resolved, receive product information, and obtain troubleshooting assistance without human intervention as the agent accesses knowledge bases and systems to provide instant solutions and documentation.",
    icons: [
      <FaSalesforce key="salesforce" className="text-sky-400" />,
      // <SiMicrosoftteams key="teams" className="text-indigo-400" />,
      <SiGoogledrive key="drive" className="text-green-400" />,
      <SiJira key="jira" className="text-blue-400" />,
    ],
  },
  {
    title: "Coding Agent",
    description:
      "Accelerate your software development workflow with the Coding Agent, seamlessly integrated with your favorite tools like Microsoft Teams, GitHub, and Jira. Designed to empower developers and teams, this intelligent assistant automates repetitive tasks, facilitates team collaboration, and bridges communication across platforms—all while boosting productivity and code quality.",
    icons: [
      <SiMeta key="meta" className="text-blue-500" />,
      <SiZapier key="zapier" className="text-orange-400" />,
      <SiJira key="jira" className="text-blue-400" />,
      <FaGithub key="github" className="text-white" />,
    ],
  },
  {
    title: "Marketing Agent",
    description:
      "Enhance your marketing campaigns with automated analytics, personalized recommendations, and real-time insights across multiple platforms to drive engagement and conversions.",
    icons: [
      <SiZapier key="zapier" className="text-orange-400" />,
      // <SiMicrosoftTeams key="teams" className="text-indigo-400" />,
      <SiMeta key="meta" className="text-blue-500" />,
    ],
  },
  {
    title: "Data Analysis Agent",
    description:
      "Empower your organization with data-driven insights using the Data Analysis Agent that processes complex datasets, visualizes metrics, and provides actionable intelligence without manual effort.",
    icons: [
      <SiJira key="jira" className="text-blue-400" />,
      <SiGoogledrive key="drive" className="text-green-400" />,
      <FaGithub key="github" className="text-white" />,
    ],
  },
];

const UseCases = () => {
  return (
    <section id="services" className="text-white relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-5xl font-semibold mb-6 text-left text-white">
        Use
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
        Cases
        </span>
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 text-lg max-w-3xl mb-14">
        Aliquet tellus imperdiet morbi tincidunt gravida nulla. Vitae cum vel
        vulputate at mauri.
      </p>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="
            group
             
            rounded-2xl border border-lime-400/20
            p-8
            shadow-[0_0_40px_-15px_rgba(163,255,102,0.2)]
            transition-all duration-500 relative
            hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
            hover:border-lime-400/40
            hover:scale-[1.0]
            hover:-translate-y-2
            "
          >
            <h3 className="text-lime-300 transition-colors duration-500 text-2xl font-semibold mb-4">
              {useCase.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {useCase.description}
            </p>
            <div className="flex gap-5 text-2xl">{useCase.icons}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;

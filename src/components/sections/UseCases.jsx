// import React from "react";
// import { FaSalesforce, FaGithub } from "react-icons/fa";
// import { SiGoogledrive, SiJira, SiZapier, SiMeta } from "react-icons/si";

// const useCases = [
//   {
//     title: "Customer Support Agent",
//     description:
//       "Interact with a Customer Support Agent through multiple modalities to get your issues resolved, receive product information, and obtain troubleshooting assistance as the agent accesses enterprise systems and knowledge bases to provide instant solutions.",
//     icons: [
//       <FaSalesforce key="salesforce" className="text-sky-400" />,
//       <SiGoogledrive key="drive" className="text-green-400" />,
//       <SiJira key="jira" className="text-blue-400" />,
//     ],
//   },
//   {
//     title: "Coding Agent",
//     description:
//       "Accelerate development workflows with the Coding Agent — integrated with GitHub, Jira, Teams, and more. Automate repetitive tasks, streamline collaboration, and enhance code quality with an intelligent multi-tool assistant.",
//     icons: [
//       <SiMeta key="meta" className="text-blue-500" />,
//       <SiZapier key="zapier" className="text-orange-400" />,
//       <SiJira key="jira" className="text-blue-400" />,
//       <FaGithub key="github" className="text-white" />,
//     ],
//   },
//   {
//     title: "Marketing Agent",
//     description:
//       "Enhance your marketing campaigns with automated analytics, personalized recommendations, and multi-platform insights to improve engagement and conversions.",
//     icons: [
//       <SiZapier key="zapier" className="text-orange-400" />,
//       <SiMeta key="meta" className="text-blue-500" />,
//     ],
//   },
//   {
//     title: "Data Analysis Agent",
//     description:
//       "Leverage automated data processing to visualize metrics, analyze complex datasets, and generate actionable insights without manual work.",
//     icons: [
//       <SiJira key="jira" className="text-blue-400" />,
//       <SiGoogledrive key="drive" className="text-green-400" />,
//       <FaGithub key="github" className="text-white" />,
//     ],
//   },
// ];

// const UseCases = () => {
//   return (
//     <section id="services" className="text-white py-16 sm:py-20 lg:py-28">
//       <div className="container mx-auto">

//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
//           Use{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
//             Cases
//           </span>
//         </h2>

//         {/* Paragraph */}
//         <p className="text-gray-400 text-base sm:text-lg max-w-3xl mb-10 sm:mb-14 leading-relaxed">
//           Aliquet tellus imperdiet morbi tincidunt gravida nulla. Vitae cum vel
//           vulputate at mauri.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
//           {useCases.map((useCase, index) => (
//             <div
//               key={index}
//               className="
//                 group rounded-2xl border border-lime-400/20
//                 p-6 sm:p-8
//                 shadow-[0_0_40px_-15px_rgba(163,255,102,0.2)]
//                 transition-all duration-500
//                 hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
//                 hover:border-lime-400/40
//                 hover:-translate-y-2
//               "
//             >
//               <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-lime-300">
//                 {useCase.title}
//               </h3>

//               <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
//                 {useCase.description}
//               </p>

//               <div className="flex gap-5 text-xl sm:text-2xl">
//                 {useCase.icons}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default UseCases;


import React from "react";
import {
  Cloud,
  GitBranch,
  Folder,
  Kanban,
  Zap,
  Globe,
} from "lucide-react";

const useCases = [
  {
    title: "Customer Support Agent",
    description:
      "Interact with a Customer Support Agent through multiple modalities to get your issues resolved, receive product information, and obtain troubleshooting assistance as the agent accesses enterprise systems and knowledge bases to provide instant solutions.",
    icons: [
      <Cloud key="crm" className="text-sky-400" />,
      <Folder key="storage" className="text-green-400" />,
      <Kanban key="jira" className="text-blue-400" />,
    ],
  },
  {
    title: "Coding Agent",
    description:
      "Accelerate development workflows with the Coding Agent — integrated with repositories, issue tracking, and collaboration tools. Automate repetitive tasks, streamline collaboration, and enhance code quality with an intelligent multi-tool assistant.",
    icons: [
      <Globe key="platform" className="text-blue-500" />,
      <Zap key="automation" className="text-orange-400" />,
      <Kanban key="tracking" className="text-blue-400" />,
      <GitBranch key="code" className="text-white" />,
    ],
  },
  {
    title: "Marketing Agent",
    description:
      "Enhance your marketing campaigns with automated analytics, personalized recommendations, and multi-platform insights to improve engagement and conversions.",
    icons: [
      <Zap key="automation" className="text-orange-400" />,
      <Globe key="meta" className="text-blue-500" />,
    ],
  },
  {
    title: "Data Analysis Agent",
    description:
      "Leverage automated data processing to visualize metrics, analyze complex datasets, and generate actionable insights without manual work.",
    icons: [
      <Kanban key="tracking" className="text-blue-400" />,
      <Folder key="storage" className="text-green-400" />,
      <GitBranch key="code" className="text-white" />,
    ],
  },
];

const UseCases = () => {
  return (
    <section id="services" className="text-white py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Use{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Cases
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mb-10 sm:mb-14 leading-relaxed">
          Aliquet tellus imperdiet morbi tincidunt gravida nulla. Vitae cum vel
          vulputate at mauri.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="
                group rounded-2xl border border-lime-400/20
                p-6 sm:p-8
                shadow-[0_0_40px_-15px_rgba(163,255,102,0.2)]
                transition-all duration-500
                hover:shadow-[0_0_50px_-10px_rgba(163,255,102,0.4)]
                hover:border-lime-400/40
                hover:-translate-y-2
              "
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-lime-300">
                {useCase.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                {useCase.description}
              </p>

              <div className="flex gap-5 text-xl sm:text-2xl">
                {useCase.icons}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;

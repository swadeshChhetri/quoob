import React from "react";

const SplitSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Build agents in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
                minutes
              </span>{" "}
              not months
            </h1>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">
                  Create multiple agents for any role or team
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">
                  Fine-tune sources and personality without code
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">
                  Get your assistants to handle advanced workflows
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-400 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">
                  Configure them to appear in tools like Slack
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative w-full">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 h-[300px] md:h-[400px]">
              <video
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/saas.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;

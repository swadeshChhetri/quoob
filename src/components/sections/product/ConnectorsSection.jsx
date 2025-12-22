import { connectors } from "../../../data/connectors";
import MaxWrapper from "../../layout/MaxWrapper";
import Section from "../../layout/Section";

export default function ConnectorsSection() {
  return (
    <Section className="bg-neutral-950 text-white">
      {/* Header */}
      <MaxWrapper>
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-sm tracking-widest text-gray-400">
            <span>🔧</span>
            <span className="text-lime-400 font-semibold tracking-wide uppercase">
              INTEGRATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Connect agents to the tools your teams already run on
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl">
            Bring data, actions, and workflows together by connecting agents
            directly to the systems where work actually happens.
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-white/10" />
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6">
            {connectors.map((item) => (
              <div
                key={item.name}
                className="
        group
        flex flex-col items-center gap-3 text-center
        rounded-xl
        border border-white/10
        bg-white/5
        px-4 py-5
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-lime-400/30
        hover:bg-white/10
        hover:shadow-[0_0_24px_-12px_rgba(163,255,102,0.22)]
      "
              >
                {/* Icon */}
                <div
                  className="
          flex h-10 w-10 items-center justify-center
          transition-transform duration-300
          group-hover:scale-105
        "
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Label */}
                <span
                  className="
          text-xs sm:text-sm
          text-gray-300
          transition-colors duration-300
          group-hover:text-white
        "
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}

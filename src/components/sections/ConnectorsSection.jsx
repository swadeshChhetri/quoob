import { connectors } from "../../data/connectors";

export default function ConnectorsSection() {
  return (
    <section className="bg-neutral-950 py-28 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="mb-4 flex items-center gap-2 text-sm tracking-widest text-gray-400">
            <span>🔧</span>
            <span className="text-lime-400 font-semibold tracking-wide uppercase">
              INTEGRATIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Connect agents to the tools your teams already run on
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl">
            Bring data, actions, and workflows together by connecting agents
            directly to the systems where work actually happens.
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-white/10" />

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-14">
          {connectors.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-sm text-gray-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { MarqueeRow } from "../layout/MarqueeRow";
import { integrations } from "../../data/integrations";

export default function DataSourceApps() {
  const row1 = integrations.filter((_, i) => i % 2 === 0);
  const row2 = integrations.filter((_, i) => i % 2 !== 0);
  return (
    <section className="relative bg-black text-white py-20">
      <div className="max-w-full text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Connect all your data sources with
          <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Qyoob
          </span>
        </h1>
        <p className="text-gray-300">
          Unify search, analytics, and AI workflows by securely connecting your
          favorite data tools—without breaking permissions.
        </p>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-3 py-6">
          <div className="relative space-y-6">
            <MarqueeRow items={row1} direction="left" duration={35} />
            <MarqueeRow items={row2} direction="right" duration={45} />
          </div>
        </div>
      </div>
    </section>
  );
}

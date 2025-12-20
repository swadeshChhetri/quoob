export default function OverviewSection() {
  return (
    <section className="bg-neutral-950 py-28 text-white">
      <div className="container mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-lime-400 font-semibold tracking-wide uppercase">
          OVERVIEW
        </p>

        {/* Heading */}
        <h2 className="max-w-4xl text-4xl sm:text-5xl font-semibold leading-tight">
          From isolated tasks <br />
          to coordinated execution at scale
        </h2>

        {/* Subheading */}
        <p className="mt-6 max-w-4xl text-xl text-gray-400 leading-relaxed">
          Our AI agent platform turns individual actions into connected
          workflows, so teams can operate faster, smarter, and with consistency
          across the business.
        </p>

        {/* Value Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl bg-black p-6 border border-white/10">
            <h3 className="text-lg font-medium mb-2">
              Workflows, not one-off actions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Design repeatable agent workflows that coordinate tasks across
              tools, systems, and teams — without manual handoffs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-black p-6 border border-white/10">
            <h3 className="text-lg font-medium mb-2">
              Designed for real operators
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Built for day-to-day business operations, so teams can focus on
              outcomes instead of managing prompts, models, or brittle
              automations.
            </p>
          </div>

          {/* Card 3 – Highlighted */}
          <div className="rounded-2xl bg-black p-6 border border-lime-500/60 shadow-[0_0_40px_-10px_rgba(163,255,102,0.6)]">
            <h3 className="text-lg font-medium mb-2">
              Multi-agent execution at scale
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Coordinate multiple agents across workflows, each with clear
              roles, shared context, and guardrails that hold up as complexity
              grows.
            </p>
          </div>
        </div>

        {/* Product Screenshot */}
        <div className="mt-24 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
          <img
            src="https://dummyimage.com/1400x800/111827/e5e7eb&text=Product+UI+Preview"
            alt="Product UI overview"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function OurValues() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
          Our values
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connect */}
          <div className="rounded-2xl p-8 text-center">
            <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-lime-500">
              {/* Icon */}
              <svg
                className="h-24 w-24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                viewBox="0 0 100 100"
              >
                <circle cx="40" cy="50" r="25" />
                <circle cx="60" cy="50" r="25" />
                <circle cx="50" cy="50" r="25" />
              </svg>
            </div>

            <h3 className="text-3xl font-medium mb-4 text-lime-300">Connect</h3>
            <p className="text-md font-semibold leading-tight text-gray-100 group-hover:text-white transition-colors">
              We believe meaningful progress happens when people, systems, and
              context come together. We focus on creating shared understanding
              across teams and tools, so decisions are informed, aligned, and
              easier to act on.
            </p>
          </div>

          {/* Challenge */}
          <div className="rounded-2xl  p-8 text-center">
            <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-lime-500 ">
              {/* Icon */}
              <svg
                className="h-24 w-24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                viewBox="0 0 100 100"
              >
                <line x1="50" y1="10" x2="50" y2="90" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="20" y1="20" x2="80" y2="80" />
                <line x1="80" y1="20" x2="20" y2="80" />
              </svg>
            </div>

            <h3 className="text-3xl font-medium mb-4 text-lime-300">
              Challenge
            </h3>
            <p className="text-md font-semibold leading-tight text-gray-100 group-hover:text-white transition-colors">
              We question assumptions, test ideas in real systems, and measure
              progress by outcomes — not opinions. Constructive disagreement is
              encouraged, because better decisions come from pressure-testing
              ideas against reality.
            </p>
          </div>

          {/* Own */}
          <div className="rounded-2xl p-8 text-center">
            <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-mint-200 bg-lime-500">
              {/* Icon */}
              <svg
                className="h-24 w-24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                viewBox="0 0 100 100"
              >
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 360) / 24;
                  return (
                    <line
                      key={i}
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="0"
                      transform={`rotate(${angle} 50 50)`}
                    />
                  );
                })}
              </svg>
            </div>

            <h3 className="text-3xl font-medium mb-4 text-lime-300">Own</h3>
            <p className="text-md font-semibold leading-tight text-gray-100 group-hover:text-white transition-colors">
              We take responsibility for outcomes, not just ideas. Ownership
              means designing solutions that hold up over time, making
              trade-offs consciously, and following work through until it
              delivers real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

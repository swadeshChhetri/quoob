import Section from "../../layout/Section";
import MaxWrapper from "../../layout/MaxWrapper";

/* -----------------------------
   Icons (isolated, reusable)
------------------------------ */
function ConnectIcon() {
  return (
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
  );
}

function ChallengeIcon() {
  return (
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
  );
}

function OwnIcon() {
  return (
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
  );
}

/* -----------------------------
   Data (single source of truth)
------------------------------ */
const VALUES = [
  {
    id: "connect",
    title: "Connect",
    description:
      "We believe meaningful progress happens when people, systems, and context come together. We focus on creating shared understanding across teams and tools, so decisions are informed, aligned, and easier to act on.",
    Icon: ConnectIcon,
  },
  {
    id: "challenge",
    title: "Challenge",
    description:
      "We question assumptions, test ideas in real systems, and measure progress by outcomes — not opinions. Constructive disagreement is encouraged, because better decisions come from pressure-testing ideas against reality.",
    Icon: ChallengeIcon,
  },
  {
    id: "own",
    title: "Own",
    description:
      "We take responsibility for outcomes, not just ideas. Ownership means designing solutions that hold up over time, making trade-offs consciously, and following work through until it delivers real impact.",
    Icon: OwnIcon,
  },
];

/* -----------------------------
   Card Component
------------------------------ */
function ValueCard({ title, description, Icon }) {
  return (
    <div
      className="
        group rounded-2xl
        border border-white/10
        bg-white/5
        p-8 text-center
        transition-all duration-300
        hover:-translate-y-1
        hover:border-lime-400/30
        hover:shadow-[0_0_40px_-15px_rgba(163,255,102,0.25)]
      "
    >
      <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-lime-500">
        <Icon />
      </div>

      <h3 className="mb-4 text-3xl font-medium text-lime-300">{title}</h3>

      <p className="text-md font-semibold leading-tight text-gray-100 transition-colors group-hover:text-white">
        {description}
      </p>
    </div>
  );
}

/* -----------------------------
   Main Section
------------------------------ */
export default function OurValuesSection() {
  return (
    <Section size="default" className="bg-black text-white">
      <MaxWrapper>
        {/* Heading */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our values</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <ValueCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}

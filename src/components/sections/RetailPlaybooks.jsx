export default function RetailPlaybooks() {
  return (
    <section className="bg-neutral-950 py-28 text-white">
      <div className="container mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-lime-400 font-semibold tracking-wide uppercase">
          RETAIL
        </p>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl">
          {/* Left – Image Panel */}
          <div className="bg-neutral-100 flex items-center justify-center p-6">
            <img
              src="https://dummyimage.com/900x600/e5e7eb/111827&text=Retail+Workflow+Preview"
              alt="Retail workflow preview"
              className="w-full max-w-[760px] rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Right – Content Panel */}
          <div className="bg-black p-10 lg:p-12">
            <h3 className="text-3xl font-semibold mb-4">
              Playbooks for <br /> complex operations
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Coordinate multi-step work across teams, systems, and data without
              relying on brittle, manual processes.
            </p>

            {/* Playbook List */}
            <ul className="space-y-4 text-sm">
              <li className="text-lime-400 cursor-pointer">
                Operational signal analysis
              </li>

              <li className="text-lime-400 cursor-pointer">
                Cross-system dependency tracking
              </li>

              {/* Active Item */}
              <li className="rounded-lg bg-neutral-900 p-4">
                <p className="text-lime-400 mb-1">
                  Execution gap identification
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Surface breakdowns between intent and action by connecting
                  context, data, and decisions across multiple systems.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

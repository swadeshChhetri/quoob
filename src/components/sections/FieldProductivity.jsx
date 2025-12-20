export default function FieldProductivity() {
  return (
    <section className="bg-neutral-950 py-28 text-white">
      <div className="container mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-lime-400 font-semibold tracking-wide uppercase">
          FIELD PRODUCTIVITY
        </p>

        {/* Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-black">
          {/* Left Panel */}
          <div className="p-10 lg:p-12">
            <h3 className="text-3xl font-semibold mb-4">
              Playbooks for <br /> coordinated execution
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Turn complex, cross-tool work into structured agent workflows that
              move from intent to outcome without manual follow-ups.
            </p>

            {/* Playbook List */}
            <ul className="space-y-4 text-sm">
              <li className="text-lime-400 cursor-pointer">
                Workflow setup and context gathering
              </li>
              <li className="text-lime-400 cursor-pointer">
                Multi-step task coordination
              </li>

              {/* Active */}
              <li className="rounded-lg bg-neutral-900 p-4">
                <p className="text-lime-400 mb-1">
                  Decision mapping and execution
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Align agents around shared context, dependencies, and
                  priorities, so actions happen in the right order and at the
                  right time.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Panel (Dummy Image) */}
          <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 flex items-center justify-center">
            <img
              src="https://dummyimage.com/900x600/1f2937/ffffff&text=Product+UI+Preview"
              alt="Product UI preview"
              className="w-full max-w-[720px] rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

import { integrations } from "../../data/integrations";
import { containerVariants, itemVariants } from "../../utils/animations";

export default function DataSourceApps() {
  return (
    <section className="py-24 text-white text-center">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Connecting Data Source
          <span className="px-3 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
            Apps
          </span>
        </h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
  grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6
  grid-rows-2
  gap-6 mt-15
"
        >
          {integrations.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-black px-5 py-4 backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                <img src={tool.icon} alt={tool.name} className="h-6 w-6" />
              </div>

              <span className="text-sm font-medium white">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

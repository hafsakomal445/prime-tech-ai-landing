import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "AI Discovery",
    description:
      "We analyze your goals and identify opportunities for AI-driven innovation.",
  },
  {
    number: "02",
    title: "Smart Planning",
    description:
      "Generate ideas, content, and strategies using advanced AI tools.",
  },
  {
    number: "03",
    title: "Design & Prototype",
    description:
      "Build interactive prototypes and modern user experiences.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Transform concepts into scalable digital products and websites.",
  },
  {
    number: "05",
    title: "Launch & Growth",
    description:
      "Deploy, monitor, optimize, and scale your business growth.",
  },
];

const Workflow = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <div className="text-center mb-20">
        <span className="text-blue-400 uppercase tracking-widest">
          Process
        </span>

        <h2 className="text-5xl font-bold mt-4">
          How AI Accelerates Development
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Our streamlined workflow combines AI efficiency with human expertise.
        </p>
      </div>

      <div className="space-y-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <div className="text-5xl font-bold text-blue-500 min-w-[80px]">
              {step.number}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
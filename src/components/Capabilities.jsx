import { motion } from "framer-motion";
import {
  FaRobot,
  FaGlobe,
  FaShoppingCart,
  FaChartLine,
  FaCloud,
  FaBolt,
} from "react-icons/fa";

const capabilities = [
  {
    icon: <FaRobot size={35} />,
    title: "AI Content Generation",
    description:
      "Generate high-quality content, marketing copy, and creative assets in minutes.",
  },
  {
    icon: <FaGlobe size={35} />,
    title: "Custom Web Solutions",
    description:
      "Modern responsive websites built with cutting-edge technologies.",
  },
  {
    icon: <FaShoppingCart size={35} />,
    title: "E-Commerce Optimization",
    description:
      "Boost sales with AI-powered user experiences and conversion strategies.",
  },
  {
    icon: <FaBolt size={35} />,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and improve business productivity.",
  },
  {
    icon: <FaChartLine size={35} />,
    title: "Growth Analytics",
    description:
      "Transform data into actionable insights for business growth.",
  },
  {
    icon: <FaCloud size={35} />,
    title: "Cloud Infrastructure",
    description:
      "Secure, scalable, and performance-driven cloud solutions.",
  },
];

const Capabilities = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">
      <div className="text-center mb-16">
        <span className="text-blue-400 uppercase tracking-widest">
          What We Do
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Our AI Capabilities
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Leveraging artificial intelligence to accelerate innovation,
          improve efficiency, and create powerful digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.04,
              y: -8,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-3xl"
          >
            <div className="text-blue-500 mb-5">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
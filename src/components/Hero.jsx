import { motion } from "framer-motion";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 pt-32 pb-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/20 blur-[140px] rounded-full"></div>
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl"
      >
        <span className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 mb-6">
          Innovate, Build, and Grow
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Next-Gen
          <span className="block text-blue-500">
            AI Solutions
          </span>
          For Modern Business
        </h1>

        <p className="mt-8 text-lg text-gray-400 max-w-xl">
          We combine artificial intelligence, automation,
          and modern web technologies to build intelligent
          digital experiences that scale.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full transition">
            Start Your Project
          </button>

          <button className="border border-white/20 hover:border-blue-500 px-8 py-4 rounded-full transition">
            View Services
          </button>
        </div>

        <div className="flex gap-10 mt-14">
          <div>
            <h3 className="text-3xl font-bold text-blue-500">
              100+
            </h3>
            <p className="text-gray-400">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-500">
              24h
            </h3>
            <p className="text-gray-400">
              Delivery
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-500">
              99%
            </h3>
            <p className="text-gray-400">
              Satisfaction
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Side 3D */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full lg:w-[500px] h-[500px]"
      >
        <ThreeScene />
      </motion.div>

    </section>
  );
};

export default Hero;

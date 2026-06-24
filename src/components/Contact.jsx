import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-8 py-32">
      <div className="text-center mb-12">
        <span className="text-blue-400 uppercase tracking-widest">
          Contact
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Let's Build Something Amazing
        </h2>
      </div>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
        />

        <textarea
          rows="5"
          placeholder="Tell us about your project..."
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
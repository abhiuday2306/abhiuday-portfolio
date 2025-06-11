"use client";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="px-6 py-10 bg-teal-100 dark:bg-teal-900 text-black dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Associate Software Developer – Wcube Pvt. Ltd.</h3>
          <p>Built responsive UIs, optimized APIs, fixed bugs daily using Next.js + Django.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Frontend Intern – Dahoma Consulting</h3>
          <p>Created UI with TypeScript & Tailwind; participated in agile & code reviews.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

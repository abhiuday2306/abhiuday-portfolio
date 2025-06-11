"use client";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      id="education"
      className="px-6 py-10 bg-orange-100 dark:bg-orange-800 text-black dark:text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <div>
          <h3 className="text-xl font-semibold">IIIT Lucknow (2020 – 2024)</h3>
          <p>B.Tech in Computer Science and Artificial Intelligence — CGPA: 7.8</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Spring Bells School (2019)</h3>
          <p>Class XII — 81%</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Infant Jesus School (2017)</h3>
          <p>Class X — 86.5%</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;

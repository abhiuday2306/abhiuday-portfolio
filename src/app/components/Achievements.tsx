"use client";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      className="px-6 py-10 bg-gradient-to-br from-green-100 to-white dark:from-green-900 dark:to-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Achievements</h2>
      <ul className="max-w-2xl mx-auto list-disc pl-5 space-y-2">
        <li>Solved 550+ DSA problems on LeetCode, GFG, Coding Ninjas</li>
        <li>Expert Level on Coding Ninjas (2024)</li>
        <li>Multiple full-stack projects with authentication & dashboards</li>
      </ul>
    </motion.section>
  );
};

export default Achievements;

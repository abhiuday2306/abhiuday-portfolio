"use client";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="px-6 py-10 bg-gradient-to-r from-pink-100 to-white dark:from-pink-900 dark:to-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <ul className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
        <li>C, C++, Python, JavaScript, Java</li>
        <li>React, Next.js, Django, Node.js</li>
        <li>MongoDB, SQL, Tailwind, Git</li>
        <li>VS Code, GitHub, DSA, OOP</li>
      </ul>
    </motion.section>
  );
};

export default Skills;

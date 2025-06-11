"use client";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="px-6 py-10 bg-gradient-to-br from-yellow-100 to-white dark:from-yellow-900 dark:to-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Helping Hands</h3>
          <p>Donation platform for NGOs built with MERN stack and admin dashboard.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">OTT-Based Streaming Platform</h3>
          <p>Optimized UI and video streaming experience using React and Redux.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Signature Verification System</h3>
          <p>Machine learning model for signature forgery detection using Python.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

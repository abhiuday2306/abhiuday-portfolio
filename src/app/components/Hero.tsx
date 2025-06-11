"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="text-center py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-extrabold">Abhiuday Tiwari</h1>
      <p className="mt-4 text-xl font-medium">Associate Software Developer | MERN Stack | DSA Enthusiast</p>
      <p className="mt-2">B.Tech in CSE & AI @ IIIT Lucknow</p>
    </motion.section>
  );
};

export default Hero;

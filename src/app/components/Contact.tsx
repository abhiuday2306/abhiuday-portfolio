"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="px-6 py-10 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-black text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Email: <a href="mailto:lci2020035@iiitl.ac.in" className="text-blue-600 underline">lci2020035@iiitl.ac.in</a></p>
      <p>GitHub: <a href="https://github.com/abhiuday2306" className="text-blue-600 underline">abhiuday23</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/abhiuday-tiwari-731892237/" className="text-blue-600 underline">Abhiuday Tiwari</a></p>
    </motion.section>
  );
};

export default Contact;

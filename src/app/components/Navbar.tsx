"use client";

import { useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const html = document.querySelector("html");
    if (html?.classList.contains("dark")) {
      html.classList.remove("dark");
      setDark(false);
    } else {
      html?.classList.add("dark");
      setDark(true);
    }
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold dark:text-white">Portfolio</h1>
        <div className="space-x-4 text-sm">
          <a href="#education" className="hover:underline dark:text-white">Education</a>
          <a href="#experience" className="hover:underline dark:text-white">Experience</a>
          <a href="#projects" className="hover:underline dark:text-white">Projects</a>
          <a href="#skills" className="hover:underline dark:text-white">Skills</a>
          <a href="#achievements" className="hover:underline dark:text-white">Achievements</a>
          <a href="#contact" className="hover:underline dark:text-white">Contact</a>
          {/* <button onClick={toggleTheme} className="ml-2 px-2 py-1 border rounded dark:text-white">
            {dark ? "🌞" : "🌙"}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Projects from "../components/Projects";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-[#161616] text-white" : "bg-white text-[#111111]"
      }`}
    >
      <div className={``}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
      <div className="flex-grow">
        <Main isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
      </div>
      <div className={``}>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default HomePage;

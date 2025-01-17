import React, { useState, useEffect } from "react";
import Profile from "../assets/Profile.png";
import { motion } from "framer-motion";

const Main = ({ isDarkMode }) => {
  const texts = ["MERN Stack Developer", "Frontend Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentText = texts[currentTextIndex];
    const speed = isDeleting ? 50 : 100; // Typing and deleting speed
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentText.length) {
        // Typing phase
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentText.length) {
        // Pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 1000); // Pause duration (1 second)
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting phase
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        // Switch to the next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, currentTextIndex, texts]);

  return (
    <div
      id="home"
      className={` flex rounded-[50px]  mb-16 pt-28 lg:pt-40 pb-8 lg:pb-16 px-10 md:px-20 lg:px-24 ${
        isDarkMode ? "" : ""
      }`}
    >
      <div className="grid gap-6 lg:flex lg:gap-8">
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <div className="relative">
            <img
              src={Profile}
              className={`lg:w-[500px] w-[300px] h-auto rounded-full ${
                isDarkMode
                  ? "border-[1px] border-[#6a6a6a] backdrop-blur-md bg-white/10"
                  : "border-[1px] border-[#a3a3a3] backdrop-blur-md bg-black/10"
              }`}
            />
            <span className="absolute bottom-8 right-[38px] md:bottom-10 md:right-[38px] xl:bottom-10 xl:right-[68px] translate-x-1/2 -translate-y-1/2 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
            </span>
          </div>
        </div>

        <div className="flex flex-col w-full gap-6 text-center justify-center lg:text-left lg:w-2/3">
          <div className="text-3xl font-bold lg:text-6xl">
            Kavinda Ravihansa
          </div>
          <motion.div
            className="text-lg font-semibold lg:text-2xl h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
            <span className="blinking-cursor">|</span>
          </motion.div>
          <div className="text-2xl font-bold">
            Transforming Ideas into Digital Realities
          </div>
          <div className="lg:text-base text-sm">
            I’m a passionate MERN Stack Developer and frontend enthusiast with a
            strong foundation in both frontend and backend development. I
            specialize in building responsive, user-friendly web applications,
            focusing on clean, efficient code. With hands-on experience in
            full-stack development, I integrate seamless user interfaces,
            backend systems, and APIs to enhance functionality. Every project is
            an opportunity for me to learn, grow, and make a positive impact.
            Let’s create something amazing together!
          </div>
          <button
            className={`px-3 py-2 rounded-[4px] w-fit mx-auto lg:mx-0 transition-all duration-200 ease-out ${
              isDarkMode
                ? "border-[1px] border-white hover:bg-white hover:text-[#111111]"
                : "border-[1px] border-[#111111] hover:bg-[#111111] hover:text-white"
            }`}
          >
            <a href="" target="_blank">Download CV</a>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

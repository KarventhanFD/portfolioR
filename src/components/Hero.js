import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/kar.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "React Developer, Freelancer, Web Designer";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Reset animation when component mounts
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, []);

  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-32 md:pt-40 pb-16 bg-black text-white min-h-screen">
      {/* Left Content */}
      <div className="text-center md:text-left flex-1 md:pr-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-gray-400">Karventhan</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl font-semibold mb-6 h-10 md:h-12 overflow-hidden">
          <motion.span
            className="inline-block border-r-2 border-gray-400"
            animate={{ 
              borderColor: ["transparent", "#9CA3AF", "transparent"] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.75,
              ease: "easeInOut"
            }}
          >
            {displayText}
          </motion.span>
        </h2>
        
        <p className="mt-6 text-base md:text-lg max-w-md mx-auto md:mx-0 text-gray-400">
          Passionate about building elegant, accessible, and efficient web interfaces.
        </p>
        
        <a 
          href="#contact" 
          className="inline-block mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition"
        >
          Let's Connect
        </a>
      </div>

      {/* Right Image */}
      <div className="mb-10 md:mb-0 flex-1 flex justify-center">
        <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-gray-400 p-1 group">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
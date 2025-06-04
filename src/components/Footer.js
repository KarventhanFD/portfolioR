import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com" },
    { icon: <FiLinkedin />, url: "https://linkedin.com" },
    { icon: <FiFacebook />, url: "https://twitter.com" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/karventhan__07/" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold">
              <span className="text-gray-400">KARVENTHAN</span>
            </h2>
            <p className="text-gray-400 mt-2">Frontend Developer & UI Designer</p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap gap-6 justify-center"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p>© {new Date().getFullYear()} Karventhan. All rights reserved.</p>
          <p className="mt-2">Designed & Built with React and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
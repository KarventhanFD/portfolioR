import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="contact" className="py-20 px-6 md:px-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Get In <span className="text-gray-400">Touch</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 className="text-2xl font-semibold mb-6" variants={fadeIn}>
              Contact <span className="text-gray-400">Information</span>
            </motion.h3>
            
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div 
                className="flex items-start gap-4"
                variants={fadeIn}
              >
                <div className="p-3 bg-gray-400/10 rounded-full">
                  <FiMail className="text-gray-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Email</h4>
                  <a href="mailto:contact@example.com" className="text-white hover:text-gray-400 transition">karventhankumar@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                variants={fadeIn}
              >
                <div className="p-3 bg-gray-400/10 rounded-full">
                  <FiPhone className="text-gray-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-white hover:text-gray-400 transition">+91 8438126561</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                variants={fadeIn}
              >
                <div className="p-3 bg-gray-400/10 rounded-full">
                  <FiMapPin className="text-gray-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Location</h4>
                  <p className="text-white">Coimbatore, INDIA</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeIn}>
                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-400 transition"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-400 transition"
                />
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-400 transition"
                ></textarea>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-gray-400 text-black font-semibold rounded-full hover:bg-gray-300 transition relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
                
                {submitSuccess && (
                  <motion.div 
                    className="mt-4 p-4 bg-green-900/30 border border-green-400 text-green-400 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
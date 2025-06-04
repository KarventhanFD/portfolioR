
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git/Github", level: 75 },
    { name: "UI/UX Design", level: 80 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-6 md:px-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          About <span className="text-gray-400">Me</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h3 className="text-2xl font-semibold mb-6" variants={fadeIn}>
              Who I Am
            </motion.h3>
            <motion.p className="text-gray-300 mb-4" variants={fadeIn}>
              I'm a passionate frontend developer with expertise in creating modern, responsive, and user-friendly web applications. With a strong foundation in JavaScript and React, I bring ideas to life with clean, efficient code.
            </motion.p>
            <motion.p className="text-gray-300 mb-6" variants={fadeIn}>
              My journey in web development began 2 years ago, and since then I've worked on numerous projects ranging from small business websites to complex web applications. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a 
                href="#contact" 
                className="inline-block px-6 py-2 border-2 border-gray-400 text-gray-400 font-medium rounded-full hover:bg-gray-400 hover:text-black transition"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h3 className="text-2xl font-semibold mb-6" variants={fadeIn}>
              My <span className="text-gray-400">Skills</span>
            </motion.h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={fadeIn}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div 
                      className="bg-gray-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
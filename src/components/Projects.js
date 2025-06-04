import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Symposium from "../assets/sympo.png"; // Assuming you have an image for the Symposium project
import circinus from "../assets/circinus.png"; // Assuming you have an image for the Circinus project

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample projects data
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-featured online store with cart and payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/600x400?text=E-commerce",
      link: "#",
    },
    {
      id: 2,
      title: "Symposium Website",
      description: "Event website with registration and schedule features.",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      image: Symposium ,
      link: "https://symposium-theta.vercel.app/",
    },
    {
      id: 3,
      title: "Battery sales website",
      description: "Real-time weather with 5-day forecast.",
      tags: ["JavaScript", "Bootstrap", "UI/UX"],
      image: circinus,
      link: "https://Circinus.in",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio with animations.",
      tags: ["React", "CSS3", "UI/UX"],
      image: "https://via.placeholder.com/600x400?text=Portfolio",
      link: "#",
    },
  ];

  const filters = ["All", "React", "JavaScript", "Node.js", "UI/UX"];

  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects(projectsData);
  }, []);

  const handleFilter = (filter) => {
    setIsLoading(true);
    setActiveFilter(filter);

    setTimeout(() => {
      if (filter === "All") {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(
          projectsData.filter(project => 
            project.tags.some(tag => 
              tag.toLowerCase().includes(filter.toLowerCase())
            )
          )
        );
      }
      setIsLoading(false);
    }, 300);
  };

  // Animation variants
  const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.6, 0.05, 0.1, 0.9] // fixed value
    } 
  }
};


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const projectItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          My <span className="text-gray-400">Projects</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Here are some of my selected works. Each project represents a unique
          challenge and solution.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-4 py-2 rounded-full transition ${
                activeFilter === filter
                  ? "bg-gray-400 text-black shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              className="rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-400"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative group"
                  variants={projectItem}
                  whileHover={hoverEffect}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Project Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: hoveredProject === project.id ? 1.1 : 1 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-400 text-black rounded-full font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Project <FiExternalLink className="ml-2" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <motion.span 
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-700 rounded-full"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Corner Ribbon for External Link */}
                  {project.link !== "#" && (
                    <div className="absolute top-0 right-0 bg-gray-400 text-black px-2 py-1 text-xs font-bold">
                      LIVE
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                variants={fadeIn}
              >
                <p className="text-gray-400">No projects found for this filter.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
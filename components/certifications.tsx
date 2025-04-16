"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Database Design and Basic SQL in PostgreSQL",
    issuer: "University of Michigan",
    date: "August 2024",
    icon: "fa-solid fa-database",
    link: "#", // Replace with the actual link if available
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Duke University",
    date: "August 2024",
    icon: "fa-solid fa-brain",
    link: "#", // Replace with the actual link if available
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB",
    date: "August 2024",
    icon: "fa-solid fa-leaf",
    link: "#", // Replace with the actual link if available
  },
  {
    title: "Linux Commands and Shell Scripting",
    issuer: "IBM",
    date: "August 2024",
    icon: "fa-brands fa-linux",
    link: "#", // Replace with the actual link if available
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="certifications" ref={ref} className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise and knowledge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="certification-card group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <i className={`${cert.icon} certification-icon`}></i>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-terminal-blue dark:group-hover:text-terminal-green transition-colors">
                  {cert.title}
                </h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <div className="flex items-center mt-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="certification-date">{cert.date}</span>
                </div>
                <div className="mt-auto pt-4 flex justify-end">
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-terminal-blue dark:group-hover:text-terminal-green transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

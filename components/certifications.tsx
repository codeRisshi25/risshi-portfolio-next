"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "January 2023",
    icon: "fa-brands fa-aws",
    link: "https://aws.amazon.com/certification/",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "March 2023",
    icon: "fa-solid fa-dharmachakra",
    link: "https://www.cncf.io/certification/cka/",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "June 2022",
    icon: "fa-solid fa-leaf",
    link: "https://university.mongodb.com/certification",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "September 2022",
    icon: "fa-solid fa-users",
    link: "https://www.scrum.org/professional-scrum-certifications",
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

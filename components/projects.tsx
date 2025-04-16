"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, Code, Server, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState("All")
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

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Backend":
        return Server
      case "AI":
        return Code
      case "Others":
        return Database
      default:
        return Cloud
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing backend development, API implementation, and system architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {["All", "Backend", "AI", "Others"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-terminal-blue dark:bg-terminal-green hover:bg-terminal-blue/80 dark:hover:bg-terminal-green/80"
                    : "border-terminal-blue/30 dark:border-terminal-green/30 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/10 dark:hover:bg-terminal-green/10"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category)
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg bg-card border border-terminal-blue/30 dark:border-terminal-green/30 transition-all duration-500 hover:border-terminal-blue/70 dark:hover:border-terminal-green/70 hover:shadow-glow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-terminal-blue/10 via-transparent to-terminal-cyan/10 dark:from-terminal-green/10 dark:via-transparent dark:to-terminal-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="mr-4 p-2 rounded-md bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-terminal-blue/10 dark:hover:bg-terminal-green/10 text-muted-foreground hover:text-terminal-blue dark:hover:text-terminal-green transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-terminal-blue/10 dark:hover:bg-terminal-green/10 text-muted-foreground hover:text-terminal-blue dark:hover:text-terminal-green transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green border-terminal-blue/30 dark:border-terminal-green/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-terminal-blue/20 dark:border-terminal-green/20 flex justify-between items-center">
                    <Button
                      asChild
                      variant="ghost"
                      className="text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/10 dark:hover:bg-terminal-green/10 hover:text-terminal-blue dark:hover:text-terminal-green p-0 h-auto"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

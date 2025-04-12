"use client"

import { motion } from "framer-motion"
import { Download, Code, Server, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

export default function About() {
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
    <section id="about" ref={ref} className="py-12 md:py-20 relative">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* About me text - shows first on mobile */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-4 md:mb-6 text-gradient">About Me</h2>

            <div className="space-y-4 md:space-y-6 text-muted-foreground">
              <p>
                Hey! I'm a second-year Computer Science and Technology undergrad with a passion for all things tech. My
                interests span across backend development, AI, blockchain, 3D modeling, and computer graphics.
              </p>

              <p className="hidden md:block">
                I love building things that work behind the scenes, whether it's APIs, smart contracts, or rendering
                engines. I'm also super into gaming (both playing and geeking out over how they're made), and I have a
                soft spot for cats — the real-life ones and the ones made of polygons.
              </p>

              <p>Always exploring, always learning, and always curious. Let's build something cool.</p>

              <div className="pt-4 md:pt-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-blue dark:from-terminal-green dark:to-terminal-cyan dark:hover:from-terminal-cyan dark:hover:to-terminal-green transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
                >
                  <Link href="/risshi-raj-sen-resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Terminal - shows second on mobile */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-terminal-blue dark:text-terminal-green">about.sh</div>
              </div>

              {/* Simplified terminal content for mobile */}
              <div className="space-y-3 md:space-y-4 text-sm">
                <p className="terminal-prompt">whoami</p>
                <p className="pl-4 text-terminal-cyan dark:text-terminal-green">Risshi Raj Sen</p>

                <p className="terminal-prompt">cat education.txt</p>
                <p className="pl-4">
                  <span className="text-terminal-blue dark:text-terminal-green">B.Tech Computer Science</span>
                  <br />
                  <span className="text-muted-foreground">Bennett University, 2027 • GPA: 9.3/10.0</span>
                </p>

                <p className="terminal-prompt hidden md:block">cat experience.txt</p>
                <p className="pl-4 hidden md:block">
                  <span className="text-terminal-blue dark:text-terminal-green">Full-Stack & AI Developer</span> –
                  Personal Projects
                  <br />
                  <span className="text-muted-foreground">2022 – Present</span>
                  <br />
                  <span className="text-muted-foreground">- Built AI models using FastAPI and Azure</span>
                  <br />
                  <span className="text-muted-foreground">- Developed full-stack MERN applications</span>
                  <br />
                  <span className="text-muted-foreground">- Created blockchain-based dApps</span>
                </p>

                {/* Only show this on mobile */}
                <p className="terminal-prompt md:hidden">cat skills.txt</p>
                <p className="pl-4 md:hidden">
                  <span className="text-muted-foreground">- MERN, AI, Blockchain, Graphics</span>
                  <br />
                  <span className="text-muted-foreground">- Full-stack & API development</span>
                  <br />
                  <span className="text-muted-foreground">- Microservices & databases</span>
                </p>

                <p className="terminal-prompt hidden md:block">ls -la ~/interests</p>
                <p className="pl-4 hidden md:block">
                  <span className="text-muted-foreground">fullstack-dev gaming AI-blockchain</span>
                  <br />
                  <span className="text-muted-foreground">computer-graphics open-source</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills section - simplified grid for mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20"
        >
          <motion.div variants={itemVariants} className="card-minimal py-4 px-3 md:p-6">
            <Code className="h-8 w-8 md:h-10 md:w-10 text-terminal-blue dark:text-terminal-green mb-2 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">API Dev</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              RESTful & GraphQL APIs with focus on performance.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-minimal py-4 px-3 md:p-6">
            <Server className="h-8 w-8 md:h-10 md:w-10 text-terminal-blue dark:text-terminal-green mb-2 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Microservices</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Building scalable microservice architectures with effective service communication patterns.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-minimal py-4 px-3 md:p-6">
            <Database className="h-8 w-8 md:h-10 md:w-10 text-terminal-blue dark:text-terminal-green mb-2 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Databases</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Expertise in SQL and NoSQL databases with a focus on optimization, scaling, and data modeling.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-minimal py-4 px-3 md:p-6">
            <Cloud className="h-8 w-8 md:h-10 md:w-10 text-terminal-blue dark:text-terminal-green mb-2 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">DevOps</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Implementing CI/CD pipelines, container orchestration, and infrastructure as code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

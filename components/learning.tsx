"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Book, Code, Server, Database, Cloud } from "lucide-react"

const learningItems = [
  {
    title: "Blockchain Smart Contracts",
    description:
      "Developing decentralized applications and smart contracts on Ethereum and other blockchain platforms.",
    progress: 65,
    icon: Code,
    resources: ["Mastering Ethereum", "Solidity Documentation", "CryptoZombies Tutorial"],
  },
  {
    title: "Computer Graphics",
    description: "Learning the fundamentals of computer graphics, rendering techniques, and 3D visualization.",
    progress: 55,
    icon: Server,
    resources: ["Computer Graphics: Principles and Practice", "Fundamentals of Computer Graphics", "SIGGRAPH Courses"],
  },
  {
    title: "OpenGL",
    description: "Implementing real-time graphics applications using the OpenGL API and GLSL shaders.",
    progress: 40,
    icon: Database,
    resources: ["OpenGL Programming Guide", "Learn OpenGL", "The Book of Shaders"],
  },
  {
    title: "Voxels",
    description: "Exploring voxel-based rendering, procedural generation, and optimization techniques.",
    progress: 30,
    icon: Cloud,
    resources: ["Voxel-Based Game Programming", "Procedural Content Generation", "Minecraft Technical Analysis"],
  },
]

export default function Learning() {
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
    <section id="learning" ref={ref} className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Currently Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and concepts I'm currently exploring to enhance my backend development skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {learningItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="card-cyberpunk">
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 rounded-md bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-terminal-blue dark:text-terminal-green">Progress</span>
                  <span className="text-xs font-mono text-muted-foreground">{item.progress}%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-terminal-blue to-terminal-cyan dark:from-terminal-green dark:to-terminal-cyan"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.progress}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>

              <div className="border-t border-terminal-blue/20 dark:border-terminal-green/20 pt-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <Book className="h-4 w-4 mr-2 text-terminal-cyan" /> Learning Resources
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {item.resources.map((resource, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-terminal-cyan mr-2">•</span> {resource}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

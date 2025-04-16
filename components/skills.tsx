"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "next-themes"

const skills = [
  {
    category: "Languages",
    icon: "fa-solid fa-code",
    description: "Programming languages I'm proficient in",
    items: [
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "TypeScript", icon: "fa-solid fa-code" },
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "C++", icon: "fa-brands fa-c" },
      { name: "Java", icon: "fa-brands fa-java" },
    ],
  },
  {
    category: "Frontend",
    icon: "fa-solid fa-desktop",
    description: "Technologies for building user interfaces",
    items: [
      { name: "React", icon: "fa-brands fa-react" },
      { name: "React Native", icon: "fa-brands fa-react" },
      { name: "Next.js", icon: "fa-solid fa-forward" },
      { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3" },
    ],
  },
  {
    category: "Backend",
    icon: "fa-solid fa-server",
    description: "Server-side technologies and frameworks",
    items: [
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Express", icon: "fa-solid fa-code-branch" },
      { name: "FastAPI", icon: "fa-solid fa-rocket" },
      { name: "Flask", icon: "fa-solid fa-flask" },
    ],
  },
  {
    category: "Databases",
    icon: "fa-solid fa-database",
    description: "Database systems and data storage solutions",
    items: [
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
      { name: "Redis", icon: "fa-solid fa-database" },
      { name: "MySQL", icon: "fa-solid fa-database" },
    ],
  },
  {
    category: "Others",
    icon: "fa-solid fa-gears",
    description: "Other tools and technologies I work with",
    items: [
      { name: "Linux", icon: "fa-brands fa-linux" },
      { name: "OpenGL", icon: "fa-solid fa-cube" },
      { name: "Azure", icon: "fa-brands fa-microsoft" },
      { name: "Firebase", icon: "fa-solid fa-fire" },
      { name: "Version Control", icon: "fa-solid fa-github" },
      { name: "Blockchain", icon: "fa-solid fa-link" },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()
  
  return (
    <section id="skills" ref={ref} className="py-20 relative bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical proficiencies across multiple domains of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="skill-card group"
            >
              <div className="p-6 rounded-xl border-2 border-terminal-blue/20 dark:border-terminal-green/20 bg-card h-full flex flex-col transition-all duration-300 hover:border-terminal-blue/50 dark:hover:border-terminal-green/50 hover:shadow-glow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 flex items-center justify-center mr-4 group-hover:bg-terminal-blue/20 dark:group-hover:bg-terminal-green/20 transition-all duration-300">
                    <i className={`${category.icon} text-xl text-terminal-blue dark:text-terminal-green`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-2">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-3 rounded-lg bg-background/50 hover:bg-terminal-blue/10 dark:hover:bg-terminal-green/10 transition-all duration-300"
                    >
                      <i className={`${skill.icon} text-2xl mb-2 text-terminal-blue dark:text-terminal-green`}></i>
                      <span className="text-xs text-center font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

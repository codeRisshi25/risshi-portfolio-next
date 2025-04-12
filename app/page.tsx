"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Learning from "@/components/learning"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import BackgroundAnimation from "@/components/background-animation"
import TerminalButton from "@/components/terminal-button"
import PageLoader from "@/components/page-loader"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

// GitHub username
const GITHUB_USERNAME = "codeRisshi25"

export default function Home() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Fetch GitHub projects
    const fetchProjects = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`)

        if (!res.ok) throw new Error("Failed to fetch projects")

        const allRepos = await res.json()

        // Filter out forked repos and get top 4 by stars
        const topProjects = allRepos
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4)
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || "No description provided",
            github: repo.html_url,
            demo: `${repo.html_url}/demo`,
            tags: [repo.language].filter(Boolean).concat(["Backend", "API"]),
            category: getProjectCategory(repo.language),
            stars: repo.stargazers_count,
            forks: repo.forks_count,
          }))

        setProjects(topProjects)
      } catch (error) {
        console.error("Error fetching GitHub projects:", error)
        // Use fallback projects
        setProjects(getFallbackProjects())
      } finally {
        // Simulate longer loading for the loader to be visible
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }
    }

    fetchProjects()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (loading) {
    return <PageLoader />
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-background cursor-glow">
      <BackgroundAnimation />
      <div className="fixed top-4 right-4 z-50 font-mono text-xs text-terminal-blue dark:text-terminal-green bg-background/80 px-3 py-1 rounded-full border border-terminal-blue/30 dark:border-terminal-green/30 backdrop-blur-sm hidden sm:block">
        <span className="inline-block w-2 h-2 bg-terminal-cyan dark:bg-terminal-green rounded-full mr-2 animate-pulse"></span>
        System Online | Scroll Position: {scrollY.toFixed(0)}px
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills />
        <Learning />
        <Certifications />
        <Contact />
        <TerminalButton />

        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#top"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-terminal-blue/50 dark:border-terminal-green/50 text-terminal-blue dark:text-terminal-green hover:text-terminal-cyan dark:hover:text-terminal-cyan hover:border-terminal-cyan dark:hover:border-terminal-cyan transition-colors duration-300 shadow-glow-sm hover:shadow-glow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </main>
  )
}

function getProjectCategory(language) {
  const mapping = {
    JavaScript: "Backend",
    TypeScript: "Backend",
    Python: "AI",
    Java: "Backend",
    Go: "Backend",
    Ruby: "Backend",
    PHP: "Backend",
    "C#": "Backend",
    Rust: "Systems",
    C: "Systems",
    "C++": "Systems",
  }

  return mapping[language] || "Backend"
}

function getFallbackProjects() {
  return [
    {
      id: 1,
      title: "ServerCore API",
      description: "High-performance RESTful API framework with built-in caching and authentication",
      github: "https://github.com/codeRisshi25/server-core",
      demo: "https://github.com/codeRisshi25/server-core/demo",
      tags: ["Node.js", "Express", "MongoDB", "Backend"],
      category: "Backend",
      stars: 42,
      forks: 15,
    },
    {
      id: 2,
      title: "DataSync Engine",
      description: "Real-time database synchronization system with conflict resolution",
      github: "https://github.com/codeRisshi25/data-sync",
      demo: "https://github.com/codeRisshi25/data-sync/demo",
      tags: ["Python", "PostgreSQL", "Redis", "Backend"],
      category: "Backend",
      stars: 28,
      forks: 8,
    },
    {
      id: 3,
      title: "ML Pipeline",
      description: "Automated machine learning pipeline for data processing and model training",
      github: "https://github.com/codeRisshi25/ml-pipeline",
      demo: "https://github.com/codeRisshi25/ml-pipeline/demo",
      tags: ["Python", "TensorFlow", "Docker", "AI"],
      category: "AI",
      stars: 35,
      forks: 12,
    },
    {
      id: 4,
      title: "Microservice Framework",
      description: "Lightweight framework for building and deploying microservices",
      github: "https://github.com/codeRisshi25/micro-framework",
      demo: "https://github.com/codeRisshi25/micro-framework/demo",
      tags: ["Go", "gRPC", "Kubernetes", "Backend"],
      category: "Backend",
      stars: 56,
      forks: 23,
    },
  ]
}

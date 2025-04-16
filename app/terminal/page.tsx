"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

// Define the ascii function before it's used
const getAsciiArt = () => [
  "<span class='text-terminal-green'>     ██╗ █████╗ ██████╗ ██╗   ██╗██╗███████╗</span>",
  "<span class='text-terminal-green'>     ██║██╔══██╗██╔══██╗██║   ██║██║██╔════╝</span>",
  "<span class='text-terminal-green'>     ██║███████║██████╔╝██║   ██║██║███████╗</span>",
  "<span class='text-terminal-green'>██   ██║██╔══██║██╔══██╗╚██╗ ██╔╝██║╚════██║</span>",
  "<span class='text-terminal-green'>╚█████╔╝██║  ██║██║  ██║ ╚████╔╝ ██║███████║</span>",
  "<span class='text-terminal-green'> ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝╚══════╝</span>",
  "<span class='text-terminal-green'>                                            </span>",
  "<span class='text-terminal-green'>        Welcome to the Terminal Portfolio   </span>",
  "<span class='text-terminal-green'>       Backend Developer | OSS Contributor  </span>",
  "<span class='text-terminal-green'>              by Risshi Raj Sen             </span>",
]

export default function TerminalPage() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    ...getAsciiArt(), // Use the function to get ASCII art
    "<span class='text-terminal-cyan'>Type \"help\" to see available commands.</span>",
    "",
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { theme } = useTheme()

  const commands = {
    help: () => [
      "Available commands:",
      "  help - Show this help message",
      "  about - About Risshi Raj Sen",
      "  skills - List technical skills",
      "  projects - List projects",
      "  certifications - Show certifications",
      "  contact - Show contact information",
      "  social - Display social media links",
      "  clear - Clear the terminal",
      "  exit - Return to main website",
      "  game - Play a backend developer game",
      "  ascii - Display ASCII art",
      "  ls - List files",
      "  cat [file] - View file contents",
      "  cd [directory] - Change directory",
      "  uname -a - Show system information",
      "  date - Show current date and time",
      "  fortune - Display a random quote",
      "  cowsay [message] - Have a cow say your message",
      "  sudo - Try to use sudo",
    ],
    about: () => [
      "Risshi Raj Sen",
      "Backend Developer",
      "",
      "I am passionate about building robust backend systems and scalable server architectures.",
      "My expertise includes developing RESTful APIs, optimizing database performance, and implementing cloud infrastructure solutions.",
      "Currently focused on microservices, distributed systems, and event-driven architecture.",
    ],
    skills: () => [
      "Technical Skills:",
      "  • Languages: JavaScript, TypeScript, Python, Go, Java, SQL",
      "  • Backend: Node.js, Express, Django, Spring Boot, GraphQL",
      "  • Databases: PostgreSQL, MongoDB, Redis, MySQL, Elasticsearch",
      "  • DevOps: Docker, Kubernetes, AWS, CI/CD, Terraform",
      "  • Tools: Git, Linux, Nginx, RabbitMQ, Kafka",
    ],
    projects: () => [
      "Projects:",
      "  • ServerCore API - High-performance RESTful API framework",
      "  • DataSync Engine - Real-time database synchronization system",
      "  • ML Pipeline - Automated machine learning pipeline",
      "  • Microservice Framework - Lightweight framework for microservices",
      "",
      'For more details, visit "https://github.com/codeRisshi25"',
    ],
    certifications: () => [
      "Certifications:",
      "  • AWS Certified Solutions Architect - Amazon Web Services",
      "  • Certified Kubernetes Administrator - Cloud Native Computing Foundation",
      "  • MongoDB Certified Developer - MongoDB University",
      "  • Professional Scrum Master I - Scrum.org",
    ],
    contact: () => [
      "Contact Information:",
      "  • Email: risshirajsen@gmail.cp,",
      "  • Phone: +91 8822327893",
      "  • Location: Greater Noida, India",
    ],
    social: () => [
      "Social Media:",
      "  • GitHub: github.com/codeRisshi25",
      "  • LinkedIn: linkedin.com/in/risshirajsen",
      "  • Twitter: twitter.com/risshirajsen",
    ],
    clear: () => {
      setHistory([])
      return []
    },
    exit: () => {
      router.push("/")
      return ["Redirecting to main website..."]
    },
    game: () => {
      return [
        "=== Backend Developer Game: Debug the Server ===",
        "",
        "You are a backend developer on call. The production server is experiencing high latency.",
        "Your task is to identify and fix the issue.",
        "",
        'Type "game start" to begin the debugging challenge.',
      ]
    },
    ascii: () => getAsciiArt(), // Use the same function here

    ls: () => ["about.txt", "skills.md", "projects/", "certifications.pdf", "contact.json", "social.links", ".hidden/"],
    cat: (arg) => {
      if (!arg) return ["Usage: cat [file]"]

      switch (arg) {
        case "about.txt":
          return commands.about()
        case "skills.md":
          return commands.skills()
        case "certifications.pdf":
          return commands.certifications()
        case "contact.json":
          return [
            "{",
            '  "name": "Risshi Raj Sen",',
            '  "email": "risshi@is-a.dev",',
            '  "phone": "+91 8822327893",',
            '  "location": "Noida, India"',
            "}",
          ]
        case "social.links":
          return commands.social()
        case ".bashrc":
          return [
            "# ~/.bashrc",
            "export PATH=$PATH:$HOME/bin",
            "alias ll='ls -la'",
            "alias gs='git status'",
            "alias gc='git commit'",
            "alias gp='git push'",
            "# Easter egg found! You're a real explorer!",
            "# use the 'game' command for a fun game",
          ]
        default:
          return [`cat: ${arg}: No such file or directory`]
      }
    },
    cd: (arg) => {
      if (!arg) return ["Usage: cd [directory]"]

      switch (arg) {
        case "projects":
          return ["Entering projects directory...", "", ...commands.projects()]
        case ".hidden":
          return ["You found a secret directory!", "It contains a .bashrc file."]
        case "..":
          return ["Moved to parent directory."]
        case "~":
          return ["Moved to home directory."]
        default:
          return [`cd: ${arg}: No such directory`]
      }
    },
    uname: (arg) => {
      if (arg === "-a") {
        return ["RisshiOS 5.15.0-1 #1 SMP PREEMPT_DYNAMIC Risshi 5.15.0-1 (2023-01-15) x86_64 GNU/Linux"]
      }
      return ["RisshiOS"]
    },
    date: () => {
      return [new Date().toString()]
    },
    fortune: () => {
      const fortunes = [
        "The best code is no code at all.",
        "It's not a bug – it's an undocumented feature.",
        "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        "There are two ways to write error-free programs; only the third one works.",
        "The most important property of a program is whether it accomplishes the intention of its user.",
      ]
      return [fortunes[Math.floor(Math.random() * fortunes.length)]]
    },
    cowsay: (message) => {
      if (!message) return ["Usage: cowsay [message]"]

      const lines = [
        " " + "_".repeat(message.length + 2),
        "< " + message + " >",
        " " + "-".repeat(message.length + 2),
        "        \\   ^__^",
        "         \\  (oo)\\_______",
        "            (__)\\       )\\/\\",
        "                ||----w |",
        "                ||     ||",
      ]
      return lines
    },
    sudo: (arg) => {
      return ["Nice try, but you don't have sudo privileges on this system!"]
    },
  }

  // Game state
  const [gameState, setGameState] = useState({
    started: false,
    step: 0,
    choices: [],
    solution: "",
  })

  // Game logic
  const handleGameCommand = (args) => {
    if (args === "start") {
      setGameState({
        started: true,
        step: 1,
        choices: [],
        solution: "",
      })
      return [
        "Game started!",
        "",
        "ALERT: The e-commerce API is experiencing high latency. Users are complaining about slow checkout.",
        "What's your first step?",
        "",
        "1. Check server logs",
        "2. Restart the server",
        "3. Check database performance",
        "4. Monitor network traffic",
        "",
        'Type "game choose [number]" to select an option.',
      ]
    } else if (args.startsWith("choose")) {
      const choice = args.split(" ")[1]
      if (!gameState.started) {
        return ["You need to start the game first. Type 'game start'."]
      }

      switch (gameState.step) {
        case 1:
          if (choice === "1") {
            setGameState({ ...gameState, step: 2, choices: [...gameState.choices, 1] })
            return [
              "Good choice! Checking the logs first is a sensible approach.",
              "",
              "The logs show numerous slow database queries during checkout.",
              "What do you do next?",
              "",
              "1. Optimize the database queries",
              "2. Add more database replicas",
              "3. Implement caching",
              "4. Increase server resources",
              "",
              'Type "game choose [number]" to select an option.',
            ]
          } else if (choice === "3") {
            setGameState({ ...gameState, step: 2, choices: [...gameState.choices, 3] })
            return [
              "Smart move! Checking database performance directly addresses a likely bottleneck.",
              "",
              "You discover that the product inventory queries are not properly indexed.",
              "What do you do next?",
              "",
              "1. Add appropriate indexes",
              "2. Rewrite the queries",
              "3. Implement query caching",
              "4. Scale up the database server",
              "",
              'Type "game choose [number]" to select an option.',
            ]
          } else {
            return [
              "That approach might work eventually, but it's not the most efficient first step.",
              "Let's try again. What would be your first step?",
              "",
              "1. Check server logs",
              "2. Restart the server",
              "3. Check database performance",
              "4. Monitor network traffic",
            ]
          }
        case 2:
          if ((gameState.choices[0] === 1 && choice === "1") || (gameState.choices[0] === 3 && choice === "1")) {
            setGameState({ ...gameState, step: 3, choices: [...gameState.choices, 1] })
            return [
              "Excellent! Optimizing the database with proper indexes is the most direct solution.",
              "",
              "After adding indexes, the API response time improves by 80%.",
              "What's your final step to prevent this issue in the future?",
              "",
              "1. Implement performance monitoring",
              "2. Document the solution",
              "3. Set up automated testing",
              "4. All of the above",
              "",
              'Type "game choose [number]" to select an option.',
            ]
          } else if ((gameState.choices[0] === 1 && choice === "3") || (gameState.choices[0] === 3 && choice === "3")) {
            setGameState({ ...gameState, step: 3, choices: [...gameState.choices, 3] })
            return [
              "Good thinking! Implementing caching can significantly reduce database load.",
              "",
              "After setting up Redis caching, the API response time improves by 70%.",
              "What's your final step to prevent this issue in the future?",
              "",
              "1. Implement performance monitoring",
              "2. Document the solution",
              "3. Set up automated testing",
              "4. All of the above",
              "",
              'Type "game choose [number]" to select an option.',
            ]
          } else {
            return [
              "That might help, but there's a more efficient solution available.",
              "Let's try again. What would you do next?",
              "",
              gameState.choices[0] === 1
                ? "1. Optimize the database queries\n2. Add more database replicas\n3. Implement caching\n4. Increase server resources"
                : "1. Add appropriate indexes\n2. Rewrite the queries\n3. Implement query caching\n4. Scale up the database server",
            ]
          }
        case 3:
          if (choice === "4") {
            setGameState({ ...gameState, step: 4, choices: [...gameState.choices, 4], solution: "complete" })
            return [
              "Perfect! A comprehensive approach ensures the problem won't recur.",
              "",
              "CONGRATULATIONS! You've successfully debugged the server issue.",
              "",
              "Your solution:",
              `1. ${
                gameState.choices[0] === 1 ? "Checked server logs" : "Checked database performance"
              } to identify the problem`,
              `2. ${
                gameState.choices[1] === 1 ? "Added appropriate indexes" : "Implemented query caching"
              } to resolve the issue`,
              "3. Implemented monitoring, documentation, and testing to prevent future occurrences",
              "",
              "You've demonstrated excellent backend debugging skills!",
              "",
              'Type "game reset" to play again or continue exploring the terminal.',
            ]
          } else {
            return [
              "That's a good start, but there's a more comprehensive approach.",
              "Let's try again. What's your final step to prevent this issue in the future?",
              "",
              "1. Implement performance monitoring",
              "2. Document the solution",
              "3. Set up automated testing",
              "4. All of the above",
            ]
          }
        default:
          return ["Type 'game reset' to play again."]
      }
    } else if (args === "reset") {
      setGameState({
        started: false,
        step: 0,
        choices: [],
        solution: "",
      })
      return ["Game reset. Type 'game start' to play again."]
    } else {
      return [
        "Unknown game command. Available commands:",
        "  game start - Start the debugging challenge",
        "  game choose [number] - Select an option",
        "  game reset - Reset the game",
      ]
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newHistory = [...history, `$ ${input}`]

    const [cmd, ...args] = input.trim().split(" ")
    const command = cmd.toLowerCase()

    if (command === "game") {
      const gameOutput = handleGameCommand(args.join(" "))
      newHistory.push(...gameOutput)
    } else if (command === "uname") {
      const result = commands[command](args.join(" "))
      newHistory.push(...result)
    } else if (command === "cowsay") {
      const result = commands[command](args.join(" "))
      newHistory.push(...result)
    } else if (command === "sudo") {
      const result = commands[command](args.join(" "))
      newHistory.push(...result)
    } else if (command in commands) {
      const result = command === "cat" || command === "cd" ? commands[command](args[0]) : commands[command]()
      // Convert plain text to HTML for consistent styling
      const htmlResult = result.map((line) => {
        // If the line already has HTML, leave it as is
        if (line.includes("<span")) return line
        return line
      })
      newHistory.push(...htmlResult)
    } else if (command === "rm" && args[0] === "-rf" && args[1] === "/") {
      newHistory.push("<span class='text-red-500'>Nice try! That would be a disaster in a real system.</span>")
    } else if (command === "find" && args.includes("-name") && args.includes("*.js")) {
      newHistory.push("find: Too many files matching the pattern. Try to be more specific.")
    } else if (command === "vim" || command === "nano" || command === "emacs") {
      newHistory.push(`${command}: Terminal is in read-only mode. Text editors are not available.`)
    } else {
      newHistory.push(`Command not found: ${command}. Type "help" for available commands.`)
    }

    setHistory(newHistory)
    setInput("")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground p-4 font-mono"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="outline"
            className="text-terminal-blue border-terminal-blue/50 hover:bg-terminal-blue/10 hover:text-terminal-blue"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Website
          </Button>

          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <div className="flex space-x-2">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
            </div>
            <div className="font-mono text-xs text-terminal-green">risshi.codes:~</div>
          </div>

          <div
            ref={terminalRef}
            className="h-[calc(100vh-180px)] overflow-y-auto bg-card p-4 rounded-md border border-terminal-green/30"
          >
            {history.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap mb-1" dangerouslySetInnerHTML={{ __html: line }} />
            ))}

            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-terminal-green mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

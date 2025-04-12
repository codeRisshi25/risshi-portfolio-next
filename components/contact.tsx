"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "be594677-2e0e-49b3-a740-3fa4914a7fa1", // 👈 Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  // Define container variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Define item variants for animations
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
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-terminal-blue dark:text-terminal-green">contact.sh</div>
              </div>

              <div className="space-y-4 text-sm">
                <p className="terminal-prompt">cat contact_info.json</p>
                <pre className="pl-4 text-terminal-cyan dark:text-terminal-green overflow-x-auto">
                  {`{
  "name": "Risshi Raj Sen",
  "email": "risshirajsen@gmail.com",
  "phone": "+91 882327893",
  "location": "Greater Noida, India",
  "availability": "Open to Internships and collaboration",
  "response_time": "Usually within 24 hours",
  "social": {
    "github": "github.com/codeRisshi25",
    "linkedin": "linkedin.com/in/risshi-is-a-dev",
    "instagram": "instagram.com/__risshi"
  }
}`}
                </pre>

                <p className="terminal-prompt">ssh-keygen -t rsa -b 4096 -C "risshi@is-a.dev"</p>
                <p className="pl-4 text-terminal-blue dark:text-terminal-green">
                  Generating public/private rsa key pair.
                  <br />
                  Enter file in which to save the key (/home/risshi/.ssh/id_rsa):
                </p>

                <p className="terminal-prompt">
                  echo "Hello, I'm interested in your work!" | mail -s "Collaboration" risshi@is-a.dev
                </p>
                <p className="pl-4 text-terminal-blue dark:text-terminal-green">Message sent successfully.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-terminal-blue/30 dark:border-terminal-green/30">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-terminal-blue dark:text-terminal-green" />
                    <span className="text-sm">risshi@is-a.dev</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-terminal-blue dark:text-terminal-green" />
                    <span className="text-sm">+91 8822327893</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-terminal-blue dark:text-terminal-green" />
                    <span className="text-sm">Greater Noida, India</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/codeRisshi25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/20 dark:hover:bg-terminal-green/20 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/risshi-is-a-sdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/20 dark:hover:bg-terminal-green/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/__risshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/20 dark:hover:bg-terminal-green/20 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="card-minimal">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-card border-terminal-blue/30 dark:border-terminal-green/30 focus:border-terminal-blue dark:focus:border-terminal-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-card border-terminal-blue/30 dark:border-terminal-green/30 focus:border-terminal-blue dark:focus:border-terminal-green"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-card border-terminal-blue/30 dark:border-terminal-green/30 focus:border-terminal-blue dark:focus:border-terminal-green"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-card border-terminal-blue/30 dark:border-terminal-green/30 focus:border-terminal-blue dark:focus:border-terminal-green resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-blue dark:from-terminal-green dark:to-terminal-cyan dark:hover:from-terminal-cyan dark:hover:to-terminal-green transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-3 rounded-md bg-terminal-cyan/10 dark:bg-terminal-green/10 text-terminal-cyan dark:text-terminal-green border border-terminal-cyan/30 dark:border-terminal-green/30">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 rounded-md bg-red-500/10 text-red-500 border border-red-500/30">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useForm } from "@formspree/react"

export default function Contact() {
  // Replace the previous form state with Formspree's useForm hook
  const [formState, handleSubmit] = useForm("xdkevgor")

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="contact" ref={ref} className="py-12 sm:py-16 md:py-20 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-gradient">Get In Touch</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="terminal h-full">
              <div className="terminal-header">
                <div className="flex space-x-1.5 sm:space-x-2">
                  <div className="terminal-dot bg-red-500 w-2 h-2 sm:w-3 sm:h-3"></div>
                  <div className="terminal-dot bg-yellow-500 w-2 h-2 sm:w-3 sm:h-3"></div>
                  <div className="terminal-dot bg-green-500 w-2 h-2 sm:w-3 sm:h-3"></div>
                </div>
                <div className="font-mono text-[10px] xs:text-xs text-terminal-blue dark:text-terminal-green">
                  contact.sh
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <p className="terminal-prompt">cat contact_info.json</p>
                <pre className="pl-3 sm:pl-4 text-[10px] xs:text-xs sm:text-sm text-terminal-cyan dark:text-terminal-green overflow-x-auto">
                  {`{
  "name": "Risshi Raj Sen",
  "email": "risshirajsen@gmail.com",
  "phone": "+91 882327893",
  "location": "Greater Noida, India",
  "availability": "Open to Internships",
  "response_time": "Usually within 24 hours"
}`}
                </pre>

                {/* Hide some terminal content on mobile */}
                <div className="hidden sm:block">
                  <p className="terminal-prompt">ssh-keygen -t rsa -b 4096 -C "risshirajsen@gmail.com"</p>
                  <p className="pl-4 text-terminal-blue dark:text-terminal-green">
                    Generating public/private rsa key pair.
                    <br />
                    Enter file in which to save the key (/home/risshi/.ssh/id_rsa):
                  </p>
                </div>

                <p className="terminal-prompt">
                  echo "Hello, I'm interested in your work!" | mail -s "Collaboration" risshirajsen@gmail.com
                </p>
                <p className="pl-3 sm:pl-4 text-terminal-blue dark:text-terminal-green">Message sent successfully.</p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-terminal-blue/30 dark:border-terminal-green/30">
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-terminal-blue dark:text-terminal-green" />
                    <span className="text-[10px] xs:text-xs sm:text-sm">risshirajsen@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-terminal-blue dark:text-terminal-green" />
                    <span className="text-[10px] xs:text-xs sm:text-sm">+91 8822327893</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-terminal-blue dark:text-terminal-green" />
                    <span className="text-[10px] xs:text-xs sm:text-sm">Greater Noida, India</span>
                  </div>
                </div>

                <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
                  <a
                    href="https://github.com/codeRisshi25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/20 dark:hover:bg-terminal-green/20 transition-colors"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/risshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/20 dark:hover:bg-terminal-green/20 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/__risshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/20 dark:hover:bg-terminal-green/20 transition-colors"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            {formState.succeeded ? (
              <div className="card-minimal flex flex-col items-center justify-center py-12">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out! I'll get back to you as soon as possible.
                  </p>
                </div>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-blue dark:from-terminal-green dark:to-terminal-cyan dark:hover:from-terminal-cyan dark:hover:to-terminal-green transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="card-minimal relative z-20">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full h-8 sm:h-10 px-3 py-2 text-xs sm:text-sm bg-card border border-terminal-blue/30 dark:border-terminal-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terminal-blue dark:focus:ring-terminal-green"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full h-8 sm:h-10 px-3 py-2 text-xs sm:text-sm bg-card border border-terminal-blue/30 dark:border-terminal-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terminal-blue dark:focus:ring-terminal-green"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="subject" className="text-xs sm:text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What is this regarding?"
                      className="w-full h-8 sm:h-10 px-3 py-2 text-xs sm:text-sm bg-card border border-terminal-blue/30 dark:border-terminal-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terminal-blue dark:focus:ring-terminal-green"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Your message here..."
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-card border border-terminal-blue/30 dark:border-terminal-green/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terminal-blue dark:focus:ring-terminal-green resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="w-full h-9 sm:h-10 text-xs sm:text-sm bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-blue dark:from-terminal-green dark:to-terminal-cyan dark:hover:from-terminal-cyan dark:hover:to-terminal-green transition-all duration-300 shadow-glow-sm hover:shadow-glow-md rounded-md flex items-center justify-center text-white"
                  >
                    {formState.submitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4"
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
                        <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Send Message
                      </span>
                    )}
                  </button>

                  {formState.errors && (
                    <div className="p-2 sm:p-3 rounded-md bg-red-500/10 text-red-500 border border-red-500/30 text-xs sm:text-sm">
                      There was an error sending your message. Please check the form and try again.
                    </div>
                  )}

                  <div className="text-xs text-terminal-blue dark:text-terminal-green mt-2">
                    This form is powered by Formspree. Your message will be sent directly to Risshi's inbox.
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

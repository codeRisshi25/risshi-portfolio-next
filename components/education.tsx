"use client"

import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Some University",
      period: "2018 - 2022",
      description:
        "Graduated with honors. Focused on algorithms, data structures, and machine learning. Thesis on Neural Networks for Natural Language Processing.",
      icon: GraduationCap,
    },
    {
      degree: "Machine Learning Specialization",
      institution: "Online Course",
      period: "2023",
      description:
        "Comprehensive course covering neural networks, deep learning, and natural language processing. Completed with distinction.",
      icon: Award,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="education" className="py-16" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic journey and qualifications
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {education.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col h-full overflow-hidden border-2 border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>{item.degree}</CardTitle>
                    <CardDescription>
                      {item.institution} • {item.period}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

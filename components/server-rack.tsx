"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function ServerRack() {
  const [servers, setServers] = useState([
    { id: 1, name: "api-server-01", status: "active", load: 42, memory: 38, cpu: 45 },
    { id: 2, name: "db-primary", status: "active", load: 38, memory: 52, cpu: 40 },
    { id: 3, name: "cache-redis", status: "active", load: 27, memory: 31, cpu: 22 },
    { id: 4, name: "auth-service", status: "standby", load: 12, memory: 18, cpu: 5 },
    { id: 5, name: "queue-worker", status: "active", load: 56, memory: 48, cpu: 62 },
    { id: 6, name: "backup-system", status: "standby", load: 5, memory: 12, cpu: 8 },
  ])

  const [systemStatus, setSystemStatus] = useState({
    uptime: "1337d:13h:37m",
    totalRequests: 12458932,
    avgResponseTime: "42ms",
    activeUsers: 1337,
  })

  const { theme } = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      // Update server metrics
      setServers((prev) =>
        prev.map((server) => {
          const loadChange = Math.floor(Math.random() * 10) - 4
          const memoryChange = Math.floor(Math.random() * 8) - 3
          const cpuChange = Math.floor(Math.random() * 12) - 5

          const newLoad = Math.max(0, Math.min(100, server.load + loadChange))
          const newMemory = Math.max(0, Math.min(100, server.memory + memoryChange))
          const newCpu = Math.max(0, Math.min(100, server.cpu + cpuChange))

          let newStatus = server.status
          if (Math.random() > 0.95) {
            if (server.status === "active") newStatus = Math.random() > 0.5 ? "standby" : "error"
            else if (server.status === "error") newStatus = "active"
            else newStatus = Math.random() > 0.7 ? "active" : "standby"
          }

          return {
            ...server,
            load: newLoad,
            memory: newMemory,
            cpu: newCpu,
            status: newStatus,
          }
        }),
      )

      // Update system metrics
      setSystemStatus((prev) => {
        const newActiveUsers = prev.activeUsers + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 10)
        const newTotalRequests = prev.totalRequests + Math.floor(Math.random() * 50)
        const newAvgResponseTime = `${Math.floor(40 + Math.random() * 10)}ms`

        return {
          ...prev,
          activeUsers: Math.max(1000, newActiveUsers),
          totalRequests: newTotalRequests,
          avgResponseTime: newAvgResponseTime,
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-3 w-3 text-green-500" />
      case "standby":
        return <Clock className="h-3 w-3 text-yellow-400" />
      case "error":
        return <AlertTriangle className="h-3 w-3 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      {/* System status overview */}
      <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-mono">
        <div className="flex items-center justify-between p-2 bg-card/80 rounded-md border border-terminal-blue/20">
          <span className="text-muted-foreground">Uptime</span>
          <span className="text-terminal-blue">{systemStatus.uptime}</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-card/80 rounded-md border border-terminal-blue/20">
          <span className="text-muted-foreground">Active Users</span>
          <span className="text-terminal-blue">{systemStatus.activeUsers.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-card/80 rounded-md border border-terminal-blue/20">
          <span className="text-muted-foreground">Total Requests</span>
          <span className="text-terminal-blue">{systemStatus.totalRequests.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-card/80 rounded-md border border-terminal-blue/20">
          <span className="text-muted-foreground">Avg Response</span>
          <span className="text-terminal-blue">{systemStatus.avgResponseTime}</span>
        </div>
      </div>

      {/* Server status cards */}
      {servers.map((server, index) => (
        <motion.div
          key={server.id}
          className={`p-3 rounded-md shadow border ${
            server.status === "error" ? "border-red-500/50 bg-red-500/10" : "border-border bg-card"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              {getStatusIcon(server.status)}
              <span className="text-sm font-medium">{server.name}</span>
            </div>
            <span className="text-xs text-muted-foreground capitalize px-2 py-0.5 rounded-full bg-background">
              {server.status}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Load</span>
                <span className="text-xs">{server.load}%</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    server.load > 80 ? "bg-red-500" : server.load > 60 ? "bg-yellow-500" : "bg-terminal-blue"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${server.load}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Mem</span>
                <span className="text-xs">{server.memory}%</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    server.memory > 80 ? "bg-red-500" : server.memory > 60 ? "bg-yellow-500" : "bg-terminal-blue"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${server.memory}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">CPU</span>
                <span className="text-xs">{server.cpu}%</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    server.cpu > 80 ? "bg-red-500" : server.cpu > 60 ? "bg-yellow-500" : "bg-terminal-blue"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${server.cpu}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

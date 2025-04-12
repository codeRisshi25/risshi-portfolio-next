"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function ThreeDModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Store the current value in a variable
    const currentContainer = containerRef.current;
    
    if (!currentContainer) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      currentContainer.clientWidth / currentContainer.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(currentContainer.clientWidth, currentContainer.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    currentContainer.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Create a geometric shape (dodecahedron)
    const geometry = new THREE.DodecahedronGeometry(2, 0)
    const material = new THREE.MeshPhongMaterial({
      color: 0x6f42c1,
      wireframe: true,
      emissive: 0x2a0845,
      emissiveIntensity: 0.5,
      flatShading: true,
    })
    const dodecahedron = new THREE.Mesh(geometry, material)
    scene.add(dodecahedron)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6f42c1,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      dodecahedron.rotation.x += 0.002
      dodecahedron.rotation.y += 0.003

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!currentContainer) return

      camera.aspect = currentContainer.clientWidth / currentContainer.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(currentContainer.clientWidth, currentContainer.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (currentContainer) {
        currentContainer.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full min-h-[300px]" />
}

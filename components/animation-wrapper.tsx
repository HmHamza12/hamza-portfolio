"use client"

import { useEffect, useRef, useState } from "react"

interface AnimationWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}

const AnimationWrapper = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.6
}: AnimationWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getTransformClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-[${duration * 1000}ms]`
    
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} ${durationClass} transform translate-y-8 opacity-0`
        case "down":
          return `${baseClasses} ${durationClass} transform -translate-y-8 opacity-0`
        case "left":
          return `${baseClasses} ${durationClass} transform translate-x-8 opacity-0`
        case "right":
          return `${baseClasses} ${durationClass} transform -translate-x-8 opacity-0`
        default:
          return `${baseClasses} ${durationClass} transform translate-y-8 opacity-0`
      }
    }
    
    return `${baseClasses} ${durationClass} transform translate-x-0 translate-y-0 opacity-100`
  }

  return (
    <div 
      ref={ref} 
      className={`${getTransformClasses()} ${className}`}
      style={{ transitionDuration: `${duration}s` }}
    >
      {children}
    </div>
  )
}

export default AnimationWrapper

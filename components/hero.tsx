"use client"

import { useEffect, useState } from "react"
import { Scale, Shield, Zap } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scale className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Legal Resolution Platform
            </span>
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Resolve Legal Disputes{" "}
          <span className="text-blue-600 relative">
            Peacefully
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 opacity-20 rounded-full"></span>
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          Fast, fair, and affordable online dispute resolution. Settle conflicts without the hassle of traditional
          courts — anytime, anywhere.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
          >
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Start a Case
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

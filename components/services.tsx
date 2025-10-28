"use client"

import { useEffect, useState } from "react"

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-index]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Online Mediation",
      description:
        "Connect with certified mediators who help both parties communicate and reach voluntary settlements.",
      icon: "🤝",
    },
    {
      title: "Online Arbitration",
      description: "Get an impartial decision from a certified arbitrator — entirely online and legally binding.",
      icon: "⚖️",
    },
    {
      title: "Case Management",
      description: "Track your case documents, evidence, and updates securely in one centralized dashboard.",
      icon: "📋",
    },
    {
      title: "Legal Assistance",
      description: "Get access to verified legal experts for criminal or imprisonment-related cases.",
      icon: "👨‍⚖️",
    },
    {
      title: "Training & Certification",
      description: "Learn and get certified in mediation, arbitration, and conflict management.",
      icon: "🎓",
    },
    {
      title: "Secure Platform",
      description: "End-to-end encrypted sessions with complete confidentiality and data protection.",
      icon: "🔒",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">Our Services</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full animate-slide-in-left"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 cursor-pointer group ${
                visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <div className="mt-4 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

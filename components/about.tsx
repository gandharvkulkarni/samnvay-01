"use client"

import { useEffect, useState } from "react"
import { Lightbulb, Users, Zap } from "lucide-react"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-slate-900 mb-6 transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            About Samnvay
          </h2>
          <div
            className={`w-12 h-1 bg-blue-600 rounded-full transition-all duration-1000 mb-8 ${isLoaded ? "animate-slide-in-left" : "w-0"}`}
          ></div>
        </div>

        <div
          className={`space-y-6 text-slate-600 text-lg leading-relaxed transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <p>
            We believe justice should be accessible, affordable, and timely for everyone. Our platform leverages
            cutting-edge technology to simplify legal dispute resolution — offering mediation, conciliation, and
            arbitration services without the hassle of traditional court processes.
          </p>
          <p>
            Our team includes legal professionals, certified mediators, and technologists passionate about making
            justice digital. Our goal is to bring peace through conversation, not confrontation.
          </p>

          <div
            className={`bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg mt-8 hover:shadow-lg transition-all duration-300 group cursor-pointer ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:animate-bounce" />
              <div>
                <p className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Our Vision
                </p>
                <p className="group-hover:text-slate-900 transition-colors">
                  To make India and the world a leader in Online Dispute Resolution, ensuring every citizen can settle
                  disputes quickly, fairly, and affordably.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-6 mt-12 transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900">People-Centric</h4>
              </div>
              <p className="text-slate-600 text-sm">
                We prioritize the needs and experiences of all parties involved in dispute resolution.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900">Innovation</h4>
              </div>
              <p className="text-slate-600 text-sm">
                We leverage technology to make justice faster, fairer, and more accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

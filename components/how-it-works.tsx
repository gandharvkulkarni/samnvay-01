"use client"

import { useState } from "react"

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Submit Your Dispute",
      description: "Fill out our secure online form with details about your case.",
    },
    {
      number: "02",
      title: "Invite the Other Party",
      description: "Send an invitation to the other party to participate in resolution.",
    },
    {
      number: "03",
      title: "Attend Resolution Session",
      description: "Join an online mediation or arbitration session via chat or video.",
    },
    {
      number: "04",
      title: "Receive Digital Agreement",
      description: "Get a legally binding digital agreement or award.",
    },
    {
      number: "05",
      title: "Case Closed",
      description: "Receive complete documentation digitally. Case resolved.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">How It Works</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full animate-slide-in-left"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-2">
          {steps.map((step, index) => (
            <div key={index} className="relative cursor-pointer group" onMouseEnter={() => setActiveStep(index)}>
              <div
                className={`transition-all duration-300 ${
                  activeStep === index
                    ? "bg-blue-600 text-white shadow-lg scale-110"
                    : "bg-slate-100 text-slate-600 group-hover:bg-blue-100"
                } rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mb-4 mx-auto`}
              >
                {step.number}
              </div>
              <h3
                className={`font-bold text-center mb-2 transition-colors ${activeStep === index ? "text-blue-600" : "text-slate-900"}`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm text-center leading-relaxed transition-all ${activeStep === index ? "text-slate-700 font-medium" : "text-slate-600"}`}
              >
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 transition-all duration-300 ${activeStep >= index ? "bg-blue-600" : "bg-blue-200"}`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Shield, Clock, Users, Zap, Lock, TrendingUp, Award } from "lucide-react"

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState("benefits")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-reason-index]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      title: "100% Online & Accessible",
      description:
        "No court visits or travel required. Resolve disputes from anywhere with just an internet connection. Work at your own pace without disrupting your daily schedule.",
      icon: Zap,
    },
    {
      title: "Legally Compliant & Enforceable",
      description:
        "Fully compliant with the Arbitration & Conciliation Act, 1996. Awards are legally binding and enforceable in any court of law, providing the same legal weight as traditional dispute resolution.",
      icon: Award,
    },
    {
      title: "Bank-Grade Security",
      description:
        "End-to-end encrypted sessions with military-grade encryption. Complete data protection and confidentiality. Your sensitive information is protected with the highest security standards.",
      icon: Lock,
    },
    {
      title: "Transparent & Fair Pricing",
      description:
        "Clear, upfront pricing structure that you can review before starting. No hidden costs or surprise fees. Pay only for what you use with flexible payment options.",
      icon: TrendingUp,
    },
    {
      title: "Expert & Certified Mediators",
      description:
        "Access to certified professionals with extensive dispute resolution experience. Our mediators are trained in modern conflict resolution techniques and understand diverse industries.",
      icon: Users,
    },
    {
      title: "Faster Resolution Process",
      description:
        "Streamlined dispute resolution compared to traditional methods. Flexible scheduling and efficient procedures. Get back to business quickly with our optimized process.",
      icon: Clock,
    },
    {
      title: "Complete Confidentiality",
      description:
        "All proceedings are private and confidential. No public records or media involvement. Protect your business reputation and sensitive information throughout the process.",
      icon: Shield,
    },
    {
      title: "Flexible & Customizable Process",
      description:
        "Tailor the dispute resolution process to your needs. Choose your mediator, set your timeline, and decide on the format. Complete control over how your case is handled.",
      icon: CheckCircle2,
    },
  ]

  const benefits = [
    {
      category: "Cost Efficiency",
      items: [
        "Reduced expenses compared to traditional litigation",
        "Transparent pricing with no hidden charges",
        "Flexible payment options available",
      ],
    },
    {
      category: "Time Efficiency",
      items: [
        "Faster resolution compared to traditional methods",
        "Flexible scheduling around your availability",
        "Streamlined procedures without lengthy delays",
      ],
    },
    {
      category: "Privacy & Control",
      items: ["Completely confidential proceedings", "Choose your own mediator", "Control over the resolution process"],
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 animate-fade-in-up">Why Choose Samnvay?</h2>
          <p className="text-lg text-slate-600 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Experience the future of dispute resolution with our innovative platform designed for speed, security, and
            fairness.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full animate-slide-in-left mt-4"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 border-b border-blue-200">
          <button
            onClick={() => setActiveTab("benefits")}
            className={`px-6 py-3 font-semibold transition-all duration-300 ${
              activeTab === "benefits"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Key Benefits
          </button>
          <button
            onClick={() => setActiveTab("reasons")}
            className={`px-6 py-3 font-semibold transition-all duration-300 ${
              activeTab === "reasons"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Why Samnvay
          </button>
        </div>

        {/* Benefits Tab */}
        {activeTab === "benefits" && (
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {benefit.category}
                </h3>
                <ul className="space-y-4">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 group-hover:text-slate-700 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Reasons Grid */}
        {activeTab === "reasons" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div
                  key={index}
                  data-reason-index={index}
                  className={`flex flex-col gap-4 p-6 rounded-lg bg-white border border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all duration-500 group cursor-pointer ${
                    visibleItems.includes(index) ? "animate-fade-in-up" : "opacity-100"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* CTA Section */}
        <div
          className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Resolve Your Dispute?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join users who are resolving their disputes quickly, fairly, and confidentially with Samnvay.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
            Start Your Case Today
          </button>
        </div>
      </div>
    </section>
  )
}

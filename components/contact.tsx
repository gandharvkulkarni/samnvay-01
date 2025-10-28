"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">Get In Touch</h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-6 animate-slide-in-left"></div>
          <p className="text-lg text-slate-600 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ready to resolve your dispute? Contact us today and let's find the right path to resolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-slate-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-slate-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-slate-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-slate-400 resize-none"
                placeholder="Tell us about your dispute..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              <Send
                className={`w-5 h-5 ${isSubmitting ? "animate-spin" : "group-hover:translate-x-1 transition-transform"}`}
              />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg animate-fade-in-up">
                ✓ Thank you! We'll contact you soon.
              </div>
            )}
          </form>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-1">Email</p>
                    <a href="mailto:alaka@samnvay.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      alaka@samnvay.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-blue-600 hover:text-blue-700 font-medium">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm font-semibold text-slate-600 mb-1">Address</p>
                    <p className="text-slate-700">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}

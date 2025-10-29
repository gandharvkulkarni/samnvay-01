"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Footer() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <Image src="/Samnvay-logo-new-white.png" alt="Samnvay Logo" width={200} height={40} className="object-contain" />
            </div>
            <p className="text-sm leading-relaxed">Making justice accessible, affordable, and timely for everyone.</p>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Mediation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Arbitration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Case Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Legal Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 Samnvay. All rights reserved.</p>
            <p>Based on Arbitration & Conciliation Act, 1996</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

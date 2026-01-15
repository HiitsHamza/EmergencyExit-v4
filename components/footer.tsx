"use client"

import { Instagram, Facebook, Youtube, ChevronRight } from "lucide-react"
import { useState } from "react"

// TikTok icon component
const TikTok = ({ className, ...props }: { className?: string; [key: string]: any }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)
import { Logo } from "./logo"
import Image from "next/image"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for subscribing!'
        })
        setEmail("")
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <footer>
      <div className="bg-[#121A35] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Left side - Subscribe section with logo bit */}
            <div className="flex items-center gap-6 text-white">
              <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo bit.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-full"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div>
                <p className="text-base font-normal mb-1">Subscribe to</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-1">The Emergency Exit</h2>
                <p className="text-base font-normal">Podcast</p>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-[3px] h-20 bg-white/30 flex-shrink-0"></div>

            {/* Right side - Email signup */}
            <div className="text-center lg:text-left w-full max-w-md">
              <h3 className="text-white text-lg font-bold mb-4 tracking-wide uppercase">NEVER MISS AN UPDATE !</h3>
              {submitStatus.type && (
                <div
                  className={`mb-4 p-3 rounded text-sm ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="relative inline-flex w-full border-2 border-white">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#1e2742] hover:bg-[#2c3550] transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="text-white text-sm">...</span>
                  ) : (
                    <>
                      <ChevronRight className="w-5 h-5 text-white" strokeWidth={3} />
                      <ChevronRight className="w-5 h-5 text-white -ml-3" strokeWidth={3} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] py-12">
        <div className="container mx-auto px-4">
          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <Instagram
              className="w-12 h-12 text-[var(--brand-primary)] cursor-pointer hover:opacity-80 transition-colors"
              aria-label="Instagram"
            />
            <Facebook
              className="w-12 h-12 text-[var(--brand-primary)] cursor-pointer hover:opacity-80 transition-colors"
              aria-label="Facebook"
            />
            <TikTok
              className="w-12 h-12 text-[var(--brand-primary)] cursor-pointer hover:opacity-80 transition-colors"
              aria-label="TikTok"
            />
            <Youtube
              className="w-12 h-12 text-[var(--brand-primary)] cursor-pointer hover:opacity-80 transition-colors"
              aria-label="YouTube"
            />
          </div>


          {/* Navigation Links */}
          <nav className="flex justify-center items-center space-x-12 mb-4">
            <span className="text-[var(--brand-primary)] font-bold text-lg cursor-pointer hover:opacity-80 transition-colors">
              HOME
            </span>
            <span className="text-[var(--brand-primary)] font-bold text-lg cursor-pointer hover:opacity-80 transition-colors">
              ABOUT
            </span>
            <span className="text-[var(--brand-primary)] font-bold text-lg cursor-pointer hover:opacity-80 transition-colors">
              EPISODES
            </span>
            <span className="text-[var(--brand-primary)] font-bold text-lg cursor-pointer hover:opacity-80 transition-colors">
              CONTACT
            </span>
          </nav>
          
          
          {/* Title */}
          <div className="text-center mb-4">
            <h3 className="text-[var(--brand-primary)] text-xl font-bold">The Emergency Exit</h3>
          </div>
          {/* Copyright at bottom */}
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">Copyright © 2025 All rights reserved</p>
          </div>
        {/* Credits */}
        <div className="text-center mb-12">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Credits</p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-gray-600 text-sm">
              <span>Hamza Abdullah</span>
              <span className="text-gray-400">•</span>
              <span>Mansur Hussain</span>
              <span className="text-gray-400">•</span>
              <span>Emaad Hashmi</span>
              <span className="text-gray-400">•</span>
              <span>Azam Khan</span>
              <span className="text-gray-400">•</span>
              <span>Imtisal Abbasi</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

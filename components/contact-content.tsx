"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 relative">
          {/* Vertical Divider - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2" />
          
          {/* Contact Form */}
          <div className="relative z-10">
            {/* Chevron header for "Send us a message" - double arrow */}
            <div className="relative inline-flex items-center mb-8">
              <div className="relative flex items-center">
                {/* Main content area + double arrow with borders using clipPath */}
                <div className="relative h-16">
                  {/* Blue border layer (outermost, extends furthest on both sides) */}
                  <div 
                    className="absolute bg-[#1e2742]"
                    style={{
                      top: '0',
                      bottom: '0',
                      left: '-35px',
                      right: '-35px',
                      clipPath: 'polygon(26px 0%, calc(100% - 26px) 0%, 100% 50%, calc(100% - 26px) 100%, 26px 100%, 0% 50%)'
                    }}
                  />
                  
                  {/* Gray border layer (middle, thinner) */}
                  <div 
                    className="absolute bg-gray-300"
                    style={{
                      top: '0',
                      bottom: '0',
                      left: '-25px',
                      right: '-25px',
                      clipPath: 'polygon(26px 0%, calc(100% - 26px) 0%, 100% 50%, calc(100% - 26px) 100%, 26px 100%, 0% 50%)'
                    }}
                  />
                  
                  {/* Main navy chevron - double arrow */}
                  <div 
                    className="relative bg-[#1e2742] h-16 px-10 flex items-center"
                    style={{
                      clipPath: 'polygon(24px 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 24px 100%, 0% 50%)',
                      paddingLeft: '3.5rem',
                      paddingRight: '3.5rem'
                    }}
                  >
                    <span className="text-white text-2xl font-bold tracking-wide whitespace-nowrap">
                      Send us a message
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-[#181e3a] mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg focus:border-[#181e3a] focus:ring-0"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-[#181e3a] mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg focus:border-[#181e3a] focus:ring-0"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-[#181e3a] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={18}
                  style={{ minHeight: '140px' }}
                  className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg focus:border-[#181e3a] focus:ring-0 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#181e3a] hover:bg-[#1e2742] text-white text-lg py-4 px-8 rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="relative z-10">
            {/* Chevron header for "Get in touch" - double arrow */}
            <div className="relative inline-flex items-center mb-8">
              <div className="relative flex items-center">
                {/* Main content area + double arrow with borders using clipPath */}
                <div className="relative h-16">
                  {/* Blue border layer (outermost, extends furthest on both sides) */}
                  <div 
                    className="absolute bg-[#1e2742]"
                    style={{
                      top: '0',
                      bottom: '0',
                      left: '-35px',
                      right: '-35px',
                      clipPath: 'polygon(26px 0%, calc(100% - 26px) 0%, 100% 50%, calc(100% - 26px) 100%, 26px 100%, 0% 50%)'
                    }}
                  />
                  
                  {/* Gray border layer (middle, thinner) */}
                  <div 
                    className="absolute bg-gray-300"
                    style={{
                      top: '0',
                      bottom: '0',
                      left: '-25px',
                      right: '-25px',
                      clipPath: 'polygon(26px 0%, calc(100% - 26px) 0%, 100% 50%, calc(100% - 26px) 100%, 26px 100%, 0% 50%)'
                    }}
                  />
                  
                  {/* Main navy chevron - double arrow */}
                  <div 
                    className="relative bg-[#1e2742] h-16 px-10 flex items-center"
                    style={{
                      clipPath: 'polygon(24px 0%, calc(100% - 24px) 0%, 100% 50%, calc(100% - 24px) 100%, 24px 100%, 0% 50%)',
                      paddingLeft: '3.5rem',
                      paddingRight: '3.5rem'
                    }}
                  >
                    <span className="text-white text-2xl font-bold tracking-wide whitespace-nowrap">
                      Get in touch
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#181e3a] mb-4">Email Us</h3>
                <p className="text-lg text-gray-600 mb-2">
                  For general inquiries, feedback, or collaboration opportunities:
                </p>
                <a
                  href="mailto:hello@emergencyexitpodcast.com"
                  className="text-lg text-[#181e3a] hover:underline font-medium"
                >
                  theemergencyexitpodcast@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#181e3a] mb-4">Follow Us</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Stay connected with us on social media for the latest updates and behind-the-scenes content.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#181e3a] hover:text-[#1e2742] transition-colors" aria-label="Instagram">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#181e3a] hover:text-[#1e2742] transition-colors" aria-label="Facebook">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#181e3a] hover:text-[#1e2742] transition-colors" aria-label="TikTok">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-[#181e3a] hover:text-[#1e2742] transition-colors" aria-label="YouTube">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#181e3a] mb-4">Response Time</h3>
                <p className="text-lg text-gray-600">
                  We typically respond to all inquiries within 24-48 hours. For urgent matters, please mention "URGENT"
                  in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

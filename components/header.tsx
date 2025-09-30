"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Search, Instagram, Facebook, X, Youtube } from "lucide-react"
import { SearchModal } from "./search-modal"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f5f5f5]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/emergency-exit-blue.svg"
                  alt="The Emergency Exit Podcast"
                  width={200}
                  height={56}
                  className="h-20 w-auto cursor-pointer"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[#2c3e50] font-medium cursor-pointer hover:text-[#181e3a] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#2c3e50] font-medium cursor-pointer hover:text-[#181e3a] transition-colors"
              >
                About
              </Link>
              <Link
                href="/episodes"
                className="text-[#2c3e50] font-medium cursor-pointer hover:text-[#181e3a] transition-colors"
              >
                Episodes
              </Link>
              <Link
                href="/contact"
                className="text-[#2c3e50] font-medium cursor-pointer hover:text-[#181e3a] transition-colors"
              >
                Contact
              </Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 text-[#2c3e50] font-medium cursor-pointer hover:text-[#181e3a] transition-colors"
              >
                <span>Search</span>
                <Search className="w-5 h-5" aria-label="Search" />
              </button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Instagram
                className="w-6 h-6 text-[#181e3a] cursor-pointer hover:text-[#2c3e50] transition-colors"
                aria-label="Instagram"
              />
              <Facebook
                className="w-6 h-6 text-[#181e3a] cursor-pointer hover:text-[#2c3e50] transition-colors"
                aria-label="Facebook"
              />
              <X
                className="w-6 h-6 text-[#181e3a] cursor-pointer hover:text-[#2c3e50] transition-colors"
                aria-label="X (Twitter)"
              />
              <Youtube
                className="w-6 h-6 text-[#181e3a] cursor-pointer hover:text-[#2c3e50] transition-colors"
                aria-label="YouTube"
              />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" aria-label="Menu">
              <div className="w-6 h-0.5 bg-[#2c3e50] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#2c3e50] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#2c3e50]"></div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#2c3e50] font-medium">
                Home
              </Link>
              <Link href="/about" className="text-[#2c3e50] font-medium">
                About
              </Link>
              <Link href="/episodes" className="text-[#2c3e50] font-medium">
                Episodes
              </Link>
              <Link href="/contact" className="text-[#2c3e50] font-medium">
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <button onClick={() => setIsSearchOpen(true)}>
                  <Search className="w-5 h-5 text-[#2c3e50]" aria-label="Search" />
                </button>
                <Instagram className="w-5 h-5 text-[#181e3a]" aria-label="Instagram" />
                <Facebook className="w-5 h-5 text-[#181e3a]" aria-label="Facebook" />
                <X className="w-5 h-5 text-[#181e3a]" aria-label="X (Twitter)" />
                <Youtube className="w-5 h-5 text-[#181e3a]" aria-label="YouTube" />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

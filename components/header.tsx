"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Instagram, Facebook, Youtube, Menu } from "lucide-react"

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
import { SearchModal } from "./search-modal"
import { Logo } from "./logo"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f5f5f5]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="cursor-pointer">
                <Logo className="h-20 w-auto" />
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
              <TikTok
                className="w-6 h-6 text-[#181e3a] cursor-pointer hover:text-[#2c3e50] transition-colors"
                aria-label="TikTok"
              />
              <Youtube
                className="w-6 h-6 text-[#181e3a] cursor-pointer hover:text-[#2c3e50] transition-colors"
                aria-label="YouTube"
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-[#2c3e50] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#2c3e50] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#2c3e50]"></div>
            </button>
          </div>

          {/* Mobile Navigation - Hidden by default */}
          {isMobileMenuOpen && (
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
                  <TikTok className="w-5 h-5 text-[#181e3a]" aria-label="TikTok" />
                  <Youtube className="w-5 h-5 text-[#181e3a]" aria-label="YouTube" />
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}

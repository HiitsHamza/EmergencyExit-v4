import Image from "next/image"
import { Instagram, Facebook, X, Youtube, ChevronRight } from "lucide-react"

export function Footer() {
  return (
    <footer>
      <div className="bg-[var(--brand-primary)] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left side - Subscribe section */}
            <div className="flex items-center gap-4 text-white">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <Image src="/emergency-exit-blue.svg" alt="Book icon" width={32} height={32} className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Subscribe to</h3>
                <h2 className="text-2xl font-bold">The Emergency Exit</h2>
                <p className="text-lg">Podcast</p>
              </div>
            </div>

            {/* Vertical divider removed */}

            {/* Right side - Email signup */}
            <div className="text-center lg:text-left">
              <h3 className="text-white text-lg font-bold mb-4 tracking-wide">NEVER MISS AN UPDATE !</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-80 px-4 py-3 bg-white text-gray-800 placeholder-gray-500 border-2 border-gray-300 focus:border-[var(--brand-primary)] focus:outline-none"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-gray-600 hover:bg-gray-700 transition-colors">
                  <ChevronRight className="w-5 h-5 text-white" />
                  <ChevronRight className="w-5 h-5 text-white -ml-3" />
                </button>
              </div>
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
            <X
              className="w-12 h-12 text-[var(--brand-primary)] cursor-pointer hover:opacity-80 transition-colors"
              aria-label="X (Twitter)"
            />
            <Youtube
              className="w-12 h-12 text-[var(--brand-primary)] cursor-pointer hover:opacity-80 transition-colors"
              aria-label="YouTube"
            />
          </div>

          {/* Title and Copyright */}
          <div className="text-center mb-12">
            <h3 className="text-[var(--brand-primary)] text-xl font-bold mb-2">The Emergency Exit</h3>
            <p className="text-gray-600 text-sm">Copyright © 2025 All rights reserved</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center items-center space-x-12 mb-12">
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
            <span className="text-[var(--brand-primary)] font-bold text-lg cursor-pointer hover:opacity-80 transition-colors">
              CREDITS
            </span>
          </nav>

          {/* Description Text */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors">
              Terms & Support
            </span>
            <div className="flex items-center gap-2">
              <span className="text-white text-sm">Designed with</span>
              <span className="text-white font-bold text-sm italic">Canva</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

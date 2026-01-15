"use client"

import { useState } from "react"

interface EpisodesSearchProps {
  onSearchChange: (query: string) => void
}

export function EpisodesSearch({ onSearchChange }: EpisodesSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearchChange(value)
  }

  return (
    <section className="bg-[#181e3a] py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-bold mb-2">The Emergency Exit</h2>
        <h3 className="text-white text-2xl mb-8 tracking-wider">EPISODES</h3>
        <p className="text-white/80 mb-8">
          Explore all episodes below or use the search bar to find your preferred literary adventure
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#f5f5f5] text-gray-800 placeholder-gray-400 border-2 border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-[#f5f5f5]"
          />
        </div>
      </div>
    </section>
  )
}

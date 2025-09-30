"use client"

import { Play, Pause } from "lucide-react"
import { useState } from "react"

export function EpisodePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="bg-[#181e3a] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-[#181e3a]">The Emergency Exit</h3>
              <p className="text-sm text-gray-600">Episode 10</p>
            </div>
            <div className="text-sm text-gray-600">45:00</div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-[#181e3a] text-white p-3 rounded-full hover:bg-[#181e3a]/90 transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
            </button>

            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#181e3a] rounded-full" style={{ width: "35%" }}></div>
            </div>
          </div>

          {/* Placeholder for external audio URL via slug - to be wired later */}
          <div className="text-xs text-gray-500 mb-2">Audio source: [to be linked via slug]</div>

          <div className="flex justify-center gap-4">
            <button className="text-[#181e3a] text-sm font-medium hover:underline">Download Episode</button>
            <button className="text-[#181e3a] text-sm font-medium hover:underline">Share Episode</button>
          </div>
        </div>
      </div>
    </section>
  )
}

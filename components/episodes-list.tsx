"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Download } from "lucide-react"

const episodes = [
  {
    id: 3,
    title: "How Do I Love Thee? - Part 1",
    date: "March 1, 2026",
    duration: "45 mins",
    slug: "episode-3",
    description: "Why do we continue to believe in romance? And more importantly, how do we love?",
    image: "/sample3.jpg",
  },
  {
    id: 2,
    title: "This is Me",
    date: "January 1, 2025",
    duration: "48 mins",
    slug: "episode-2",
    description: "A deep dive into identity and self-expression through literature. We explore how authors craft authentic voices and create characters that resonate with readers.",
    image: "/sample2.jpg",
  },
  {
    id: 1,
    title: "The Secret Life of Children's Literature - Part 1",
    date: "December 15, 2024",
    duration: "48 mins",
    slug: "episode-1",
    description: "Exploring the intricate balance between innocence and knowledge in children's literature, we uncover the hidden depths that make these stories resonate with readers of all ages.",
    image: "/sample1.jpg",
  },
]

interface EpisodesListProps {
  searchQuery?: string
}

export function EpisodesList({ searchQuery = "" }: EpisodesListProps) {
  const filteredEpisodes = episodes.filter((episode) => {
    if (!searchQuery.trim()) return true
    
    const query = searchQuery.toLowerCase()
    return (
      episode.title.toLowerCase().includes(query) ||
      episode.description.toLowerCase().includes(query) ||
      episode.date.toLowerCase().includes(query)
    )
  })

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        {filteredEpisodes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No episodes found matching your search.</p>
          </div>
        ) : (
          filteredEpisodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="flex">
              {/* Left Section - Dark Blue Background */}
              <div className="flex-[3] bg-[#181e3a] text-white p-8 flex flex-col justify-between">
                <div>
                  {/* Date and Duration */}
                  <div className="text-sm mb-4">
                    {episode.date} ~ {episode.duration}
                  </div>
                  
                  {/* Separator Line */}
                  <div className="h-px bg-white mb-4"></div>
                  
                  {/* Podcast Number */}
                  <div className="italic text-base mb-4">
                    Podcast {episode.id}
                  </div>
                  
                  {/* Title */}
                  <Link href={`/episodes/${episode.slug}`}>
                    <h3 className="text-3xl font-bold mb-4 hover:underline">
                      {episode.title}
                    </h3>
                  </Link>
                  
                  {/* Description */}
                  <p className="text-white/90 text-base leading-relaxed mb-6">
                    {episode.description}
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4">
                  <Link 
                    href={`/episodes/${episode.slug}`}
                    className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Listen Now
                  </Link>
                  <button className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
              
              {/* Right Section - Image */}
              <div className="flex-[3] relative h-auto min-h-[300px]">
                <Image 
                  src={episode.image} 
                  alt={episode.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
          ))
        )}

      </div>
    </section>
  )
}

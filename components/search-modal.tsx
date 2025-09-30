"use client"

import { useState, useEffect } from "react"
import { Search, X, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const episodes = [
  {
    id: 10,
    title: "The Secret Life of Children's Literature - Part 1",
    date: "December 15, 2024",
    duration: "45 mins",
    slug: "secret-life-childrens-literature-part-1",
    description:
      "Exploring the intricate balance between innocence and knowledge in children's literature, we uncover the hidden depths that make these stories resonate with readers of all ages.",
  },
  {
    id: 9,
    title: "Reimagining Classic Characters",
    date: "December 8, 2024",
    duration: "52 mins",
    slug: "reimagining-classic-characters",
    description:
      "How classic literary characters continue to captivate modern readers and writers in the 21st century.",
  },
  {
    id: 8,
    title: "The Art of Literary Translation",
    date: "December 1, 2024",
    duration: "48 mins",
    slug: "art-of-literary-translation",
    description:
      "Exploring the nuanced balance between fidelity and creativity when translating literary works from renowned translators.",
  },
  {
    id: 7,
    title: "Poetry in the Digital Age",
    date: "November 24, 2024",
    duration: "41 mins",
    slug: "poetry-digital-age",
    description: "How social media and technology are transforming contemporary poetry and reaching new audiences.",
  },
  {
    id: 6,
    title: "Gothic Literature's Modern Revival",
    date: "November 17, 2024",
    duration: "55 mins",
    slug: "gothic-literature-modern-revival",
    description: "Why Gothic themes continue to captivate modern readers and writers in the 21st century.",
  },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredEpisodes, setFilteredEpisodes] = useState(episodes)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredEpisodes(episodes)
    } else {
      const filtered = episodes.filter(
        (episode) =>
          episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          episode.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredEpisodes(filtered)
    }
  }, [searchQuery])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-white max-h-screen flex flex-col">
        {/* Search Header */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#181e3a] focus:border-transparent text-lg"
                autoFocus
              />
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {searchQuery && (
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredEpisodes.length} result{filteredEpisodes.length !== 1 ? "s" : ""} for "{searchQuery}"
              </p>
            </div>
          )}

          <div className="space-y-4">
            {filteredEpisodes.map((episode) => (
              <Link
                key={episode.id}
                href={`/episodes/${episode.slug}`}
                onClick={onClose}
                className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow group"
              >
                <div className="flex gap-4">
                  <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src="/grand-classical-library-interior.jpg"
                      alt={episode.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#181e3a] group-hover:underline mb-1 truncate">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{episode.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Podcast {episode.id}</span>
                      <span>{episode.date}</span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredEpisodes.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No episodes found</h3>
              <p className="text-gray-600">Try searching with different keywords or browse all episodes.</p>
              <Link
                href="/episodes"
                onClick={onClose}
                className="inline-block mt-4 bg-[#181e3a] text-white px-6 py-2 rounded-full font-medium hover:bg-[#181e3a]/90 transition-colors"
              >
                Browse All Episodes
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

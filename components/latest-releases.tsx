"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState } from "react"

const episodes = [
  {
    id: 1,
    title: "The Secret Life of Children’s Literature - 1",
    slug: "secret-life-of-childrens-literature-1",
    image: "/grand-classical-library-interior.jpg",
  },
  {
    id: 2,
    title: "The Secret Life of Children’s Literature - 2",
    slug: "secret-life-of-childrens-literature-2",
    image: "/stacked-vintage-books-on-desk.jpg",
  },
  {
    id: 3,
    title: "How Do I Love Thee? -1",
    slug: "how-do-i-love-thee-1",
    image: "/vintage-poetry-books-and-manuscripts.jpg",
  },
  {
    id: 4,
    title: "How Do I Love Thee? -2",
    slug: "how-do-i-love-thee-2",
    image: "/vintage-books-and-papers.jpg",
  },
]

export function LatestReleases() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const nextSlide = () => {
    setDirection('next')
    setCurrentIndex((prev) => (prev + 1) % episodes.length)
  }

  const prevSlide = () => {
    setDirection('prev')
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length)
  }

  const visibleEpisodes = Array.from({ length: 3 }, (_, i) => episodes[(currentIndex + i) % episodes.length])

  return (
    <section className="py-16 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
            aria-label="Previous episodes"
          >
            <ChevronLeft className="w-6 h-6 text-[#181e3a]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
            aria-label="Next episodes"
          >
            <ChevronRight className="w-6 h-6 text-[#181e3a]" />
          </button>

          {/* Episodes grid */}
          <div className={`mx-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${direction === 'next' ? 'ee-anim-enter-right' : 'ee-anim-enter-left'}`}>
            {visibleEpisodes.map((episode, index) => (
              <Link href={`/episodes/${episode.slug || ''}`} key={episode.id} className="group">
                <div
                  className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(episode.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative w-full h-[260px]">
                    <Image
                      src={episode.image || "/placeholder.svg"}
                      alt={episode.title}
                      fill
                      className="object-cover"
                    />
                    {/* Darken on hover with play button */}
                    <div className={`absolute inset-0 transition-all duration-300 ${hoveredCard === episode.id ? 'bg-black/30' : 'bg-transparent'}`}></div>
                    {hoveredCard === episode.id && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 shadow">
                          <Play className="w-6 h-6 text-[#181e3a] fill-current" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#181e3a] text-center text-base leading-tight line-clamp-2">
                      {episode.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

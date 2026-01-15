"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import RibbonHeader from "@/components/ribbon-header"

const baseEpisodes = [
  {
    id: 1,
    title: "The Secret Life of Children's Literature - Part 1",
    subtitle: "Exploring hidden narratives in childhood tales",
    slug: "episode-1",
    image: "/sample1.jpg",
  },
  {
    id: 2,
    title: "This is Me",
    subtitle: "Identity and self-expression through literature",
    slug: "episode-2",
    image: "/sample2.jpg",
  },
  {
    id: 3,
    title: "How Do I Love Thee? - Part 1",
    subtitle: "Why do we continue to believe in romance? And more importantly, how do we love?",
    slug: "episode-3",
    image: "/sample3.jpg",
  },
]

// Duplicate episodes for smooth carousel cycling
const episodes = [...baseEpisodes, ...baseEpisodes, ...baseEpisodes]

export function ListenHere() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const AUTOPLAY_MS = 3000

  const startAutoplay = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      api?.scrollNext()
    }, AUTOPLAY_MS)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (!api) return
    startAutoplay()
    return () => {
      stopAutoplay()
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
        resumeTimeoutRef.current = null
      }
    }
  }, [api])

  const resetAutoplay = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
    stopAutoplay()
    startAutoplay()
  }

  const handleMouseEnter = () => {
    stopAutoplay()
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoplay()
    }, 2000)
  }

  const handleMouseLeave = () => {
    // Do not resume immediately; keep the 2s pause semantics.
  }

  return (
    <section className="py-16 bg-[var(--bg)] relative overflow-hidden">
      {/* Decorative diagonal stripe - coming from right, fades to left */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '-10%',
          width: '120%',
          height: '180px',
          background: 'linear-gradient(to left, #d5d9e0 0%, #d5d9e0 55%, transparent 75%)',
          transform: 'rotate(6deg)',
          zIndex: 0,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <RibbonHeader text="LISTEN HERE" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* Left arrow overlay */}
          <button
            onClick={() => {
              api?.scrollPrev()
              resetAutoplay()
            }}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 transition-colors shadow-lg"
            aria-label="Previous episodes"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          {/* Right arrow overlay */}
          <button
            onClick={() => {
              api?.scrollNext()
              resetAutoplay()
            }}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 transition-colors shadow-lg"
            aria-label="Next episodes"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
          
          <Carousel opts={{ loop: true, align: 'start' }} setApi={setApi}>
            <CarouselContent className="-ml-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {episodes.map((episode, index) => (
                <CarouselItem key={`${episode.id}-${index}`} className="pl-6 basis-full md:basis-1/3">
                  <Link href={`/episodes/${episode.slug}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <Image
                        src={episode.image || "/placeholder.svg"}
                        alt={episode.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-medium text-[var(--text)] mb-2 text-balance line-clamp-2">{episode.title}</h3>
                        <p className="text-[#666666] text-sm line-clamp-2">{episode.subtitle}</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* More Episodes Button */}
        <div className="flex justify-center mt-10">
          <Link 
            href="/episodes"
            className="px-8 py-3 bg-[#181e3a] text-white font-medium rounded-full hover:bg-[#181e3a]/90 transition-colors"
          >
            More Episodes
          </Link>
        </div>
      </div>
    </section>
  )
}

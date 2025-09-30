import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const episodes = [
  {
    id: 1,
    title: "The Secret Life of Containers - Part 1",
    subtitle: "Exploring hidden narratives",
    image: "/books-and-containers.jpg",
  },
  {
    id: 2,
    title: "The Power of Marginalized Voices in Contemporary Fiction",
    subtitle: "Literature and society",
    image: "/vintage-books-and-papers.jpg",
  },
  {
    id: 3,
    title: "Reimagining Classic Characters - Part 1",
    subtitle: "Modern interpretations",
    image: "/classic-architecture-and-books.jpg",
  },
]

export function TopEpisodes() {
  return (
    <section className="py-16 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">CHECK OUT OUR TOP EPISODES</h2>
          <div className="hidden md:flex items-center space-x-2">
            <button
              className="p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-strong)] transition-colors"
              aria-label="Previous episodes"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--text)]" />
            </button>
            <button
              className="p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-strong)] transition-colors"
              aria-label="Next episodes"
            >
              <ChevronRight className="w-5 h-5 text-[var(--text)]" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <Image
                src={episode.image || "/placeholder.svg"}
                alt={episode.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-medium text-[var(--text)] mb-2 text-balance">{episode.title}</h3>
                <p className="text-[#666666] text-sm">{episode.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

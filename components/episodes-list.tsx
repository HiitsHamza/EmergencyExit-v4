import Image from "next/image"
import Link from "next/link"
import { Play, Download } from "lucide-react"

const episodes = [
  {
    id: 10,
    title: "The Secret Life of Children's Literature - Part 1",
    date: "December 15, 2024",
    duration: "45 mins",
    slug: "secret-life-childrens-literature-part-1",
  },
  {
    id: 9,
    title: "Reimagining Classic Characters",
    date: "December 8, 2024",
    duration: "52 mins",
    slug: "reimagining-classic-characters",
  },
  {
    id: 8,
    title: "The Art of Literary Translation",
    date: "December 1, 2024",
    duration: "48 mins",
    slug: "art-of-literary-translation",
  },
  {
    id: 7,
    title: "Poetry in the Digital Age",
    date: "November 24, 2024",
    duration: "41 mins",
    slug: "poetry-digital-age",
  },
  {
    id: 6,
    title: "Gothic Literature's Modern Revival",
    date: "November 17, 2024",
    duration: "55 mins",
    slug: "gothic-literature-modern-revival",
  },
]

export function EpisodesList() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="flex">
              <div className="relative w-48 h-32 flex-shrink-0">
                <Image src="/grand-classical-library-interior.jpg" alt={episode.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 fill-current" />
                  </button>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="bg-[#181e3a] text-white px-2 py-1 rounded text-xs font-medium">
                    Podcast {episode.id}
                  </span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-2">
                  <Link href={`/episodes/${episode.slug}`} className="hover:text-[#181e3a] transition-colors">
                    <h3 className="text-xl font-bold text-[#181e3a] group-hover:underline">{episode.title}</h3>
                  </Link>
                  <div className="text-right text-sm text-gray-500">
                    <div>{episode.date}</div>
                    <div>{episode.duration}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Exploring the intricate balance between innocence and knowledge in children's literature, we uncover
                  the hidden depths that make these stories resonate with readers of all ages.
                </p>
                <div className="flex gap-2">
                  <Link href={`/episodes/${episode.slug}`} className="bg-[#181e3a] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#181e3a]/90 transition-colors flex items-center gap-2">
                    <Play className="w-3 h-3 fill-current" />
                    Listen Now
                  </Link>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center pt-8">
          <button className="bg-[#181e3a] text-white px-8 py-3 rounded-full font-medium hover:bg-[#181e3a]/90 transition-colors">
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  )
}

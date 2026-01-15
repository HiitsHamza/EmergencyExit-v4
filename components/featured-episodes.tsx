import Image from "next/image"

const episodes = [
  {
    id: 1,
    title: "The Secret Life of Containers - Part 1",
    subtitle: "Exploring the hidden world",
    image: "/sample5.jpg",
  },
  {
    id: 2,
    title: "The Power of Marginalized Voices in Contemporary Fiction",
    subtitle: "Literature and society",
    image: "/sample6.jpg",
  },
  {
    id: 3,
    title: "Reimagining Classic Characters - Part 1",
    subtitle: "Modern interpretations",
    image: "/sample7.jpg",
  },
]

export function FeaturedEpisodes() {
  return (
    <section className="py-16 bg-[var(--bg-alt)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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

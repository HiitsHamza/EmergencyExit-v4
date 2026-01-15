import Image from "next/image"

interface EpisodeHeroProps {
  slug: string
}

const heroImages: { [key: string]: string } = {
  "episode-1": "/sample1.jpg",
  "episode-2": "/sample2.jpg",
  "episode-3": "/sample3.jpg",
}

export function EpisodeHero({ slug }: EpisodeHeroProps) {
  const heroImage = heroImages[slug] || "/sample1.jpg"
  
  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image src={heroImage} alt="Episode Hero" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f5f5]" />
    </section>
  )
}

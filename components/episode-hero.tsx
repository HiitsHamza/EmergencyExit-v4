import Image from "next/image"

interface EpisodeHeroProps {
  slug: string
}

export function EpisodeHero({ slug }: EpisodeHeroProps) {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <Image src="/grand-classical-library-interior.jpg" alt="Episode Hero" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}

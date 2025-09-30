import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EpisodeHero } from "@/components/episode-hero"
import { EpisodeContent } from "@/components/episode-content"
import { EpisodePlayer } from "@/components/episode-player"
import { PlatformsSection } from "@/components/platforms-section"

interface EpisodePageProps {
  params: {
    slug: string
  }
}

export default function EpisodePage({ params }: EpisodePageProps) {
  return (
    <main className="min-h-screen">
      <Header />
      <EpisodeHero slug={params.slug} />
      <EpisodeContent slug={params.slug} />
      <EpisodePlayer />
      <PlatformsSection />
      <Footer />
    </main>
  )
}

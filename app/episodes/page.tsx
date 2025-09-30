import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EpisodesHero } from "@/components/episodes-hero"
import { PlatformsSection } from "@/components/platforms-section"
import { EpisodesSearch } from "@/components/episodes-search"
import { EpisodesList } from "@/components/episodes-list"

export default function EpisodesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EpisodesHero />
      <PlatformsSection />
      <EpisodesSearch />
      <EpisodesList />
      <Footer />
    </main>
  )
}

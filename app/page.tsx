import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlatformsSection } from "@/components/platforms-section"
import { AboutSection } from "@/components/about-section"
import { TopEpisodes } from "@/components/top-episodes"
import { BehindTheMic } from "@/components/behind-the-mic"
import { ListenHere } from "@/components/listen-here"
import { PodcastBadges } from "@/components/podcast-badges"
import { OnaissasPicks } from "@/components/onaissas-picks"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Page content */}
      <div className="relative">
        <Header />
        <HeroSection />
        {/* Subtext */}
        <section className="py-8 bg-[var(--bg)]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[var(--text)] max-w-2xl mx-auto text-lg leading-relaxed">
              Welcome to the emergency exit, a light hearted but sharp minded podcast that throws open the magic casement on
              imaginative thought. Listen to us weave our way through novels, stories, movies and poetry
            </p>
          </div>
        </section>
        {/* <PlatformsSection /> */}
        <PodcastBadges />
        <TopEpisodes />
        <AboutSection />
        <BehindTheMic />
        <ListenHere />
        {/* <OnaissasPicks /> */}
        <Footer />
      </div>
    </main>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlatformsSection } from "@/components/platforms-section"
import { AboutSection } from "@/components/about-section"
import { TopEpisodes } from "@/components/top-episodes"
import { BehindTheMic } from "@/components/behind-the-mic"
import { LatestReleases } from "@/components/latest-releases"
import { OnaissasPicks } from "@/components/onaissas-picks"
import { SubscribeSection } from "@/components/subscribe-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LatestReleases />
      <PlatformsSection />
      <AboutSection />
      <TopEpisodes />
      <BehindTheMic />
      <OnaissasPicks />
      <SubscribeSection />
      <Footer />
    </main>
  )
}

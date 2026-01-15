import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent, AboutAudience } from "@/components/about-content"
import { HostProfile } from "@/components/host-profile"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <AboutContent />
      <HostProfile />
      <AboutAudience />
      <Footer />
    </main>
  )
}

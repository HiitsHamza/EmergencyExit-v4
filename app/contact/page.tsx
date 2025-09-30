import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactContent } from "@/components/contact-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </main>
  )
}

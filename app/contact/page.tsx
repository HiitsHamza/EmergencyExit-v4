import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SubscribeSection() {
  return (
    <section className="py-16 bg-[var(--brand-primary)]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Subscribe to
            <br />
            The Emergency Exit Podcast
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="ENTER EMAIL ADDRESS"
              className="flex-1 bg-white border-0 placeholder:text-[var(--muted)] text-[var(--text)]"
            />
            <Button className="bg-white text-[var(--brand-primary)] hover:bg-gray-100 font-medium px-8">→</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

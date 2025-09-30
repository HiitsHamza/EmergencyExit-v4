import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-2 md:pt-3 pb-1 md:pb-2 bg-[var(--bg)]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="relative flex justify-center -mt-[0.6cm] md:-mt-[0.8cm] pt-[2.6cm] md:pt-[0cm] pb-[0cm]">
            <Image
              src="/shelf-w-shadow.svg"
              alt=""
              width={800}
              height={160}
              className="w-full max-w-6xl h-auto"
            />
            {/* Overlayed small title above the main title */}
            <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[8.4cm] md:bottom-[13.8cm] text-3xl md:text-5xl lg:text-6xl font-medium text-[var(--text)]">
              The
            </h2>
            {/* Overlayed main title above the shelf with a fixed gap */}
            <h1 className="absolute left-1/2 -translate-x-1/2 bottom-[6.7cm] md:bottom-[11.5cm] text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--text)]">
              Emergency Exit
            </h1>
            <h2 className="absolute left-1/2 -translate-x-1/2 bottom-[6.7cm] md:bottom-[7.1cm] text-4xl md:text-6xl lg:text-7xl font-medium text-[var(--text)] tracking-[0.3em]">
              PODCAST
            </h2>
            <Button
              size="lg"
              className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[5.4cm] md:bottom-[3.9cm] bg-[var(--cta)] text-[var(--cta-text)] hover:bg-[var(--brand-primary)]/90 text-xl px-12 py-6 font-medium rounded-full min-w-[280px] h-[70px]"
            >
              LISTEN NOW
            </Button>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-[var(--text)] max-w-2xl mx-auto text-lg leading-relaxed">
          Welcome to the emergency exit, a light hearted but sharp minded podcast that throws open the magic casement on
          imaginative thought. Listen to us weave our way through novels, stories, movies and poetry
        </p>
      </div>
    </section>
  )
}

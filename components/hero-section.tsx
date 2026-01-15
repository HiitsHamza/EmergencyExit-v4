import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-8 md:pt-12 pb-1 md:pb-2 bg-[var(--bg)]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="relative flex flex-col items-center justify-center">
            {/* "The" - Top text with generous top spacing to avoid header cutoff */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[var(--text)] mt-4 md:mt-5 mb-0.5 md:mb-6 px-4 leading-[38px]">
              The
            </h2>
            
            {/* "Emergency Exit" - Main title with tight spacing to shelf */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--text)] mb-3 md:mb-6 px-4 leading-[52px]">
              Emergency Exit
            </h1>
            
            {/* Shelf image with shadow - PODCAST text positioned so shadow overlays it */}
            <div className="relative w-full max-w-4xl mb-0 mx-auto" style={{ height: 'auto', minHeight: '180px' }}>
              {/* Shelf image */}
              <div className="relative z-10">
                <Image
                  src="/shelf-v7.png"
                  alt=""
                  width={1200}
                  height={200}
                  className="w-full max-w-[52rem] h-auto mx-auto"
                  priority
                />
              </div>
              
              {/* "PODCAST" positioned very close to shelf bottom, with shadow overlaying top portion */}
              <h2 className="absolute left-1/2 -translate-x-1/2 top-[50%] md:top-[35%] text-4xl md:text-6xl lg:text-7xl font-medium text-[var(--text)] tracking-[0.3em] pointer-events-none z-20">
                PODCAST
              </h2>
            </div>
            
            {/* LISTEN NOW Button */}
            <Button
              size="lg"
              className="-mt-6 md:-mt-8 mb-12 md:mb-16 bg-[var(--cta)] text-[var(--cta-text)] hover:bg-[var(--brand-primary)]/90 text-xl px-12 py-6 font-medium rounded-full min-w-[280px] h-[70px]"
            >
              LISTEN NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

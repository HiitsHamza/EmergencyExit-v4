import Image from "next/image"
import Link from "next/link"

const PLATFORMS = [
  { src: "/logo_amazon.svg", alt: "Amazon Music", scale: 1.2, href: "#" },
  { src: "/logo_youtube.svg", alt: "YouTube", scale: 0.9, href: "#" },
  { src: "/logo_spotify.svg", alt: "Spotify", scale: 0.95, href: "#" },
  { src: "/logo_iheart.svg", alt: "iHeartRadio", scale: 0.9, href: "#" },
  { src: "/logo_google.svg", alt: "Google Podcasts", scale: 1.5, href: "#" },
  { src: "/logo_apple.svg", alt: "Apple Podcasts", scale: 1.3, href: "#" },
  { src: "/logo_overcast.svg", alt: "Overcast", scale: 1.2, href: "#" },
  { src: "/logo_addict.svg", alt: "Podcast Addict", scale: 1.4, href: "#" },

]

export function PlatformsSection() {
  return (
    <section className="py-12 bg-[var(--bg)] relative">
      {/* Chevron background - purely decorative, coming from extreme left, not constrained by container */}
      <div className="absolute left-0 top-10 h-full w-full pointer-events-none">
        <div className="relative h-full w-full">
          <Image 
            src="/chevron.png" 
            alt="" 
            fill 
            className="object-contain object-left" 
            aria-hidden="true"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
            {/* Grid: 4 on top, 4 on bottom with improved spacing */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-12 md:gap-y-16 place-items-center">
              {PLATFORMS.map((p) => (
                <Link
                  key={p.src}
                  href={p.href}
                  className="relative h-12 w-full max-w-[180px] flex items-center justify-center group transition-opacity hover:opacity-80 active:opacity-70"
                  aria-label={`Listen on ${p.alt}`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="180px"
                    className="object-contain"
                    style={{ transform: `scale(${p.scale || 1})` }}
                    priority={false}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

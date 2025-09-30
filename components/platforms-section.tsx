import Image from "next/image"

export function PlatformsSection() {
  return (
    <section className="py-12 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden">
          {/* background graphic positioned slightly left */}
          <div className="relative h-48 md:h-56 lg:h-64">
            <Image src="/platform.svg" alt="Platforms" fill className="object-cover object-[35%_center]" />
          </div>

          {/* icon rows */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
            {/* top row */}
            <div className="flex items-center gap-10 md:gap-16">
              {/* Using Apple Music icon as Amazon asset not found; swap if provided */}
              <Image src="/apple music icon.png" alt="Apple Music" width={150} height={36} className="h-8 md:h-12 w-auto" />
              <Image src="/youtube-logo-icon.webp" alt="YouTube" width={120} height={36} className="h-8 md:h-12 w-auto" />
              <Image src="/spotify icon.png" alt="Spotify" width={120} height={36} className="h-8 md:h-12 w-auto" />
              <Image src="/iheart radio icon.png" alt="iHeartRadio" width={150} height={36} className="h-8 md:h-12 w-auto" />
          </div>
            {/* bottom row */}
            <div className="flex items-center gap-10 md:gap-16">
              <Image src="/podcats addict icon.png" alt="Podcast Addict" width={160} height={36} className="h-8 md:h-12 w-auto" />
              <Image src="/apple podcast icon.png" alt="Apple Podcasts" width={160} height={36} className="h-8 md:h-12 w-auto" />
              <Image src="/google podcasts icon.png" alt="Google Podcasts" width={180} height={36} className="h-8 md:h-12 w-auto" />
              <Image src="/overcast icon.png" alt="Overcast" width={140} height={36} className="h-8 md:h-12 w-auto" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

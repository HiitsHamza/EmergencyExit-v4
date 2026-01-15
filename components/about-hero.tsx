import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <Image
        src="/sample1.jpg"
        alt="About The Emergency Exit Podcast"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About The Podcast</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Discover the story behind The Emergency Exit and meet our passionate host
          </p>
        </div>
      </div>
    </section>
  )
}

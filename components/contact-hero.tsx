import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <Image
        src="/sample2.jpg"
        alt="Contact The Emergency Exit Podcast"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Get in touch with The Emergency Exit team - we'd love to hear from you
          </p>
        </div>
      </div>
    </section>
  )
}

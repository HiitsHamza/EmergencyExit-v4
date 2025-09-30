import Image from "next/image"

export function EpisodesHero() {
  return (
    <section className="relative">
      <div className="bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image src="/grand-classical-library-interior.jpg" alt="Featured Episode" fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 text-[#181e3a] px-3 py-1 rounded text-sm font-medium">Podcast 10</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-white text-2xl font-bold mb-2">
                  The Secret Life of Children's Literature - Part 1
                </h2>
                <div className="flex gap-2">
                  <button className="bg-[#181e3a] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#181e3a]/90 transition-colors">
                    Listen Now
                  </button>
                  <button className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

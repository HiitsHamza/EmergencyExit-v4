import { Search } from "lucide-react"

export function EpisodesSearch() {
  return (
    <section className="bg-[#181e3a] py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl font-bold mb-2">The Emergency Exit</h2>
        <h3 className="text-white text-2xl mb-8 tracking-wider">EPISODES</h3>
        <p className="text-white/80 mb-8">
          Explore all episodes below or use the search bar to find your preferred literary adventure
        </p>
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 pr-12 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#181e3a] text-white p-2 rounded">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

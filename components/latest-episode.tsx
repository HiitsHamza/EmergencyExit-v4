import Image from "next/image"
import Link from "next/link"
import { Play, Download } from "lucide-react"

const latestEpisode = {
  id: 3,
  title: "How Do I Love Thee? - Part 1",
  date: "March 1, 2026",
  duration: "45 mins",
  slug: "episode-3",
  image: "/sample3.jpg",
  description: "Why do we continue to believe in romance? And more importantly, how do we love?",
}

export function LatestEpisode() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-[6px_6px_0_rgba(0,0,0,0.15)] sm:shadow-[10px_10px_0_rgba(0,0,0,0.15)]">
          <div className="flex">
            {/* Far Left Panel - "THE LATEST" */}
            <div className="bg-gray-700 text-white flex items-end justify-start w-fit min-w-[55px] py-8 pl-0 pb-20">
              <div className="font-bold uppercase tracking-tight transform -rotate-90 origin-center text-left leading-tight -mx-6">
                <div className="text-3xl">THE</div>
                <div className="text-6xl tracking-wide">LATEST</div>
              </div>
            </div>
            
            {/* Middle Panel - Episode Details (60% of text+image) */}
            <div className="flex-[3] bg-[#181e3a] text-white p-8 pr-16 flex flex-col justify-between">
              <div>
                {/* Podcast Number and Date/Duration */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm">
                    Episode {latestEpisode.id}
                  </div>
                  <div className="text-sm text-right">
                  {latestEpisode.date}
                    {/* {latestEpisode.date} ~ {latestEpisode.duration} */}
                    {/* hi its me */}
                  </div>
                </div>
                
                {/* Separator Line */}
                <div className="h-px bg-white/30 mb-5"></div>
                
                {/* Title */}
                <Link href={`/episodes/${latestEpisode.slug}`}>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:underline leading-snug tracking-tight">
                    {latestEpisode.title}
                  </h2>
                </Link>
                
                {/* Description */}
                <p className="text-white/70 text-base md:text-lg leading-relaxed italic">
                  {latestEpisode.description}
                </p>
              </div>
              
              <div className="flex gap-4">
                {/* Buttons */}
                <Link 
                  href={`/episodes/${latestEpisode.slug}`}
                  className="bg-white text-[#181e3a] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Listen Now
                </Link>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
            
            {/* Right Panel - Image (40% of text+image) */}
            <div className="flex-[2] relative min-h-[400px]">
              <Image 
                src={latestEpisode.image} 
                alt={latestEpisode.title} 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


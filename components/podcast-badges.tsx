import Image from 'next/image'

export function PodcastBadges() {
  return (
    <section className="py-16 bg-[#f5f5f5] relative overflow-hidden">
      {/* Chevron 4 - Outermost (lightest) */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '3%',
          bottom: '3%',
          left: '-5%',
          width: 'calc(75% + 180px)',
          backgroundColor: '#edeeef',
          clipPath: 'polygon(0% 0%, calc(100% - 80px) 0%, 100% 50%, calc(100% - 80px) 100%, 0% 100%)',
        }}
      />
      
      {/* Chevron 3 */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '3%',
          bottom: '3%',
          left: '-5%',
          width: 'calc(65% + 120px)',
          backgroundColor: '#e6e8e9',
          clipPath: 'polygon(0% 0%, calc(100% - 80px) 0%, 100% 50%, calc(100% - 80px) 100%, 0% 100%)',
        }}
      />
      
      {/* Chevron 2 */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '3%',
          bottom: '3%',
          left: '-5%',
          width: 'calc(55% + 60px)',
          backgroundColor: '#dee0e2',
          clipPath: 'polygon(0% 0%, calc(100% - 80px) 0%, 100% 50%, calc(100% - 80px) 100%, 0% 100%)',
        }}
      />
      
      {/* Chevron 1 - Main (darkest) */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '3%',
          bottom: '3%',
          left: '-5%',
          width: '45%',
          backgroundColor: '#d6d8db',
          clipPath: 'polygon(0% 0%, calc(100% - 80px) 0%, 100% 50%, calc(100% - 80px) 100%, 0% 100%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Grid layout matching the image */}
        <div className="flex flex-col items-center gap-4">
          {/* Row 1: 4 badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://podcastaddict.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_addict.svg" alt="Podcast Addict" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://www.iheart.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_iheart.svg" alt="iHeartRadio" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://www.pandora.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_pandora.svg" alt="Pandora" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://pocketcasts.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_pocket.svg" alt="Pocket Casts" width={230} height={60} className="h-[60px] w-auto" />
            </a>
          </div>

          {/* Row 2: 3 badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_spotify.svg" alt="Spotify" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://castbox.fm/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_castbox.svg" alt="Castbox" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://overcast.fm/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_overcast.svg" alt="Overcast" width={230} height={60} className="h-[60px] w-auto" />
            </a>
          </div>

          {/* Row 3: 3 badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://podcasts.apple.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_apple.svg" alt="Apple Podcasts" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://podcastindex.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_index.svg" alt="Podcast Index" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://music.amazon.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_amazon.svg" alt="Amazon Music" width={230} height={60} className="h-[60px] w-auto" />
            </a>
          </div>

          {/* Row 4: 2 badges (YouTube + SoundCloud) */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_youtube.svg" alt="YouTube" width={230} height={60} className="h-[60px] w-auto" />
            </a>
            <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/badge_soundcloud.svg" alt="SoundCloud" width={230} height={60} className="h-[60px] w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { EpisodePlayer } from "./episode-player"

interface EpisodeContentProps {
  slug: string
}

// Episode data
const episodesData: { [key: string]: {
  id: number
  title: string
  subtitle?: string
  date: string
  duration: string
  hosts: string[]
  description: string[]
  prevEpisode?: { slug: string; title: string }
  nextEpisode?: { slug: string; title: string }
}} = {
  "episode-1": {
    id: 1,
    title: "The Secret Life of Children's Literature",
    subtitle: "Part 1",
    date: "December 15, 2024",
    duration: "48 mins",
    hosts: ["Onaissa Abdaal", "Noor XYZ", "Moosa XYZ"],
    description: [
      "Welcome to a world where fantasy meets philosophy, where childhood tales contain startling truths. In this episode, join Onaissa Abdaal, Noor and Moosa as they dive through The Secret Societies and meet The Chronicles of Narnia, not just the wonder of seven year olds, but through the unexpected lens of adult reflection. From Aslan's sacrifice to the White Witch's tyranny, we explore how C.S. Lewis's work still magical, but deeply metaphorical.",
      "Along the way, the trio delve through Lemony Snicket's dark, Roald Dahl's subversive wit, and Beatrice Potter's deceptively simple tales. This episode unpacks how these childhood favourites—rich with dark undertones and bright moral lessons—continue to shape our understanding of good, evil, and the complex grey areas in between. Whether you grew up with these stories or are discovering them anew, tune in for fresh perspectives on the books that raised us."
    ],
    nextEpisode: { slug: "episode-2", title: "episode 2 for now" }
  },
  "episode-2": {
    id: 2,
    title: "episode 2 for now",
    date: "January 1, 2025",
    duration: "48 mins",
    hosts: ["Onaissa Abdaal", "Guest Speaker"],
    description: [
      "A deep dive into identity and self-expression through literature. We explore how authors craft authentic voices and create characters that resonate with readers on a deeply personal level.",
      "Join us as we discuss the art of writing the self, from memoirs to autobiographical fiction, and how literature helps us understand who we are and who we might become."
    ],
    prevEpisode: { slug: "episode-1", title: "The Secret Life of Children's Literature - Part 1" },
    nextEpisode: { slug: "episode-3", title: "How Do I Love Thee? - Part 1" }
  },
  "episode-3": {
    id: 3,
    title: "How Do I Love Thee?",
    subtitle: "Part 1",
    date: "March 1, 2026",
    duration: "45 mins",
    hosts: ["Onaissa Abdaal", "Zaynub Aly"],
    description: [
      "For centuries, mankind's unsurmountable search in finding romantic love has remained resilient, leading to some surprisingly long living conventions of romanticism.",
      "In this episode, borrowing (a cheeky move!) the opening line from Elizabeth Barret Browning's most celebrated Sonnet 43, we go down a new path, this time to the traditions of love poetry around the world: We have found some astonishing similarities between the English renaissance love poems and, lo and behold, mainstream music narrative today!",
      "Starting with Browning's love letter, we pick our way through how musicians, songwriters, poets and prophets have seen and expressed secular and divine love often morphing one with the other. From Shakespeare in England to the full throated Spanish balladry so many songwriters now emulate, from Elvis's Fever, right down to Taylor Swift's Red!",
      "So join Zaynub and Onaissa in this conversation as they have some fun with pre twentieth century poetry and the songwriters that we listen to today, and see how mainstream music is still drawing from that same idea pool which read in the dusty volumes from centuries ago: What we thought was archaic is clearly not!",
      "In the next episode, a special light hearted treat for Urdu and Persian poetry buffs!"
    ],
    prevEpisode: { slug: "episode-2", title: "episode 2" }
  }
}

export function EpisodeContent({ slug }: EpisodeContentProps) {
  const episode = episodesData[slug] || episodesData["episode-1"]
  
  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        {/* Title and Authors Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#181e3a] mb-2">{episode.title}</h1>
            {episode.subtitle && <h2 className="text-2xl text-gray-600 mb-4">{episode.subtitle}</h2>}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {episode.hosts.map((host, index) => (
                <span key={host}>
                  {index > 0 && <span className="mr-4">•</span>}
                  {host}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <div>{episode.date}</div>
            {/* <div>{episode.duration}</div> */}
          </div>
        </div>

        {/* Unified Card: Audio Player + Buttons + Badges */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-12">
          <EpisodePlayer episodeNumber={episode.id} />
          
          {/* Platform Badges */}
          <div className="bg-[#f5f5f5] rounded-b-xl p-6">
            <div className="flex flex-col items-center gap-3">
            {/* Row 1: 4 badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://podcastaddict.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_addict.svg" alt="Podcast Addict" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://www.iheart.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_iheart.svg" alt="iHeartRadio" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://www.pandora.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_pandora.svg" alt="Pandora" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://pocketcasts.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_pocket.svg" alt="Pocket Casts" width={180} height={48} className="h-[48px] w-auto" />
              </a>
            </div>

            {/* Row 2: 4 badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_spotify.svg" alt="Spotify" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://castbox.fm/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_castbox.svg" alt="Castbox" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://overcast.fm/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_overcast.svg" alt="Overcast" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://podcasts.apple.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_apple.svg" alt="Apple Podcasts" width={180} height={48} className="h-[48px] w-auto" />
              </a>
            </div>

            {/* Row 3: 4 badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://podcastindex.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_index.svg" alt="Podcast Index" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://music.amazon.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_amazon.svg" alt="Amazon Music" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_youtube.svg" alt="YouTube" width={180} height={48} className="h-[48px] w-auto" />
              </a>
              <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src="/badge_soundcloud.svg" alt="SoundCloud" width={180} height={48} className="h-[48px] w-auto" />
              </a>
            </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-8">
          {episode.description.map((para, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {para}
            </p>
          ))}
        </div>

        {/* View All Episodes Button */}
        <div className="flex justify-center mb-16">
          <Link 
            href="/episodes"
            className="bg-[#1e2742] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#2c3550] transition-colors"
          >
            View All Episodes
          </Link>
        </div>

        {/* Meet Our Guests Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#1e2742] mb-8">{slug === "episode-3" ? "Meet our Guest" : "Meet our Guests"}</h3>
          <div className="space-y-12">
            {slug === "episode-3" ? (
              /* Episode 3 Guest - Zaynub Aly */
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#1e2742]/10 transform translate-x-2 translate-y-2" />
                    <img 
                      src="/guest3.jpeg" 
                      alt="Zaynub Aly" 
                      className="w-48 h-48 object-cover relative z-10 grayscale"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#1e2742] mb-4">Zaynub Aly</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Zaynub joins Onaissa in this episode to explore the traditions of love poetry 
                    around the world, from Elizabeth Barrett Browning&apos;s celebrated sonnets to 
                    the surprising connections between renaissance poetry and modern mainstream music.
                  </p>
                </div>
              </div>
            ) : (
              /* Episode 1 & 2 Guests - Moosa and Noor */
              <>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#1e2742]/10 transform translate-x-2 translate-y-2" />
                      <img 
                        src="/sample2.jpg" 
                        alt="Moosa XYZ" 
                        className="w-48 h-48 object-cover relative z-10 grayscale"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#1e2742] mb-4">Moosa XYZ</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Welcome to a world where fantasy meets philosophy, where childhood tales 
                      conceal startling truths. In this episode, join Onaissa Abbasi, Noor, and Moosa 
                      as they step through the famed wardrobe and revisit The Chronicles of Narnia, 
                      not with the wonder of eleven-year-olds, but through the sharpened lens of 
                      adulthood. From Christian allegory to colonial undertones, they explore how C. 
                      S. Lewis&apos;s world isn&apos;t just magical, but deeply metaphorical.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#1e2742]">
                      <a href="#" className="flex items-center gap-1 hover:opacity-70">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>Moosaxyz</span>
                      </a>
                      <a href="#" className="flex items-center gap-1 hover:opacity-70">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>@Moosaxyz</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#1e2742]/10 transform translate-x-2 translate-y-2" />
                      <img 
                        src="/sample3.jpg" 
                        alt="Noor XYZ" 
                        className="w-48 h-48 object-cover relative z-10 grayscale"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#1e2742] mb-4">Noor XYZ</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Welcome to a world where fantasy meets philosophy, where childhood tales 
                      conceal startling truths. In this episode, join Onaissa Abbasi, Noor, and Moosa 
                      as they step through the famed wardrobe and revisit The Chronicles of Narnia, 
                      not with the wonder of eleven-year-olds, but through the sharpened lens of 
                      adulthood. From Christian allegory to colonial undertones, they explore how C. 
                      S. Lewis&apos;s world isn&apos;t just magical, but deeply metaphorical.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#1e2742]">
                      <a href="#" className="flex items-center gap-1 hover:opacity-70">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>Noorxyz</span>
                      </a>
                      <a href="#" className="flex items-center gap-1 hover:opacity-70">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>@Noorxyz</span>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Show Notes Section */}
        <div className="bg-[#1e2742] rounded-xl p-8">
          <h3 className="text-white text-2xl font-bold mb-6">Show Notes</h3>
          <hr className="border-white/20 mb-6" />
          
          {slug === "episode-3" ? (
            <div className="text-white/80 text-sm space-y-4">
              <p className="text-white/60 font-medium">16th Century Love Lyrics:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>To Celia – Drink to me only with thine eyes</li>
                <li>How Do I Love Thee (Sonnet 43) – <a href="https://poets.org/poem/how-do-i-love-thee-sonnet-43" className="text-white/90 underline hover:text-white">https://poets.org/poem/how-do-i-love-thee-sonnet-43</a></li>
              </ul>
            </div>
          ) : (
            <div className="text-white/80 text-sm space-y-4">
              <p className="text-white/60 font-medium">Links & References:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Participant bios available at theemergencyexitpodcast.com/about</li>
                <li>Dastan-e Amir Hamza – <a href="https://en.wikipedia.org/wiki/Hamzanama" className="text-white/90 underline hover:text-white">https://en.wikipedia.org/wiki/Hamzanama</a></li>
                <li>Tale of the Four Dervishes – <a href="https://en.wikipedia.org/wiki/The_Tale_of_the_Four_Dervishes" className="text-white/90 underline hover:text-white">https://en.wikipedia.org/wiki/The_Tale_of_the_Four_Dervishes</a></li>
              </ul>
              
              <p className="text-white/60 font-medium pt-4">Chronicles of Narnia:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>The Magician&apos;s Nephew</li>
                <li>The Lion, the Witch and the Wardrobe</li>
                <li>The Horse and His Boy</li>
              </ul>
            </div>
          )}
        </div>

        {/* Episode Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          {episode.prevEpisode ? (
            <Link 
              href={`/episodes/${episode.prevEpisode.slug}`}
              className="flex items-center gap-4 text-[#1e2742] hover:opacity-70 transition-opacity group"
            >
              <svg className="w-8 h-8 flex-shrink-0 rotate-180" viewBox="0 0 24 24" fill="#1e2742">
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
              </svg>
              <div className="text-left">
                <p className="text-base font-medium text-[#5a6278]">Episode {episode.id - 1}</p>
                <p className="text-base font-medium text-[#5a6278]">{episode.prevEpisode.title}</p>
              </div>
            </Link>
          ) : <div />}
          
          {episode.nextEpisode ? (
            <Link 
              href={`/episodes/${episode.nextEpisode.slug}`}
              className="flex items-center gap-4 text-[#1e2742] hover:opacity-70 transition-opacity group"
            >
              <div className="text-right">
                <p className="text-base font-medium text-[#5a6278]">Episode {episode.id + 1}</p>
                <p className="text-base font-medium text-[#5a6278]">{episode.nextEpisode.title}</p>
              </div>
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="#1e2742">
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
              </svg>
            </Link>
          ) : <div />}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LatestEpisode } from "@/components/latest-episode"
import { PodcastBadges } from "@/components/podcast-badges"
import { EpisodesSearch } from "@/components/episodes-search"
import { EpisodesList } from "@/components/episodes-list"

export default function EpisodesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen">
      <Header />
      <LatestEpisode />
      <PodcastBadges />
      <EpisodesSearch onSearchChange={setSearchQuery} />
      <EpisodesList searchQuery={searchQuery} />
      <Footer />
    </main>
  )
}

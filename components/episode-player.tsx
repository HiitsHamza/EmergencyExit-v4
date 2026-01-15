"use client"

import { Play, Pause, SkipBack, SkipForward, Download, Share2 } from "lucide-react"

// Custom Rewind 10 icon
const Rewind10Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <text x="12" y="14" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" stroke="none">10</text>
  </svg>
)

// Custom Forward 10 icon
const Forward10Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <text x="12" y="14" textAnchor="middle" fontSize="7" fontWeight="bold" fill="currentColor" stroke="none">10</text>
  </svg>
)
import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"

// Pre-computed peaks data - gives instant waveform rendering
const generatePeaks = (): number[] => {
  const peaks: number[] = []
  for (let i = 0; i < 300; i++) {
    // Create a realistic-looking waveform pattern with more variation
    const base = Math.sin(i * 0.15) * 0.35
    const noise = Math.sin(i * 0.6) * 0.25 + Math.sin(i * 1.3) * 0.2
    const envelope = 0.5 + Math.sin(i * 0.025) * 0.25
    peaks.push(Math.max(0.1, (base + noise + 0.5) * envelope))
  }
  return peaks
}

interface EpisodePlayerProps {
  episodeNumber?: number
}

export function EpisodePlayer({ episodeNumber = 1 }: EpisodePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(2891) // Hardcoded duration in seconds (~48 min)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [isClient, setIsClient] = useState(false)
  
  const waveformRef = useRef<HTMLDivElement>(null)
  const wavesurferRef = useRef<any>(null)
  const peaks = useMemo(() => generatePeaks(), [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !waveformRef.current) return

    // Dynamically import WaveSurfer only on client side
    const initWaveSurfer = async () => {
      const WaveSurfer = (await import('wavesurfer.js')).default
      
      // Create WaveSurfer v6 instance with pre-computed peaks
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current!,
        waveColor: 'rgba(255, 255, 255, 0.4)',
        progressColor: '#ffffff',
        cursorColor: 'transparent', // Hidden cursor - progress shows position
        cursorWidth: 0,
        barWidth: 3,
        barGap: 2,
        barRadius: 2,
        height: 64,
        normalize: true,
        backend: 'MediaElement',
        mediaControls: false,
      })

      wavesurferRef.current = wavesurfer

      // Load audio with pre-computed peaks for instant rendering
      wavesurfer.load(
        "/THE%20SECRET%20LIFE%20OF%20CHILDREN%27S%20LITERATURE%20EEE%20E1.m4a",
        peaks,
        2891 // duration
      )

      // Event listeners
      wavesurfer.on('ready', () => {
        const dur = wavesurfer.getDuration()
        if (dur && dur > 0) {
          setDuration(dur)
        }
      })

      wavesurfer.on('audioprocess', () => {
        setCurrentTime(wavesurfer.getCurrentTime())
      })

      wavesurfer.on('seek', () => {
        setCurrentTime(wavesurfer.getCurrentTime())
      })

      wavesurfer.on('play', () => setIsPlaying(true))
      wavesurfer.on('pause', () => setIsPlaying(false))
      wavesurfer.on('finish', () => setIsPlaying(false))
    }

    initWaveSurfer()

    // Cleanup
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy()
      }
    }
  }, [isClient, peaks])

  const togglePlay = useCallback(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause()
    }
  }, [])

  const skip = useCallback((seconds: number) => {
    if (wavesurferRef.current) {
      const currentT = wavesurferRef.current.getCurrentTime()
      const newTime = currentT + seconds
      wavesurferRef.current.seekTo(Math.max(0, Math.min(newTime, duration)) / duration)
    }
  }, [duration])

  const changeSpeed = useCallback(() => {
    const speeds = [1, 1.25, 1.5, 2]
    const currentIndex = speeds.indexOf(playbackSpeed)
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length]
    setPlaybackSpeed(nextSpeed)
    if (wavesurferRef.current) {
      wavesurferRef.current.setPlaybackRate(nextSpeed)
    }
  }, [playbackSpeed])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = "/THE%20SECRET%20LIFE%20OF%20CHILDREN%27S%20LITERATURE%20EEE%20E1.m4a"
    link.download = "The-Secret-Life-of-Childrens-Literature-Part-1.m4a"
    link.click()
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "The Secret Life of Children's Literature - Part 1",
        text: "Listen to this episode of The Emergency Exit podcast",
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const skipToStart = useCallback(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.seekTo(0)
    }
  }, [])

  const skipToEnd = useCallback(() => {
    if (wavesurferRef.current) {
      wavesurferRef.current.seekTo(0.99)
    }
  }, [])

  return (
    <>
      {/* Main Player Card - Matching reference design */}
      <div className="bg-[#1e2742] rounded-t-xl p-6">
          {/* Episode label and time display */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm font-medium">
              Episode {episodeNumber}
            </span>
            <span className="text-white/70 text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Top row: Play button + separator + waveform */}
          <div className="flex items-center gap-5 mb-6">
            {/* Clean play button - just the triangle */}
            <button
              onClick={togglePlay}
              className="hover:opacity-80 transition-opacity flex-shrink-0 outline-none focus:outline-none border-none"
            >
              {isPlaying ? (
                <svg className="w-14 h-14" viewBox="0 0 24 24">
                  <rect x="5" y="3" width="5" height="18" rx="1" fill="rgba(255,255,255,0.9)" />
                  <rect x="14" y="3" width="5" height="18" rx="1" fill="rgba(255,255,255,0.9)" />
                </svg>
              ) : (
                <svg className="w-14 h-14" viewBox="0 0 24 24">
                  <path d="M6 3v18l15-9L6 3z" fill="rgba(255,255,255,0.9)" />
                </svg>
              )}
            </button>

            {/* Vertical separator */}
            <div className="w-px h-16 bg-white/30 flex-shrink-0" />
            
            {/* WaveSurfer Waveform Container */}
            <div className="flex-1 relative h-16 overflow-hidden">
              <div ref={waveformRef} className="w-full h-full" />
            </div>
          </div>

          {/* Bottom row: Controls centered */}
          <div className="flex items-center justify-center gap-6">
            {/* Skip to start */}
            <button
              onClick={skipToStart}
              className="text-white/80 hover:text-white transition-colors"
              title="Skip to start"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {/* Rewind 10 seconds */}
            <button
              onClick={() => skip(-10)}
              className="text-white/80 hover:text-white transition-colors"
              title="Rewind 10 seconds"
            >
              <Rewind10Icon className="w-7 h-7" />
            </button>
            
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>

            {/* Forward 10 seconds */}
            <button
              onClick={() => skip(10)}
              className="text-white/80 hover:text-white transition-colors"
              title="Forward 10 seconds"
            >
              <Forward10Icon className="w-7 h-7" />
            </button>

            {/* Skip to end */}
            <button
              onClick={skipToEnd}
              className="text-white/80 hover:text-white transition-colors"
              title="Skip to end"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>

      {/* Action Buttons - Inside the card */}
      <div className="bg-[#1e2742] px-6 py-4 flex justify-center gap-4">
        <button 
          onClick={handleDownload}
          className="bg-white border border-white text-[#1e2742] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download Audio
        </button>
        <button 
          onClick={handleShare}
          className="bg-transparent border border-white text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share Podcast
        </button>
      </div>
    </>
  )
}

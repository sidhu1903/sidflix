import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import VideoPlayer from '../components/VideoPlayer'


export default function Watch() {
  const { imdbId, type } = useParams()
  const navigate = useNavigate()
  const [season, setSeason] = useState(1)
  const [episode, setEpisode] = useState(1)

  // Redirect if accessed without login
  useEffect(() => {
    const storedName = localStorage.getItem('sidflixUser')
    if (!storedName) navigate('/')
  }, [navigate])

  // Build video source dynamically
  const getVideoSrc = () => {
    if (type === 'tv') {
      return `https://vidsrc-embed.ru/embed/tv/${imdbId}/${season}-${episode}`
    } else {
      return `https://vidsrc-embed.ru/embed/movie/${imdbId}`
    }
  }

  const handlePrev = () => {
    if (episode > 1) setEpisode((prev) => prev - 1)
    else if (season > 1) {
      setSeason((prev) => prev - 1)
      setEpisode(1)
    }
  }

  const handleNext = () => {
    setEpisode((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start">
      <Navbar />

      <motion.h2
        className="text-3xl md:text-4xl mt-6 mb-4 font-semibold neon-text"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {type === 'tv' ? `TV Show` : `Movie`} Player
      </motion.h2>

      {/* Video Player */}
      <VideoPlayer src={getVideoSrc()} />


      {/* TV Controls */}
      {type === 'tv' && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex gap-4">
            <label>
              Season:{' '}
              <input
                type="number"
                min="1"
                value={season}
                onChange={(e) => setSeason(Number(e.target.value))}
                className="w-16 bg-black border border-gray-600 rounded text-center"
              />
            </label>
            <label>
              Episode:{' '}
              <input
                type="number"
                min="1"
                value={episode}
                onChange={(e) => setEpisode(Number(e.target.value))}
                className="w-16 bg-black border border-gray-600 rounded text-center"
              />
            </label>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="px-5 py-2 bg-gray-800 hover:bg-neon text-white rounded-full transition-all"
            >
              ◀ Prev
            </button>
            <button
              onClick={handleNext}
              className="px-5 py-2 bg-neon text-black font-semibold rounded-full hover:scale-105 transition-all"
            >
              Next ▶
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

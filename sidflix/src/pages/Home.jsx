import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { searchTMDB, getExternalIds } from '../api/tmdb'
import Carousel from '../components/Carousel'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    const storedName = localStorage.getItem('sidflixUser')
    if (!storedName) navigate('/')
    else setUser(storedName)
  }, [navigate])

  // Fetch search results from TMDB
  useEffect(() => {
    const fetchData = async () => {
      if (query.trim().length > 1) {
        const res = await searchTMDB(query)
        setResults(res)
      } else {
        setResults([])
      }
    }
    fetchData()
  }, [query])

  // Handle clicking a movie/show
  const handleSelect = async (item) => {
    const type = item.media_type === 'tv' ? 'tv' : 'movie'
    const imdb = await getExternalIds(type, item.id)
    if (imdb) navigate(`/watch/${type}/${imdb}`)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      {/* Welcome Message */}
      <motion.h2
        className="text-3xl md:text-4xl mb-8 font-semibold neon-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome, {user}
      </motion.h2>

      {/* Search Bar */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Carousel Results */}
      {results.length > 0 && (
        <Carousel items={results} onSelect={handleSelect} />
      )}

      {results.length === 0 && (
        <motion.p
          className="mt-24 text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Search for your favorite movies or shows ✨
        </motion.p>
      )}
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
// If you’re using a local image, uncomment this:
// import bgImage from '../assets/bg.jpg'

export default function Intro() {
  const [showInput, setShowInput] = useState(false)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setShowInput(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem('sidflixUser', name)
      navigate('/home')
    }
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden bg-black"
      style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp8962940.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* SIDFLIX Title */}
      <motion.h1
        className="relative text-8xl md:text-9xl font-bold neon-text select-none uppercase tracking-wider z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        SIDFLIX
      </motion.h1>

      {/* Input form */}
      <AnimatePresence>
        {showInput && (
          <motion.form
            onSubmit={handleSubmit}
            className="relative mt-12 flex flex-col items-center z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-gray-300 text-lg">
              Enter your name to continue
            </p>
            <input
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-5 py-2 w-64 rounded-full border border-gray-500 bg-black/60 text-center focus:outline-none focus:border-neon focus:shadow-neon transition-all"
            />
            <button
              type="submit"
              className="mt-6 px-8 py-2 rounded-full bg-neon text-black font-semibold hover:scale-105 transition-all duration-300 shadow-neon"
            >
              Enter
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}


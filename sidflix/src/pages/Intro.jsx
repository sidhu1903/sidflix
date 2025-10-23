import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro() {
  const [showInput, setShowInput] = useState(false)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  // Step 1: After fade-in animation, show the name input
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInput(true)
    }, 2000) // delay input by 2s
    return () => clearTimeout(timer)
  }, [])

  // Step 2: Handle name submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem('sidflixUser', name)
      navigate('/home')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
      {/* Sidflix fade-in animation */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold neon-text select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Sidflix
      </motion.h1>

      {/* Input appears after animation */}
      <AnimatePresence>
        {showInput && (
          <motion.form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col items-center"
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
              className="px-5 py-2 w-64 rounded-full border border-gray-500 bg-black text-center focus:outline-none focus:border-neon focus:shadow-neon transition-all"
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

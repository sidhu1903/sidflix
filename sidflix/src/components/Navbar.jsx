import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/home')
  }

  return (
    <motion.nav
      className="w-full flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md fixed top-0 z-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Sidflix Logo */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold neon-text cursor-pointer select-none"
        whileHover={{ scale: 1.05 }}
        onClick={handleBack}
      >
        Sidflix
      </motion.h1>

      {/* Back Button */}
      <motion.button
        onClick={handleBack}
        className="px-4 py-1.5 rounded-full bg-neon text-black font-semibold hover:scale-105 transition-all shadow-neon"
        whileHover={{ scale: 1.1 }}
      >
        Home
      </motion.button>
    </motion.nav>
  )
}

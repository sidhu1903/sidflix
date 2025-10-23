import { motion } from 'framer-motion'

export default function MovieCard({ item, onSelect }) {
  const imageBase = 'https://image.tmdb.org/t/p/w500'

  const getPoster = () => {
    if (item.poster_path) return `${imageBase}${item.poster_path}`
    if (item.profile_path) return `${imageBase}${item.profile_path}`
    return 'https://via.placeholder.com/300x450?text=No+Image'
  }

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      onClick={() => onSelect(item)}
    >
      {/* Rectangular Poster */}
      <div className="w-40 md:w-48 aspect-[2/3] rounded-xl overflow-hidden shadow-lg shadow-black/60 border-2 border-gray-800 hover:border-neon transition-all duration-300">
        <img
          src={getPoster()}
          alt={item.title || item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <p className="mt-3 text-sm md:text-base text-center text-gray-300 hover:text-neon transition-all duration-300 w-40 truncate">
        {item.title || item.name}
      </p>
    </motion.div>
  )
}

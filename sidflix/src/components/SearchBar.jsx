import { motion } from 'framer-motion'

export default function SearchBar({ query, setQuery }) {
  return (
    <motion.div
      className="relative w-full flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <input
        type="text"
        placeholder="Search for a movie or TV show..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-3/4 md:w-1/2 lg:w-1/3 px-6 py-3 text-lg rounded-full text-white bg-black border-2 border-gray-700 focus:border-neon focus:shadow-neon outline-none transition-all duration-300 placeholder-gray-500"
      />
    </motion.div>
  )
}

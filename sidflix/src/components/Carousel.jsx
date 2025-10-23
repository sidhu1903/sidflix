import { motion } from 'framer-motion'
import MovieCard from './MovieCard'
import { useRef } from 'react'

export default function Carousel({ items, onSelect }) {
  const scrollRef = useRef(null)

  // Scroll smoothly left/right on hover near edges
  const handleScroll = (direction) => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    const scrollAmount = 300
    scrollContainer.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full mt-10">
      {/* Left Scroll Zone */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/80 to-transparent z-10 cursor-pointer"
        onMouseEnter={() => handleScroll('left')}
      ></div>

      {/* Right Scroll Zone */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/80 to-transparent z-10 cursor-pointer"
        onMouseEnter={() => handleScroll('right')}
      ></div>

      {/* Scrollable Row */}
      <motion.div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-10 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {items.map((item) => (
          <MovieCard key={item.id} item={item} onSelect={onSelect} />
        ))}
      </motion.div>
    </div>
  )
}

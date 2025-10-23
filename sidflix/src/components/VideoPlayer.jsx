import { motion } from 'framer-motion'

export default function VideoPlayer({ src }) {
  return (
    <motion.div
      key={src}
      className="w-full md:w-3/4 lg:w-2/3 aspect-video rounded-2xl overflow-hidden shadow-neon"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <iframe
        src={src}
        allowFullScreen
        className="w-full h-full border-none"
        title="Sidflix Player"
      ></iframe>
    </motion.div>
  )
}

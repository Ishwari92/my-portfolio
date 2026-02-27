'use client'

import { motion } from 'framer-motion'

export default function BlogHeaderClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 sm:mb-16"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gradient-primary">
        Blog
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-400">
        Thoughts, tutorials, and insights on web development
      </p>
    </motion.div>
  )
}


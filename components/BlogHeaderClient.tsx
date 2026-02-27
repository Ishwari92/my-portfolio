'use client'

import { motion } from 'framer-motion'

export default function BlogHeaderClient() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-primary">
        Blog
      </h1>
      <p className="text-xl text-gray-400">
        Thoughts, tutorials, and insights on web development
      </p>
    </motion.div>
  )
}


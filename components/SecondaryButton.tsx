'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SecondaryButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3.5 glass border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-base shadow-premium"
    >
      {children}
    </motion.button>
  )
}


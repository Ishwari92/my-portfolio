'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PrimaryButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function PrimaryButton({ children, onClick }: PrimaryButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-glow hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 text-base"
    >
      {children}
    </motion.button>
  )
}


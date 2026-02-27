'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import SocialIcons from '@/components/SocialIcons'
import PrimaryButton from '@/components/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton'
import { Download } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    // Prevent scrolling on homepage
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleResumeDownload = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You'll need to add your resume.pdf to public folder
    link.download = 'Ishwari_Pawar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="h-screen w-full flex items-center justify-center overflow-hidden relative">

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2.5 rounded-full glass text-sm font-medium text-gray-200 tracking-wide">
              Software Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="text-gradient block mb-2">Hi, I'm</span>
            <span className="text-gradient-primary block">
              Ishwari Pawar
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-6 mb-6 text-gray-400"
          >
            <span className="text-lg md:text-xl font-medium">3+ Years of Experience</span>
            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
            <span className="text-lg md:text-xl">📍 India</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            "A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/about">
              <PrimaryButton>View Experience</PrimaryButton>
            </Link>
            <Link href="/blog">
              <SecondaryButton>View Blog</SecondaryButton>
            </Link>
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 glass-strong border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2 shadow-premium text-base"
            >
              <Download size={18} />
              <span>Resume</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SocialIcons />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}


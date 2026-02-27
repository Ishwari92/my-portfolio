'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12 group text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gradient-primary">
              Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              A collection of my recent work and side projects
            </p>
          </div>

          <div className="text-center py-12 sm:py-20 glass-strong rounded-xl sm:rounded-2xl shadow-premium px-4">
            <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4">Projects coming soon!</p>
            <p className="text-sm sm:text-base text-gray-400">Check back later to see my portfolio of Laravel applications.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}


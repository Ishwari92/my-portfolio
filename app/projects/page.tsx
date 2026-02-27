'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-6 py-20 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-primary">
              Projects
            </h1>
            <p className="text-xl text-gray-400">
              A collection of my recent work and side projects
            </p>
          </div>

          <div className="text-center py-20 glass-strong rounded-2xl shadow-premium">
            <p className="text-gray-300 text-lg mb-4">Projects coming soon!</p>
            <p className="text-gray-400">Check back later to see my portfolio of Laravel applications.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}


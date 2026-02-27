'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Phone, Globe } from 'lucide-react'
import SocialIcons from '@/components/SocialIcons'
import PageTransition from '@/components/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12 group text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gradient-primary">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              Let's connect and discuss your next project
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 sm:p-8 md:p-12 shadow-premium">
            <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-white/5 rounded-lg flex-shrink-0">
                <Mail size={20} className="sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Email</h3>
                <a
                  href="mailto:pawarishwari797@gmail.com"
                  className="text-sm sm:text-base text-gray-400 hover:text-blue-400 transition-colors break-all"
                >
                  pawarishwari797@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-white/5 rounded-lg flex-shrink-0">
                <Phone size={20} className="sm:w-6 sm:h-6 text-green-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Phone</h3>
                <a
                  href="tel:9870423161"
                  className="text-sm sm:text-base text-gray-400 hover:text-green-400 transition-colors"
                >
                  +91 9870423161
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-white/5 rounded-lg flex-shrink-0">
                <MapPin size={20} className="sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Location</h3>
                <p className="text-sm sm:text-base text-gray-400">Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-white/5 rounded-lg flex-shrink-0">
                <Globe size={20} className="sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Portfolio</h3>
                <a
                  href="https://ishiportfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-400 hover:text-cyan-400 transition-colors break-all"
                >
                  https://ishiportfolio.vercel.app/
                </a>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Connect with me</h3>
              <SocialIcons />
            </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}


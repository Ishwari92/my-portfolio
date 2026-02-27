'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Phone, Globe } from 'lucide-react'
import SocialIcons from '@/components/SocialIcons'
import PageTransition from '@/components/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen relative">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-primary">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400">
              Let's connect and discuss your next project
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-8 md:p-12 shadow-premium">
            <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <Mail size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:pawarishwari797@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  pawarishwari797@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <Phone size={24} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a
                  href="tel:9870423161"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  +91 9870423161
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <MapPin size={24} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <Globe size={24} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Portfolio</h3>
                <a
                  href="https://ishiportfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  https://ishiportfolio.vercel.app/
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
              <SocialIcons />
            </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}


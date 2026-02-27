'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    color: 'hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:pawarishwari797@gmail.com',
    color: 'hover:text-green-400',
  },
]

export default function SocialIcons() {
  return (
    <div className="flex gap-6 justify-center items-center">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`text-gray-400 transition-all duration-300 ${social.color} p-3 rounded-lg glass hover:bg-white/5`}
            aria-label={social.name}
            title={social.href.startsWith('mailto:') ? 'pawarishwari797@gmail.com' : social.name}
          >
            <Icon size={24} />
          </motion.a>
        )
      })}
    </div>
  )
}


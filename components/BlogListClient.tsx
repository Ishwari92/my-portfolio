'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { BlogPost } from '@/lib/blog'

interface BlogListClientProps {
  posts: BlogPost[]
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  return (
    <>
      {posts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 text-lg">No blog posts available. Check back soon!</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <motion.article
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-premium touch-manipulation"
                >
                  <div className="mb-3 sm:mb-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-gradient-primary transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>

                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm line-clamp-3 flex-grow">
                    {post.description}
                  </p>

                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                    <span className="font-medium text-xs sm:text-sm">Read more</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}


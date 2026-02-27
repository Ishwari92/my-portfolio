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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="group glass-strong rounded-2xl p-6 h-full flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-premium"
                >
                  <div className="mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-gradient-primary transition-all duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm line-clamp-3 flex-grow">
                    {post.description}
                  </p>

                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                    <span className="font-medium text-sm">Read more</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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


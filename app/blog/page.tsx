import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import BlogListClient from '@/components/BlogListClient'
import BlogHeaderClient from '@/components/BlogHeaderClient'

const allPosts = getAllPosts()
// Remove first and last blog posts
const posts = allPosts.length > 2 ? allPosts.slice(1, -1) : []

export default function BlogPage() {
  return (
    <div className="min-h-screen relative">
        <div className="container mx-auto px-6 py-20 max-w-6xl">
          <BlogHeaderClient />

        <BlogListClient posts={posts} />

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}


import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-gray-400 text-xl mb-8">Blog post not found</p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  )
}


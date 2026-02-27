import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  try {
    const posts = getAllPosts()
    // Generate static params for ALL posts, not just the filtered ones
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Disable dynamic params to ensure all routes are pre-rendered
export const dynamicParams = false

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) {
  // Handle both Promise and direct params for Next.js 16 compatibility
  const resolvedParams = params instanceof Promise ? await params : params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8 text-sm sm:text-base touch-manipulation py-2"
        >
          <ArrowLeft size={18} />
          <span>Back to Blog</span>
        </Link>

        <article className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-premium">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-gradient-primary leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-400 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base pb-3 sm:pb-4 border-b border-white/10">
            <Calendar size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          <div
            className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-headings:mt-4 prose-headings:mb-3 sm:prose-headings:mt-6 sm:prose-headings:mb-4
              prose-h1:text-xl sm:prose-h1:text-2xl md:prose-h1:text-3xl
              prose-h2:text-lg sm:prose-h2:text-xl md:prose-h2:text-2xl
              prose-h3:text-base sm:prose-h3:text-lg md:prose-h3:text-xl
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4
              prose-p:text-sm sm:prose-p:text-base
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:break-words
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-purple-400 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
              prose-pre:p-3 sm:prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:text-xs sm:prose-pre:text-sm
              prose-ul:text-gray-300 prose-ul:my-3 sm:prose-ul:my-4 prose-ul:pl-4 sm:prose-ul:pl-5
              prose-ol:text-gray-300 prose-ol:my-3 sm:prose-ol:my-4 prose-ol:pl-4 sm:prose-ol:pl-5
              prose-li:text-gray-300 prose-li:mb-1.5 sm:prose-li:mb-2 prose-li:text-sm sm:prose-li:text-base
              prose-img:rounded-lg prose-img:w-full prose-img:my-4 sm:prose-img:my-6 prose-img:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-3 sm:prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400 prose-blockquote:my-3 sm:prose-blockquote:my-4
              prose-table:w-full prose-table:text-xs sm:prose-table:text-sm md:prose-table:text-base prose-table:overflow-x-auto prose-table:my-3 sm:prose-table:my-4
              prose-th:border prose-th:border-white/20 prose-th:p-2 prose-th:bg-white/5 prose-th:text-xs sm:prose-th:text-sm
              prose-td:border prose-td:border-white/20 prose-td:p-2 prose-td:text-xs sm:prose-td:text-sm"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors touch-manipulation py-2"
          >
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


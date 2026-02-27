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
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft size={18} />
          <span>Back to Blog</span>
        </Link>

        <article className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-premium">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-primary">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            <Calendar size={16} className="sm:w-4.5 sm:h-4.5" />
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
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-purple-400 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:text-gray-300
              prose-img:rounded-lg prose-img:w-full"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


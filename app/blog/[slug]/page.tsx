import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { remark } from 'remark'
import html from 'remark-html'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>Back to Blog</span>
        </Link>

        <article className="glass-strong rounded-2xl p-8 md:p-12 shadow-premium">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-gray-400 mb-8">
            <Calendar size={18} />
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-purple-400 prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


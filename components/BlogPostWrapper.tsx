'use client'

import PageTransition from '@/components/PageTransition'
import { ReactNode } from 'react'

interface BlogPostWrapperProps {
  children: ReactNode
}

export default function BlogPostWrapper({ children }: BlogPostWrapperProps) {
  return <PageTransition>{children}</PageTransition>
}


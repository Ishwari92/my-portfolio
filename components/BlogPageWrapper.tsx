'use client'

import PageTransition from '@/components/PageTransition'
import { ReactNode } from 'react'

interface BlogPageWrapperProps {
  children: ReactNode
}

export default function BlogPageWrapper({ children }: BlogPageWrapperProps) {
  return <PageTransition>{children}</PageTransition>
}


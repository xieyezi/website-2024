import { type Metadata } from 'next'

import { Use } from '~/app/(main)/use/Use'
import { Container } from '~/components/ui/Container'

const title = '我的工具'
const description = '工欲善其事，必先利其器。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          使用的工具
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          工欲善其事，必先利其器。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Use />
      </div>
    </Container>
  )
}

export const revalidate = 3600

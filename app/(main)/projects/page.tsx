import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '多年来，我一直积极拥抱开源社区，有自己独立的开源项目，也有参与一些知名的开源项目。'
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
          开源的痕迹
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          多年来，我一直积极拥抱开源社区，有自己独立的开源项目，也参与过一些知名的开源项目。
        </p>
      </header>
      <div className="mt-16 sm:mt-20"><Projects /></div>
    </Container>
  )
}

export const revalidate = 3600

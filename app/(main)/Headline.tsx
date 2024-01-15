/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>前端
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      工程师
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>细节控</span>
    </span>
  )
}

//function Founder() {
//  return (
//    <span className="group">
//      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
//      <span>创始人</span>
//    </span>
//  )
//}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，<Designer />，
        <br />
        <OCD />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>我是 xieyezi，热爱生活，喜爱前端。</Balancer>
      </motion.p>
      <motion.p
        className="mt-2 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          参与过{' '}
          <a
            className="font-bold text-zinc-700 underline dark:text-zinc-50"
            href="https://vuejs.org/"
          >
            Vue.js
          </a>
          ,{' '}
          <a
            className="font-bold text-zinc-700 underline dark:text-zinc-50"
            href="https://github.com/youzan/vant"
          >
            Vant
          </a>
          ,{' '}
          <a
            className="font-bold text-zinc-700 underline dark:text-zinc-50"
            href="https://semi.design/zh-CN"
          >
            Semi Design
          </a>{' '}
          等许多开源项目。
        </Balancer>
      </motion.p>
      <motion.p
        className="mt-2 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          除了编程之外，我还喜欢音乐、游泳、羽毛球。如果你恰好也在我现在居住的城市（目前在重庆），也许我们可以一起出去玩或者一起编程。欢迎通过以下方式和我交流：
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://xieyezi.site/github"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://xieyezi.site/twitter"
          aria-label="我的推特"
          platform="twitter"
        />
        {/*<SocialLink
          href="https://xieyezi.site/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        />*/}
        <SocialLink
          href="https://xieyezi.site/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        {/*<SocialLink
          href="https://xieyezi.site/tg"
          aria-label="我的 Telegram"
          platform="telegram"
        />*/}
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:xieyezi666@icloud.com"
          aria-label="我的邮箱"
          platform="mail"
        />
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://camo.githubusercontent.com/03423fff5b194acc17176dcb1b39d4678d5ce31f7d61ad8c3b9529efdfe0de62/68747470733a2f2f6170692e76697369746f722e706c616e747265652e6d652f76697369746f722d62616467652f70763f6c6162656c3d76697369746f72266e616d6573706163653d78696579657a69363636266b65793d696e6465782e68746d6c26636f6c6f723d626c7565"
        >
          <img
            className="w-full"
            src="https://camo.githubusercontent.com/03423fff5b194acc17176dcb1b39d4678d5ce31f7d61ad8c3b9529efdfe0de62/68747470733a2f2f6170692e76697369746f722e706c616e747265652e6d652f76697369746f722d62616467652f70763f6c6162656c3d76697369746f72266e616d6573706163653d78696579657a69363636266b65793d696e6465782e68746d6c26636f6c6f723d626c7565"
            alt="visitors"
            data-canonical-src="https://api.visitor.plantree.me/visitor-badge/pv?label=visitor&amp;namespace=xieyezi666&amp;key=index.html&amp;color=blue"
          />
        </a>
      </motion.div>
    </div>
  )
}

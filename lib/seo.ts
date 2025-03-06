export const seo = {
  title: 'xieyezi | 前端工程师、架构师、细节控',
  description:
    '我叫 xieyezi，热爱生活，喜爱前端。参与了Vue，Vant，Semi-Design等开源项目。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://me.xieyezi.us:5003/'
      : 'http://localhost:3000'
  ),
} as const

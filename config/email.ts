export const emailConfig = {
  from: 'xieyezi666@icloud.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://xieyezi.site/`
      : 'http://localhost:3000',
}

export const emailConfig = {
  from: 'hi@xieyezi.site',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://xieyezi.site/`
      : 'http://localhost:3000',
}

export const emailConfig = {
  from: 'hi@xieyezi.site',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://me.xieyezi.us:5003/`
      : 'http://localhost:3000',
}

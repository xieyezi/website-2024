export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://me.xieyezi.us:5003/'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}

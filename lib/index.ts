export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://xieyezi.site/'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}

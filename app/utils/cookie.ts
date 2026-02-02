export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365

export const readCookieValue = (name: string) => {
  if (typeof document === 'undefined') return undefined
  const cookies = document.cookie ? document.cookie.split('; ') : []
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`))
  if (!match) return undefined
  return decodeURIComponent(match.slice(name.length + 1))
}

export const writeCookieValue = (name: string, value: string) => {
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}`
}
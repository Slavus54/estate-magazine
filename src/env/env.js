export const TOWNS_API_URL = 'https://towns-api.onrender.com/towns'
export const SQUARE_LIMIT = 5e2
export const DEFAULT_PERCENT = 6e1

export const onRedirect = url => {
    window.history.pushState(null, '', url)
    window.location.reload()
}
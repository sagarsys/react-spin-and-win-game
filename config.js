export const IS_PROD = process.env.NODE_ENV === 'production'
export const SERVER_BASE_URL = IS_PROD
    ? 'https://react-spin-and-win-game.vercel.app'
    : 'http://localhost:3000'

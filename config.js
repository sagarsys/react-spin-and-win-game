export const IS_PROD = process.env.NODE_ENV === 'production'
export const SERVER_BASE_URL = IS_PROD
    ? 'https://react-spin-and-win-game.vercel.app'
    : 'http://localhost:3000'

// !! ONLY FOR DEMO PURPOSES => DB INFO SHOULD NOT BE COMMITTED OR EASILY ACCESSIBLE
export const DB_NAME = 'pesawheel'
export const DB_USER = 'pesawheel'
export const DB_PASS = 'mongo1234'

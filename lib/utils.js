/**
 * Parses the odds string to return the numeric multiplier value
 * E.g Input 'x2' | 'x10' => Output: 2 | 10
 * If no string is provided, returns null
 * @param str
 * @returns {null|number}
 */
export function parseMultiplierFromOddsString(str) {
    if (!str) return null
    return parseInt(str.substring(1))
}

/**
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomIntegerInRange(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

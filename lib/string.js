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

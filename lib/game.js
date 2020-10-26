import { getRandomIntegerInRange, parseMultiplierFromOddsString } from './utils'

export const NUM_OF_SEGMENTS = 25

export const SEGMENTS = {
    spin: [1, 7, 16, 19],
    x2: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 23, 25],
    x3: [3, 9, 17, 21],
    x5: [5, 13],
    x10: [11, 24],
    bonus: 22,
}
export const INITIAL_BALANCE = 1000
export const BONUS_AMOUNT = 50000

export const ANIMATION_DURATION = 3 // in seconds
export const MIN_SPINS = 3
export const MAX_SPINS = 9

export function nextSpin(odds, stake, balance, currentSegment) {
    const min = MIN_SPINS * NUM_OF_SEGMENTS
    const max = MAX_SPINS * NUM_OF_SEGMENTS
    const numOfSegmentsToSpin = getRandomIntegerInRange(min, max)
    const outcome = determineSpinOutcome(odds, numOfSegmentsToSpin)
    const updatedBalance = calculateUpdatedBalance(
        outcome,
        odds,
        stake,
        balance
    )
    return {
        numOfSegmentsToSpin,
        balance: updatedBalance,
        ...outcome,
    }
}

export function determineSpinOutcome(selectedOdd, numSegmentsToSpin) {
    const destinationSegment = numSegmentsToSpin % NUM_OF_SEGMENTS
    const isBonus = destinationSegment === SEGMENTS.bonus
    const isDraw = SEGMENTS.spin.includes(destinationSegment)
    if (isBonus || isDraw) {
        return {
            win: false,
            lose: false,
            bonus: isBonus,
            draw: isDraw,
            destination: destinationSegment,
        }
    }
    const isWin = SEGMENTS[selectedOdd].includes(destinationSegment)
    return {
        win: isWin,
        lose: !isWin,
        bonus: false,
        draw: false,
        destination: destinationSegment,
    }
}

export function calculatePossibleWin(odds, stake) {
    return stake * parseMultiplierFromOddsString(odds)
}

export function calculateUpdatedBalance(outcome, odds, stake, balance) {
    const { win, bonus, draw } = outcome
    const played = parseInt(stake, 10)
    const possibleWin = calculatePossibleWin(odds, stake)
    if (bonus) return balance - played + BONUS_AMOUNT
    if (draw) return balance
    return win ? balance - played + possibleWin : balance - played
}

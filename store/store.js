import React, { createContext, useReducer } from 'react'
import {
    INIT_GAME,
    RESET_GAME_STATUS,
    SET_GAME_STATUS,
    SET_SPINNING_STATUS,
    SYNC_SERVER_RESPONSE,
} from './actions'

const initialState = {
    initialized: false,
    numOfSegmentsToSpin: 0,
    isSpinning: false,
    win: false,
    lose: false,
    draw: false,
    bonus: false,
    _id: null,
    balance: null,
}
const store = createContext(initialState)
const { Provider } = store

function reducer(state, action) {
    const { type, payload } = action
    // console.log('reducer', state, action)
    switch (type) {
        case INIT_GAME:
        case SYNC_SERVER_RESPONSE:
        case SET_GAME_STATUS:
        case SET_SPINNING_STATUS:
            return {
                ...state,
                ...payload,
            }
        case RESET_GAME_STATUS:
            return {
                ...state,
                win: false,
                draw: false,
                bonus: false,
                lose: false,
            }
        default:
            throw new Error('Action not implemented')
    }
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }

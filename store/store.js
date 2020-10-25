import React, { createContext, useReducer } from 'react'
import { INIT_GAME } from './actions'

const initialState = {
    initialized: false,
}
const store = createContext(initialState)
const { Provider } = store

function reducer(state, action) {
    const { type } = action
    // console.log('reducer', state, action)
    switch (type) {
        case INIT_GAME:
            const { payload } = action
            // init game with config fetched from server
            return {
                ...state,
                ...payload,
            }
        default:
            throw new Error()
    }
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }

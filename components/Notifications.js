import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect } from 'react'
import { store } from '../store/store'
import { RESET_GAME_STATUS } from '../store/actions'

const toastOptions = {
    position: 'top-center',
    closeOnClick: true,
    autoClose: 2000,
}

export default function Notifications() {
    const { state, dispatch } = useContext(store)
    const { win, bonus, lose, draw, initialized } = state
    useEffect(() => {
        if (!initialized) return
        if (win) toast.success('Yay, you won!', toastOptions)
        if (lose) toast.error(`You lose, better luck next time!`, toastOptions)
        if (bonus) toast.success(`HURRAY!!! You won the bonus.`, toastOptions)
        if (draw) toast(`Draw - your balance remains the same.`, toastOptions)
        dispatch({ type: RESET_GAME_STATUS })
    }, [win, lose, bonus, draw])

    return <ToastContainer />
}

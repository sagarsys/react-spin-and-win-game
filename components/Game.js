import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Wheel from './Wheel'
import BettingForm from './BettingForm'
import { useContext, useEffect } from 'react'
import { store } from '../store/store'
import { SERVER_BASE_URL } from '../config'
import { INIT_GAME } from '../store/actions'
import { post } from '../lib/http'

export default function Game() {
    const { state, dispatch } = useContext(store)
    useEffect(() => {
        if (state && state.initialized) return
        post(`${SERVER_BASE_URL}/api/game`).then((res) => {
            dispatch({
                type: INIT_GAME,
                payload: {
                    ...res,
                    initialized: true,
                },
            })
        })
    }, [state])

    return (
        <Container fluid>
            <Row>
                <Wheel />
                <BettingForm />
            </Row>
        </Container>
    )
}

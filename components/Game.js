import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Wheel from './Wheel'
import BettingForm from './BettingForm'
import { useContext, useEffect } from 'react'
import { store } from '../store/store'
import useSwr from 'swr'
import { SERVER_BASE_URL } from '../config'
import { INIT_GAME } from '../store/actions'
import { fetcher } from '../lib/http'

export default function Game() {
    const { dispatch } = useContext(store)
    const { data, error } = useSwr(`${SERVER_BASE_URL}/api/hello`, fetcher)
    useEffect(() => {
        if (!data) return
        dispatch({ type: INIT_GAME, payload: data })
    }, [data])

    return (
        <Container fluid>
            <Row>
                <Wheel />
                <BettingForm />
            </Row>
        </Container>
    )
}

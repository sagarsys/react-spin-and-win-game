import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Wheel from './Wheel'
import BettingForm from './BettingForm'

export default function Game() {
    return (
        <Container fluid>
            <Row>
                <Wheel />
                <BettingForm />
            </Row>
        </Container>
    )
}

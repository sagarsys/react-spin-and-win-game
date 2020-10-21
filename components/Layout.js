import { Container } from 'react-bootstrap'
import { Header } from './Header'
import { Wheel } from './Wheel'

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Header />
            <main>{children}</main>
        </Container>
    )
}

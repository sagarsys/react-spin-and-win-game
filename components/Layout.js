import { Container } from 'react-bootstrap'
import { Header } from './Header'

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Header />
            {children}
        </Container>
    )
}

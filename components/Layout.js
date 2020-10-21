import Container from 'react-bootstrap/Container'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Header />
            <main>{children}</main>
        </Container>
    )
}

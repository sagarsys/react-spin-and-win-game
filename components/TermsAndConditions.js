import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function TermsAndConditions() {
    return (
        <Row>
            <Col xs={12} className="text-center text-uppercase">
                <hr />
                <Button
                    aria-haspopup="dialog"
                    size="sm"
                    variant="outline-info"
                    type="button"
                >
                    Terms & Conditions
                </Button>
            </Col>
        </Row>
    )
}

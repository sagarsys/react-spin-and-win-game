import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import styles from '../styles/components/BettingForm.module.scss'
import CustomRadio from './CustomRadio'
import Button from 'react-bootstrap/Button'

export default function BettingForm() {
    return (
        <Col md={5}>
            <Jumbotron>
                <Form>
                    <Row className="pb-4">
                        <Col xs={12}>
                            <h2 className={styles.formTitle}>
                                Choose your odds
                            </h2>
                            <hr />
                        </Col>
                        <CustomRadio />
                    </Row>

                    <Row className="pb-4">
                        <Col xs={12}>
                            <h2 className={styles.formTitle}>
                                Enter amount to stake
                            </h2>
                            <hr />
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="stake">
                                <Form.Label>Balance</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="1000"
                                    value={1000}
                                    readOnly
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="stake">
                                <Form.Label>Stake</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter stake"
                                />
                                <Form.Text className="text-muted">
                                    Stake should be between 25 and 500.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>Possible Win</Col>
                    </Row>

                    <Row className="pb-2">
                        <Col xs={12}>
                            <h2 className={styles.formTitle}>Click to spin</h2>
                            <hr />
                        </Col>
                        <Col xs={12} className="px-5 pt-2">
                            <Button variant="warning" size="lg" block>
                                Click to spin
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <hr />
                            Terms & Conditions
                        </Col>
                    </Row>
                </Form>
            </Jumbotron>
        </Col>
    )
}

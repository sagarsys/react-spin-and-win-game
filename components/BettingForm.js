import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import styles from '../styles/components/BettingForm.module.scss'
import CustomRadio from './CustomRadio'
import Button from 'react-bootstrap/Button'
import TermsAndConditions from './TermsAndConditions'

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
                        <Col xs={6}>
                            <Form.Group controlId="stake">
                                <Form.Label className={styles.formLabel}>
                                    Balance
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="1000"
                                    value={1000}
                                    readOnly
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group controlId="stake">
                                <Form.Label className={styles.formLabel}>
                                    Stake
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter stake"
                                    value={25}
                                />
                                <Form.Text className="text-muted">
                                    Min 25 | Max 500.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col xs={6} className={styles.possibleWin}>
                            <p className="text-uppercase">Possible Win</p>
                            <p className="text-success">100</p>
                        </Col>
                    </Row>

                    <Row className="pb-2">
                        <Col xs={12}>
                            <h2 className={styles.formTitle}>Click to spin</h2>
                            <hr />
                        </Col>
                        <Col xs={12} className="px-5 pt-2">
                            <Button
                                type="submit"
                                variant="warning"
                                size="lg"
                                block
                            >
                                Click to spin
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <TermsAndConditions />
            </Jumbotron>
        </Col>
    )
}

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useModal from 'use-react-modal'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import styles from '../styles/components/TermsAndConditions.module.scss'

export default function TermsAndConditions() {
    const { isOpen, openModal, closeModal, Modal } = useModal()

    return (
        <>
            <Row>
                <Col xs={12} className="text-center text-uppercase">
                    <hr />
                    <a href="#" className="text-info" onClick={openModal}>
                        <small>Terms and Conditions</small>
                    </a>
                </Col>
            </Row>
            {isOpen && (
                <Modal className={styles.dialog}>
                    <Jumbotron>
                        <header className={styles.dialogHeader}>
                            <Button
                                variant="outline-dark"
                                title="Close dialog"
                                className={styles.closeIcon}
                                onClick={closeModal}
                            >
                                X
                            </Button>
                            <h3>Terms and Conditions</h3>
                        </header>
                        <hr />
                        <main>
                            <p>
                                <strong>IMPORTANT INFORMATION</strong>
                            </p>

                            <p>
                                Please ensure that You read and understand these
                                terms prior to using the Service. The terms
                                contain important information about the legal
                                agreement between You and us and provide
                                information about what other documents form part
                                of our relationship with You.
                            </p>

                            <p>
                                In these General Terms and Conditions
                                (“hereinafter “The Terms”):-
                            </p>

                            <ul>
                                <li>
                                    {' '}
                                    Reference to “Roamtech” “We” “our” or “us”
                                    is reference to Roamtech Solutions Limited,
                                    Roamtech and or its successors in title and
                                    assigns.
                                </li>
                                <li>
                                    {' '}
                                    Roamtech Solutions Limited is licensed and
                                    regulated by the Betting Control and
                                    Licensing Board of Kenya (“BCLB”) under the
                                    Betting, Lotteries and Gaming Act, Cap 131,
                                    Laws of Kenya
                                </li>
                                <li>
                                    {' '}
                                    Pesawheel is a licensed trademark owned by
                                    Roamtech Solutions Limited, a company
                                    registered under the Laws of Kenya and
                                    having its registered address at Mayfair
                                    Business Center, Parklands Road P O Box
                                    1145-00600 Nairobi.
                                </li>
                                <li>
                                    {' '}
                                    Reference to “You” “Your’ the “Player” or
                                    “Customer(s)” is reference to any person
                                    using the Service.
                                </li>
                            </ul>
                        </main>

                        <footer className="text-center pt-2">
                            <Button variant="danger" onClick={closeModal}>
                                Close
                            </Button>
                        </footer>
                    </Jumbotron>
                </Modal>
            )}
        </>
    )
}

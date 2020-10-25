import { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import styles from '../styles/components/BettingForm.module.scss'
import CustomRadio from './CustomRadio'
import Button from 'react-bootstrap/Button'
import TermsAndConditions from './TermsAndConditions'
import { calculatePossibleWin, INITIAL_BALANCE, spin } from '../lib/game'
import { store } from '../store/store'

const defaultValues = {
    odds: 'x2',
    stake: 10,
}

export default function BettingForm() {
    const { state } = useContext(store)
    console.warn(state)

    const { handleSubmit, control, watch } = useForm({
        defaultValues,
        mode: 'onBlur',
    })
    const [data, setData] = useState(null)
    const [balance, setBalance] = useState(INITIAL_BALANCE)
    const onSubmit = (data) => {
        console.log('submit', data)
        setData(data)
        const { numOfSegmentsToSpin, balance } = spin(data)
        setBalance(balance)
        console.log(numOfSegmentsToSpin)
    }
    const displayPossibleWin = () => {
        return calculatePossibleWin(watch('odds'), watch('stake'))
    }

    return (
        <Col md={5}>
            <Jumbotron>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="pb-4">
                        <Col xs={12}>
                            <h2 className={styles.formTitle}>
                                Choose your odds
                            </h2>
                            <hr />
                        </Col>
                    </Row>
                    <Controller
                        render={({ onChange }) => (
                            <CustomRadio onChange={onChange} />
                        )}
                        name="odds"
                        control={control}
                        rules={{
                            required: true,
                        }}
                    />
                    <Row className="pb-4">
                        <Col xs={12}>
                            <h2 className={styles.formTitle}>
                                Enter amount to stake
                            </h2>
                            <hr />
                        </Col>
                        <Col xs={12} className={styles.stake}>
                            <Form.Group controlId="stake">
                                <Form.Label className={styles.formLabel}>
                                    Stake
                                </Form.Label>
                                <Controller
                                    as={
                                        <Form.Control
                                            type="number"
                                            placeholder="Enter stake"
                                            min={10}
                                            max={100}
                                            size="lg"
                                        />
                                    }
                                    rules={{ required: true }}
                                    name="stake"
                                    control={control}
                                />

                                <Form.Text className="text-info">
                                    Min 10 | Max 100.
                                </Form.Text>
                            </Form.Group>
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
                        <Col xs={6} className={styles.indicator}>
                            <p className="text-uppercase mb-0">Possible Win</p>
                            <p className="text-success">
                                {displayPossibleWin()}
                            </p>
                        </Col>
                        <Col xs={6} className={styles.indicator}>
                            <p className="text-uppercase mb-0">Balance</p>
                            <p className="text-success">{balance}</p>
                        </Col>
                    </Row>
                </Form>
                <TermsAndConditions />
            </Jumbotron>
        </Col>
    )
}

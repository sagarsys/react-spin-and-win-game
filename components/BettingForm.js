import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import styles from '../styles/components/BettingForm.module.scss'
import CustomRadio from './CustomRadio'
import Button from 'react-bootstrap/Button'
import TermsAndConditions from './TermsAndConditions'
import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { parseMultiplierFromOddsString } from '../lib/string'

const defaultValues = {
    odds: 'x2',
    stake: 25,
}
const INITIAL_BALANCE = 1000

export default function BettingForm() {
    const { handleSubmit, control, watch } = useForm({
        defaultValues,
        mode: 'onBlur',
    })
    const [data, setData] = useState(null)
    const [balance, setBalance] = useState(INITIAL_BALANCE)
    const onSubmit = (data) => {
        console.log('submit', data)
        setData(data)
    }
    const calculatePossibleWin = () => {
        return watch('stake') * parseMultiplierFromOddsString(watch('odds'))
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
                                            min={25}
                                            max={500}
                                            size="lg"
                                        />
                                    }
                                    rules={{ required: true }}
                                    name="stake"
                                    control={control}
                                />

                                <Form.Text className="text-info">
                                    Min 25 | Max 500.
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
                        <Col xs={6} className={styles.possibleWin}>
                            <p className="text-uppercase mb-0">Possible Win</p>
                            <p className="text-success">
                                {calculatePossibleWin()}
                            </p>
                        </Col>
                        <Col xs={6} className={styles.possibleWin}>
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

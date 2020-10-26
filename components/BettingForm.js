import { useContext, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import styles from '../styles/components/BettingForm.module.scss'
import CustomRadio from './CustomRadio'
import Button from 'react-bootstrap/Button'
import TermsAndConditions from './TermsAndConditions'
import { ANIMATION_DURATION, calculatePossibleWin } from '../lib/game'
import { store } from '../store/store'
import { SERVER_BASE_URL } from '../config'
import { fetcher } from '../lib/http'
import {
    SET_GAME_STATUS,
    SET_SPINNING_STATUS,
    SYNC_SERVER_RESPONSE,
} from '../store/actions'

const defaultValues = {
    odds: 'x2',
    stake: 10,
}

export default function BettingForm() {
    const { state, dispatch } = useContext(store)
    const { handleSubmit, control, watch } = useForm({
        defaultValues,
        mode: 'onBlur',
    })
    const [formValues, setFormValues] = useState(null)

    useEffect(() => {
        if (!formValues || !state.initialized) return
        spin(formValues, state._id).then((resp) => {
            if (!resp) return
            console.log('API Resp', resp)
            const {
                balance,
                win,
                lose,
                draw,
                bonus,
                numOfSegmentsToSpin,
            } = resp
            dispatch({
                type: SET_SPINNING_STATUS,
                payload: {
                    isSpinning: true,
                    numOfSegmentsToSpin,
                },
            })

            const animation = new Promise((resolve) => {
                setTimeout(() => resolve(), ANIMATION_DURATION * 1000)
            })
            // Wait for wheel animation to finish
            animation.then(() => {
                dispatch({
                    type: SET_GAME_STATUS,
                    payload: { win, draw, bonus, lose },
                })
                dispatch({
                    type: SYNC_SERVER_RESPONSE,
                    payload: { balance },
                })
            })
        })
    }, [formValues])

    async function spin(data, _id) {
        if (!data || !_id) return
        return await fetcher(
            `${SERVER_BASE_URL}/api/game?` +
                new URLSearchParams({
                    _id: state._id,
                    ...data,
                })
        )
    }

    const onSubmit = (data) => {
        console.log('Spin', data)
        setFormValues(data)
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
                                disabled={
                                    state.isSpinning || !state.initialized
                                }
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
                            <p className="text-success">{state.balance}</p>
                        </Col>
                    </Row>
                </Form>
                <TermsAndConditions />
            </Jumbotron>
        </Col>
    )
}

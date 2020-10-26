import { useContext, useEffect, useRef, useState } from 'react'
import { store } from '../store/store'
import Col from 'react-bootstrap/Col'
import styles from '../styles/components/Wheel.module.scss'
import gsap from 'gsap'
import { ANIMATION_DURATION, NUM_OF_SEGMENTS } from '../lib/game'
import { SET_SPINNING_STATUS } from '../store/actions'

export default function Wheel() {
    const wheel = useRef(null)
    const { state, dispatch } = useContext(store)
    const { numOfSegmentsToSpin } = state
    const [globalRotation, setGlobalRotation] = useState(0)

    useEffect(() => {
        if (numOfSegmentsToSpin > 0) {
            spin(numOfSegmentsToSpin)
            const animation = new Promise((resolve) => {
                setTimeout(() => resolve(), ANIMATION_DURATION * 1000)
            })
            // Wait for animation to end
            animation.then(() => {
                dispatch({
                    type: SET_SPINNING_STATUS,
                    payload: {
                        numOfSegmentsToSpin: 0,
                        isSpinning: false,
                    },
                })
            })
        }
    }, [numOfSegmentsToSpin])

    const spin = (segmentsToSpin) => {
        if (!wheel.current) return
        const newRotation = (segmentsToSpin - 1) * (360 / NUM_OF_SEGMENTS)
        const rotation = globalRotation + newRotation
        setGlobalRotation(rotation)
        gsap.to(wheel.current, { duration: ANIMATION_DURATION, rotation })
    }

    return (
        <Col md={7} className={styles.wheelContainer}>
            <div className={styles.wheelPeg} />
            <div className={styles.wheelWrapper}>
                <div className={styles.wheel} ref={wheel}>
                    <img src="/images/wheel.svg" alt="Wheel" />
                </div>
                <div className={styles.wheelText}>
                    <h1 className={styles.test}>
                        Spin <br />
                        <span className="text-warning">&</span> Win
                    </h1>
                </div>
            </div>
        </Col>
    )
}

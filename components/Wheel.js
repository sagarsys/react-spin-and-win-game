import Col from 'react-bootstrap/Col'
import styles from '../styles/components/Wheel.module.scss'

export default function Wheel() {
    return (
        <Col md={7} className={styles.wheelContainer}>
            <div className={styles.wheelPeg} />
            <div className={styles.wheelWrapper}>
                <img src="/images/wheel.svg" alt="Wheel" />
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

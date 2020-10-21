import styles from '../styles/components/Header.module.scss'

export default function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="Pesawheel - Spin and win" />
            </div>
        </header>
    )
}

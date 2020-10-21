import styles from '../styles/Header.module.scss'

export function Header() {
    return (
        <header>
            <div className={styles.logo}>
                <img src="/images/logo.png" alt="Pesawheel - Spin and win" />
            </div>
        </header>
    )
}

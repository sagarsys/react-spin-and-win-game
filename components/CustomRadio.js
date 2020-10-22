import styles from '../styles/components/CustomRadio.module.scss'

export default function CustomRadio() {
    return (
        <div className={styles.customRadios}>
            <div>
                <input
                    type="radio"
                    id="color-1"
                    className={styles.color1}
                    name="color"
                    value="color-1"
                    checked
                />
                <label htmlFor="color-1">
                    <span>
                        <strong>X2</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    id="color-2"
                    className={styles.color2}
                    name="color"
                    value="color-2"
                />
                <label htmlFor="color-2">
                    <span>
                        <strong>X3</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    id="color-3"
                    className={styles.color3}
                    name="color"
                    value="color-3"
                />
                <label htmlFor="color-3">
                    <span>
                        <strong>X5</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    id="color-4"
                    className={styles.color4}
                    name="color"
                    value="color-4"
                />
                <label htmlFor="color-4">
                    <span>
                        <strong>X10</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>
        </div>
    )
}

import styles from '../styles/components/CustomRadio.module.scss'

export default function CustomRadio({ onChange }) {
    return (
        <div className={styles.customRadios}>
            <div>
                <input
                    type="radio"
                    name="odds"
                    id="x2"
                    value="x2"
                    className={styles.color1}
                    onChange={onChange}
                    defaultChecked
                />
                <label htmlFor="x2">
                    <span>
                        <strong>X2</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    name="odds"
                    id="x3"
                    value="x3"
                    className={styles.color2}
                    onChange={onChange}
                />
                <label htmlFor="x3">
                    <span>
                        <strong>X3</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    name="odds"
                    id="x5"
                    value="x5"
                    className={styles.color3}
                    onChange={onChange}
                />
                <label htmlFor="x5">
                    <span>
                        <strong>X5</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    name="odds"
                    id="x10"
                    value="x10"
                    className={styles.color4}
                    onChange={onChange}
                />
                <label htmlFor="x10">
                    <span>
                        <strong>X10</strong>
                        <img src="/images/chip.png" alt="Checked Icon" />
                    </span>
                </label>
            </div>
        </div>
    )
}

import styles from "./Statistics.module.css";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={styles.listStatistics}>
            <li>
                <p className={styles.text}>Good: {good}</p>
            </li>
            <li>
                <p className={styles.text}>Neutral: {neutral}</p>
            </li>
            <li>
                <p className={styles.text}>Bad: {bad}</p>
            </li>
            <li>
                <p className={styles.text}>Total: {total}</p>
            </li>
            <li>
                <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
            </li>
        </ul>
    );
};

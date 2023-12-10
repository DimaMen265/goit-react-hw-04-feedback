import styles from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={styles.listButtons}>
            {options.map((option, index) => (
                <li key={index}>
                    <button onClick={() => onLeaveFeedback(option)} className={styles.buttons}>{option}</button>
                </li>
            ))}
        </ul>
    );
}

import styles from "./Notification.module.css";

export const Notification = props => (
  <>
    <p className={styles.text}>{props.message}</p>
  </>
);
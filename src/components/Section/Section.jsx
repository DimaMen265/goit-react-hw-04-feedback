import styles from "./Section.module.css";

export const Section = props => (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>{props.title}</h2>
        {props.children}
    </section>
);
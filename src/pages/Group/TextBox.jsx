import { Icon } from "@iconify/react";
import styles from "./styles/TextBox.module.css";

export default function TextBox() {
  return (
    <div className={styles.textBox}>
      <form className={styles.form}>
        <textarea
          placeholder="Enter your text here..."
          className={styles.textarea}
        ></textarea>
        <button className={styles.sendIcon}>
          <Icon icon="fluent:send-16-filled" width={24} color="#ABABAB" />
        </button>
      </form>
    </div>
  );
}

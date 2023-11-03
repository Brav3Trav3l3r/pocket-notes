import { Text } from "../../components/ui";
import styles from "./styles/Notes.module.css";

export default function Notes({ group }) {
  return (
    <div className={styles.notes}>
      {group?.notes.map((n) => (
        <div key={n.id} className={styles.note}>
          <div className={styles.metadata}>
            <Text style={{ color: "var(--secondary-text)" }} weight="500">
              {n.createdAt.time} <span>{n.createdAt.date}</span>
            </Text>
          </div>
          <Text style={{ whiteSpace: "pre-line" }}>{n.text}</Text>
        </div>
      ))}
    </div>
  );
}

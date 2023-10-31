import styles from "./styles/Notes.module.css";
import notes from "../../data/notes.json";
import { Text } from "../../components/ui";

export default function Notes() {
  return (
    <div className={styles.notes}>
      {notes.map((n) => (
        <div key={n.id} className={styles.note}>
          <Text>{n.createdAt}</Text>
          <Text>{n.note}</Text>
        </div>
      ))}
    </div>
  );
}

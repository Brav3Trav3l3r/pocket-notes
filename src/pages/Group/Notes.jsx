import styles from "./styles/Notes.module.css";
import { Text } from "../../components/ui";

export default function Notes({ group }) {
  return (
    <div className={styles.notes}>
      {group.notes &&
        group.notes?.map((n) => (
          <div key={n.createdAt} className={styles.note}>
            <div className="">
              <Text weight="500">{n.createdAt.time}</Text>
              <Text weight="500">{n.createdAt.date}</Text>
            </div>
            <Text>{n.text}</Text>
          </div>
        ))}
    </div>
  );
}

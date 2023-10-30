import { Link } from "react-router-dom";
import NotesGroup from "./NotesGroup";
import styles from "./styles/Navigation.module.css";
import { Button, Text } from "./ui";

export default function Navigation({ isHomePage }) {
  let navDisplay = !isHomePage ? styles.close : "";

  return (
    <div className={`${styles.nav} ${navDisplay}`}>
      <div className={styles.title}>
        <Link to={"/"}>
          <Text step={6} weight="600">
            Pockety notes
        </Text>
        </Link>
      </div>
      <Button>+ Create notes group</Button>
      <NotesGroup />
    </div>
  );
}

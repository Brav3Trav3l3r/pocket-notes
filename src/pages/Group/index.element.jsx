import Heading from "./Heading";
import Notes from "./Notes";
import TextBox from "./TextBox";
import styles from "./styles/index.module.css";

export default function Groups() {
  return (
    <div className={styles.container}>
      <Heading />
      <Notes />
      <TextBox />
    </div>
  );
}

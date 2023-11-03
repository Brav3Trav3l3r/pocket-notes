import { useContext } from "react";
import { useParams } from "react-router-dom";

import { NotesContext } from "../../store/notesContext";
import Heading from "./Heading";
import Notes from "./Notes";
import TextBox from "./TextBox";
import styles from "./styles/index.module.css";

export default function Groups() {
  const noteCtx = useContext(NotesContext);
  const { id } = useParams();
  const group = noteCtx.getGroup(id);

  return (
    <div className={styles.container}>
      <Heading group={group} />
      <Notes group={group} />
      <TextBox />
    </div>
  );
}

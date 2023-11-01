import { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles/index.module.css";

import Heading from "./Heading";
import Notes from "./Notes";
import TextBox from "./TextBox";
import { NotesContext } from "../../store/notesContext";

export default function Groups() {
  const noteCtx = useContext(NotesContext);
  const params = useParams();
  const { id } = params;
  const group = noteCtx.getGroup(id);

  return (
    <div className={styles.container}>
      <Heading group={group} />
      <Notes group={group} />
      <TextBox />
    </div>
  );
}

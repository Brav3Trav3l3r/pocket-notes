import Heading from "./Heading";
import Notes from "./Notes";
import TextBox from "./TextBox";
import styles from "./styles/index.module.css";
import { useContext } from "react";
import { NotesContext } from "../../store/notesContext";
import { useParams } from "react-router-dom";

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

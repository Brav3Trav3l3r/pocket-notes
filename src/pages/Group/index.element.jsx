import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { NotesContext } from "../../store/notesContext";
import Heading from "./Heading";
import Notes from "./Notes";
import TextBox from "./TextBox";
import styles from "./styles/index.module.css";

export default function Groups() {
  const noteCtx = useContext(NotesContext);
  const { id } = useParams();
  const group = noteCtx.getGroup(id);

  const navigate = useNavigate();

  useEffect(() => {
    if (!group) {
      navigate("/");
    }
  }, [group]);

  return (
    <div className={styles.container}>
      {group && <Heading group={group} />}
      <Notes group={group} />
      <TextBox />
    </div>
  );
}

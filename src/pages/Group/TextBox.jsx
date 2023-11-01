import { useCallback, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "./styles/TextBox.module.css";

import { NotesContext } from "../../store/notesContext";

export default function TextBox() {
  const [input, setInput] = useState("");
  const params = useParams();
  const { id } = params;
  const noteCtx = useContext(NotesContext);

  const handleNoteSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (input.trim().length == 0) {
        return;
      }
      setInput("");
      noteCtx.addNote(input, id);
    },
    [noteCtx, input, id]
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleNoteSubmit(event);
    }
  };

  return (
    <div className={styles.textBox}>
      <div className={styles.wrapper}>
        <form onSubmit={handleNoteSubmit} className={styles.form}>
          <textarea
            autoFocus
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your text here..."
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.sendIcon}>
            <Icon icon="fluent:send-16-filled" width={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

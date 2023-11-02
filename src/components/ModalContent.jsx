import { useContext, useState } from "react";
import styles from "./styles/ModalContent.module.css";

import { NotesContext } from "../store/notesContext";
import { Button, Text } from "./ui";

export default function ModalContent({ handleModalOpen }) {
  const [inputName, setInputName] = useState("");

  const colorArr = [
    { id: 1, color: "#B38BFA" },
    { id: 2, color: "#FF79F2" },
    { id: 3, color: "#43E6FC" },
    { id: 4, color: "#F19576" },
    { id: 5, color: "#0047FF" },
    { id: 6, color: "#6691FF" },
  ];
  const [selectedColor, setSelectedColor] = useState(colorArr[0]);

  const notesCtx = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputName) {
      return;
    }

    handleModalOpen();
    notesCtx.addGroup(inputName, selectedColor.color);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Text step={6} weight="500">
        Create new notes group
        <span className={styles.kbdEsc}>Esc</span>
      </Text>
      <div className={styles.inputGroup}>
        <label htmlFor="group">
          <Text step={4} weight="500">
            Group name&nbsp;
          </Text>
        </label>
        <input
          autoFocus
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter your group name"
        />
      </div>
      <div className={styles.radioGroup}>
        <Text step={4} weight="500">
          Choose color
        </Text>
        <div className={styles.colors}>
          {colorArr.map((c) => (
            <div key={c.id} className={styles.radio}>
              <input
                onChange={() => setSelectedColor(c)}
                checked={c.id === selectedColor.id}
                id={c.id}
                type="radio"
                value={c.color}
                name="color"
              />
              <label htmlFor={c.id}>
                <span style={{ backgroundColor: c.color }}></span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.submitButton}>
        <Button>Create</Button>
      </div>
    </form>
  );
}

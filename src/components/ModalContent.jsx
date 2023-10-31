import { useContext, useState } from "react";
import { NotesContext } from "../store/notesContext";
import styles from "./styles/ModalContent.module.css";
import { Button, Text } from "./ui";

export default function ModalContent({ handleModalOpen }) {
  const [inputName, setInputName] = useState("");
  const notesCtx = useContext(NotesContext);
  const colorArr = [
    { id: 1, color: "#B38BFA" },
    { id: 2, color: "#FF79F2" },
    { id: 3, color: "#43E6FC" },
    { id: 4, color: "#F19576" },
    { id: 5, color: "#0047FF" },
    { id: 6, color: "#6691FF" },
  ];
  const [selectedColor, setSelectedColor] = useState(colorArr[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputName || !selectedColor) {
      return;
    }
    handleModalOpen();
    notesCtx.addGroup(inputName, selectedColor.color);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <Text step={6} weight="500">
        Create new notes group
      </Text>
      <div className={styles.inputGroup}>
        <label htmlFor="group">
          <Text step={4} weight="500">
            Group name
          </Text>
        </label>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter your group name"
        />
      </div>
      <div className={styles.colorGroup}>
        <Text step={4} weight="500">
          Choose color
        </Text>
        <div className={styles.colors}>
          {colorArr.map((c) => (
            <div key={c.id} className={styles.colorContainer}>
              <input
                onChange={() => setSelectedColor(c)}
                checked={c.id === selectedColor.id}
                className={styles.colorInput}
                id={c.id}
                type="radio"
                value={c.color}
                name="color"
              />
              <label htmlFor={c.id} className={styles.colorLabel}>
                <span
                  style={{ backgroundColor: c.color }}
                  className={styles.span}
                ></span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.createButton}>
        <Button>Create</Button>
      </div>
    </form>
  );
}

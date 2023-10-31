import { Link } from "react-router-dom";
import NotesGroup from "./NotesGroup";
import styles from "./styles/Navigation.module.css";
import { Avatar, Button, Text } from "./ui";
import { useState } from "react";
import Modal from "./ui/Modal";
import { createPortal } from "react-dom";

export default function Navigation({ isHomePage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  let navDisplay = !isHomePage ? styles.close : "";

  return (
    <>
      <div className={`${styles.nav} ${navDisplay}`}>
        <div className={styles.title}>
          <Link to={"/"}>
            <Text step={6} weight="600">
              Pockety notes
            </Text>
          </Link>
        </div>
        <Button onClick={handleModalOpen}>+ Create notes group</Button>
        <NotesGroup />
      </div>
      {isModalOpen &&
        createPortal(
          <Modal onClick={handleModalOpen}>
            <ModalContent />
          </Modal>,
          document.getElementById("modal")
        )}
    </>
  );
}

const ModalContent = () => {
  return (
    <div className={styles.main}>
      <Text step={6} weight="500">
        Create new notes group
      </Text>
      <div className={styles.inputGroup}>
        <label htmlFor="group">
          <Text step={4} weight="500">Group name</Text>
        </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your group name"
        />
      </div>
      <div className={styles.colorGroup}>
        <Text step={4} weight="500">Choose color</Text>
        <div className={styles.colors}>
          <Avatar color="#B38BFA" />
          <Avatar color="#FF79F2" />
          <Avatar color="#43E6FC" />
          <Avatar color="#F19576" />
          <Avatar color="#0047FF" />
          <Avatar color="#6691FF" />
        </div>
      </div>
      <div className={styles.createButton}>
        <Button>Create</Button>
      </div>
    </div>
  );
};

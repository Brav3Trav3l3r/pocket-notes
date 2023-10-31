import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import ModalContent from "./ModalContent";
import NotesGroup from "./NotesGroup";
import styles from "./styles/Navigation.module.css";
import { Button, Text } from "./ui";
import Modal from "./ui/Modal";

export default function Navigation({ isHomePage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  let navDisplay = !isHomePage ? styles.onClose : "";

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
            <ModalContent handleModalOpen={handleModalOpen} />
          </Modal>,
          document.getElementById("modal")
        )}
    </>
  );
}

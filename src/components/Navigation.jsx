import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import styles from "./styles/Navigation.module.css";

import ModalContent from "./ModalContent";
import NoteGroups from "./NoteGroups";
import { Modal, Button, Text } from "./ui";

export default function Navigation({ isRootRoute }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  let navDisplayStyles = !isRootRoute ? styles.hideElem : "";

  return (
    <>
      <nav className={`${styles.nav} ${navDisplayStyles}`}>
        <Link className={styles.title} to={"/"}>
          <Text step={6} weight="600">
            Pocket notes
          </Text>
        </Link>
        <Button onClick={handleModalOpen}>+ Create notes group</Button>
        <NoteGroups />
      </nav>
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

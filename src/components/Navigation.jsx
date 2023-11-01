import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import styles from "./styles/Navigation.module.css";

import ModalContent from "./ModalContent";
import NoteGroups from "./NoteGroups";
import { Modal, Button, Text } from "./ui";
import { Icon } from "@iconify/react";

export default function Navigation({ isRootRoute }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  let navDisplayStyles = !isRootRoute ? styles.hideElem : "";

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key == "Escape" && isModalOpen) {
        setIsModalOpen(false);
      } else if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      <nav className={`${styles.nav} ${navDisplayStyles}`}>
        <Link className={styles.title} to={"/"}>
          <Text step={6} weight="600">
            Pocket notes
          </Text>
        </Link>
        <Button onClick={handleModalOpen}>
          <div className={styles.buttonContent}>
            <div>
              <Icon icon="lucide:plus" style={{ fontSize: "1.25rem" }} />
              Create notes group
            </div>
            <span>Ctrl k</span>
          </div>
        </Button>
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

import { NavLink } from "react-router-dom";
import styles from "./styles/NotesGroup.module.css";
import { Text, Avatar } from "./ui";
import { useContext } from "react";
import { NotesContext } from "../store/notesContext";

export default function NotesGroup() {
  const notesCtx = useContext(NotesContext);
  const groups = notesCtx.getGroups();

  return (
    <ul className={styles.ul}>
      {groups &&
        groups?.map((group) => (
          <NavLink to={`groups/${group.id}`} key={group.id}>
            {({ isActive }) => (
              <li className={` ${isActive ? styles.active : ""} ${styles.li}`}>
                <Avatar color={group.color}>{group.shortname}</Avatar>
                <Text step={4} weight="500">
                  {group.name}
                </Text>
              </li>
            )}
          </NavLink>
        ))}
    </ul>
  );
}

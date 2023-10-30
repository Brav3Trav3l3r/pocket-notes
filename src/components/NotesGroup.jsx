import { NavLink } from "react-router-dom";
import groups from "../data/groups.json";
import styles from "./styles/NotesGroup.module.css";
import { Text, Avatar } from "./ui";

export default function NotesGroup() {
  return (
    <ul className={styles.ul}>
      {groups.map((group) => (
        <NavLink to={`groups/${group.id}`} key={group.id}>
          {({ isActive }) => (
            <li className={` ${isActive ? styles.active : ""} ${styles.li}`}>
              <Avatar color={group.color}>{group["short-name"]}</Avatar>
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

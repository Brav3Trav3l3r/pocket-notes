import { Link } from "react-router-dom";
import styles from "./styles/Heading.module.css";
import { Icon } from "@iconify/react";
import { Avatar, Text } from "../../components/ui";

export default function Heading({ group }) {
  console.log(group);
  return (
    <div className={styles.heading}>
      <Link to=".." className={styles.navigateIcon}>
        <Icon icon="lucide:arrow-left" />
      </Link>
      <div className={styles.title}>
        <Avatar color={group.color}>{group.name.slice(0, 2).toUpperCase()}</Avatar>
        <Text step={5} weight="500">
          {group.name}
        </Text>
      </div>
    </div>
  );
}

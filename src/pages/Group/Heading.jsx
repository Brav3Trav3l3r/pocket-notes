import { Link } from "react-router-dom";
import styles from "./styles/Heading.module.css";
import { Icon } from "@iconify/react";
import { Avatar, Text } from "../../components/ui";

export default function Heading() {
  return (
    <div className={styles.heading}>
      <Link to=".." className={styles.navigateIcon}>
        <Icon icon="lucide:arrow-left" />
      </Link>
      <div className={styles.title}>
        <Avatar color="#0047FF">CV</Avatar>
        <Text step={4} weight="500">
          Cuvette notes
        </Text>
      </div>
    </div>
  );
}

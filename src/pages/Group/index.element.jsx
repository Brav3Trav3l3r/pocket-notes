import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Avatar, Text } from "../../components/ui";
import styles from "./styles/Group.module.css";

export default function Groups() {
  return (
    <div className={styles.container}>
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

      <div className={styles.textBox}>
        
        <textarea placeholder="Enter yout text here..."></textarea>
      </div>
    </div>
  );
}

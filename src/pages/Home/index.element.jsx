import styles from "./styles/index.module.css";
import heroImage from "../../assets/homeImage.png";
import { Text } from "../../components/ui";
import { Icon } from "@iconify/react";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="home image" />
        </div>
        <Text step={8} weight="500">
          Pocket Notes
        </Text>
        <Text step={4}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </Text>
      </div>

      <div className={styles.endText}>
        <span className={styles.lockIcon}>
          <Icon icon="material-symbols:lock" />
        </span>
        <Text>end-to-end encrypted</Text>
      </div>
    </div>
  );
}

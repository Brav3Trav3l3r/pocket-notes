import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import styles from "./styles/RootLayout.module.css";

export default function RootLayout() {
  const location = useLocation();
  let isHomePage;

  if (location.pathname == "/") {
    isHomePage = true;
  }

  let displayNotes = !isHomePage ? styles.showNotes : "";

  return (
    <div className={styles.container}>
      <Navigation isHomePage={isHomePage} />
      <main className={`${styles.main} ${displayNotes}`}>
        <Outlet />
      </main>
    </div>
  );
}

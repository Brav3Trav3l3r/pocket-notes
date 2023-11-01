import { Outlet, useLocation } from "react-router-dom";
import styles from "./styles/RootLayout.module.css";

import Navigation from "../components/Navigation";

export default function RootLayout() {
  const location = useLocation();
  let isRootRoute;

  if (location.pathname == "/") {
    isRootRoute = true;
  }

  let hideOutletStyles = isRootRoute ? styles.hideElem : "";

  return (
    <div className={styles.container}>
      <Navigation isRootRoute={isRootRoute} />
      <main className={`${styles.main} ${hideOutletStyles}`}>
        <Outlet />
      </main>
    </div>
  );
}

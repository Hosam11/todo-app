import { Outlet } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import NavDrawer from "../navDrawer/NavDrawer";
import TopBar from "../tobBar/TopBar";
const MainNavigation = () => {
  return (
    <>
      <TopBar />
      <div className={styles.mainPage}>
        <div className={styles.navDrawerContainer}>
          <NavDrawer />
        </div>
        <div className={styles.pagesContainer}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainNavigation;

import { CiSearch, CiSettings } from "react-icons/ci";
import styles from "./TopBar.module.css";
const TopBar = () => (
  <div className={styles.topBarContainer}>
    <p className={styles.header}>To Do</p>
    <div className={styles.inputContainer}>
      <CiSearch className={styles.searchIcon} size={25} />
      <input className={styles.input} placeholder="Search..." />
    </div>
    <CiSettings className={styles.settingIcon} size={25} />
  </div>
);

export default TopBar;

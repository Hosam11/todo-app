import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";
import { IconType } from "react-icons";

const NavItem: React.FC<{
  title: string;
  iconSize?: string | number | undefined;
  IconComponent: IconType;
  to: string;
}> = ({ title, iconSize = 28, IconComponent, to }) => {
  return (
    <li className={styles.listItem} >
      <NavLink to={to} className={styles.navLink}>
        {({ isActive }) => (
          <div
            className={`${styles.listContainer} ${
              isActive ? styles.activeLink : undefined
            }`}
          >
            <IconComponent size={iconSize} className={styles.icon} />
            <p className={styles.title}>{title}</p>
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;

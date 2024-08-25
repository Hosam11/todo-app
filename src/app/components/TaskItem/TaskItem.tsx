import { SiTask } from "react-icons/si";
import styles from "./TaskItem.module.css"; // Import your CSS module

const TaskItem: React.FC<{
  title: string;
  iconSize?: string | number | undefined ;
}> = ({ title, iconSize = 30 }) => {
  return (
    <div className={styles.listContainer}>
      <SiTask size={iconSize} className={styles.icon} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default TaskItem;

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./CompletedTasks.module.css";
import { Task } from "../../../utils/Types";
import TaskComponent from "./Task";

const CompletedTasks: React.FC<{
  tasks: Task[];
  onTaskCompleted: (task: Task) => void;
  onTaskDeleted: (task: Task) => void;
}> = ({ tasks, onTaskCompleted, onTaskDeleted }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <button onClick={toggleExpandCollapse} className={styles.expandedButton}>
        <IoIosArrowForward
          size={23}
          className={`${styles.expandedIcon} ${
            isExpanded ? styles.expanded : styles.collapsed
          } `}
        ></IoIosArrowForward>
        <h2 className={styles.h2}>Completed</h2>
        <span className={styles.tasksLength}>{tasks.length}</span>
      </button>

      {isExpanded &&
        tasks.map((task) => (
          <TaskComponent
            onTaskCompleted={onTaskCompleted}
            key={task.id}
            task={task}
            onTaskDeleted={onTaskDeleted}
          />
        ))}
      {!isExpanded && <hr className={styles.hr}></hr>}
    </div>
  );
};

export default CompletedTasks;

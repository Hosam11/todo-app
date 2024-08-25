import { useEffect, useState } from "react";
import styles from "./Task.module.css";
import { Task } from "../../../utils/Types";
import { MdDelete } from "react-icons/md";

const TaskComponent: React.FC<{
  task: Task;
  onTaskCompleted: (task: Task) => void;
  onTaskDeleted: (task: Task) => void;
}> = ({ task, onTaskCompleted, onTaskDeleted }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(task.state);
  }, []);

  return (
    <div className={styles.taskContainer}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          const updatedTask = { ...task, state: !checked };
          onTaskCompleted(updatedTask);
        }}
      />
      <h3
        className={`${styles.taskTitle}  ${
          checked ? styles.completedTask : undefined
        }`}
      >
        {task.title}
      </h3>
      <button
        className={styles.deleteButton}
        onClick={() => onTaskDeleted(task)}
      >
        <MdDelete size={25} />
      </button>
    </div>
  );
};

export default TaskComponent;

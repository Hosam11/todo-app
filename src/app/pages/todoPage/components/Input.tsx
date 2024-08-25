import { IoMdAdd } from "react-icons/io";
import styles from "./Input.module.css";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  memo,
  MouseEventHandler,
} from "react";

const Input: React.FC<{
  task: string;
  onTaskChanged: ChangeEventHandler | undefined;
  onKeyDown: KeyboardEventHandler | undefined;
  addTaskHandler: MouseEventHandler | undefined;
}> = memo(function Input({ task, onTaskChanged, onKeyDown, addTaskHandler }) {
  console.log("Input render");
  return (
    <div className={styles.row}>
      <div className={styles.inputContainer}>
        <IoMdAdd className={styles.searchIcon} size={25} />
        <input
          className={styles.input}
          placeholder="Add a task"
          value={task}
          onChange={onTaskChanged}
          onKeyDown={onKeyDown}
        />
      </div>
      <button className={styles.addButton} onClick={addTaskHandler}>
        Add
      </button>
    </div>
  );
});

export default Input;

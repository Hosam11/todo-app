import styles from "./NavDrawer.module.css";
import { IoMdAdd } from "react-icons/io";
import { FaList } from "react-icons/fa";
import NavItem from "../NavItem/NavItem";
import { SiTask } from "react-icons/si";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import useInput from "../../hooks/useInput";
import { tasksListActions } from "../../store/task-list-slice";

import {
  ContextMenuTrigger,
  ContextMenu,
  ContextMenuItem,
} from "rctx-contextmenu";

const NavDrawer = () => {
  const taskListSelector = useAppSelector((state) => state.taskList);
  const dispatch = useAppDispatch();

  const { value, handleChange, reset } = useInput("");

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.key === "Enter" && addList();

  const addList = () => {
    if (value.trim() === "") {
      alert("Please enter a value");
      return;
    }
    dispatch(tasksListActions.addListTitle(value));
    reset();
  };
  const remainingTaskLists = [...taskListSelector];
  remainingTaskLists.shift();
  return (
    <ul className={styles.navDrawer}>
      <NavItem
        title={taskListSelector[0]?.title}
        IconComponent={SiTask}
        to={`/tasks/${taskListSelector[0]?.id}`}
      />
      <hr className={styles.divider} />
      {remainingTaskLists.map(({ id, title }) => (
        <ContextMenuTrigger id="my-context-menu-1" key={id}>
          <NavItem title={title} IconComponent={FaList} to={`tasks/${id}`} />
        </ContextMenuTrigger>
      ))}
      <div className={styles.addListContainer}>
        <IoMdAdd size={28} className={styles.icon} />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="New list"
          className={styles.taskInput}
          onKeyDown={onKeyDown}
        />
      </div>

      <ContextMenu className={styles.contextMenu} id="my-context-menu-1">
        <ContextMenuItem
          className={styles.menuItem}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <IoMdAdd className={styles.icon} />
          <span>Delete</span>
        </ContextMenuItem>
      </ContextMenu>
    </ul>
  );
};

export default NavDrawer;

import { SiTask } from "react-icons/si";
import styles from "./ToDoPage.module.css";
import TaskComponent from "./components/Task";
import { useCallback, useState } from "react";
import { Task } from "../../utils/Types";
import CompletedTasks from "./components/CompletedTasks";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import { tasksListActions } from "../../store/task-list-slice";
import Input from "./components/Input";

const ToDoPage: React.FC = () => {
  const params = useParams();
  const pageId = params.id;
  const tasks = useAppSelector((state) => state.taskList);
  const listPage = tasks.find((taskPage) => taskPage.id === pageId);

  const [task, setTask] = useState("");
  const dispatch = useAppDispatch();

  const addTask = useCallback(() => {
    if (task.trim() === "") {
      alert("Please enter a value");
      return;
    }
    dispatch(
      tasksListActions.addTaskToList({
        task: {
          id: task + "-" + new Date().toISOString(),
          title: task,
          state: false,
        },
        pageId,
      })
    );
    setTask("");
  }, [task, dispatch, pageId]);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) =>
      event.key === "Enter" && addTask(),
    [addTask]
  );

  const onTaskChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setTask(event.target.value),
    []
  );

  const onTaskCompleted = (task: Task) =>
    dispatch(
      tasksListActions.updateTaskInList({
        pageId,
        task,
      })
    );

  const onTaskDeleted = (task: Task) =>
    dispatch(
      tasksListActions.removeTaskFromList({
        pageId,
        taskId: task.id,
      })
    );

  const completedTasks =
    listPage?.tasks?.filter((completeTask) => completeTask.state === true) ??
    [];
  const unCompletedTask =
    listPage?.tasks?.filter((completeTask) => completeTask.state === false) ??
    [];

  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <SiTask size={30} className={styles.icon} />
        <p className={styles.title}> My Tasks</p>
      </div>
      <Input
        task={task}
        addTaskHandler={addTask}
        onKeyDown={onKeyDown}
        onTaskChanged={onTaskChanged}
      />
      
      {unCompletedTask?.map((task: Task) => (
        <TaskComponent
          onTaskCompleted={onTaskCompleted}
          key={task.id}
          task={task}
          onTaskDeleted={onTaskDeleted}
        />
      ))}

      {completedTasks.length > 0 && (
        <CompletedTasks
          tasks={completedTasks ?? []}
          onTaskCompleted={onTaskCompleted}
          onTaskDeleted={onTaskDeleted}
        />
      )}
    </div>
  );
};

export default ToDoPage;

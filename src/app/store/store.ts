import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./task-list-slice";
import { TasksPage } from "../utils/Types";

const loadState = (): { taskList: TasksPage[] } => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return { taskList: [] };
    }
    const parsedState = JSON.parse(serializedState);
    return {
      taskList: parsedState.taskList || [],
    };
  } catch (err) {
    console.error("Failed to load state:", err);
    return { taskList: [] };
  }
};

const store = configureStore({
  reducer: { taskList: taskListReducer },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

const saveState = (state: { taskList: TasksPage[] }) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.log("saveState: " + err);
  }
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

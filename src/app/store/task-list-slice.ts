import { createSlice } from "@reduxjs/toolkit";
import { TasksPage } from "../utils/Types";

const initialState: TasksPage[] = [
  {
    id: "myTasks",
    title: "My Tasks",
    tasks: [],
  },
];

const tasksListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addListTitle: (state, { payload }) => {
      state.push({
        id:
          Math.random().toString(16).slice(2) +
          new Date().getTime() +
          Math.random().toString(16).slice(2),
        tasks: [],
        title: payload,
      });
    },
    addTaskToList: (state, { payload }) => {
      console.log(
        "state= " +
          JSON.stringify(state) +
          " \npayload= " +
          JSON.stringify(payload.task)
      );
      // PAGE ID
      const tasksPageIndex = state.findIndex(
        (taskPage) => taskPage.id === payload.pageId
      );
      console.log("tasksPageIndex= " + tasksPageIndex);
      if (tasksPageIndex != -1) {
        const currentPage = state[tasksPageIndex];
        currentPage.tasks.unshift(payload.task);
      }
    },
    removeTaskFromList: (state, { payload }) => {
      const tasksPageIndex = state.findIndex(
        (taskPage) => taskPage.id === payload.pageId
      );
      if (tasksPageIndex != -1) {
        const currentPage = state[tasksPageIndex];

        currentPage.tasks = currentPage.tasks?.filter(
          (mTask) => mTask.id !== payload.taskId
        );
      }
    },
    updateTaskInList: (state, { payload }) => {
      const tasksPageIndex = state.findIndex(
        (taskPage) => taskPage.id === payload.pageId
      );
      if (tasksPageIndex != -1) {
        const taskIndex = state[tasksPageIndex].tasks?.findIndex(
          (mTask) => mTask.id === payload.task.id
        );
        if (taskIndex !== -1) {
          const currentPage = state[tasksPageIndex];
          currentPage.tasks[taskIndex] = payload.task;
        }
      }
    },
  },
});

export const tasksListActions = tasksListSlice.actions;
export default tasksListSlice.reducer;

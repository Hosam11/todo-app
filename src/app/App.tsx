import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ToDoPage from "./pages/todoPage/ToDoPage";
import MainNavigation from "./components/navigation/MainNavigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [{ path: "tasks/:id", element: <ToDoPage /> }],
  },
  {
    path: "search",
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

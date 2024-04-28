import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Student from "./pages/student";
import Teacher from "./pages/teacher";
import ClassAndSubjects from "./pages/classes&subjects";

const routes = createBrowserRouter([
  {
    element: <Dashboard></Dashboard>,
    path: "/",
  },
  {
    element: <Student />,
    path: "/students",
  },
  {
    element: <Teacher />,
    path: "/teachers",
  },
  {
    element: <ClassAndSubjects />,
    path: "/class",
  },
]);

export { routes };

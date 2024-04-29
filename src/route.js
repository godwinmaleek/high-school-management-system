import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Student from "./pages/student";
import Teacher from "./pages/teacher";

import Subjects from "./pages/subjects";

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
    element: <Subjects />,
    path: "/subjects",
  },
]);

export { routes };

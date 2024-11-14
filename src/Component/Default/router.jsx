import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authcation/Login";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../Pages/Dashboard/Home";
import AliaStudent from "../Pages/AliaStudent/AliaStudent";
import HifzStudent from "../Pages/HifzStudent/HifzStudent";
import ThackciciStudent from "../Pages/ThackciciStudent/ThackciciStudent";
import Hostel from "../Pages/Hostel/Hostel";
import HostelTeachers from "../Pages/HostelTeachers/HostelTeachers";
import ThacksisiTeachers from "../Pages/ThacksisiTeachers/ThacksisiTeachers";
import HifzTeachers from "../Pages/HifzTeachers/HifzTeachers";
import AliaTeachers from "../Pages/AliaTeachers/AliaTeachers";
import Admins from "../Pages/Admins/Admins";
import Messages from "../Pages/Messages/Messages";
import CreateAdmin from "../Pages/Admins/CreateAdmin/CreateAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/students/alia",
        element: <AliaStudent />,
      },
      {
        path: "/students/hifz",
        element: <HifzStudent />,
      },
      {
        path: "/students/thacksisi",
        element: <ThackciciStudent />,
      },
      {
        path: "/students/hostel",
        element: <Hostel />,
      },
      {
        path: "/teachers/alia",
        element: <AliaTeachers />,
      },
      {
        path: "/teachers/hifz",
        element: <HifzTeachers />,
      },
      {
        path: "/teachers/thacksisi",
        element: <ThacksisiTeachers />,
      },
      {
        path: "/teachers/hostel",
        element: <HostelTeachers />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/admins",
        element: <Admins />,
      },
      {
        path: "/create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
]);

export default router;

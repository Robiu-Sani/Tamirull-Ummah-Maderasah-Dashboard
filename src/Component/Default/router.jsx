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
import Private from "./Private";

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
        element: (
          <Private>
            <Home />
          </Private>
        ),
      },
      {
        path: "/students/alia",
        element: (
          <Private>
            <AliaStudent />
          </Private>
        ),
      },
      {
        path: "/students/hifz",
        element: (
          <Private>
            <HifzStudent />
          </Private>
        ),
      },
      {
        path: "/students/thacksisi",
        element: (
          <Private>
            <ThackciciStudent />
          </Private>
        ),
      },
      {
        path: "/students/hostel",
        element: (
          <Private>
            <Hostel />
          </Private>
        ),
      },
      {
        path: "/teachers/alia",
        element: (
          <Private>
            <AliaTeachers />
          </Private>
        ),
      },
      {
        path: "/teachers/hifz",
        element: (
          <Private>
            <HifzTeachers />
          </Private>
        ),
      },
      {
        path: "/teachers/thacksisi",
        element: (
          <Private>
            <ThacksisiTeachers />
          </Private>
        ),
      },
      {
        path: "/teachers/hostel",
        element: (
          <Private>
            <HostelTeachers />
          </Private>
        ),
      },
      {
        path: "/messages",
        element: (
          <Private>
            <Messages />
          </Private>
        ),
      },
      {
        path: "/admins",
        element: (
          <Private>
            <Admins />
          </Private>
        ),
      },
      {
        path: "/create-admin",
        element: (
          <Private>
            <CreateAdmin />
          </Private>
        ),
      },
    ],
  },
]);

export default router;

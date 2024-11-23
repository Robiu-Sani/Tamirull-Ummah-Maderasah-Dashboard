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
import ClientHomePage from "../Pages/ClientHomePage/ClientHomePage";
import UpdateAdmin from "../Pages/Admins/UpdateAdmin";
import AddStudent from "../Pages/AddStudent/AddStudent";
import AddTeacher from "../Pages/AddTeacher/AddTeacher";
import AddStafe from "../Pages/AddStafe/AddStafe";
import ReportsHostelSection from "../Pages/ReportsHostelSection/ReportsHostelSection";
import ReportsThackciciSection from "../Pages/ReportsThackciciSection/ReportsThackciciSection";
import ReportsHefzSection from "../Pages/ReportsHefzSection/ReportsHefzSection";
import ReportsAliaSection from "../Pages/ReportsAliaSection/ReportsAliaSection";
import CommingSoon from "./CommingSoon";
import AdminProfile from "../Pages/AdminProfile/AdminProfile";
import OtherAdminProfile from "../Pages/AdminProfile/OtherAdminProfile";

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
      {
        path: "/update/home",
        element: (
          <Private>
            <ClientHomePage />
          </Private>
        ),
      },
      {
        path: "/update-admin/:id",
        element: (
          <Private>
            <UpdateAdmin />
          </Private>
        ),
      },
      {
        path: "/add-student",
        element: (
          <Private>
            <AddStudent />
          </Private>
        ),
      },
      {
        path: "/add-teacher",
        element: (
          <Private>
            <AddTeacher />
          </Private>
        ),
      },
      {
        path: "/add-stafe",
        element: (
          <Private>
            <AddStafe />
          </Private>
        ),
      },
      {
        path: "/reports/alia",
        element: (
          <Private>
            <ReportsAliaSection />
          </Private>
        ),
      },
      {
        path: "/reports/hifz",
        element: (
          <Private>
            <ReportsHefzSection />
          </Private>
        ),
      },
      {
        path: "/reports/thacksisi",
        element: (
          <Private>
            <ReportsThackciciSection />
          </Private>
        ),
      },
      {
        path: "/reports/hostel",
        element: (
          <Private>
            <ReportsHostelSection />
          </Private>
        ),
      },
      {
        path: "/update/about",
        element: (
          <Private>
            <CommingSoon />
          </Private>
        ),
      },
      {
        path: "/update/contact",
        element: (
          <Private>
            <CommingSoon />
          </Private>
        ),
      },
      {
        path: "/update/services",
        element: (
          <Private>
            <CommingSoon />
          </Private>
        ),
      },
      {
        path: "/admin_profile",
        element: (
          <Private>
            <AdminProfile />
          </Private>
        ),
      },
      {
        path: "/admin_profile/:email",
        element: (
          <Private>
            <OtherAdminProfile />
          </Private>
        ),
      },
    ],
  },
]);

export default router;

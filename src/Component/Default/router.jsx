import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authcation/Login";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../Pages/Dashboard/Home";
import HostelTeachers from "../Pages/HostelTeachers/HostelTeachers";
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
import AllPostsData from "../Pages/AllPostsData/AllPostsData";
import AllStudent from "../Pages/AllStudent/AllStudent";
import StudentDetails from "../Pages/AllStudent/studentDetails/StudentDetails";
import EditStudent from "../Pages/AllStudent/EditStudent/EditStudent";
import AllTeacher from "../Pages/AllTeacher/AllTeacher";
import TeacherDetails from "../Pages/AllTeacher/teacherDetails/TeacherDetails";
import EditTeacher from "../Pages/AllTeacher/EditTeacher/EditTeacher";
import AllStaff from "../Pages/AllStaff/AllStaff";
import StafeDetails from "../Pages/AllStaff/StafeDetails/StafeDetails";
import EditStaff from "../Pages/AllStaff/EditStaff/EditStaff";
import AllStudentsFathers from "../Pages/Student-Information/AllStudentsFathers/AllStudentsFathers";
import FathersDetails from "../Pages/Student-Information/AllStudentsFathers/FathersDetails/FathersDetails";
import EditFather from "../Pages/Student-Information/AllStudentsFathers/EditFather/EditFather";
import AllStudentsMothers from "../Pages/Student-Information/AllStudentsMothers/AllStudentsMothers";
import MotherDetails from "../Pages/Student-Information/AllStudentsMothers/MotherDetails/MotherDetails";
import EditMother from "../Pages/Student-Information/AllStudentsMothers/EditMother/EditMother";
import AllStudentsGairdeans from "../Pages/Student-Information/AllStudentsGairdeans/AllStudentsGairdeans";
import GairdeanDetails from "../Pages/Student-Information/AllStudentsGairdeans/GairdeanDetails/GairdeanDetails";
import EditGairdean from "../Pages/Student-Information/AllStudentsGairdeans/EditGairdean/EditGairdean";

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
        path: "/students/allStudent",
        element: (
          <Private>
            <AllStudent />
          </Private>
        ),
      },
      {
        path: "/staff/all-staff",
        element: (
          <Private>
            <AllStaff />
          </Private>
        ),
      },
      {
        path: "/teacher/all-teacher",
        element: (
          <Private>
            <AllTeacher />
          </Private>
        ),
      },
      {
        path: "/students/student-details/:id",
        element: (
          <Private>
            <StudentDetails />
          </Private>
        ),
      },
      {
        path: "/teacher/teacher-details/:id",
        element: (
          <Private>
            <TeacherDetails />
          </Private>
        ),
      },
      {
        path: "/staff/staff-details/:id",
        element: (
          <Private>
            <StafeDetails />
          </Private>
        ),
      },
      {
        path: "/students/student-edit/:id",
        element: (
          <Private>
            <EditStudent />
          </Private>
        ),
      },
      {
        path: "/teacher/teacher-edit/:id",
        element: (
          <Private>
            <EditTeacher />
          </Private>
        ),
      },
      {
        path: "/staff/staff-edit/:id",
        element: (
          <Private>
            <EditStaff />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-father",
        element: (
          <Private>
            <AllStudentsFathers />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-father/details/:id",
        element: (
          <Private>
            <FathersDetails />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-father/edit/:id",
        element: (
          <Private>
            <EditFather />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-mother",
        element: (
          <Private>
            <AllStudentsMothers />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-mother/details/:id",
        element: (
          <Private>
            <MotherDetails />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-mother/edit/:id",
        element: (
          <Private>
            <EditMother />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-gairdean",
        element: (
          <Private>
            <AllStudentsGairdeans />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-gairdean/details/:id",
        element: (
          <Private>
            <GairdeanDetails />
          </Private>
        ),
      },
      {
        path: "/all-student-informetion/stunents-gairdean/edit/:id",
        element: (
          <Private>
            <EditGairdean />
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
        path: "/update/all-posts-data",
        element: (
          <Private>
            <AllPostsData />
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

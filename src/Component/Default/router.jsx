import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authcation/Login";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../Pages/Dashboard/Home";
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
import AllNotice from "../Pages/Additional-Information/AllNotice/AllNotice";
import EditNotice from "../Pages/Additional-Information/AllNotice/EditNotice/EditNotice";
import CarouselData from "../Pages/Additional-Information/CarouselData/CarouselData";
import AboutText from "../Pages/Additional-Information/AboutText/AboutText";
import EditAboutText from "../Pages/Additional-Information/AboutText/EditAboutText/EditAboutText";
import AllFees from "../Pages/Additional-Information/AllFees/AllFees";
import ContactInformation from "../Pages/Additional-Information/ContactInformation/ContactInformation";
import NoticeDetails from "../Pages/Additional-Information/AllNotice/NoticeDetails/NoticeDetails";
import FirstTutiralEdit from "../Pages/ExamResult/FirstTutiral/FirstTutiralEdit/FirstTutiralEdit";
import FirstTutiralDetails from "../Pages/ExamResult/FirstTutiral/FirstTutiralDetails/FirstTutiralDetails";
import FirstTutiral from "../Pages/ExamResult/FirstTutiral/FirstTutiral";
import FainalExam from "../Pages/ExamResult/FainalExam/FainalExam";
import FainalExamDetails from "../Pages/ExamResult/FainalExam/FainalExamDetails/FainalExamDetails";
import FainalExamEdit from "../Pages/ExamResult/FainalExam/FainalExamEdit/FainalExamEdit";
import SecendTutiral from "../Pages/ExamResult/SecendTutiral/SecendTutiral";
import SecendTutiralDetails from "../Pages/ExamResult/SecendTutiral/SecendTutiralDetails/SecendTutiralDetails";
import SecendTutiralEdit from "../Pages/ExamResult/SecendTutiral/SecendTutiralEdit/SecendTutiralEdit";
import HalfYear from "../Pages/ExamResult/HalfYear/HalfYear";
import HalfYearDetails from "../Pages/ExamResult/HalfYear/HalfYearDetails/HalfYearDetails";
import HalfYearEdit from "../Pages/ExamResult/HalfYear/HalfYearEdit/HalfYearEdit";
import TeachersProfile from "../Pages/TeachersProfile/TeachersProfile";
import AboutTextDetails from "../Pages/Additional-Information/AboutText/AboutTextDetails/AboutTextDetails";

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
        path: "/additional-information/all-notice",
        element: (
          <Private>
            <AllNotice />
          </Private>
        ),
      },
      {
        path: "/additional-information/all-notice/edit/:id",
        element: (
          <Private>
            <EditNotice />
          </Private>
        ),
      },
      {
        path: "/additional-information/all-notice/details/:id",
        element: (
          <Private>
            <NoticeDetails />
          </Private>
        ),
      },
      {
        path: "/additional-information/carousel-information",
        element: (
          <Private>
            <CarouselData />
          </Private>
        ),
      },
      {
        path: "/additional-information/about-text",
        element: (
          <Private>
            <AboutText />
          </Private>
        ),
      },
      {
        path: "/additional-information/about-text/edit/:id",
        element: (
          <Private>
            <EditAboutText />
          </Private>
        ),
      },
      {
        path: "/additional-information/about-text/details/:id",
        element: (
          <Private>
            <AboutTextDetails />
          </Private>
        ),
      },
      {
        path: "/additional-information/fees-information",
        element: (
          <Private>
            <AllFees />
          </Private>
        ),
      },
      {
        path: "/additional-information/contact-information",
        element: (
          <Private>
            <ContactInformation />
          </Private>
        ),
      },
      {
        path: "/exam-results/first-tutiral",
        element: (
          <Private>
            <FirstTutiral />
          </Private>
        ),
      },
      {
        path: "/exam-results/first-tutiral/details/:id",
        element: (
          <Private>
            <FirstTutiralDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/first-tutiral/edit/:id",
        element: (
          <Private>
            <FirstTutiralEdit />
          </Private>
        ),
      },
      {
        path: "/exam-results/fainal-exam",
        element: (
          <Private>
            <FainalExam />
          </Private>
        ),
      },
      {
        path: "/exam-results/fainal-exam/details/:id",
        element: (
          <Private>
            <FainalExamDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/fainal-exam/edit/:id",
        element: (
          <Private>
            <FainalExamEdit />
          </Private>
        ),
      },
      {
        path: "/exam-results/secend-tutiral",
        element: (
          <Private>
            <SecendTutiral />
          </Private>
        ),
      },
      {
        path: "/exam-results/secend-tutiral/details/:id",
        element: (
          <Private>
            <SecendTutiralDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/secend-tutiral/edit/:id",
        element: (
          <Private>
            <SecendTutiralEdit />
          </Private>
        ),
      },
      {
        path: "/exam-results/half-yearly",
        element: (
          <Private>
            <HalfYear />
          </Private>
        ),
      },
      {
        path: "/exam-results/half-yearly/details/:id",
        element: (
          <Private>
            <HalfYearDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/half-yearly/edit/:id",
        element: (
          <Private>
            <HalfYearEdit />
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
        path: "/teachers-profile",
        element: (
          <Private>
            <TeachersProfile />
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

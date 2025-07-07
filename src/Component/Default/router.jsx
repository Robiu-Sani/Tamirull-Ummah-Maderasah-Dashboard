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
import FirstTutiral from "../Pages/ExamResult/FirstTutiral/FirstTutiral";
import FainalExam from "../Pages/ExamResult/FainalExam/FainalExam";
import SecendTutiral from "../Pages/ExamResult/SecendTutiral/SecendTutiral";
import HalfYear from "../Pages/ExamResult/HalfYear/HalfYear";
import TeachersProfile from "../Pages/TeachersProfile/TeachersProfile";
import AboutTextDetails from "../Pages/Additional-Information/AboutText/AboutTextDetails/AboutTextDetails";
import AddResult from "../Pages/AddResult/AddResult";
import AddResultForm from "../Pages/AddResult/AddResultForm";
import AllResult from "../Pages/ExamResult/AllResult/AllResult";
import ModelTest from "../Pages/ExamResult/ModelTest/ModelTest";
import Test from "../Pages/ExamResult/Test/Test";
import ResultEdit from "../Pages/ExamResult/ResultEdit/ResultEdit";
import ResultDetails from "../Pages/ExamResult/ResultDetails/ResultDetails";
import TutiralDetails from "../Pages/ExamResult/ResultDetails/TutiralDetails";
import ModeltestDetails from "../Pages/ExamResult/ResultDetails/ModeltestDetails";
import FinalExamDetails from "../Pages/ExamResult/ResultDetails/FinalExamDetails";
import TeachersIdTable from "../Pages/ExamResult/TeachersIdTable/TeachersIdTable";
import AddAditionalInfo from "../Pages/AllStudent/AddAditionalInfo/AddAditionalInfo";
import ApplyedAdmition from "../Pages/ReportsHefzSection/ApplyedAdmition";
import ContactMessage from "../Pages/ReportsAliaSection/ContactMessage";
import ConsultingMessage from "../Pages/ReportsThackciciSection/ConsultingMessage";
import PostDetails from "../Pages/AllPostsData/PostDetails";
import PostsReports from "../Pages/AllPostsData/PostsReports";
import AddNotice from "../Pages/ClientHomePage/AddNotice";
import UpdateAboutOurMaderasah from "../Pages/ClientHomePage/UpdateAboutOurMaderasah";
import UploadImages from "../Pages/UploadImages/UploadImages";
import UploadVideos from "../Pages/UploadVideos/UploadVideos";
import SetResultDate from "../Pages/SetResultDate/SetResultDate";
import Allimages from "../Pages/UploadImages/Allimages";
import AllVideos from "../Pages/UploadVideos/AllVideos";
import TeacherPrivate from "./TeacherPrivate";
import CreateGain from "../Pages/our-gain/CreateGain";
import AllGainData from "../Pages/our-gain/AllGainData";
import EditGain from "../Pages/our-gain/EditGain";
import UpdatePassword from "../Pages/UpdatePassword/UpdatePassword";
import MenageExam from "../Pages/MenageExam/MenageExam";
import MenageOrherThing from "../Pages/menage-otherThing/MenageOrherThing";
import AddMultipleStudent from "../Pages/addMultipleStudent/AddMultipleStudent";
import AddExamResult from "../Pages/add-exam-result/AddResult";

const router = createBrowserRouter([
  // login main path
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  //dashboard path
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
        path: "/update-teachers-password/:id",
        element: <UpdatePassword />,
      },
      // all users
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
      // student informations
      {
        path: "/students/add-students-additional-info/:id",
        element: (
          <Private>
            <AddAditionalInfo />
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
      //additional informations
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
      //   result route is here
      {
        path: "/exam-results/all-exam-result",
        element: (
          <Private>
            <AllResult />
          </Private>
        ),
      },
      {
        path: "/exam-results/exam-result-edit/:id",
        element: (
          <Private>
            <ResultEdit />
          </Private>
        ),
      },
      {
        path: "/exam-results/exam-result-details/:id",
        element: (
          <Private>
            <ResultDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/exam-result-tutiral-details/:id",
        element: (
          <Private>
            <TutiralDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/exam-result-final-exam-details/:id",
        element: (
          <Private>
            <FinalExamDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/exam-result/:id",
        element: (
          <Private>
            <ModeltestDetails />
          </Private>
        ),
      },
      {
        path: "/exam-results/model-test-exam-result",
        element: (
          <Private>
            <ModelTest />
          </Private>
        ),
      },
      {
        path: "/exam-results/test-exam-result",
        element: (
          <Private>
            <Test />
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
        path: "/exam-results/fainal-exam",
        element: (
          <Private>
            <FainalExam />
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
        path: "/exam-results/half-yearly",
        element: (
          <Private>
            <HalfYear />
          </Private>
        ),
      },
      {
        path: "/add-exam-result/:type",
        element: <AddExamResult />,
      },
      {
        path: "/add-multiple-student",
        element: <AddMultipleStudent />,
      },

      // -------------
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
      // update client  routes
      {
        path: "/update/home",
        element: (
          <Private>
            <ClientHomePage />
          </Private>
        ),
      },
      {
        path: "/update/add-notice",
        element: (
          <Private>
            <AddNotice />
          </Private>
        ),
      },
      {
        path: "/blog/add-blog",
        element: (
          <Private>
            <UpdateAboutOurMaderasah />
          </Private>
        ),
      },
      {
        path: "/upload-image",
        element: (
          <Private>
            <UploadImages />
          </Private>
        ),
      },
      {
        path: "/upload-about-gain",
        element: (
          <Private>
            <CreateGain />
          </Private>
        ),
      },
      {
        path: "/all-about-gain",
        element: (
          <Private>
            <AllGainData />
          </Private>
        ),
      },
      {
        path: "/edit-gain/:id",
        element: (
          <Private>
            <EditGain />
          </Private>
        ),
      },
      {
        path: "/upload-video",
        element: (
          <Private>
            <UploadVideos />
          </Private>
        ),
      },
      {
        path: "/update-exam-relies-date",
        element: (
          <Private>
            <SetResultDate />
          </Private>
        ),
      },
      // other route
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
      // notifection is start from here
      {
        path: "/notifections/messages",
        element: (
          <Private>
            <ContactMessage />
          </Private>
        ),
      },
      {
        path: "/notifictions/admition-Student",
        element: (
          <Private>
            <ApplyedAdmition />
          </Private>
        ),
      },
      {
        path: "/notifictions/consulting",
        element: (
          <Private>
            <ConsultingMessage />
          </Private>
        ),
      },
      {
        path: "/notifictions/post-reports",
        element: (
          <Private>
            <PostsReports />
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
        path: "/update/single-posts-data/:id",
        element: (
          <Private>
            <PostDetails />
          </Private>
        ),
      },
      {
        path: "/notifictions/all-images",
        element: (
          <Private>
            <Allimages />
          </Private>
        ),
      },
      {
        path: "/notifictions/all-videos",
        element: (
          <Private>
            <AllVideos />
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
        path: "/menage-exam",
        element: (
          <Private>
            <MenageExam />
          </Private>
        ),
      },
      {
        path: "/admin/profile",
        element: (
          <Private>
            <TeachersProfile />
          </Private>
        ),
      },
      {
        path: "/admin/add-exam-result",
        element: (
          <Private>
            <AddResult />
          </Private>
        ),
      },
      {
        path: "/admin-blog/add-blog",
        element: (
          <Private>
            <CommingSoon />
          </Private>
        ),
      },
      {
        path: "/admin/exam-results/result-by-single-teachers-id",
        element: (
          <Private>
            <TeachersIdTable />
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
        path: "/menage-other-thing/:type",
        element: (
          <Private>
            <MenageOrherThing />
          </Private>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/teachers",
        element: (
          <TeacherPrivate>
            <TeachersProfile />
          </TeacherPrivate>
        ),
      },
      {
        path: "/teachers-blog/add-blog",
        element: (
          <TeacherPrivate>
            {/* <UpdateAboutOurMaderasah /> */}
            <CommingSoon />
          </TeacherPrivate>
        ),
      },
      {
        path: "/add-exam-result",
        element: (
          <TeacherPrivate>
            <AddResult />
          </TeacherPrivate>
        ),
      },
      {
        path: "/add-exam-result/result-form",
        element: <AddResultForm />,
      },
      {
        path: "/admin_profile/:email",
        element: (
          <TeacherPrivate>
            <OtherAdminProfile />
          </TeacherPrivate>
        ),
      },
      {
        path: "/exam-results/result-by-single-teachers-id",
        element: (
          <TeacherPrivate>
            <TeachersIdTable />
          </TeacherPrivate>
        ),
      },
      {
        path: "/teacher-profile/teacher-edit/:id",
        element: (
          <TeacherPrivate>
            <EditTeacher />
          </TeacherPrivate>
        ),
      },
    ],
  },
]);

export default router;

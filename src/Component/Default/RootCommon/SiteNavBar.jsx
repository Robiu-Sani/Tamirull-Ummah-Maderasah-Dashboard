import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { LiaHomeSolid } from "react-icons/lia";
import {
  MdArrowForwardIos,
  MdPeople,
  MdUpdate,
  MdHome,
  MdAutoAwesome,
  MdOutlineJoinFull,
  MdAddchart,
  MdOutlineTableView,
  MdBlurOn,
  MdImage,
  MdVideoLabel,
  MdFollowTheSigns,
  MdBluetoothDrive,
} from "react-icons/md";
import {
  FaUserGraduate,
  FaUserCircle,
  FaAudioDescription,
  FaRegUserCircle,
  FaArtstation,
  FaTransgenderAlt,
} from "react-icons/fa";
import {
  RiDashboardFill,
  RiFileList3Line,
  RiLogoutCircleRLine,
  RiProfileLine,
} from "react-icons/ri";
import { GiNestedHexagons, GiTeacher } from "react-icons/gi";
import { FaDiamond, FaWebAwesome } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { SiStaffbase } from "react-icons/si";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbHexagonalPrism } from "react-icons/tb";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const adminNavItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboardFill />,
  },
  {
    name: "Add Users",
    icon: <IoPersonAddSharp />,
    children: [
      {
        name: "Student",
        path: "/add-student",
        icon: <PiStudentFill />,
      },
      {
        name: "Teacher",
        path: "/add-teacher",
        icon: <GiTeacher />,
      },
      {
        name: "Stafe",
        path: "/add-stafe",
        icon: <SiStaffbase />,
      },
      // { name: "Hostel", path: "/students/hostel", icon: <FaBed /> },
    ],
  },
  {
    name: "All User",
    icon: <MdPeople />,
    children: [
      {
        name: "All Students",
        path: "/students/allStudent",
        icon: <FaUserGraduate />,
      },
      {
        name: "All Teacher",
        path: "/teacher/all-teacher",
        icon: <LiaChalkboardTeacherSolid />,
      },
      {
        name: "All Staff",
        path: "/staff/all-staff",
        icon: <FaArtstation />,
      },
    ],
  },
  {
    name: "Students Info: ",
    icon: <MdOutlineJoinFull />,
    children: [
      {
        name: "Students Father",
        path: "/all-student-informetion/stunents-father",
        icon: <MdAutoAwesome />,
      },
      {
        name: "Students Mother",
        path: "/all-student-informetion/stunents-mother",
        icon: <MdAutoAwesome />,
      },
      {
        name: "Students Gairdean",
        path: "/all-student-informetion/stunents-gairdean",
        icon: <MdAutoAwesome />,
      },
    ],
  },
  {
    name: "Additional Info",
    icon: <FaAudioDescription />,
    children: [
      {
        name: "All Notices",
        path: "/additional-information/all-notice",
        icon: <TbHexagonalPrism />,
      },
      {
        name: "Slide Data",
        path: "/additional-information/carousel-information",
        icon: <TbHexagonalPrism />,
      },
      {
        name: "Institution Text",
        path: "/additional-information/about-text",
        icon: <TbHexagonalPrism />,
      },
      {
        name: "Institution Fees",
        path: "/additional-information/fees-information",
        icon: <TbHexagonalPrism />,
      },
      {
        name: "Contact Info:",
        path: "/additional-information/contact-information",
        icon: <TbHexagonalPrism />,
      },
    ],
  },

  {
    name: "Exam Results",
    icon: <FaRegUserCircle />,
    children: [
      {
        name: "All Results",
        path: "/exam-results/all-exam-result",
        icon: <GiNestedHexagons />,
      },
      {
        name: "First Tutiral",
        path: "/exam-results/first-tutiral",
        icon: <GiNestedHexagons />,
      },
      {
        name: "Half Yearly",
        path: "/exam-results/half-yearly",
        icon: <GiNestedHexagons />,
      },
      {
        name: "Secend Tutiral",
        path: "/exam-results/secend-tutiral",
        icon: <GiNestedHexagons />,
      },
      {
        name: "Fainal Exam",
        path: "/exam-results/fainal-exam",
        icon: <GiNestedHexagons />,
      },
      {
        name: "Model Test",
        path: "/exam-results/model-test-exam-result",
        icon: <GiNestedHexagons />,
      },
      {
        name: "Test",
        path: "/exam-results/test-exam-result",
        icon: <GiNestedHexagons />,
      },
    ],
  },
  {
    name: "Notifections",
    icon: <FaTransgenderAlt />,
    children: [
      {
        name: "Contact Messages",
        path: "/notifections/messages",
        icon: <RiFileList3Line />,
      },
      {
        name: "Admition Notice",
        path: "/notifictions/admition-Student",
        icon: <RiFileList3Line />,
      },
      {
        name: "Consulting",
        path: "/notifictions/consulting",
        icon: <RiFileList3Line />,
      },
      {
        name: "All Posts",
        path: "/update/all-posts-data",
        icon: <RiFileList3Line />,
      },
      {
        name: "All Posts Reports",
        path: "/notifictions/post-reports",
        icon: <RiFileList3Line />,
      },
      {
        name: "All Images",
        path: "/notifictions/all-images",
        icon: <MdImage />,
      },
      {
        name: "All Videos",
        path: "/notifictions/all-videos",
        icon: <MdVideoLabel />,
      },
    ],
  },
  {
    name: "Update Client",
    icon: <MdUpdate />,
    children: [
      { name: "Home Page", path: "/update/home", icon: <MdHome /> },
      // {
      //   name: "All Post Details",
      //   path: "/update/all-posts-data",
      //   icon: <MdPeople />,
      // },
      {
        name: "Add Notice",
        path: "/update/add-notice",
        icon: <FaWebAwesome />,
      },
      { name: "Add Blog", path: "/blog/add-blog", icon: <MdBlurOn /> },
      { name: "Upload Image", path: "/upload-image", icon: <MdImage /> },
      { name: "Upload Video", path: "/upload-video", icon: <MdVideoLabel /> },
      {
        name: "Set Result Re: Date",
        path: "/update-exam-relies-date",
        icon: <MdFollowTheSigns />,
      },
    ],
  },
  // {
  //   name: "Messages",
  //   path: "/messages",
  //   icon: <MdMessage />,
  // },
  {
    name: "Profile",
    path: "/admin/profile",
    icon: <FaDiamond />,
    children: [
      {
        name: "Profile",
        path: "/admin/profile",
        icon: <MdAddchart />,
      },
      {
        name: "Add Result",
        path: "/admin/add-exam-result",
        icon: <MdAddchart />,
      },
      {
        name: "Added Result",
        path: "/admin/exam-results/result-by-single-teachers-id",
        icon: <MdOutlineTableView />,
      },
      {
        name: "Write a Blog",
        path: "/admin-blog/add-blog",
        icon: <MdBluetoothDrive />,
      },
    ],
  },
];

const TeachersNavItems = [
  {
    name: "Profile",
    path: "/teachers",
    icon: <RiProfileLine />,
  },
  {
    name: "Add Result",
    path: "/add-exam-result",
    icon: <MdAddchart />,
  },
  {
    name: "Added Result",
    path: "/exam-results/result-by-single-teachers-id",
    icon: <MdOutlineTableView />,
  },
  {
    name: "Write a Blog",
    path: "/teachers-blog/add-blog",
    icon: <MdBluetoothDrive />,
  },
];

export default function SiteNavBar({ handleCallNav }) {
  const [openMenu, setOpenMenu] = useState({});
  const userInfo = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You really want to log-out",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log-out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("data");
        navigate("/");
        toast.success("You Successfully Log-out");
      }
    });
  };

  const toggleMenu = (index) => {
    setOpenMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full h-full bg-white p-4 flex flex-col gap-5">
      <div className="w-full  border-b py-5">
        <Toaster />
        <img
          src="http://res.cloudinary.com/duegkjfvf/image/upload/v1736431614/f0clqiynnor6tavnuonl.png"
          alt="tamirul ummah maderasah logo"
          className="mx-auto w-[80px] h-[80px]"
        />
      </div>
      <div className="w-full dashboard h-[calc(100vh-230px)] scroll-none overflow-y-scroll">
        {userInfo.type === "admin"
          ? adminNavItems.map((item, index) => (
              <div key={index} className="w-full">
                {item.children ? (
                  <div
                    className={`w-full gap-2 p-1 rounded-md px-3 my-1 cursor-pointer ${
                      openMenu[index]
                        ? "bg-[rgba(0,10,27,0.74)] text-white"
                        : "text-gray-700"
                    }`}
                    onClick={() => toggleMenu(index)}
                  >
                    <div className="w-full flex justify-between  items-center">
                      <div className="flex gap-3  items-center">
                        {item.icon}
                        {item.name}
                      </div>
                      <MdArrowForwardIos
                        className={`transition-transform ${
                          openMenu[index] ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    {openMenu[index] && (
                      <div className="w-full flex flex-col gap-1 mt-2">
                        {item.children.map((child, idx) => (
                          <NavLink
                            key={idx}
                            to={child.path}
                            onClick={() => handleCallNav(false)}
                            className={({ isActive }) =>
                              `w-full flex items-center gap-2 p-1 rounded-md px-3 ${
                                isActive
                                  ? "bg-white !text-gray-900"
                                  : "hover:!text-gray-900 text-gray-200 hover:bg-gray-100"
                              }`
                            }
                            style={{ color: openMenu[index] ? "white" : "" }}
                          >
                            {child.icon}
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => handleCallNav(false)}
                    className={({ isActive }) =>
                      `w-full flex items-center gap-2 p-1 rounded-md px-3 ${
                        isActive
                          ? "bg-[rgba(0,10,27,0.74)] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))
          : TeachersNavItems.map((item, index) => (
              <div key={index} className="w-full flex flex-col gap-1">
                {item.children ? (
                  <div
                    className={`w-full gap-2 p-1 rounded-md px-3 !my-1 cursor-pointer ${
                      openMenu[index]
                        ? "bg-[rgba(0,10,27,0.74)] text-white"
                        : "text-gray-700"
                    }`}
                    onClick={() => toggleMenu(index)}
                  >
                    <div className="w-full flex justify-between  items-center">
                      <div className="flex gap-3  items-center">
                        {item.icon}
                        {item.name}
                      </div>
                      <MdArrowForwardIos
                        className={`transition-transform ${
                          openMenu[index] ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    {openMenu[index] && (
                      <div className="w-full flex flex-col gap-1 mt-2">
                        {item.children.map((child, idx) => (
                          <NavLink
                            key={idx}
                            to={child.path}
                            onClick={() => handleCallNav(false)}
                            className={({ isActive }) =>
                              `w-full flex items-center gap-2 p-1 rounded-md px-3 ${
                                isActive
                                  ? "bg-white !text-gray-900"
                                  : "hover:!text-gray-900 text-gray-200 hover:bg-gray-100"
                              }`
                            }
                            style={{ color: openMenu[index] ? "white" : "" }}
                          >
                            {child.icon}
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => handleCallNav(false)}
                    className={({ isActive }) =>
                      `w-full flex items-center gap-2 p-1 rounded-md px-3 ${
                        isActive
                          ? "bg-[rgba(0,10,27,0.74)] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}{" "}
        <br />
        <hr />
      </div>
      <div className="w-full h-[40px] flex justify-center items-center">
        <button
          onClick={handleLogout}
          className="w-full px-3 p-2 rounded-md flex border justify-between items-center"
        >
          <div className="flex items-center gap-2">
            {userInfo?.teacherImage ? (
              <img
                src={userInfo.teacherImage}
                alt="Admin Profile"
                className="w-[35px] h-[35px] rounded-full"
              />
            ) : (
              <FaUserCircle className="text-3xl" />
            )}
            <h2 className="font-semibold">
              {userInfo?.teacherName || "Loading"}
            </h2>
          </div>
          <RiLogoutCircleRLine />
        </button>
      </div>
    </div>
  );
}

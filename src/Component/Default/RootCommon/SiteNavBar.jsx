import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../image/logo.png";
// import { LiaHomeSolid } from "react-icons/lia";
import {
  MdArrowForwardIos,
  MdPeople,
  MdSchool,
  MdUpdate,
  MdReport,
  MdHome,
  MdSettings,
  MdMessage,
} from "react-icons/md";
import {
  FaBed,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserCircle,
} from "react-icons/fa";
import {
  RiDashboardFill,
  RiFileList3Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { FaDiamond } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { SiStaffbase } from "react-icons/si";
import useSingleAdmin from "../../customComponent/useSingleAdmin";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const navItems = [
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
        icon: <LiaChalkboardTeacherSolid />,
      },
    ],
  },
  {
    name: "Teachers",
    icon: <GiTeacher />,
    children: [
      {
        name: "Alia Section",
        path: "/teachers/alia",
        icon: <FaUserGraduate />,
      },
      {
        name: "Hifz Section",
        path: "/teachers/hifz",
        icon: <FaChalkboardTeacher />,
      },
      {
        name: "Thacksisi Section",
        path: "/teachers/thacksisi",
        icon: <MdSchool />,
      },
      { name: "Hostel", path: "/teachers/hostel", icon: <FaBed /> },
    ],
  },
  {
    name: "Reports",
    icon: <MdReport />,
    children: [
      {
        name: "Alia Section",
        path: "/reports/alia",
        icon: <RiFileList3Line />,
      },
      {
        name: "Hifz Section",
        path: "/reports/hifz",
        icon: <RiFileList3Line />,
      },
      {
        name: "Thacksisi Section",
        path: "/reports/thacksisi",
        icon: <RiFileList3Line />,
      },
      { name: "Hostel", path: "/reports/hostel", icon: <RiFileList3Line /> },
    ],
  },
  {
    name: "Update Client",
    icon: <MdUpdate />,
    children: [
      { name: "Home Page", path: "/update/home", icon: <MdHome /> },
      {
        name: "All Post Details",
        path: "/update/all-posts-data",
        icon: <MdPeople />,
      },
      { name: "Contact Page", path: "/update/contact", icon: <MdReport /> },
      { name: "Services Page", path: "/update/services", icon: <MdSettings /> },
    ],
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <MdMessage />,
  },
  {
    name: "Admins",
    path: "/admins",
    icon: <FaDiamond />,
  },
];

export default function SiteNavBar({ handleCallNav }) {
  const [openMenu, setOpenMenu] = useState({});
  const navigate = useNavigate();
  const { logedAdmin } = useSingleAdmin();

  const toggleMenu = (index) => {
    setOpenMenu((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full h-full bg-white p-4 flex flex-col gap-5">
      <div className="w-full  border-b py-5">
        <img
          src={logo}
          alt="tamirul ummah maderasah logo"
          className="mx-auto w-[80px] h-[80px]"
        />
      </div>
      <div className="w-full dashboard h-[calc(100vh-230px)] scroll-none overflow-y-scroll">
        {navItems.map((item, index) => (
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
        ))}
      </div>
      <div className="w-full h-[40px] flex justify-center items-center">
        <button
          onClick={() => navigate("/admin_profile")}
          className="w-full px-3 p-2 rounded-md flex border justify-between items-center"
        >
          <div className="flex items-center gap-2">
            {logedAdmin?.profile ? (
              <img
                src={logedAdmin.profile}
                alt="Admin Profile"
                className="w-[35px] h-[35px] rounded-full"
              />
            ) : (
              <FaUserCircle className="text-3xl" />
            )}
            <h2 className="font-semibold">{logedAdmin?.name || "Loading"}</h2>
          </div>
          <RiLogoutCircleRLine />
        </button>
      </div>
    </div>
  );
}

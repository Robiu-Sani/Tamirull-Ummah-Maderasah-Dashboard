import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoReorderFourSharp } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

export default function DashboardHeader({ handleCallNav }) {
  const [callNotifiction, setCallNotifiction] = useState(false);
  const [callSearchBox, setSearchBox] = useState(false);

  return (
    <div className="w-full h-[60px] relative p-3 px-5 flex shadow-md justify-between items-center border-b bg-white">
      <div className="flex justify-start items-center">
        <span
          onClick={() => handleCallNav(true)}
          className="p-1 block md:hidden cursor-pointer rounded-md border"
        >
          <IoReorderFourSharp />
        </span>
        <span className=" font-semibold text-gray-600 hidden md:block">
          Dashboard
        </span>
      </div>
      <div className="flex justify-end items-center gap-3">
        <div className="flex justify-center items-center">
          <input
            type="button"
            onClick={() => setSearchBox(!callSearchBox)}
            value="Search here"
            className="w-[250px] text-gray-500 hidden md:block cursor-pointer p-1 px-3 text-left border rounded-md"
          />
          <span className="text-xl block md:hidden cursor-pointer p-1">
            <FiSearch onClick={() => setSearchBox(!callSearchBox)} />
          </span>
          <span
            onClick={() => setCallNotifiction(!callNotifiction)}
            className={`p-2 my-auto relative cursor-pointer rounded-md ml-2 border`}
          >
            <span className="absolute p-1 rounded-full bg-gray-700 top-0 right-0"></span>
            <MdOutlineNotificationsActive />
          </span>
        </div>
      </div>
      <div
        className={`w-[calc(100%-40px)] sm:w-[350px] ${
          callNotifiction ? "block" : "hidden"
        }  rounded-md shadow-md max-h-[500px] overflow-y-auto bg-white absolute border top-[50px] right-5`}
      >
        <div className="p-2 border-b">
          <h3>Notifections</h3>
        </div>
        <div className="p-3"></div>
      </div>

      {callSearchBox && (
        <div className="w-full fixed top-0 left-0 z-[1000000000] min-h-screen flex justify-center items-center bg-[#0000007e]">
          <div
            onClick={() => setSearchBox(!callSearchBox)}
            className="absolute top-0 left-0 w-full h-full cursor-pointer"
          ></div>
          <div className="max-w-[550px] relative z-[1000000001] flex flex-col justify-between overflow-hidden sm:w-[600px] h-full sm:max-h-[650px] sm:min-h-[500px] bg-white rounded-md shadow-md">
            <input
              type="Search"
              placeholder="Search here"
              className="w-full p-4 outline-0 pr-10 border-b"
            />
            <RxCrossCircled
              onClick={() => setSearchBox(!callSearchBox)}
              className="absolute top-5 cursor-pointer right-3 text-xl font-bold"
            />
            <div className="w-full h-full"></div>
          </div>
        </div>
      )}
    </div>
  );
}

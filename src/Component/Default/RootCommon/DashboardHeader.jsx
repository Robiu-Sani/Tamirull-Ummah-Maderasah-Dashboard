import { FiSearch } from "react-icons/fi";
import { IoReorderFourSharp } from "react-icons/io5";

export default function DashboardHeader() {
  return (
    <div className="w-full h-[60px] p-3 px-5 flex justify-between items-center border-b bg-white">
      <div className="flex justify-start items-center">
        <span className="p-1 block md:hidden cursor-pointer rounded-md border">
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
            value="Search here"
            className="w-[250px] text-gray-500 hidden md:block cursor-pointer p-1 px-3 text-left border rounded-md"
          />
          <span className="text-xl block md:hidden cursor-pointer p-1">
            <FiSearch />
          </span>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

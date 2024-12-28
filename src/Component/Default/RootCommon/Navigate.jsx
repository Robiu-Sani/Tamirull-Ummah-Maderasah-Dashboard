import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Navigate() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <span className="absolute w-[90px] bottom-[45px] border -right-4  px-5 bg-gray-700 text-white text-xs font-medium  py-2 rounded-md shadow-lg">
          Go Back
        </span>
      )}

      {/* Logout Button */}
      <div
        className="cursor-pointer  h-[40px] w-[40px] rounded-full  text-white bg-gray-500 hover:bg-gray-600 flex justify-center items-center shadow-md"
        onClick={() => navigate(-1)}
      >
        <IoArrowBackSharp className="text-xl" />
      </div>
    </div>
  );
}

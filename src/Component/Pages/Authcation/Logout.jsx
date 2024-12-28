import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

export default function Logout() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

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
        localStorage.removeItem("adminEmail");
        navigate("/");
        toast.success("You Successfully Log-out");
      }
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Toaster position="top-center" />
      {/* Tooltip */}
      {isHovered && (
        <span className="absolute bottom-[45px] border -right-4  px-5 bg-gray-700 text-white text-xs font-medium  py-2 rounded-md shadow-lg">
          Logout
        </span>
      )}

      {/* Logout Button */}
      <div
        className="cursor-pointer  h-[40px] w-[40px] rounded-full  text-white bg-gray-500 hover:bg-gray-600 flex justify-center items-center shadow-md"
        onClick={handleLogout}
      >
        <MdLogout className="text-xl" />
      </div>
    </div>
  );
}

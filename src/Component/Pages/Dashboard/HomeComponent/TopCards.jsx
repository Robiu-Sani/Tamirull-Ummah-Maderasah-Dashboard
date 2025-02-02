import {
  FaUsers,
  FaChalkboardTeacher,
  FaEnvelope,
  //   FaBook,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TopCards({ total }) {
  const navigate = useNavigate();
  const CardData = [
    {
      name: "All Users",
      quantity: total.totalUser,
      description: "Total number of users using the platform.",
      icon: <FaUsers size={24} />,
      color: "bg-green-100 text-green-500",
      path: "/students/allStudent",
    },
    {
      name: "All Students",
      quantity: total.totalStudent,
      description: "Total number of registered students .",
      icon: <FaUsers size={24} />,
      color: "bg-indigo-100 text-indigo-500",
      path: "/students/allStudent",
    },
    {
      name: "All Teachers",
      quantity: total.totalTeacher,
      description: "Total number of active teachers .",
      icon: <FaChalkboardTeacher size={24} />,
      color: "bg-purple-100 text-purple-500",
      path: "/teacher/all-teacher",
    },

    {
      name: "All Messages",
      quantity: total.totalMessage,
      description: "Total number of messages on the platform.",
      icon: <FaEnvelope size={24} />,
      color: "bg-blue-100 text-blue-500",
      path: "/notifictions/consulting",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CardData.map((card, index) => (
        <div
          onClick={() => navigate(card.path)}
          key={index}
          className="bg-white p-3 cursor-pointer rounded-lg shadow-lg flex w-full flex-col items-start justify-between  transition-all"
        >
          <div className="flex w-full  justify-between items-center">
            <div className="">
              <h3 className="text-md font-semibold text-gray-700 mb-1">
                {card.name}
              </h3>
              <div className="text-2xl font-bold text-gray-800">
                {card.quantity}
              </div>
            </div>
            <span
              className={`text-3xl ${card.color} w-[50px] h-[50px] rounded-full flex justify-center items-center `}
            >
              {card.icon}
            </span>
          </div>

          <small className=" text-gray-400 text-[12px]">
            {card.description}
          </small>
        </div>
      ))}
    </div>
  );
}

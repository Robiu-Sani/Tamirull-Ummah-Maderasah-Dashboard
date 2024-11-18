import { CgEditExposure } from "react-icons/cg";
import { FaPenFancy, FaTrashAlt } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NoticeSection() {
  const notices = [
    {
      id: 1,
      title: "New Event: Coding Workshop",
      date: "2024-11-01",
    },
    {
      id: 2,
      title: "Holiday Notice",
      date: "2024-12-25",
    },
    {
      id: 3,
      title: "Update: System Maintenance",
      date: "2024-11-15",
    },
    {
      id: 4,
      title: "Webinar on React Basics",
      date: "2024-11-20",
    },
  ];

  return (
    <div className="w-full rounded-md shadow-md bg-white">
      <div className="w-full flex justify-between items-center p-2 border-b">
        <h3 className="font-semibold flex justify-start items-center gap-2">
          <CgEditExposure className="text-xl" /> Notice
        </h3>
        <Link
          to={"/update/home"}
          className="flex justify-center text-white bg-gray-800 items-center gap-2 font-semibold px-3 p-1 border outline-0 rounded-md"
        >
          <FaPenFancy /> Add
        </Link>
      </div>

      {/* Notice Items */}
      <div className="w-full p-2 flex flex-col gap-2">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="w-full p-1 flex justify-between items-center border rounded-md"
          >
            {/* Notice Icon */}
            <MdAnnouncement className="text-blue-500 text-xl mx-3" />

            {/* Notice Details */}
            <div className="w-full">
              <h3 className="font-semibold">{notice.title}</h3>
              <small className="text-gray-500">{notice.date}</small>
            </div>

            {/* Delete Icon */}
            <FaTrashAlt className="cursor-pointer text-red-500 mx-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

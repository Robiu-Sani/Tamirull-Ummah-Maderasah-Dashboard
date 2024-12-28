import { FaEye, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NoticeCard({ notice }) {
  // Helper function to get the first 7 words from the description
  const getDescriptionPreview = (description) => {
    const words = description.split(" ");
    return words.slice(0, 10).join(" ") + (words.length > 7 ? "..." : "");
  };

  return (
    <div className="w-full bg-gradient-to-r flex flex-col justify-between from-green-500 to-teal-500 p-6 rounded-lg shadow-lg text-white">
      <h3 className="font-semibold mb-2 text-xl">{notice.title}</h3>
      <p className="mb-4">{getDescriptionPreview(notice.description)}</p>

      <div className="grid grid-cols-2 gap-3 ">
        {/* View Button */}
        <Link
          to={`/additional-information/all-notice/details/${notice._id}`}
          className="flex items-center bg-transparent border-2 border-white  px-4 py-1 w-full rounded-md text-white transition justify-center duration-300"
        >
          <FaEye className="mr-2 " size={20} /> details
        </Link>

        {/* Edit Button */}
        <Link
          to={`/additional-information/all-notice/edit/${notice._id}`}
          className="flex items-center bg-transparent border-2 border-white  px-4 py-1 w-full rounded-md text-white transition justify-center duration-300"
        >
          <FaEdit className="mr-2" /> Edit
        </Link>
      </div>
    </div>
  );
}

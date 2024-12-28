import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutTextCard({ data }) {
  // Extracting the first 10 words from the description
  const shortDescription =
    data.description.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h2>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Speaker:</strong> {data.speaker}
      </p>
      <p className="text-sm text-gray-700 mb-4">{shortDescription}</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/additional-information/about-text/details/${data._id}`}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          <FaInfoCircle className="mr-2" /> Details
        </Link>
        <Link
          to={`/additional-information/about-text/edit/${data._id}`}
          className="flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
        >
          <FaEdit className="mr-2" /> Edit
        </Link>
      </div>
    </div>
  );
}

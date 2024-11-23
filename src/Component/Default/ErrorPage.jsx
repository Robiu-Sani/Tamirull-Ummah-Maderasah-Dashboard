import { FaRegSadCry } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-200 via-red-100 to-gray-300 p-6">
      <div className="relative flex flex-col items-center max-w-md w-full p-8 bg-white rounded-lg shadow-xl border border-gray-300">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-red-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

        {/* Error Icon */}
        <div className="flex items-center justify-center w-28 h-28 bg-red-50 rounded-full shadow-lg animate-spin-slow">
          <FaRegSadCry className="text-red-500 text-7xl" />
        </div>

        {/* Error Title */}
        <h1 className="mt-6 text-3xl font-bold text-red-600 text-center">
          404 - Page Not Found
        </h1>

        {/* Error Message */}
        <p className="mt-4 text-base text-gray-700 text-center leading-relaxed">
          Sorry, we could not find the page you were looking for. It might have
          been removed, renamed, or did not exist in the first place.
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-3 text-sm font-medium text-white bg-red-500 rounded-md shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-3 text-sm font-medium text-red-600 bg-gray-100 rounded-md shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300"
          >
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
}

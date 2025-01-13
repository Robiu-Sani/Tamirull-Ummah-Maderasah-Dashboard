import { FaChartBar } from "react-icons/fa";

export default function ReportBanner() {
  return (
    <div className="relative w-full mb-3 h-[150px] sm:h-[250px] bg-gradient-to-r from-blue-400 to-blue-700 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://img.freepik.com/free-vector/abstract-technology-background_52683-25766.jpg"
          alt="Report Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaChartBar className="text-4xl sm:text-5xl" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Notifections
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Comprehensive insights and analytics at your disposal.
        </p>
      </div>
    </div>
  );
}

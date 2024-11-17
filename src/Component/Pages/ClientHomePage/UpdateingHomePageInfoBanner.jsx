import { FaHome } from "react-icons/fa";

export default function UpdateingHomePageInfoBanner() {
  return (
    <div className="relative w-full  h-[150px] sm:h-[250px] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-student-cartoon-poster-stationery-shop-quarter-card-image_11438.jpg"
          alt="Updating Home Page Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaHome className="text-4xl sm:text-5xl" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Update Home Page Info
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Keep your homepage fresh and up-to-date with the latest content.
        </p>
      </div>
    </div>
  );
}

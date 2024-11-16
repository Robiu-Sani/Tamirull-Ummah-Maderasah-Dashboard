import { FaUserShield } from "react-icons/fa";

export default function AdminsBanner() {
  return (
    <div className="relative w-full mb-3 h-[150px] sm:h-[250px] bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://www.shutterstock.com/image-photo/banner-asian-business-man-hands-600nw-2363122463.jpg"
          alt="Admins Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaUserShield className="text-4xl sm:text-5xl" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Admin center
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Securely managing and overseeing operations with excellence.
        </p>
      </div>
    </div>
  );
}

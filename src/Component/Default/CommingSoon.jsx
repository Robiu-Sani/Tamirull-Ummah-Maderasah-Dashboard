import { FaClock } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

export default function ComingSoon() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-130px)]">
      <div className=" flex flex-col items-center rounded-md p-10 justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4">
        <div className="text-center animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <IoRocketSharp className="text-6xl animate-bounce" />
          </div>
          <h1 className="text-2xl  font-extrabold mb-4">
            Something Amazing is Coming Soon!
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-3">
            We are working hard to bring you a fantastic experience. Stay tuned
            and check back soon for updates!
          </p>
        </div>
        <div className="flex items-center gap-2 text-lg font-semibold bg-white bg-opacity-10 rounded-lg px-4 py-2 animate-pulse">
          <FaClock className="text-2xl text-yellow-300" />
          <span>Launching Soon!</span>
        </div>
        <footer className="mt-5 text-sm text-white/70">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

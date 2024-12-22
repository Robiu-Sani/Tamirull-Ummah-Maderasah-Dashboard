import { FaUsers, FaMale, FaFemale, FaChalkboardTeacher } from "react-icons/fa";

export default function StudentBanner() {
  // Example data (replace with dynamic data if available)
  const totalStudents = 1200;
  const totalBoys = 650;
  const totalGirls = 550;
  const totalClasses = 30;

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {/* Total Students */}
      <div className="bg-white p-6 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-blue-100 rounded-full text-blue-600">
            <FaUsers size={40} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              {totalStudents}
            </h3>
            <p className="text-sm text-gray-500">Total Students</p>
          </div>
        </div>
      </div>

      {/* Total Boys */}
      <div className="bg-white p-6 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-green-100 rounded-full text-green-600">
            <FaMale size={40} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">{totalBoys}</h3>
            <p className="text-sm text-gray-500">Total Boys</p>
          </div>
        </div>
      </div>

      {/* Total Girls */}
      <div className="bg-white p-6 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-pink-100 rounded-full text-pink-600">
            <FaFemale size={40} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">{totalGirls}</h3>
            <p className="text-sm text-gray-500">Total Girls</p>
          </div>
        </div>
      </div>

      {/* Total Classes */}
      <div className="bg-white p-6 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-yellow-100 rounded-full text-yellow-600">
            <FaChalkboardTeacher size={40} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">{totalClasses}</h3>
            <p className="text-sm text-gray-500">Total Classes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

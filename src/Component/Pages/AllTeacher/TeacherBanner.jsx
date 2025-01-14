import { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaFemale, FaMale, FaUsers } from "react-icons/fa";
import fetchOutput from "../../Default/functions/fatchingData";

export default function TeacherBanner() {
  const [tableTeacher, settableTeacher] = useState([]);
  useEffect(() => {
    fetchOutput(`Teacher/table`)
      .then((response) => {
        settableTeacher(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const totalTeachers = tableTeacher?.totalTeachers;
  const totalBoys = tableTeacher?.totalMale;
  const totalGirls = tableTeacher?.totalFemale;
  const totalClasses = tableTeacher?.totalClasses;

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {/* Total Teachers */}
      <div className="bg-white p-3 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <FaUsers size={20} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              {totalTeachers}
            </h3>
            <p className="text-sm text-gray-500">Total Teachers</p>
          </div>
        </div>
      </div>

      {/* Total Boys */}
      <div className="bg-white p-3 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-100 rounded-full text-green-600">
            <FaMale size={20} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">{totalBoys}</h3>
            <p className="text-sm text-gray-500">Total Boys</p>
          </div>
        </div>
      </div>

      {/* Total Girls */}
      <div className="bg-white p-3 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-pink-100 rounded-full text-pink-600">
            <FaFemale size={20} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">{totalGirls}</h3>
            <p className="text-sm text-gray-500">Total Girls</p>
          </div>
        </div>
      </div>

      {/* Total Classes */}
      <div className="bg-white p-3 rounded-md shadow-lg flex items-center justify-between hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
            <FaChalkboardTeacher size={20} />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">{totalClasses}</h3>
            <p className="text-sm text-gray-500">Total Shiefts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

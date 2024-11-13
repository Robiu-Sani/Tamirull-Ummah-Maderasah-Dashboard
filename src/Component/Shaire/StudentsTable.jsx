import { useState } from "react";
import { FaEllipsisV, FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function StudentsTable() {
  const [menuIndex, setMenuIndex] = useState(null);

  const students = Array.from({ length: 50 }, (_, i) => ({
    name: `Student ${i + 1}`,
    gender: i % 2 === 0 ? "Male" : "Female",
    class: `Class ${Math.floor(i / 5) + 1}`,
    section: i % 3 === 0 ? "A" : i % 3 === 1 ? "B" : "C",
    number: `01234${i + 1000}`,
    roll: i + 1,
  }));

  const toggleMenu = (index) => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Students Table</h1>
      <div className="overflow-x-auto border rounded-lg shadow-lg">
        <table className="table-auto w-full border-collapse border bg-white rounded-lg">
          <thead>
            <tr className="bg-xinc-500 text-gray-600">
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Name
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Gender
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Class
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Section
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Number
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Roll
              </th>
              <th className="border border-gray-200 px-4 py-3  font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className={`transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="border text-center px-4 py-3 text-gray-700">
                  {student.name}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {student.gender}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {student.class}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {student.section}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {student.number}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {student.roll}
                </td>
                <td className="border text-center px-4 py-3 relative text-gray-700">
                  <button
                    className="text-gray-600 hover:text-blue-600"
                    onClick={() => toggleMenu(index)}
                  >
                    <FaEllipsisV />
                  </button>
                  {menuIndex === index && (
                    <div className="absolute right-0 mt-2 w-48 z-50 bg-white border border-gray-300 shadow-lg rounded-lg">
                      <button className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors duration-150">
                        <FaEye className="mr-2 text-blue-500" />
                        Details
                      </button>
                      <button className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors duration-150">
                        <FaEdit className="mr-2 text-yellow-500" />
                        Edit
                      </button>
                      <button className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors duration-150">
                        <FaTrash className="mr-2 text-red-500" />
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { useState } from "react";
import { FaEllipsisV, FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function TeachersTable() {
  const [menuIndex, setMenuIndex] = useState(null);

  const teachers = Array.from({ length: 30 }, (_, i) => ({
    name: `Teacher ${i + 1}`,
    subject: i % 3 === 0 ? "Math" : i % 3 === 1 ? "Science" : "English",
    number: `01712${i + 1000}`,
    section: i % 2 === 0 ? "A" : "B",
    gender: i % 2 === 0 ? "Male" : "Female",
    shift: i % 2 === 0 ? "Morning" : "Evening",
  }));

  const toggleMenu = (index) => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto">
      {/* --------- top section  ------------ */}
      <div className="w-full flex flex-wrap gap-3 py-3 justify-between items-center">
        {/* Dropdown 1 */}
        <div className="relative w-full sm:w-[170px]">
          <select className="block w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
            <option value="">Option 6</option>
            <option value="">Option 7</option>
            <option value="">Option 8</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-[350px]">
          <input
            type="search"
            className="w-full border focus:ring focus:ring-blue-200 focus:outline-none p-1 px-4 rounded-md"
            placeholder="Search here"
          />
        </div>

        {/* Dropdown 2 */}
        <div className="relative w-full sm:w-[70px]">
          <select className="block w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none">
            <option value="">10</option>
            <option value="">20</option>
            <option value="">30</option>
            <option value="">40</option>
            <option value="">50</option>
            <option value="">60</option>
            <option value="">70</option>
            <option value="">80</option>
          </select>
        </div>
      </div>

      {/* ---------------  */}
      <div className="overflow-x-auto border scroll-none rounded-lg shadow-lg">
        <table className="table-auto w-full  border-collapse border bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-300 text-gray-600">
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Name
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Subject
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Number
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Section
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Gender
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Shift
              </th>
              <th className="border border-gray-200 px-4 py-3 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr
                key={index}
                className={`transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="border text-center px-4 py-3 text-gray-700">
                  {teacher.name}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {teacher.subject}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {teacher.number}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {teacher.section}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {teacher.gender}
                </td>
                <td className="border text-center px-4 py-3 text-gray-700">
                  {teacher.shift}
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

import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiLevelThreeAdvanced } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function AllResultTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [uniqueClasses, setUniqueClasses] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, [searchQuery, selectedClass]); // Fetch data whenever search query or class changes

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/result/table`,
        {
          params: {
            search: searchQuery,
            studentClass: selectedClass,
          },
        }
      );
      const result = response.data;
      if (result.status) {
        setData(result.data);
        setUniqueClasses(result.data.uniqueClasses || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "The record has been deleted.", "success");
        // Optionally call delete API and refresh data
      }
    });
  };

  const filteredData = data.data || [];

  return (
    <div className="w-full mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-4 bg-blue-100 text-blue-500 rounded-full">
            <i className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6.75a3 3 0 11-6 0 3 3 0 016 0zm-3 4.5c2.5 0 7.5 1.25 7.5 3.75v2.25H5.25V15c0-2.5 5-3.75 7.5-3.75z"
                />
              </svg>
            </i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Males</h3>
            <p className="text-2xl font-bold">{data.totalMale || 0}</p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-4 bg-green-100 text-green-500 rounded-full">
            <i className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM6.75 18A7.25 7.25 0 0112 10.75a7.25 7.25 0 015.25 7.25v.75H6.75v-.75z"
                />
              </svg>
            </i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Females</h3>
            <p className="text-2xl font-bold">{data.totalFemale || 0}</p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-4 bg-purple-100 text-purple-500 rounded-full">
            <i className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.75 13.25a3.75 3.75 0 117.5 0M17.25 16.5c0 1.5-3.25 2.25-3.25 2.25s-3.25-.75-3.25-2.25m5.75 0a5.75 5.75 0 10-11.5 0"
                />
              </svg>
            </i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-2xl font-bold">{data.totalStudents || 0}</p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex items-center gap-4">
          <div className="p-4 bg-yellow-100 text-yellow-500 rounded-full">
            <i className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 9.75V15m0 0L9 16.5M7.5 15L6 16.5m9-6.75v5.25m1.5 1.5L15 16.5m0 0L16.5 15m-1.5 0v-5.25"
                />
              </svg>
            </i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Classes</h3>
            <p className="text-2xl font-bold">{data.totalClass || 0}</p>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="flex flex-wrap gap-3 py-3 justify-between items-center">
        <select
          className="block w-full sm:w-[170px] px-2 py-1 border rounded-md"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">All Classes</option>
          {uniqueClasses.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          type="search"
          className="w-full sm:w-[350px] p-2 border rounded-md"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center h-20">
          <span>Loading...</span>
        </div>
      )}

      {/* Table */}
      {!loading && filteredData.length > 0 && (
        <div className="overflow-x-auto border rounded-lg shadow-lg">
          <table className="table-auto w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Student Name</th>
                <th className="border px-4 py-2">Exam Name</th>
                <th className="border px-4 py-2">Class</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Total</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{item.studentName}</td>
                  <td className="border px-4 py-2">{item.examName}</td>
                  <td className="border px-4 py-2">{item.studentClass}</td>
                  <td className="border px-4 py-2">{item.studentGender}</td>
                  <td className="border px-4 py-2">{item.total}</td>
                  <td className="border px-4 relative py-2">
                    <button
                      onClick={() =>
                        setMenuIndex(menuIndex === idx ? null : idx)
                      }
                      className="text-gray-600 flex  justify-center items-center w-full hover:text-blue-600"
                    >
                      <BsThreeDotsVertical />
                    </button>
                    {menuIndex === idx && (
                      <div className="absolute w-[150px] bg-white right-4 top-8 z-50 shadow-lg border flex flex-col rounded-md">
                        <Link
                          to={`/exam-results/exam-result-edit/${item._id}`}
                          className=" w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                        >
                          <FaEdit /> Edit
                        </Link>
                        <Link
                          to={
                            item.examName === "Half Yearly Exam" ||
                            item.examName === "Final Exam"
                              ? `/exam-results/exam-result-details/${item._id}`
                              : item.examName === "First Tutorial" ||
                                item.examName === "Second Tutorial"
                              ? `/exam-results/exam-result-tutiral-details/${item._id}`
                              : `/exam-results/exam-result/${item._id}`
                          }
                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                        >
                          <GiLevelThreeAdvanced /> Details
                        </Link>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className=" w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
                        >
                          <FaTrash /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

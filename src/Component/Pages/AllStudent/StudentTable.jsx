import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";
import { ImBlocked, ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import deleteOutput from "../../Default/functions/deleteOutput";
import toast, { Toaster } from "react-hot-toast";
import PatchData from "../../Default/functions/patchData";

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const [uniqueClasses, setUniqueClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_SERVER
        }/student/table?page=${currentPage}&class=${selectedClass}&search=${searchQuery}`
      );
      const { students, uniqueClasses, totalPages } = response.data.data;
      setStudents(students);
      setUniqueClasses(uniqueClasses);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [currentPage, selectedClass, searchQuery]);

  // console.log(totalPages);

  const toggleMenu = (index) => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  const handleDelete = (id) => {
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
        deleteOutput(`student/delete-student/${id}`)
          .then((response) => {
            toast.success(response.data.message + "Deleted");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };

  const handleBlock = async (id, type) => {
    const data = type;
    try {
      const submittedData = await PatchData(
        `student/update-single-student-by-patch/${id}`,
        { type: data }
      );
      if (submittedData.status === true) {
        toast.success("now this student type is " + data);
      } else {
        toast.error("something worng here!");
      }
    } catch (error) {
      toast.error("Error submitting form:");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full mx-auto ">
      <Toaster />
      {/* --------- top section  ------------ */}
      <div className="w-full flex flex-wrap gap-3 py-3 justify-between items-center">
        {/* Dropdown for selecting class */}
        <div className="relative w-full sm:w-[170px]">
          <select
            className="block w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
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
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-[350px]">
          <input
            type="search"
            className="w-full border focus:ring focus:ring-blue-200 focus:outline-none p-1 px-4 rounded-md"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="w-full h-[200px] flex justify-center items-center ">
          <ImSpinner9 className="animate-spin" size={50} />
        </div>
      )}

      {/* Table */}
      {!loading && (
        <div className="overflow-x-auto border rounded-lg scroll-none shadow-lg">
          <table className="table-auto w-full border-collapse  border bg-white rounded-lg">
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
                  Blood
                </th>
                <th className="border border-gray-200 px-4 py-3 font-semibold">
                  Roll
                </th>
                <th className="border border-gray-200 px-4 py-3 font-semibold">
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
                    {student.studentNameEnglish}
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
                    {student.bloodGroup}
                  </td>
                  <td className="border text-center px-4 py-3 text-gray-700">
                    {student.classRoll}
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
                        <Link
                          to={`/students/student-details/${student._id}`}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors duration-150"
                        >
                          <FaEye className="mr-2 text-blue-500" /> Details
                        </Link>
                        <Link
                          to={`/students/student-edit/${student._id}`}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors duration-150"
                        >
                          <FaEdit className="mr-2 text-yellow-500" /> Edit
                        </Link>
                        <button
                          onClick={() =>
                            handleBlock(
                              student._id,
                              student.type === "student" ? "blocked" : "student"
                            )
                          }
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors duration-150"
                        >
                          <ImBlocked className="mr-2 text-black" />{" "}
                          {student.type === "blocked" ? "Un-Block" : "Block"}
                        </button>
                        <button
                          onClick={() => handleDelete(student._id)}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors duration-150"
                        >
                          <FaTrash className="mr-2 text-red-500" /> Delete
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

      {/* Pagination */}
      <div className="flex justify-end py-3 overflow-x-auto">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 mx-1 border rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

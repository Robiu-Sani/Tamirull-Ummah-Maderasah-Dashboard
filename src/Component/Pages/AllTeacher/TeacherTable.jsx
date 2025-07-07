import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEllipsisV, FaEye, FaTrash } from "react-icons/fa";
import { ImBlocked, ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { SiSinaweibo } from "react-icons/si";

export default function TeacherTable() {
  const [teachers, setTeachers] = useState([]);
  const [uniqueClasses, setUniqueClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [erroralert, setErrorAlert] = useState(false);

  const fetchTeachers = async () => {
    setLoading(true);
    setErrorAlert(false);
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_SERVER
        }/teacher/table?page=${currentPage}&class=${selectedClass}&search=${searchQuery}`
      );

      const { teacher, uniqueClasses, totalPages } = response.data.data;
      setTeachers(teacher);
      setUniqueClasses(uniqueClasses);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching data", error);
      setErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, [currentPage, selectedClass, searchQuery]);

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
        axios
          .delete(`${import.meta.env.VITE_SERVER}/teacher/delete-teacher/${id}`)
          .then((response) => {
            toast.success(response.data.message + " Deleted");
            fetchTeachers();
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };

  const handleBlock = async (id, type) => {
    try {
      const response = await axios.patch(
        `${
          import.meta.env.VITE_SERVER
        }/teacher/update-single-teacher-by-patch/${id}`,
        { type }
      );
      if (response.data.status === true) {
        toast.success("Now this teacher type is " + type);
        fetchTeachers();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Error updating teacher type.");
      console.error(error);
    }
  };

  if (erroralert) {
    return (
      <div className="w-full h-[600px] flex justify-center items-center">
        <p>some is worng there! we don`t get any data</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      <Toaster />
      <div className="w-full flex flex-wrap gap-3 py-3 justify-between items-center">
        <div className="relative w-full sm:w-[170px]">
          <select
            className="block w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Section</option>
            {uniqueClasses.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

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

      {loading && (
        <div className="w-full h-[200px] flex justify-center items-center">
          <ImSpinner9 className="animate-spin" size={50} />
        </div>
      )}

      {!loading && teachers.length > 0 && (
        <div className="overflow-x-auto border rounded-lg shadow-lg">
          <table className="table-auto w-full border-collapse border bg-white rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="border px-4 py-3 font-semibold">Name</th>
                <th className="border px-4 py-3 font-semibold">Gender</th>
                <th className="border px-4 py-3 font-semibold">Shift</th>
                <th className="border px-4 py-3 font-semibold">Id</th>
                {/* <th className="border px-4 py-3 font-semibold">email</th> */}
                <th className="border px-4 py-3 font-semibold">Blood</th>
                <th className="border px-4 py-3 font-semibold">Phone</th>
                <th className="border px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="border px-4 py-3 text-center">
                    {teacher.teacherName}
                  </td>
                  <td className="border px-4 py-3 text-center">
                    {teacher.gender}
                  </td>
                  <td className="border px-4 py-3 text-center">
                    {teacher.shift}
                  </td>
                  <td className="border px-4 py-3 text-center">{teacher.id}</td>
                  {/* <td className="border px-4 py-3 text-center">
                    {teacher.email}
                  </td> */}
                  <td className="border px-4 py-3 text-center">
                    {teacher.bloodGroup}
                  </td>
                  <td className="border px-4 py-3 text-center">
                    {teacher.phone}
                  </td>
                  <td className="border px-4 py-3 text-center relative">
                    <button
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => toggleMenu(index)}
                    >
                      <FaEllipsisV />
                    </button>
                    {menuIndex === index && (
                      <div className="absolute right-0 mt-2 w-48 z-50 bg-white border border-gray-300 shadow-lg rounded-lg">
                        <Link
                          to={`/teacher/teacher-details/${teacher._id}`}
                          className="flex items-center px-4 py-3 text-sm hover:bg-gray-100"
                        >
                          <FaEye className="mr-2 text-blue-500" /> Details
                        </Link>
                        <Link
                          to={`/teacher/teacher-edit/${teacher._id}`}
                          className="flex items-center px-4 py-3 text-sm hover:bg-gray-100"
                        >
                          <FaEdit className="mr-2 text-yellow-500" /> Edit
                        </Link>
                        <button
                          onClick={() =>
                            handleBlock(
                              teacher._id,
                              teacher.type === "teacher" ? "blocked" : "teacher"
                            )
                          }
                          className="flex items-center w-full px-4 py-3 text-sm hover:bg-gray-100"
                        >
                          <ImBlocked className="mr-2 text-red-500" />{" "}
                          {teacher.type === "teacher" ? "Block" : "Unblock"}
                        </button>
                        <button
                          onClick={() =>
                            handleBlock(
                              teacher._id,
                              teacher.type === "teacher" ? "admin" : "teacher"
                            )
                          }
                          className="flex items-center w-full px-4 py-3 text-sm hover:bg-gray-100"
                        >
                          <SiSinaweibo className="mr-2 " />{" "}
                          {teacher.type === "teacher"
                            ? "Make Admin"
                            : "Back teacher mode"}
                        </button>
                        <button
                          onClick={() => handleDelete(teacher._id)}
                          className="flex w-full items-center px-4 py-3 text-sm hover:bg-gray-100"
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

      {!loading && teachers.length === 0 && (
        <div className="text-center text-gray-600">No teachers found.</div>
      )}

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

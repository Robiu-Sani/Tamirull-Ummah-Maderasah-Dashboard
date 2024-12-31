import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Swal from "sweetalert2";

export default function ExamResultTable() {
  const [tableStudent, setTableStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [availableClasses, setAvailableClasses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/classes`
      );
      setAvailableClasses(response.data.classes); // Assume the backend sends an array of classes
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/first-tutiral/table`,
        {
          params: { search, classFilter, page },
        }
      );
      const { data } = response.data;
      setTableStudent(data.exams);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
    fetchData();
  }, [search, classFilter, page]);

  const handleAction = (action, studentId) => {
    switch (action) {
      case "details":
        Swal.fire("Details", `Details for student ID: ${studentId}`, "info");
        break;
      case "edit":
        Swal.fire("Edit", `Edit student ID: ${studentId}`, "warning");
        break;
      case "delete":
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "Deleted!",
              "The student record has been deleted.",
              "success"
            );
          }
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex justify-center items-center">
          <AiOutlineLoading3Quarters className="text-4xl animate-spin text-blue-500" />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
        <div className="bg-blue-500 text-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">Total Exams</h2>
          <p>{tableStudent.length}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">Total Male</h2>
          <p>
            {tableStudent.filter((s) => s.studentId.gender === "male").length}
          </p>
        </div>
        <div className="bg-pink-500 text-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">Total Female</h2>
          <p>
            {tableStudent.filter((s) => s.studentId.gender === "female").length}
          </p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">Total Classes</h2>
          <p>
            {tableStudent.length > 0
              ? new Set(tableStudent.map((s) => s.studentId.class)).size
              : 0}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center mb-5">
        <select
          className="border p-2 rounded w-48"
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
        >
          <option value="">All Classes</option>
          {availableClasses.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
        <div className="relative">
          <input
            type="text"
            className="border p-2 rounded w-64"
            placeholder="Search by student name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute top-3 right-3 text-gray-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Student Name</th>
              <th className="p-2 border">Class</th>
              <th className="p-2 border">Roll</th>
              <th className="p-2 border">Teacher Name</th>
              <th className="p-2 border">Total Marks</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableStudent.map((exam) => (
              <tr key={exam._id}>
                <td className="p-2 border">
                  {exam.studentId.studentNameEnglish}
                </td>
                <td className="p-2 border">{exam.studentId.class}</td>
                <td className="p-2 border">{exam.studentId.classRoll}</td>
                <td className="p-2 border">{exam.teacherId.teacherName}</td>
                <td className="p-2 border">{exam.total}</td>
                <td className="p-2 border">
                  <div className="flex gap-2">
                    <FaEye
                      className="text-blue-500 cursor-pointer"
                      onClick={() =>
                        handleAction("details", exam.studentId._id)
                      }
                    />
                    <FaEdit
                      className="text-yellow-500 cursor-pointer"
                      onClick={() => handleAction("edit", exam.studentId._id)}
                    />
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleAction("delete", exam.studentId._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-5">
        <button
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${page} of ${totalPages}`}</span>
        <button
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

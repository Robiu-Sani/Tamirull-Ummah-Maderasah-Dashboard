import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import {
  FaDeviantart,
  FaEllipsisV,
  FaExclamationTriangle,
  FaTrash,
} from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function StudentFathersTable() {
  const [fathers, setFathers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuIndex, setMenuIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalFathers, setTotalFathers] = useState(0);
  const [errorAlert, setErrorAlert] = useState(false);

  const fetchFathers = async () => {
    setLoading(true);
    setErrorAlert(false);
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_SERVER
        }/father/table?page=${currentPage}&search=${searchQuery}`
      );

      const { fathers, totalPages, totalFathers } = response.data.data;
      setFathers(fathers);
      setTotalPages(totalPages);
      setTotalFathers(totalFathers);
    } catch (error) {
      console.error("Error fetching data", error);
      setErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFathers();
  }, [currentPage, searchQuery]);

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
          .delete(`${import.meta.env.VITE_SERVER}/father/delete-father/${id}`)
          .then((response) => {
            toast.success(response.data.message + " Deleted");
            fetchFathers();
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };

  if (errorAlert) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-red-700">
        <div className="bg-red-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <FaExclamationTriangle className="text-6xl mb-4 text-red-500" />
          <h1 className="text-2xl font-bold">No Data Found</h1>
          <p className="text-center mt-2">
            We couldn`t retrieve any data at the moment. Please try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      <Toaster />
      <div className="w-full flex flex-wrap gap-3 py-3 justify-between items-center">
        <div className="relative w-full sm:w-[170px]">
          <span className="p-1 px-3 ">{`Total Fathers: ${totalFathers}`}</span>
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

      {!loading && fathers.length > 0 && (
        <div className="overflow-x-auto bg-white border rounded-lg shadow-lg">
          <table className="table-auto w-full border-collapse border bg-white rounded-lg">
            <thead>
              <tr className=" text-gray-600">
                <th className="border px-4 py-3 font-semibold">Name</th>
                <th className="border px-4 py-3 font-semibold">Blood Group</th>
                <th className="border px-4 py-3 font-semibold">Phone</th>
                <th className="border px-4 py-3 font-semibold">
                  Monthly Income
                </th>
                <th className="border px-4 py-3 font-semibold">
                  Work Location
                </th>
                <th className="border px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {fathers.map((father, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="border px-4 py-3 text-center">
                    {father.fatherNameEn}
                  </td>
                  <td className="border px-4 py-3 text-center">
                    {father.bloodGroup}
                  </td>
                  <td className="border px-4 py-3 text-center">
                    {father.mobilenumber}
                  </td>
                  <td className="border px-4 py-3 text-center">
                    {father.monthlyIncome}
                  </td>
                  <td className="border px-4 py-3 text-center">
                    {father.workLocation}
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
                          to={`/all-student-informetion/stunents-father/details/${father._id}`}
                          className="flex w-full items-center px-4 py-3 text-sm hover:bg-gray-100"
                        >
                          <FaDeviantart className="mr-2 " /> Details
                        </Link>
                        <Link
                          to={`/all-student-informetion/stunents-father/edit/${father._id}`}
                          className="flex w-full items-center px-4 py-3 text-sm hover:bg-gray-100"
                        >
                          <FaDeviantart className="mr-2 " /> Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(father._id)}
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

      {!loading && fathers.length === 0 && (
        <div className="text-center text-gray-600">No fathers found.</div>
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

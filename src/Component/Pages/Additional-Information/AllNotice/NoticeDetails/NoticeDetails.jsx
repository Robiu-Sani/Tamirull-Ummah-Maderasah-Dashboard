import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import fetchOutput from "../../../../Default/functions/fatchingData";
import deleteOutput from "../../../../Default/functions/deleteOutput";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

export default function NoticeDetails() {
  const [notice, setNotice] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOutput(`notice/single-notice/${id}`)
      .then((response) => {
        setNotice(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  const handleDelete = () => {
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
        deleteOutput(`notice/delete-notice/${id}`)
          .then((response) => {
            toast.success(response.data.message + "Deleted");
            navigate(-1);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Toaster />
      <div className="w-full  bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 px-6 text-center">
          <h1 className="text-2xl font-bold">Tamirul Ummah Madrasah</h1>
          <h2 className="text-lg mt-2">Notice Details</h2>
        </header>

        {/* Body */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">
            {notice?.title || "No Title Available"}
          </h2>
          <p>
            <span className="font-bold">Description:</span>{" "}
            {notice?.description || "No Description Available"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p>
              <span className="font-bold">Start Date:</span>{" "}
              {notice?.startDate || "Not Specified"} at{" "}
              {notice?.startTime || "N/A"}
            </p>
            <p>
              <span className="font-bold">End Date:</span>{" "}
              {notice?.endDate || "Not Specified"} at {notice?.endTime || "N/A"}
            </p>
            <p>
              <span className="font-bold">Place:</span>{" "}
              {notice?.place || "Not Specified"}
            </p>
            <p>
              <span className="font-bold">Submission Date:</span>{" "}
              {notice?.submissionDate || "Not Specified"}
            </p>
          </div>
          <div className="border-t pt-4">
            <p>
              <span className="font-bold">Created At:</span>{" "}
              {new Date(notice?.createdAt).toLocaleString() || "N/A"}
            </p>
            <p>
              <span className="font-bold">Last Updated:</span>{" "}
              {new Date(notice?.updatedAt).toLocaleString() || "N/A"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 p-4 flex justify-between items-center">
          <Link
            to={`/additional-information/all-notice/edit/${id}`}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <FaEdit className="mr-2" /> Edit
          </Link>
          <button
            onClick={handleDelete}
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            <FaTrash className="mr-2" /> Delete
          </button>
        </footer>
      </div>
    </div>
  );
}

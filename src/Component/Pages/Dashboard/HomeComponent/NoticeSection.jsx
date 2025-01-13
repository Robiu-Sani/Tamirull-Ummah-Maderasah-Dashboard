import { useState, useEffect } from "react";
import { CgEditExposure } from "react-icons/cg";
import { FaPenFancy, FaTrashAlt } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

export default function NoticeSection() {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch notices on component mount
  useEffect(() => {
    fetchnotice();
  }, []);

  const fetchnotice = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/notice/banner`
      );
      if (response.data.status) {
        setNotices(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_SERVER}/notice/delete-notice/${id}`
          );
          const data = response.data;

          if (data.status === true) {
            toast.success(data.message);
            fetchnotice();
          } else {
            toast.error("Failed to delete the contact.");
          }
        } catch (error) {
          console.error("Error deleting the contact:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    });
  };

  return (
    <div className="w-full rounded-md shadow-md bg-white">
      {/* Header Section */}
      <Toaster />
      <div className="w-full flex justify-between items-center p-2 border-b">
        <h3 className="font-semibold flex justify-start items-center gap-2">
          <CgEditExposure className="text-xl" /> Notice
        </h3>
        <Link
          to={"/update/home"}
          className="flex justify-center text-white bg-gray-800 items-center gap-2 font-semibold px-3 p-1 border outline-0 rounded-md"
        >
          <FaPenFancy /> Add
        </Link>
      </div>

      {/* Notice Items */}
      <div className="w-full p-2 flex flex-col gap-2">
        {isLoading ? (
          <p>Loading notices...</p>
        ) : notices.length > 0 ? (
          notices.map((notice) => (
            <div
              key={notice._id}
              className="w-full p-1 flex justify-between items-center border rounded-md shadow-sm"
            >
              {/* Notice Icon */}
              <MdAnnouncement className="text-blue-500 text-xl mx-3" />

              {/* Notice Details */}
              <div className="w-full">
                <h3 className="font-semibold">{notice.title}</h3>
                <small className="text-gray-500">{notice.submissionDate}</small>
              </div>

              {/* Delete Icon */}
              <FaTrashAlt
                onClick={() => handleDelete(notice._id)}
                className="cursor-pointer text-red-500 mx-2 hover:scale-110 transition-transform"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No notices available</p>
        )}
      </div>
    </div>
  );
}

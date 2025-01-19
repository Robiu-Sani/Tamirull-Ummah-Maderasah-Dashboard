import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AllGainData() {
  const [gainData, setGainData] = useState([]);

  // Fetch all gain data
  useEffect(() => {
    const fetchGainData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/gain`);
        if (response.data.status) {
          setGainData(response.data.data);
        } else {
          toast.error("Failed to fetch gain data!");
        }
      } catch (error) {
        console.error("Error fetching gain data:", error);
        toast.error("Something went wrong while fetching gain data!");
      }
    };
    fetchGainData();
  }, []);

  // Delete gain data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_SERVER}/gain/delete-gain/${id}`
          );
          if (response.data.status) {
            setGainData((prevData) =>
              prevData.filter((item) => item._id !== id)
            );
            toast.success("Gain data deleted successfully!");
          } else {
            toast.error("Failed to delete gain data!");
          }
        } catch (error) {
          console.error("Error deleting gain data:", error);
          toast.error("Something went wrong while deleting!");
        }
      }
    });
  };

  // Edit gain data (placeholder function)

  return (
    <div className="w-full ">
      <Toaster />
      <h1 className="text-xl p-3 bg-white rounded-md shadow-md border font-semibold mb-5">
        All Gain Data
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gainData.map((gain) => (
          <div
            key={gain._id}
            className="bg-white p-5 rounded-lg shadow-md border relative"
          >
            <h2 className="text-xl font-bold mb-3">{gain.title}</h2>
            {gain.image ? (
              <img
                src={gain.image}
                alt={gain.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
            ) : (
              <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 mb-3">
                No Image Available
              </div>
            )}
            <p className="text-gray-700 mb-5">
              {gain.description.length > 200
                ? `${gain.description.slice(0, 200)}...`
                : gain.description}
            </p>
            <div className="flex items-center gap-3">
              <Link
                to={`/edit-gain/${gain._id}`}
                className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
              >
                <FaEdit /> Edit
              </Link>
              <button
                onClick={() => handleDelete(gain._id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-700"
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
            <p className="absolute top-2 right-2 text-sm text-gray-400">
              Created At: {new Date(gain.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

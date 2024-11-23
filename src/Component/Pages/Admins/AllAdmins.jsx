import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AllAdmins() {
  const [isLoading, setIsLoading] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [isdelete, setIsDelete] = useState(false);
  const navigate = useNavigate();
  // ${import.meta.env.VITE_EXPRESS_API}/admins

  useEffect(() => {
    fetchAdmins();
  }, []);

  // const handleDisabled = (id) => {
  //   console.log(id);
  // };

  const fetchAdmins = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_EXPRESS_API}/admins`
      );
      setAdmins(response.data.reverse());
    } catch (error) {
      console.error("Error fetching admins:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
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
          setIsDelete(true); // Start delete state
          const response = await axios.delete(
            `${import.meta.env.VITE_EXPRESS_API}/admins/${id}`
          );
          toast.success(response.data.message || "Admin deleted successfully!");
          fetchAdmins();
        } catch (error) {
          const errorMessage =
            error.response?.data?.message || "Something went wrong!";
          toast.error(errorMessage);
        } finally {
          setIsDelete(false); // End delete state
        }
      }
    });
  };

  return (
    <div className="mt-3">
      {isLoading ? (
        <div className="w-full h-[300px] flex justify-center items-center">
          <ImSpinner2 className="text-[80px] animate-spin" />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2">
          {admins.reverse().map((admin, index) => (
            <div
              onClick={() => navigate(`/admin_profile/${admin.email}`)}
              key={index}
              className="w-full bg-white gap-3 cursor-pointer grid grid-cols-1 md:grid-cols-2 p-2 rounded-md border shadow-md"
            >
              <div className="w-full flex justify-center items-center h-auto md:h-full border overflow-hidden rounded-md">
                <img
                  src={
                    admin?.profile ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="admins image"
                  className="min-w-full min-h-full max-h-[250px]"
                />
              </div>
              <div className="w-full flex flex-col justify-between p-2">
                <h2 className="font-semibold text-xl text-gray-800">
                  {admin.name}
                </h2>
                <small className="text-gray-600">
                  <strong>Email:</strong> {admin.email}
                </small>
                <small className="text-gray-600">
                  <strong>Phone:</strong> {admin.number}
                </small>
                <small className="text-gray-600">
                  <strong>Gender:</strong> {admin.gender}
                </small>
                <small className="text-gray-600">
                  <strong>Address:</strong> {admin.address}
                </small>
                <small className="text-gray-600">
                  <strong>Status:</strong> {admin.status}
                </small>
                <small className="text-gray-600">
                  <strong>Account Created:</strong> {admin.accountCreatingTime}
                </small>
                <div className="w-full grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleDelete(admin._id)}
                    className="w-full flex justify-center items-center gap-3 font-semibold text-white bg-red-700 p-1 rounded-md hover:bg-red-800"
                  >
                    {" "}
                    {isdelete ? <ImSpinner2 className="animate-spin" /> : null}
                    <FaTrash />
                    Delete
                  </button>
                  <Link
                    to={`/update-admin/${admin._id}`}
                    className="w-full flex items-center justify-center gap-2 font-semibold text-white bg-gray-700 p-1 rounded-md hover:bg-gray-800"
                  >
                    <FaEdit />
                    Update
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

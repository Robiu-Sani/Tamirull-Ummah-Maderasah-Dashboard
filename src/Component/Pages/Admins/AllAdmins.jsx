import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

export default function AllAdmins() {
  const [isLoading, setIsLoading] = useState(false);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_EXPRESS_API}/admins`
        );
        setAdmins(response.data.reverse());
      } catch (error) {
        console.error("Error fetching admins:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchAdmins();
  }, []);

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
              key={index}
              className="w-full bg-white gap-3 grid grid-cols-1 md:grid-cols-2 p-2 rounded-md border shadow-md"
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
                  <button className="w-full flex items-center justify-center gap-2 font-semibold text-white bg-red-700 p-1 rounded-md hover:bg-red-800">
                    <FaTrash />
                    Delete
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 font-semibold text-white bg-gray-700 p-1 rounded-md hover:bg-gray-800">
                    <FaEdit />
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

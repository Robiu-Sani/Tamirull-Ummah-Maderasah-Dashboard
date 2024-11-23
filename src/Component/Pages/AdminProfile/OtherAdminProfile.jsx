import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OtherAdminProfile() {
  const [admin, setAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const parems = useParams();
  const adminEmail = parems.email;

  useEffect(() => {
    if (adminEmail) {
      fetchAdmins(adminEmail);
    }
  }, [adminEmail]);

  const fetchAdmins = async (adminEmail) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_EXPRESS_API}/admins/${adminEmail}`
      );
      setAdmin(response.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          <span className="text-gray-700 text-lg font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  const {
    accountCreatingTime,
    address,
    email,
    gender,
    name,
    number,
    profile,
    status,
    _id,
  } = admin || {};

  return (
    <div className="w-full">
      {/* Cover Image */}
      <div className="w-full mb-3">
        <div className="w-full flex justify-center items-center overflow-hidden rounded-md border h-[150px] sm:h-[250px]">
          <img
            src="https://image.slidesdocs.com/responsive-images/background/3d-generated-world-book-day-banner-featuring-open-space-for-custom-text-powerpoint-background_c21fef4c39__960_540.jpg"
            alt="cover"
            className="w-full h-full "
          />
        </div>
      </div>

      {/* Profile and Info Section */}
      <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Profile Picture and Name */}
        <div className="flex items-center mb-6">
          <img
            src={profile}
            alt="Admin Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500 shadow-lg"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
            <p className="text-sm text-gray-500 capitalize">{status}</p>
          </div>
        </div>

        {/* Account Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <span className="font-semibold w-32">Email:</span>
            <span>{email}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-32">Phone:</span>
            <span>{number}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-32">Gender:</span>
            <span>{gender}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-32">Address:</span>
            <span>{address}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-32">Account Created:</span>
            <span>{accountCreatingTime}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-32">Status:</span>
            <span className="capitalize">{status}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-6">
          <Link
            to={`/update-admin/${_id}`}
            className="px-6 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

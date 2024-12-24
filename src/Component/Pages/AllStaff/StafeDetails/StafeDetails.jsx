import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchOutput from "../../../Default/functions/fatchingData";
import { FaSpinner } from "react-icons/fa";

export default function StafeDetails() {
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Assuming you're passing the staff ID in the URL

  // Fetch staff details based on ID
  useEffect(() => {
    fetchOutput(`stafe/single-stafe/${id}`)
      .then((response) => {
        setStaff(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  if (!staff) {
    return <div>Loading...</div>; // Display loading state
  }

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={staff.staffImage || "https://via.placeholder.com/150"}
          alt="Staff"
          className="w-32 h-32 object-cover rounded-full"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            {staff.staffName}
          </h2>
          <p className="text-gray-600">{staff.designation}</p>
          <p className="text-gray-600">{staff.department}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-700">
            Personal Information
          </h3>
          <ul className="space-y-2 mt-4 text-gray-600">
            <li>
              <strong>Date of Birth:</strong> {staff.dateOfBirth}
            </li>
            <li>
              <strong>Gender:</strong> {staff.gender}
            </li>
            <li>
              <strong>Blood Group:</strong> {staff.bloodGroup}
            </li>
            <li>
              <strong>Email:</strong> {staff.email}
            </li>
            <li>
              <strong>Phone:</strong> {staff.phone}
            </li>
            <li>
              <strong>Address:</strong> {staff.address}
            </li>
            <li>
              <strong>NID Number:</strong> {staff.nidNumber}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700">Job Details</h3>
          <ul className="space-y-2 mt-4 text-gray-600">
            <li>
              <strong>Joining Date:</strong> {staff.joiningDate}
            </li>
            <li>
              <strong>Residential Status:</strong> {staff.residentialStatus}
            </li>
            <li>
              <strong>Staff Password:</strong> {staff.stafePassword}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t pt-6 text-gray-700">
        <h3 className="text-xl font-semibold">Created At:</h3>
        <p>{new Date(staff.createdAt).toLocaleString()}</p>
      </div>

      <div className="mt-6 text-right">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400"
        >
          Back to List
        </button>
      </div>
    </div>
  );
}

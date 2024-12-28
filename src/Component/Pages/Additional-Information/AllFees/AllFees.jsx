import { useEffect, useState } from "react";
import fetchOutput from "../../../Default/functions/fatchingData";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AllFees() {
  const [data, setData] = useState(null); // Ensure initial state is null

  useEffect(() => {
    fetchOutput("feesStructure")
      .then((response) => {
        if (response?.data?.length) {
          setData(response.data[0]); // Use the first object from the data array
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Format dates safely
  const formattedCreatedAt = data?.createdAt
    ? new Date(data.createdAt).toLocaleString()
    : "N/A";
  const formattedUpdatedAt = data?.updatedAt
    ? new Date(data.updatedAt).toLocaleString()
    : "N/A";

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">All Fees Information</h1>
        <p className="text-sm">Updated on: {formattedUpdatedAt}</p>
      </div>

      {/* Body */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Fee Structure:
        </h2>
        {data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(data).map(([key, value]) => {
              // Skip _id, createdAt, and updatedAt
              if (["_id", "createdAt", "updatedAt"].includes(key)) return null;

              return (
                <div key={key} className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <h3 className="text-sm font-medium text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">{value}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500">Loading fee data...</p>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-200 text-center py-4">
        <p className="text-sm text-gray-600">
          Created on: {formattedCreatedAt}
        </p>
      </div>
      <div className="flex justify-end m-4">
        <Link
          to={`/update/home`}
          className="flex items-center bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500  transition duration-300"
        >
          <FaEdit className="mr-2" /> Edit
        </Link>
      </div>
    </div>
  );
}

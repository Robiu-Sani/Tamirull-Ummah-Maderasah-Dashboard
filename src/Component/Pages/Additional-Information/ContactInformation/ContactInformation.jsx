import { useEffect, useState } from "react";
import fetchOutput from "../../../Default/functions/fatchingData";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export default function ContactInformation() {
  const [basicInfo, setBasicInfo] = useState(null);

  useEffect(() => {
    fetchOutput("institution")
      .then((response) => {
        setBasicInfo(response.data[0] || {}); // Assign the first object from the data
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const formattedCreatedAt = basicInfo?.createdAt
    ? new Date(basicInfo.createdAt).toLocaleString()
    : "N/A";
  const formattedUpdatedAt = basicInfo?.updatedAt
    ? new Date(basicInfo.updatedAt).toLocaleString()
    : "N/A";

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">
          {basicInfo?.institutionNameEnglish || "Institution Name"}
        </h1>
        <p className="text-sm">{basicInfo?.institutionNameBanglaArabic}</p>
      </div>

      {/* Body */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Contact Details:
        </h2>
        {basicInfo ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-600">Address (English):</h3>
              <p className="text-gray-800">
                {basicInfo.institutionAddressEnglish}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">
                Address (Bangla/Arabic):
              </h3>
              <p className="text-gray-800">
                {basicInfo.institutionAddressBanglaArabic}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Contact Number:</h3>
              <p className="text-gray-800">{basicInfo.contactNumber}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">WhatsApp:</h3>
              <p className="text-gray-800">{basicInfo.whatsApp}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Telegram:</h3>
              <p className="text-gray-800">{basicInfo.telegram}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Address:</h3>
              <p className="text-gray-800">{basicInfo.address}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-600">Social Links:</h3>
              <ul className="text-gray-800 list-disc list-inside">
                <li>Facebook: {basicInfo.facebook}</li>
                <li>Twitter: {basicInfo.twitter}</li>
                <li>Instagram: {basicInfo.instagram}</li>
                <li>YouTube: {basicInfo.youtube}</li>
                <li>Discord: {basicInfo.discord}</li>
                <li>Messenger: {basicInfo.messenger}</li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href={basicInfo.linkedIn}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {basicInfo.linkedIn}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading contact information...</p>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-200 text-center py-4">
        <img
          src={basicInfo?.logo}
          alt="Institution Logo"
          className="w-24 h-24 mx-auto mb-4"
        />
        <p className="text-sm text-gray-600">
          Created on: {formattedCreatedAt}
        </p>
        <p className="text-sm text-gray-600">
          Updated on: {formattedUpdatedAt}
        </p>
        <p className="text-sm text-gray-600">
          Submission Date: {basicInfo?.submissionDate || "N/A"}
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

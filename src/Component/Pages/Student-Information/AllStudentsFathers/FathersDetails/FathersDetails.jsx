import { useParams } from "react-router-dom";
import fetchOutput from "../../../../Default/functions/fatchingData";
import { useEffect, useState } from "react";
import { FaSpinner, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function FathersDetails() {
  const [singleFather, setsingleFather] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchOutput(`father/single-father/${id}`)
      .then((response) => {
        setsingleFather(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    );
  }

  if (!singleFather) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Failed to load father details.</p>
      </div>
    );
  }

  // const { data: father } = singleFather?;

  return (
    <div className="w-full mx-auto  bg-gray-100 shadow-md rounded-lg">
      {/* Father's Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={singleFather?.fatherImage}
            alt={singleFather?.fatherNameEn}
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {singleFather?.fatherNameBn} ({singleFather?.fatherNameEn})
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {singleFather?.occupation}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Work Location:</strong> {singleFather?.workLocation}
            </p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p>
            <strong>Mobile Number:</strong> {singleFather?.mobilenumber}
          </p>
          <p>
            <strong>WhatsApp:</strong> {singleFather?.whatsapp}
          </p>
          <p>
            <strong>Email:</strong> {singleFather?.email}
          </p>
          <p>
            <strong>Monthly Income:</strong> {singleFather?.monthlyIncome} BDT
          </p>
          <p>
            <strong>Blood Group:</strong> {singleFather?.bloodGroup}
          </p>
          <p>
            <strong>NID Number:</strong> {singleFather?.nidNumber}
          </p>
        </div>
        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          {singleFather?.facebook && (
            <a
              href={singleFather?.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
            >
              <FaFacebook /> Facebook
            </a>
          )}
          <a
            href={`mailto:${singleFather?.email}`}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href={`https://wa.me/${singleFather?.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      {/* Student's Information */}
      {/* Student's Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Student Information
        </h2>
        {singleFather?.studentId ? (
          <>
            <div className="flex items-center gap-6">
              <img
                src={
                  singleFather?.studentId.image || "/default-student-image.jpg"
                } // Add a default image fallback
                alt={singleFather?.studentId.studentNameEnglish || "Student"}
                className="w-32 h-32 rounded-full shadow-lg"
              />
              <div>
                <p>
                  <strong>Name (English):</strong>{" "}
                  {singleFather?.studentId.studentNameEnglish || "N/A"}
                </p>
                <p>
                  <strong>Name (Bangla):</strong>{" "}
                  {singleFather?.studentId.studentNameBangla || "N/A"}
                </p>
                <p>
                  <strong>Class:</strong>{" "}
                  {singleFather?.studentId.class || "N/A"}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {singleFather?.studentId.dateOfBirth
                    ? new Date(
                        singleFather?.studentId.dateOfBirth
                      ).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p>
                <strong>Blood Group:</strong>{" "}
                {singleFather?.studentId.bloodGroup || "N/A"}
              </p>
              <p>
                <strong>Residential Status:</strong>{" "}
                {singleFather?.studentId.residentialStatus || "N/A"}
              </p>
              <p>
                <strong>Identity Email:</strong>{" "}
                {singleFather?.studentId.identityEmail || "N/A"}
              </p>
              <p>
                <strong>Address:</strong>{" "}
                {singleFather?.studentId.address || "N/A"}
              </p>
            </div>
          </>
        ) : (
          <p className="text-red-500">Student information is not available.</p>
        )}
      </div>
    </div>
  );
}

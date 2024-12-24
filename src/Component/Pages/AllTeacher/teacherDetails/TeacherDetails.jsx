import { FaSpinner } from "react-icons/fa";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdOutlineBloodtype,
  MdSchool,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchOutput from "../../../Default/functions/fatchingData";

export default function TeacherDetails() {
  const [singleTeacher, getSingleTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchOutput(`teacher/single-teacher/${id}`)
      .then((response) => {
        getSingleTeacher(response.data);
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

  if (!singleTeacher) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">No teacher data available.</p>
      </div>
    );
  }

  const {
    teacherImage,
    teacherName,
    email,
    phone,
    address,
    bloodGroup,
    gender,
    qualification,
    experience,
    section,
    shift,
    subject,
    residentialStatus,
    teacherPassword,
    dateOfBirth,
  } = singleTeacher;

  return (
    <div className=" flex justify-center ">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full ">
        {/* Header Section */}
        <div className="relative flex justify-center items-center gap-3 flex-col mt-3">
          <img
            src={teacherImage}
            alt={teacherName}
            className="w-auto h-48 object-cover"
          />
          <h1 className="text-3xl font-bold  capitalize">{teacherName}</h1>
        </div>

        {/* Details Section */}
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MdEmail className="text-blue-500 text-xl mr-2" />
              <span className="text-gray-700">{email}</span>
            </div>
            <div className="flex items-center">
              <MdPhone className="text-green-500 text-xl mr-2" />
              <span className="text-gray-700">{phone}</span>
            </div>
            <div className="flex items-center">
              <MdLocationOn className="text-red-500 text-xl mr-2" />
              <span className="text-gray-700">{address}</span>
            </div>
            <div className="flex items-center">
              <MdOutlineBloodtype className="text-pink-500 text-xl mr-2" />
              <span className="text-gray-700">Blood Group: {bloodGroup}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">Gender:</span>
              <span className="ml-2 text-gray-700">
                {gender === "male" ? "Male" : "Female"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">
                Date of Birth:
              </span>
              <span className="ml-2 text-gray-700">
                {new Date(dateOfBirth).toLocaleDateString()}
              </span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Professional Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MdSchool className="text-purple-500 text-xl mr-2" />
              <span className="text-gray-700">
                Qualification: {qualification}
              </span>
            </div>
            <div className="flex items-center">
              <MdSchool className="text-purple-500 text-xl mr-2" />
              <span className="text-gray-700">
                {" "}
                Nid number: {singleTeacher?.nidNumber}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">Experience:</span>
              <span className="ml-2 text-gray-700">{experience} years</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">Shift:</span>
              <span className="ml-2 text-gray-700">{shift}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">Subject:</span>
              <span className="ml-2 text-gray-700">{subject}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">Section:</span>
              <span className="ml-2 text-gray-700">{section}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">
                Residential Status:
              </span>
              <span className="ml-2 text-gray-700">{residentialStatus}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold">Password:</span>
              <span className="ml-2 text-gray-700">{teacherPassword}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

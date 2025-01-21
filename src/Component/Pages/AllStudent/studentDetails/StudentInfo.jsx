import {
  FaEnvelope,
  FaUser,
  FaBirthdayCake,
  FaRuler,
  FaWeight,
  FaTint,
  FaPassport,
} from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";

const StudentInfo = ({ student }) => {
  return (
    <div className="w-full mb-3">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
          <div className="flex items-center space-x-4">
            <img
              className="w-24 h-24 rounded-full border-4 border-white"
              src={student?.image}
              alt={student?.studentNameEnglish}
            />
            <div>
              <h1 className="text-2xl font-bold">
                {student?.studentNameEnglish}
              </h1>
              <p className="text-lg">{student?.studentNameBangla}</p>
              <p className="text-sm italic">Tamirul Ummah Maderasah</p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <FaUser className="mr-2 text-blue-500" />
                <span>Father's Name: {student?.fathersName}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaUser className="mr-2 text-blue-500" />
                <span>Mother's Name: {student?.mothersName}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaUser className="mr-2 text-blue-500" />
                <span>Education Fee: {student?.monthlyFee && 0}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2 text-blue-500" />
                <span>Email: {student?.email}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaBirthdayCake className="mr-2 text-blue-500" />
                <span>Date of Birth: {student?.dateOfBirth}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaRuler className="mr-2 text-blue-500" />
                <span>Height: {student?.height} ft</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaPassport className="mr-2 text-blue-500" />
                <span>Password: {student?.password} </span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <FaWeight className="mr-2 text-blue-500" />
                <span>Weight: {student?.weight} kg</span> <br />
              </p>
              <p className="flex items-center text-gray-600">
                <Fa42Group className="mr-2 text-blue-500" />
                <span>Currently: {student?.isRunning} </span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaTint className="mr-2 text-blue-500" />
                <span>Blood Group: {student?.bloodGroup}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaUser className="mr-2 text-blue-500" />
                <span>Gender: {student?.gender}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaUser className="mr-2 text-blue-500" />
                <span>Class: {student?.class}</span>
              </p>
              <p className="flex items-center text-gray-600">
                <FaUser className="mr-2 text-blue-500" />
                <span>Section: {student?.section}</span>
              </p>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Contact Information
            </h2>
            <p className="mt-2 text-gray-600">Address: {student?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;

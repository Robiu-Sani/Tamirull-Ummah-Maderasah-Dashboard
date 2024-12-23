import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaUser,
  FaBriefcase,
  FaHome,
} from "react-icons/fa";

const MotherInfo = ({ mother }) => {
  return (
    <div className="w-full my-3  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full border-4 border-white"
            src={mother?.motherImage}
            alt={mother?.motherNameEn}
          />
          <div>
            <h1 className="text-2xl font-bold">{mother?.motherNameEn}</h1>
            <p className="text-lg">{mother?.motherNameBn}</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Mother's Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-teal-500" />
              <span>Name: {mother?.motherNameEn}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaPhone className="mr-2 text-teal-500" />
              <span>Mobile: {mother?.mobilenumber}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaEnvelope className="mr-2 text-teal-500" />
              <span>Email: {mother?.email}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaBriefcase className="mr-2 text-teal-500" />
              <span>Occupation: {mother?.occupation}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaHome className="mr-2 text-teal-500" />
              <span>Work Location: {mother?.workLocation}</span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex items-center text-gray-600">
              <FaFacebook className="mr-2 text-teal-500" />
              <span>
                Facebook:{" "}
                <a
                  href={mother?.facebook}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mother?.facebook}
                </a>
              </span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-teal-500" />
              <span>Blood Group: {mother?.bloodGroup}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-teal-500" />
              <span>Monthly Income: {mother?.monthlyIncome} BDT</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-teal-500" />
              <span>NID: {mother?.nidNumber}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherInfo;

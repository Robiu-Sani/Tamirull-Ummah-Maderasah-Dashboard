import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaUser,
  FaBriefcase,
  FaHome,
} from "react-icons/fa";

const GairdeanInfo = ({ gairdean }) => {
  return (
    <div className="w-full  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
        <div className="flex items-center space-x-4">
          {gairdean?.gairdeanImage ? (
            <img
              className="w-24 h-24 rounded-full border-4 border-white"
              src={gairdean?.gairdeanImage}
              alt={gairdean?.gairdeanNameEn}
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-3xl">
              <FaUser />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold">{gairdean?.gairdeanNameEn}</h1>
            <p className="text-lg">{gairdean?.gairdeanNameBn}</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Guardian's Information
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-indigo-500" />
              <span>Name: {gairdean?.gairdeanNameEn}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaPhone className="mr-2 text-indigo-500" />
              <span>Mobile: {gairdean?.mobilenumber}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaEnvelope className="mr-2 text-indigo-500" />
              <span>Email: {gairdean?.email}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaBriefcase className="mr-2 text-indigo-500" />
              <span>Occupation: {gairdean?.occupation}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaHome className="mr-2 text-indigo-500" />
              <span>Work Location: {gairdean?.workLocation}</span>
            </p>
          </div>

          <div className="space-y-2">
            <p className="flex items-center text-gray-600">
              <FaFacebook className="mr-2 text-indigo-500" />
              <span>
                Facebook:{" "}
                <a
                  href={gairdean?.facebook}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {gairdean?.facebook}
                </a>
              </span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-indigo-500" />
              <span>Blood Group: {gairdean?.bloodGroup}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-indigo-500" />
              <span>Monthly Income: {gairdean?.monthlyIncome} BDT</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-indigo-500" />
              <span>NID: {gairdean?.nidNumber}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GairdeanInfo;

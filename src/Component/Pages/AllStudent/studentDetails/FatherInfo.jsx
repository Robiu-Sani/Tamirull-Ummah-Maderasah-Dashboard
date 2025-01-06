import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaMoneyBillWave,
  FaBriefcase,
  FaMapMarkerAlt,
  FaIdCard,
  FaWhatsapp,
  FaTint,
  FaCalendarAlt,
} from "react-icons/fa";

const FatherInfo = ({ father }) => {
  return (
    <div className="w-full ">
      <div className="w-full mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6">
          <div className="flex items-center space-x-4">
            <img
              className="w-24 h-24 rounded-full border-4 border-white"
              src={father?.fatherImage}
              alt={father?.fatherNameEn}
            />
            <div>
              <h1 className="text-2xl font-bold">{father?.fatherNameEn}</h1>
              <p className="text-lg">{father?.fatherNameBn}</p>
              {/* <p className="text-sm italic">Student ID: {father?.studentId}</p> */}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="p-6">
          {/* Personal Information */}
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Father Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <p className="flex items-center text-gray-600">
              <FaTint className="mr-2 text-green-500" />
              <span>Blood Group: {father?.bloodGroup}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaCalendarAlt className="mr-2 text-green-500" />
              <span>
                Death Year:{" "}
                {father?.deathYear ? father?.deathYear : "Still Alive"}
              </span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaIdCard className="mr-2 text-green-500" />
              <span>NID: {father?.nidNumber}</span>
            </p>
          </div>

          {/* Contact Information */}
          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <p className="flex items-center text-gray-600">
              <FaPhone className="mr-2 text-green-500" />
              <span>Mobile: {father?.mobilenumber}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaWhatsapp className="mr-2 text-green-500" />
              <span>WhatsApp: {father?.whatsapp}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaEnvelope className="mr-2 text-green-500" />
              <span>Email: {father?.email}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaFacebook className="mr-2 text-green-500" />
              <a
                href={father?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Facebook Profile
              </a>
            </p>
          </div>

          {/* Professional Information */}
          <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-4">
            Professional Information
          </h2>
          <div className="space-y-2">
            <p className="flex items-center text-gray-600">
              <FaBriefcase className="mr-2 text-green-500" />
              <span>Occupation: {father?.occupation}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2 text-green-500" />
              <span>Work Location: {father?.workLocation}</span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaMoneyBillWave className="mr-2 text-green-500" />
              <span>Monthly Income: {father?.monthlyIncome} BDT</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 italic">
            Created At: {new Date(father?.createdAt).toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 italic">
            Updated At: {new Date(father?.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FatherInfo;

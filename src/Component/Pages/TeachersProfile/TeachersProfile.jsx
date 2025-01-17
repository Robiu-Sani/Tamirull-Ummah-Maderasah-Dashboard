export default function TeachersProfile() {
  const userInfo = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative w-full h-56 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white shadow-lg rounded-lg overflow-hidden mb-3">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-opacity-60 bg-black"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, {userInfo.teacherName}
          </h1>
          <p className="text-lg mb-6">
            Your dashboard provides access to your profile, teaching details,
            and more!
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Image and Name */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={userInfo.teacherImage}
            alt="Teacher Profile"
            className="w-32 h-32 rounded-md border "
          />
          <div>
            <h2 className="text-3xl font-bold">{userInfo.teacherName}</h2>
            <p className="text-gray-500">{userInfo.qualification}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
            <p>
              <span className="font-medium">Date of Birth:</span>{" "}
              {userInfo.dateOfBirth}
            </p>
            <p>
              <span className="font-medium">Gender:</span> {userInfo.gender}
            </p>
            <p>
              <span className="font-medium">Blood Group:</span>{" "}
              {userInfo.bloodGroup}
            </p>
            <p>
              <span className="font-medium">Residential Status:</span>{" "}
              {userInfo.residentialStatus}
            </p>
            <p>
              <span className="font-medium">Address:</span> {userInfo.address}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p>
              <span className="font-medium">Email:</span> {userInfo.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {userInfo.phone}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Professional Details</h3>
            <p>
              <span className="font-medium">Experience:</span>{" "}
              {userInfo.experience}
            </p>
            <p>
              <span className="font-medium">Subject:</span> {userInfo.subject}
            </p>
            <p>
              <span className="font-medium">Section:</span> {userInfo.section}
            </p>
            <p>
              <span className="font-medium">Shift:</span> {userInfo.shift}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Account Details</h3>
            <p>
              <span className="font-medium">User ID:</span> {userInfo._id}
            </p>
            <p>
              <span className="font-medium">Account Type:</span> {userInfo.type}
            </p>
            <p>
              <span className="font-medium">Created At:</span>{" "}
              {new Date(userInfo.createdAt).toLocaleDateString()}
            </p>
            <p>
              <span className="font-medium">Last Updated:</span>{" "}
              {new Date(userInfo.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

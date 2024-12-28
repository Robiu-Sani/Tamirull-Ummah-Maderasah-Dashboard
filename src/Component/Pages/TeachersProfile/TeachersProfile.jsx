export default function TeachersProfile() {
  return (
    <div>
      <div className="relative w-full h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white shadow-lg rounded-lg overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-opacity-60 bg-black"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
          <p className="text-lg mb-6">
            Manage your data, insights, and progress with a seamless experience.
            Let`s get started!
          </p>
          <button className="px-6 py-2 bg-yellow-400 text-yellow-900 font-medium rounded-full hover:bg-yellow-500 transition duration-300">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );
}

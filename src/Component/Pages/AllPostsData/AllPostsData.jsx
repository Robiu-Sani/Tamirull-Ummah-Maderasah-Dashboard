import PostsTable from "./PostsTable";

export default function AllPostsData() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 px-6 rounded-lg shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Title and Subtitle */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome to the Dashboard
            </h1>
            <p className="text-lg md:text-xl">
              Manage your posts effectively and track activities seamlessly.
            </p>
          </div>
          {/* Right Section: Stats */}
          <div className="mt-6 md:mt-0 flex space-x-6">
            <div className="bg-white text-blue-500 rounded-lg p-4 shadow-md text-center">
              <h2 className="text-2xl font-bold">120</h2>
              <p className="text-sm">Total Posts</p>
            </div>
            <div className="bg-white text-green-500 rounded-lg p-4 shadow-md text-center">
              <h2 className="text-2xl font-bold">45</h2>
              <p className="text-sm">Selected Posts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Post Table */}
      <div className=" mt-4">
        <PostsTable />
      </div>
    </div>
  );
}

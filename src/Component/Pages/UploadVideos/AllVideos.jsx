import { useState } from "react";

const dummyVideos = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Video Title ${index + 1}`,
  link: "https://www.youtube.com/embed/bZ3HPRE80Zw?si=MQv7LlHozfkeDU-U",
}));

export default function AllVideos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState(dummyVideos);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filteredVideos = dummyVideos.filter((video) =>
      video.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setVideos(filteredVideos);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="bg-blue-500 rounded-md text-white text-center py-8">
        <h1 className="text-3xl font-bold">Explore Our Videos</h1>
        <p className="mt-2 text-lg">
          Discover and enjoy our curated video collection
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-3">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-xs md:max-w-md lg:w-[400px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 ">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <iframe
              src={video.link}
              title={video.title}
              className="w-full aspect-video"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-base font-medium text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

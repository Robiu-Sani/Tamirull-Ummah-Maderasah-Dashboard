import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearchPlus, FaTimes, FaDownload } from "react-icons/fa";

export default function AllImages() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/image`)
      .then((res) => {
        const data = res.data.data.data;
        console.log(res.data.data.data);
        setImages(Array.isArray(data) ? data : []); // Ensure data is an array
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const downloadImage = async (url, fileName) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Image download failed:", error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full  min-h-screen">
      {/* Banner Section */}
      <div className="bg-blue-500 rounded-md text-white text-center py-8">
        <h1 className="text-4xl font-bold">ইসলামী কার্যক্রম গ্যালারি</h1>
        <p className="mt-2 text-lg">
          আমাদের ইসলামী ইভেন্ট এবং কার্যক্রমের সুন্দর মুহূর্তগুলো দেখুন।
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center py-6 px-4">
        <input
          type="text"
          placeholder="ছবির শিরোনাম অনুসন্ধান করুন..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-xs sm:max-w-md lg:w-[400px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="gap-4" style={{ columns: "250px" }}>
          {filteredImages.map((image) => (
            <div key={image.id} className="relative m-1 group duration-300">
              <img
                src={image.image}
                alt={image.title}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="text-white text-2xl p-4 bg-gray-500 rounded-full hover:bg-gray-600 mr-2"
                  onClick={() => handleImageClick(image)}
                >
                  <FaSearchPlus />
                </button>
                <button
                  className="text-white text-2xl p-4 bg-gray-500 rounded-full hover:bg-gray-600"
                  onClick={() =>
                    downloadImage(image.image, `${image.title}.jpg`)
                  }
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg overflow-y-auto max-w-3xl w-full shadow-lg">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl p-2 bg-red-600 rounded-full"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.description}</p>
                <button
                  className="mt-4 text-white text-xl p-3 bg-gray-500 rounded-full hover:bg-gray-600"
                  onClick={() =>
                    downloadImage(
                      selectedImage.image,
                      `${selectedImage.title}.jpg`
                    )
                  }
                >
                  <FaDownload className="inline-block mr-2" />
                  ডাউনলোড করুন
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

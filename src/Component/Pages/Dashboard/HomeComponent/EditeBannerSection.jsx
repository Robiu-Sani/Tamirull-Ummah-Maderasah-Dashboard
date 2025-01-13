import axios from "axios";
import { useEffect, useState } from "react";
import { CgEditExposure } from "react-icons/cg";
import { FaPenFancy } from "react-icons/fa";
import { Link } from "react-router-dom";

// Utility function to truncate text based on word limit
const truncateText = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

export default function EditBannerSection() {
  const [carousel, setCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCarousel();
  }, []);

  const fetchCarousel = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/slide`);
      setCarousel(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching carousel data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full rounded-md shadow-md bg-white">
      <div className="w-full flex justify-between items-center p-2 border-b">
        <h3 className="font-semibold flex justify-start items-center gap-2">
          <FaPenFancy /> Edit Additional Info
        </h3>
        <Link
          to={"/update/home"}
          className="flex justify-center text-white bg-gray-800 items-center gap-2 font-semibold px-3 p-1 border outline-0 rounded-md"
        >
          <CgEditExposure className="text-xl" /> Update
        </Link>
      </div>
      {/* Content */}
      {isLoading ? (
        <div className="flex justify-center items-center py-6">
          <div className="loader border-t-4 border-gray-800 rounded-full w-10 h-10 animate-spin"></div>
        </div>
      ) : (
        <div className="w-full p-2 flex flex-col gap-2">
          {carousel?.images &&
            Object.entries(carousel.images).map(([key, img], index) => (
              <div
                key={index}
                className="flex w-full justify-between gap-2 items-center p-1 border rounded-md"
              >
                <div className="h-[50px] w-[100px] rounded-sm overflow-hidden">
                  <img
                    src={img}
                    alt={`banner ${key}`}
                    className="min-w-full min-h-full"
                  />
                </div>
                <div className="w-full">
                  <h5 className="font-semibold">
                    {truncateText(carousel[`slide${index + 1}Title`], 3)}
                  </h5>
                  <small>
                    {truncateText(carousel[`slide${index + 1}Description`], 5)}
                  </small>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

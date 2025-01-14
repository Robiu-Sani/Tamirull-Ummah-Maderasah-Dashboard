import { FaEdit } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchOutput from "../../../Default/functions/fatchingData";

export default function CarouselData() {
  const [slideData, setSlideData] = useState(null); // State to hold data
  const [error, setError] = useState(null); // State to hold error message

  useEffect(() => {
    fetchOutput("slide")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setSlideData(response.data[0]);
        } else {
          setError("No slide data available");
        }
      })
      .catch((err) => {
        setError("Error fetching data: " + err.message);
        console.error("Error fetching data:", err);
      });
  }, []);

  // If there is no data or an error
  if (error) {
    return (
      <div className="w-full text-center text-red-500">
        <h1>{error}</h1>
      </div>
    );
  }

  if (!slideData) {
    return (
      <div className="w-full text-center text-black">
        <h1>Loading carousel data...</h1>
      </div>
    );
  }

  const data = {
    images: {
      slide1: slideData?.images?.slide1,
      slide2: slideData?.images?.slide2,
      slide3: slideData?.images?.slide3,
      slide4: slideData?.images?.slide4,
    },
    slide1Title: slideData?.slide1Title,
    slide1Description: slideData?.slide1Description,
    slide2Title: slideData?.slide2Title,
    slide2Description: slideData?.slide2Description,
    slide3Title: slideData?.slide3Title,
    slide3Description: slideData?.slide3Description,
    slide4Title: slideData?.slide4Title,
    slide4Description: slideData?.slide4Description,
  };

  return (
    <div className="w-full md:w-[calc(100vw-300px)] text-white mx-auto">
      <h1 className="text-3xl text-black font-bold text-center mb-6">
        Madrasah Carousel
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-96 rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={data.images.slide1}
              alt={data.slide1Title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
              <h2 className="text-2xl font-bold mb-4">{data.slide1Title}</h2>
              <p className="text-center">{data.slide1Description}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={data.images.slide2}
              alt={data.slide2Title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
              <h2 className="text-2xl font-bold mb-4">{data.slide2Title}</h2>
              <p className="text-center">{data.slide2Description}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={data.images.slide3}
              alt={data.slide3Title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
              <h2 className="text-2xl font-bold mb-4">{data.slide3Title}</h2>
              <p className="text-center">{data.slide3Description}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={data.images.slide4}
              alt={data.slide4Title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
              <h2 className="text-2xl font-bold mb-4">{data.slide4Title}</h2>
              <p className="text-center">{data.slide4Description}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        {Object.keys(data.images).map((key, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={data.images[key]}
              alt={data[`slide${index + 1}Title`]}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {data[`slide${index + 1}Title`]}
              </h2>
              <p>{data[`slide${index + 1}Description`]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to={`/update/home`}
          className="flex items-center bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          <FaEdit className="mr-2" /> Edit
        </Link>
      </div>
    </div>
  );
}

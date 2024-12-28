import { FaEdit } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function CarouselData() {
  const data = {
    images: {
      slide1:
        "http://res.cloudinary.com/duegkjfvf/image/upload/v1734870553/vosbkdxep87ge1hwpdue.jpg",
      slide2:
        "http://res.cloudinary.com/duegkjfvf/image/upload/v1734870560/mpiaxatc4rl2kfkkpct5.jpg",
      slide3:
        "http://res.cloudinary.com/duegkjfvf/image/upload/v1734870564/fjwkhbkfdhsxpjquxfbg.jpg",
      slide4:
        "http://res.cloudinary.com/duegkjfvf/image/upload/v1734870573/nt2dirhjlkcphrskayxq.jpg",
    },
    slide1Title: "Islamic Education for a Brighter Future",
    slide1Description:
      "Empowering young minds with the teachings of the Qur'an and Sunnah. Join us in nurturing a generation rooted in faith, knowledge, and moral excellence.",
    slide2Title: "Learning with Purpose, Living with Faith",
    slide2Description:
      "Discover a curriculum designed to inspire hearts and minds. From Tajweed to Islamic history, we provide a holistic approach to spiritual and academic growth.",
    slide3Title: "this is title 3",
    slide3Description:
      "At our Madrasah, education goes beyond books. We focus on instilling discipline, compassion, and the values of Islam in every student.",
    slide4Title: "Shaping Leaders for Tomorrow",
    slide4Description:
      "Prepare for a future guided by faith and wisdom. Our Madrasah equips students with the tools to succeed in both Dunya and Akhirah.",
  };

  return (
    <div className="w-full max-w-[calc(100vw-300px)] text-white mx-auto  ">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
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
          className="flex items-center bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500  transition duration-300"
        >
          <FaEdit className="mr-2" /> Edit
        </Link>
      </div>
    </div>
  );
}

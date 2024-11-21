import { CgEditExposure } from "react-icons/cg";
import { FaPenFancy } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EditeBannerSection() {
  const bannerData = [
    {
      id: 1,
      title: "Here will Banner Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi...",
      imageUrl:
        "https://t3.ftcdn.net/jpg/09/99/40/22/360_F_999402272_X7Xoky6muo5otfzDsYuewrKZEMec3Mle.jpg",
    },
    {
      id: 2,
      title: "Here will Banner Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi...",
      imageUrl:
        "https://t3.ftcdn.net/jpg/09/99/40/22/360_F_999402272_X7Xoky6muo5otfzDsYuewrKZEMec3Mle.jpg",
    },
    {
      id: 3,
      title: "Here will Banner Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi...",
      imageUrl:
        "https://t3.ftcdn.net/jpg/09/99/40/22/360_F_999402272_X7Xoky6muo5otfzDsYuewrKZEMec3Mle.jpg",
    },
    {
      id: 4,
      title: "Here will Banner Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi...",
      imageUrl:
        "https://t3.ftcdn.net/jpg/09/99/40/22/360_F_999402272_X7Xoky6muo5otfzDsYuewrKZEMec3Mle.jpg",
    },
  ];

  return (
    <div className="w-full rounded-md shadow-md bg-white">
      <div className="w-full flex justify-between items-center p-2 border-b">
        <h3 className="font-semibold flex justify-start items-center gap-2">
          <FaPenFancy /> Edite Aditional Info
        </h3>
        <Link
          to={"/update/home"}
          className="flex justify-center text-white bg-gray-800 items-center gap-2 font-semibold px-3 p-1 border outline-0 rounded-md"
        >
          <CgEditExposure className="text-xl" /> Update
        </Link>
      </div>
      {/* Banner Items */}
      <div className="w-full p-2 flex flex-col gap-2">
        {bannerData.map((banner) => (
          <div
            key={banner.id}
            className="flex w-full justify-between gap-2 items-center p-1 border"
          >
            <div className="h-[50px] w-[100px] rounded-sm overflow-hidden">
              <img
                src={banner.imageUrl}
                alt="banner"
                className="min-w-full min-h-full"
              />
            </div>
            <div className="w-full">
              <h5 className="font-semibold">{banner.title}</h5>
              <small>{banner.description}</small>
            </div>
            {/* <FaPenFancy className="cursor-pointer mr-2" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

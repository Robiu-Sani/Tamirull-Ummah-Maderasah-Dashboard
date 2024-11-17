import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCarouselView } from "react-icons/ri";

export default function CarouselInformetion() {
  const [callItem, setCallItem] = useState(false);
  return (
    <div className="w-full bg-white rounded-md  shadow-md">
      <div
        onClick={() => setCallItem(!callItem)}
        className={`w-full flex justify-between cursor-pointer p-5 ${
          callItem ? "border-b" : "border-0"
        } items-center`}
      >
        <span className="flex justify-center items-center gap-3">
          <RiCarouselView />
          <span>Update Carousel</span>
        </span>
        <MdKeyboardArrowDown
          className={`text-3xl ${callItem ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </div>
  );
}

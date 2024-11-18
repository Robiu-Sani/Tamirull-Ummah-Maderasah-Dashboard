import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCarouselView } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageUpload from "../../Default/ImageUpload";

export default function CarouselInformetion() {
  const [callItem, setCallItem] = useState(false);
  const [images, setImages] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (field, url) => {
    setImages((prev) => ({ ...prev, [field]: url }));
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      images,
    };
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
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

      {callItem && (
        <div className="w-full p-5">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
              {["slide1", "slide2", "slide3", "slide4"].map((slide, index) => (
                <div key={index} className="w-full flex flex-col gap-3">
                  <label>Your {slide} Image</label>
                  <div className="w-full relative flex-col cursor-pointer max-h-[200px] min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
                    {images[slide] ? (
                      <img
                        src={images[slide]}
                        alt={`${slide} Preview`}
                        className="w-full max-h-[200px] min-h-[150px] rounded-md border"
                      />
                    ) : (
                      <div className="w-full max-h-[200px] min-h-[150px] flex flex-col justify-center items-center h-full">
                        <IoCloudUploadOutline className="text-2xl" />
                        <small>Upload {slide} image</small>
                      </div>
                    )}
                    <ImageUpload
                      onUpload={(url) => handleImageUpload(slide, url)}
                    />
                  </div>
                  {errors[slide] && (
                    <p className="text-red-500 text-sm">
                      {errors[slide].message}
                    </p>
                  )}
                  <label>Title</label>
                  <input
                    type="text"
                    {...register(`${slide}Title`)}
                    className="w-full p-2 border rounded-md"
                    placeholder={`Enter ${slide} title`}
                  />
                  {errors[`${slide}Title`] && (
                    <p className="text-red-500 text-sm">
                      {errors[`${slide}Title`].message}
                    </p>
                  )}
                  <label>Description</label>
                  <textarea
                    {...register(`${slide}Description`)}
                    className="w-full p-2 border rounded-md"
                    placeholder={`Enter ${slide} description`}
                    rows="3"
                  ></textarea>
                  {errors[`${slide}Description`] && (
                    <p className="text-red-500 text-sm">
                      {errors[`${slide}Description`].message}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="mt-5 w-full px-6 py-2 bg-gray-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

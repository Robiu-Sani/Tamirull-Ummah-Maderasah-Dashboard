import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCarouselView } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageUpload from "../../Default/ImageUpload"; // Component for image upload
import { ImSpinner2 } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import PatchData from "../../Default/functions/patchData";
import fetchOutput from "../../Default/functions/fatchingData";

export default function CarouselInformetion() {
  const [callItem, setCallItem] = useState(false);
  const [images, setImages] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [carousel, setCarousel] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchOutput(`slide`)
      .then((response) => {
        setCarousel(response.data[0] || {});
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Handle image upload
  const handleImageUpload = (field, url) => {
    setImages((prev) => ({ ...prev, [field]: url }));
  };

  // Handle form submission
  const onSubmit = async (data) => {
    const formData = {
      slide1Title: data.slide1Title || carousel.slide1Title,
      slide1Description: data.slide1Description || carousel.slide1Description,
      slide2Title: data.slide2Title || carousel.slide2Title,
      slide2Description: data.slide2Description || carousel.slide2Description,
      slide3Title: data.slide3Title || carousel.slide3Title,
      slide3Description: data.slide3Description || carousel.slide3Description,
      slide4Title: data.slide4Title || carousel.slide4Title,
      slide4Description: data.slide4Description || carousel.slide4Description,
      images: {
        slide1: images.slide1 || carousel.images?.slide1,
        slide2: images.slide2 || carousel.images?.slide2,
        slide3: images.slide3 || carousel.images?.slide3,
        slide4: images.slide4 || carousel.images?.slide4,
      },
    };

    try {
      setIsSubmitting(true);
      const submittedData = await PatchData(
        `slide/update-single-slide-by-patch/${carousel._id}`,
        formData
      );
      if (submittedData.status === true) {
        toast.success(submittedData.message);
        reset();
      } else {
        toast.error(submittedData.message);
      }
    } catch (error) {
      toast.error("Error submitting form:");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <Toaster position="top-center" />
      {/* Header section */}
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

      {/* Form Section */}
      {callItem && (
        <div className="w-full p-5">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Loop through slides */}
              {["slide1", "slide2", "slide3", "slide4"].map((slide, index) => (
                <div key={index} className="w-full flex flex-col gap-3">
                  {/* Image Upload Section */}
                  <label>Your {slide} Image</label>
                  <div className="w-full relative flex-col cursor-pointer max-h-[200px] min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
                    {images[slide] || carousel.images?.[slide] ? (
                      <img
                        src={images[slide] || carousel.images?.[slide]}
                        alt={`${slide} Preview`}
                        className="w-full max-h-[200px] min-h-[150px] rounded-md"
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

                  {/* Title Input */}
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

                  {/* Description Input */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 flex mt-4 justify-center items-center gap-3 py-2 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ImSpinner2 className="animate-spin" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

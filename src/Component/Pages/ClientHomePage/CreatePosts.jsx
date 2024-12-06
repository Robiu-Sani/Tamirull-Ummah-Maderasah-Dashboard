import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageUpload from "../../Default/ImageUpload";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";

export default function CreatePosts() {
  const [callItem, setCallItem] = useState(false);
  const [isSubmiting, setIsSubmitein] = useState(false);
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    try {
      setIsSubmitein(true);
      const postData = {
        ...data,
        image,
        date: new Date().toLocaleString(), // Automatically add current date and time
      };
      alert(JSON.stringify(postData, null, 2));
      reset(); // Reset the form after submission
      toast.success("Notifiction created successfully!");
      reset();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      setIsSubmitein(false);
    }
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <Toaster position="top-center" />
      <div
        onClick={() => setCallItem(!callItem)}
        className={`w-full flex justify-between cursor-pointer p-5 ${
          callItem ? "border-b" : "border-0"
        } items-center`}
      >
        <span className="flex justify-center items-center gap-3">
          <AiOutlineNotification />
          <span>Add a Article</span>
        </span>
        <MdKeyboardArrowDown
          className={`text-3xl ${callItem ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {callItem && (
        <div className="w-full p-5">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Create a New Post
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Post Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Post Title
              </label>
              <input
                id="title"
                type="text"
                {...register("title", { required: "Title is required" })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Post Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Post Description
              </label>
              <textarea
                id="description"
                {...register("description", {
                  required: "Description is required",
                })}
                className="mt-1 block w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* image  */}
            <div className="my-4 max-w-sm">
              <div className="w-full flex flex-col gap-3">
                <label className="block text-sm text-gray-600 mb-2">
                  Upload Image
                </label>
                <div className="w-full relative flex-col cursor-pointer h-auto min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded Preview"
                      className="w-full h-auto min-h-[150px] rounded-md border"
                    />
                  ) : (
                    <div className="w-full max-h-[100px] min-h-[150px] flex flex-col justify-center items-center h-full">
                      <IoCloudUploadOutline className="text-2xl" />
                      <small>Upload Student Image</small>
                    </div>
                  )}
                  <ImageUpload onUpload={handleImageUpload} />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 flex justify-center items-center gap-3 py-2 w-full bg-gray-500 text-white rounded-md"
            >
              {isSubmiting ? <ImSpinner2 className="animate-spin" /> : null}
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

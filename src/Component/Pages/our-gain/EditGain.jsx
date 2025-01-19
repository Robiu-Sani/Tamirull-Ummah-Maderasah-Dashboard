import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { GiOilySpiral } from "react-icons/gi";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageUpload from "../../Default/ImageUpload";
import { useParams } from "react-router-dom";

export default function EditGain() {
  const [image, setImage] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [updatedData, setUpdatedData] = useState([]);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchGainData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/gain`);
        if (response.data.status) {
          setUpdatedData(response.data.data);
        } else {
          toast.error("Failed to fetch gain data!");
        }
      } catch (error) {
        console.error("Error fetching gain data:", error);
        toast.error("Something went wrong while fetching gain data!");
      }
    };
    fetchGainData();
  }, []);

  const onSubmit = async (data) => {
    const postData = {
      ...data,
      date: new Date().toLocaleDateString(),
      image: image ? image : updatedData.image,
      title: data.title ? data.title : updatedData.title,
      description: data.description
        ? data.description
        : updatedData.description,
    };
    try {
      setIsSubmiting(true);

      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER}/gain/update-gain/${id}`,
        postData
      );

      if (response?.data?.status) {
        reset();
        toast.success(response.data.message || "Submit successful");
      } else {
        toast.error("Unexpected API response");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmiting(false);
    }
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <div className="w-full mx-auto p-4 bg-white rounded-md shadow-md">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4 text-center">আমাদের অর্জন</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Post Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: false })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Post Description */}
        <div>
          <label
            htmlFor="postDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: false,
            })}
            className="mt-1 block w-full h-40 p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
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
                  <small>Upload Image</small>
                </div>
              )}
              <ImageUpload onUpload={handleImageUpload} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-3 bg-gray-600 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-700 transition duration-300"
        >
          {isSubmiting ? <GiOilySpiral className="animate-spin" /> : null}
          Submit
        </button>
      </form>
    </div>
  );
}

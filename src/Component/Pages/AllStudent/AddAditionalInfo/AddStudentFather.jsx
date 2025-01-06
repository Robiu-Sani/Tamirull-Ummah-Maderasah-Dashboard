import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaUser,
  FaIdCard,
  FaBriefcase,
  FaDollarSign,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageUpload from "../../../Default/ImageUpload";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import postOutput from "../../../Default/functions/postOutput";
import toast, { Toaster } from "react-hot-toast";

export default function AddStudentFather() {
  const [image, setImage] = useState(null);
  const [isload, setIsload] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const restData = { fatherImage: image, ...data };
    try {
      setIsload(true);
      const submittedData = await postOutput("father/create-father", restData);
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
      setIsload(false);
    }
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Toaster />
      <h2 className="text-2xl font-bold text-center mb-6">
        Add Father`s Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Father's Name in Bengali */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaUser className="inline mr-2" /> Father`s Name (Bengali)
            </label>
            <input
              type="text"
              {...register("fatherNameBn", {
                required: "This field is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter father's name in Bengali"
            />
            {errors.fatherNameBn && (
              <span className="text-red-500 text-sm">
                {errors.fatherNameBn.message}
              </span>
            )}
          </div>

          {/* Father's Name in English */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaUser className="inline mr-2" /> Father`s Name (English)
            </label>
            <input
              type="text"
              {...register("fatherNameEn", {
                required: "This field is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter father's name in English"
            />
            {errors.fatherNameEn && (
              <span className="text-red-500 text-sm">
                {errors.fatherNameEn.message}
              </span>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaMobileAlt className="inline mr-2" /> Mobile Number
            </label>
            <input
              type="text"
              {...register("mobilenumber", {
                required: "This field is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid mobile number",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter mobile number"
            />
            {errors.mobilenumber && (
              <span className="text-red-500 text-sm">
                {errors.mobilenumber.message}
              </span>
            )}
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaDollarSign className="inline mr-2" /> Monthly Income
            </label>
            <input
              type="text"
              {...register("monthlyIncome", {
                required: "This field is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter monthly income"
            />
            {errors.monthlyIncome && (
              <span className="text-red-500 text-sm">
                {errors.monthlyIncome.message}
              </span>
            )}
          </div>

          {/* NID Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaIdCard className="inline mr-2" /> NID Number
            </label>
            <input
              type="text"
              {...register("nidNumber", { required: "This field is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter NID number"
            />
            {errors.nidNumber && (
              <span className="text-red-500 text-sm">
                {errors.nidNumber.message}
              </span>
            )}
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaBriefcase className="inline mr-2" /> Occupation
            </label>
            <input
              type="text"
              {...register("occupation", {
                required: "This field is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter occupation"
            />
            {errors.occupation && (
              <span className="text-red-500 text-sm">
                {errors.occupation.message}
              </span>
            )}
          </div>

          {/* Work Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaMapMarkerAlt className="inline mr-2" /> Work Location
            </label>
            <input
              type="text"
              {...register("workLocation", {
                required: "This field is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter work location"
            />
            {errors.workLocation && (
              <span className="text-red-500 text-sm">
                {errors.workLocation.message}
              </span>
            )}
          </div>

          {/* Facebook */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaFacebookF className="inline mr-2" /> Facebook (optional)
            </label>
            <input
              type="text"
              {...register("facebook")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter Facebook link"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaWhatsapp className="inline mr-2" /> WhatsApp (optional)
            </label>
            <input
              type="text"
              {...register("whatsapp")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter WhatsApp number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaEnvelope className="inline mr-2" /> Email (optional)
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter email address"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Group (optional)
            </label>
            <input
              type="text"
              {...register("bloodGroup")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter blood group"
            />
          </div>

          {/* Death Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Death Year (optional)
            </label>
            <input
              type="text"
              {...register("deathYear")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter death year"
            />
          </div>
        </div>

        {/* profile  */}
        <div className="mb-4 max-w-sm">
          <div className="w-full flex flex-col gap-3">
            <label className="block text-sm text-gray-600 mb-2">
              Upload Father Image
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
                  <small>Upload Father Image</small>
                </div>
              )}
              <ImageUpload onUpload={handleImageUpload} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-600 mt-3 flex justify-center items-center gap-3 text-white p-2 rounded-md hover:bg-gray-700 transition"
        >
          {isload ? <ImSpinner2 className="animate-spin" /> : null}
          Save Information
        </button>
      </form>
    </div>
  );
}

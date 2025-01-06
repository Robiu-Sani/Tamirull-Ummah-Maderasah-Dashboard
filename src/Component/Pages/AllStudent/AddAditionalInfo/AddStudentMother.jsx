import { useForm } from "react-hook-form";
import {
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaIdCard,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageUpload from "../../../Default/ImageUpload";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import postOutput from "../../../Default/functions/postOutput";
import toast, { Toaster } from "react-hot-toast";

export default function AddStudentMother() {
  const [image, setImage] = useState(null);
  const [isload, setIsload] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const restData = { motherImage: image, ...data };
    try {
      setIsload(true);
      const submittedData = await postOutput("mother/create-mother", restData);
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
    <div className="w-full mx-auto p-6 bg-white  rounded-lg">
      <Toaster />
      <h2 className="text-2xl font-bold text-center mb-6">
        Add Mother Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Mother Name in Bangla */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaUser className="inline mr-2" /> Mother`s Name (Bangla)
            </label>
            <input
              type="text"
              {...register("motherNameBn", {
                required: "Mother's name in Bangla is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="মায়ের নাম (বাংলা)"
            />
            {errors.motherNameBn && (
              <span className="text-red-500 text-sm">
                {errors.motherNameBn.message}
              </span>
            )}
          </div>

          {/* Mother Name in English */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaUser className="inline mr-2" /> Mother`s Name (English)
            </label>
            <input
              type="text"
              {...register("motherNameEn", {
                required: "Mother's name in English is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Mother's Name (English)"
            />
            {errors.motherNameEn && (
              <span className="text-red-500 text-sm">
                {errors.motherNameEn.message}
              </span>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaPhone className="inline mr-2" /> Mobile Number
            </label>
            <input
              type="tel"
              {...register("mobilenumber", {
                required: "Mobile number is required",
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

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaWhatsapp className="inline mr-2" /> WhatsApp (optional)
            </label>
            <input
              type="tel"
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

          {/* Facebook */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaFacebook className="inline mr-2" /> Facebook (optional)
            </label>
            <input
              type="url"
              {...register("facebook")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter Facebook profile link"
            />
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaBriefcase className="inline mr-2" /> Occupation
            </label>
            <input
              type="text"
              {...register("occupation", {
                required: "Occupation is required",
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
                required: "Work location is required",
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

          {/* Monthly Income */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaMoneyBillWave className="inline mr-2" /> Monthly Income
            </label>
            <input
              type="number"
              {...register("monthlyIncome", {
                required: "Monthly income is required",
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
              {...register("nidNumber", { required: "NID number is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter NID number"
            />
            {errors.nidNumber && (
              <span className="text-red-500 text-sm">
                {errors.nidNumber.message}
              </span>
            )}
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Group (optional)
            </label>
            <select
              {...register("bloodGroup")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Death Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Death Year (optional)
            </label>
            <input
              type="number"
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
              Upload Mother Image
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
                  <small>Upload Mother Image</small>
                </div>
              )}
              <ImageUpload onUpload={handleImageUpload} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-gray-600 mt-3 flex justify-center items-center gap-3 text-white p-2 rounded-md hover:bg-gray-700 transition"
          >
            {isload ? <ImSpinner2 className="animate-spin" /> : null}
            Save Information
          </button>
        </div>
      </form>
    </div>
  );
}

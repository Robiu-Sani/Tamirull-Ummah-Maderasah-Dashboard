import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUserTie,
  FaCalendarAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSuitcase,
  FaTint,
  FaHome,
  FaMale,
} from "react-icons/fa";
import postOutput from "../../Default/functions/postOutput";
import toast, { Toaster } from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageUpload from "../../Default/ImageUpload";
import { ImSpinner2 } from "react-icons/im";

export default function AddStaffForm() {
  const [image, setImage] = useState(null);
  const [isload, setIsload] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.staffName.toLowerCase().replace(/\s+/g, "") + "@tum.com";
    const newData = { staffImage: image, email, ...data };
    console.log(newData);

    try {
      setIsload(true);
      const submittedData = await postOutput("stafe/create-stafe", newData);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto bg-white p-8 rounded-md shadow-lg border"
    >
      <Toaster />
      <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
        Add Staff Member Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Staff Name */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            <FaUserTie className="inline mr-2" />
            Staff Member`s Name by english
          </label>
          <input
            type="text"
            {...register("staffName", { required: true })}
            placeholder="Enter staff member's name"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.staffName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            <FaCalendarAlt className="inline mr-2" />
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dateOfBirth", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.dateOfBirth && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* nidNumber */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            <FaEnvelope className="inline mr-2" />
            Nid Number
          </label>
          <input
            type="number"
            {...register("nidNumber", { required: true })}
            placeholder="Enter nid number"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.nidNumber && (
            <span className="text-red-500 text-sm">
              A valid nid number is required
            </span>
          )}
        </div>

        {/* Blood Group */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            <FaTint className="inline mr-2" />
            Blood Group
          </label>
          <select
            {...register("bloodGroup", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
          {errors.bloodGroup && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            <FaPhoneAlt className="inline mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            placeholder="Enter phone number"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Designation */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            <FaSuitcase className="inline mr-2" />
            Designation
          </label>
          <input
            type="text"
            {...register("designation", { required: true })}
            placeholder="Enter designation"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.designation && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Department
          </label>
          <input
            type="text"
            {...register("department", { required: true })}
            placeholder="Enter department"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.department && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Joining Date */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Joining Date
          </label>
          <input
            type="date"
            {...register("joiningDate", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.joiningDate && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Gender */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            <FaMale className="inline mr-2" />
            Gender
          </label>
          <select
            {...register("gender", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Residential Status */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            <FaHome className="inline mr-2" />
            Residential Status
          </label>
          <select
            {...register("residentialStatus", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select status</option>
            <option value="abashik">Abashik</option>
            <option value="onabashik">Onabashik</option>
            <option value="daycare">Daycare</option>
          </select>
          {errors.residentialStatus && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Address */}
        <div className="col-span-1 md:col-span-2">
          <label className="block font-medium text-gray-700 mb-2">
            <FaMapMarkerAlt className="inline mr-2" />
            Address
          </label>
          <textarea
            {...register("address", { required: true })}
            placeholder="Enter address"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
      </div>

      {/* profile  */}
      <div className="mb-4 max-w-sm">
        <div className="w-full flex flex-col gap-3">
          <label className="block text-sm text-gray-600 mb-2">
            Upload Logo
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
                <small>Upload Staff Image</small>
              </div>
            )}
            <ImageUpload onUpload={handleImageUpload} />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gray-600 mt-3 flex justify-center items-center gap-3 text-white p-2 rounded-md hover:bg-gray-700 transition"
      >
        {isload ? <ImSpinner2 className="animate-spin" /> : null}
        Save Staff Member Information
      </button>
    </form>
  );
}

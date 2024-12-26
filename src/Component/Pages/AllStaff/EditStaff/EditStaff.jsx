import toast, { Toaster } from "react-hot-toast";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaMale,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSpinner,
  FaSuitcase,
  FaTint,
  FaUserTie,
} from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineNewspaper } from "react-icons/md";
import ImageUpload from "../../../Default/ImageUpload";
import PatchData from "../../../Default/functions/patchData";
import fetchOutput from "../../../Default/functions/fatchingData";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

export default function EditStaff() {
  const [image, setImage] = useState(null);
  const [isload, setIsload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [staffData, setStaffData] = useState();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchOutput(`stafe/single-stafe/${id}`)
      .then((response) => {
        setStaffData(response.data);
        setLoading(false); // Data has been fetched, set loading to false
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false); // If an error occurs, set loading to false as well
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    ); // Show spinner while loading
  }

  const onSubmit = async (data) => {
    console.log(data);
    const newData = {
      address: data.address ? data.address : staffData.address,
      bloodGroup: data.bloodGroup ? data.bloodGroup : staffData.bloodGroup,
      dateOfBirth: data.dateOfBirth ? data.dateOfBirth : staffData.dateOfBirth,
      department: data.department ? data.department : staffData.department,
      designation: data.designation ? data.designation : staffData.designation,
      email: data.email ? data.email : staffData.email,
      gender: data.gender ? data.gender : staffData.gender,
      joiningDate: data.joiningDate ? data.joiningDate : staffData.joiningDate,
      phone: data.phone ? data.phone : staffData.phone,
      residentialStatus: data.residentialStatus
        ? data.residentialStatus
        : staffData.residentialStatus,
      staffName: data.staffName ? data.staffName : staffData.staffName,
      nidNumber: data.nidNumber ? data.nidNumber : staffData.nidNumber,
      // staffImage : data.staffImage ? data.staffImage : staffData.staffImage,
      stafePassword: data.stafePassword
        ? data.stafePassword
        : staffData.stafePassword,
      staffImage: image ? image : staffData.staffImage,
    };

    try {
      setIsload(true);
      const submittedData = await PatchData(
        `stafe/update-single-stafe-by-patch/${staffData._id}`,
        newData
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
      setIsload(false);
    }
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  return (
    <div>
      <div className="w-full mb-3 p-3 rounded-md bg-white border shadow-md flex justify-start items-center gap-3">
        <MdOutlineNewspaper />
        <Toaster />
        <h2 className="font-semibold text-gray-700 ">Edit Staff</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto bg-white p-8 rounded-md shadow-lg border"
      >
        <Toaster />
        <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
          Edit Staff Member Information
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
              {...register("staffName", { required: false })}
              placeholder="Enter staff member's name"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.staffName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
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
              {...register("dateOfBirth", { required: false })}
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.dateOfBirth && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
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
              {...register("nidNumber", { required: false })}
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
              {...register("bloodGroup", { required: false })}
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
              <span className="text-red-500 text-sm">
                This field is required
              </span>
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
              {...register("phone", { required: false })}
              placeholder="Enter phone number"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
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
              {...register("designation", { required: false })}
              placeholder="Enter designation"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.designation && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Department
            </label>
            <input
              type="text"
              {...register("department", { required: false })}
              placeholder="Enter department"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.department && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Joining Date */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Joining Date
            </label>
            <input
              type="date"
              {...register("joiningDate", { required: false })}
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.joiningDate && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Gender */}
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-2">
              <FaMale className="inline mr-2" />
              Gender
            </label>
            <select
              {...register("gender", { required: false })}
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Residential Status */}
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-2">
              <FaHome className="inline mr-2" />
              Residential Status
            </label>
            <select
              {...register("residentialStatus", { required: false })}
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select status</option>
              <option value="abashik">Abashik</option>
              <option value="onabashik">Onabashik</option>
              <option value="daycare">Daycare</option>
            </select>
            {errors.residentialStatus && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Address */}
          <div className="col-span-1 md:col-span-2">
            <label className="block font-medium text-gray-700 mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              Address
            </label>
            <textarea
              {...register("address", { required: false })}
              placeholder="Enter address"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
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
                  <small>Upload staff Image</small>
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
    </div>
  );
}

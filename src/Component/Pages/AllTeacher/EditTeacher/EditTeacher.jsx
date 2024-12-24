import { ImSpinner2 } from "react-icons/im";
import { MdOutlineNewspaper } from "react-icons/md";
import ImageUpload from "../../../Default/ImageUpload";
import { IoCloudUploadOutline } from "react-icons/io5";
import {
  FaBuilding,
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaHome,
  FaMale,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSpinner,
  FaTint,
  FaUserTie,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import PatchData from "../../../Default/functions/patchData";
import { useParams } from "react-router-dom";
import fetchOutput from "../../../Default/functions/fatchingData";

export default function EditTeacher() {
  const [image, setImage] = useState(null);
  const [isload, setIsload] = useState(false);
  const [loading, setLoading] = useState(true);
  const [teacherData, setTeacherData] = useState();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchOutput(`teacher/single-teacher/${id}`)
      .then((response) => {
        setTeacherData(response.data);
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

  console.log(teacherData);

  const onSubmit = async (data) => {
    console.log(data);
    const newData = {
      address: data.address ? data.address : teacherData.address,
      bloodGroup: data.bloodGroup ? data.bloodGroup : teacherData.bloodGroup,
      dateOfBirth: data.dateOfBirth
        ? data.dateOfBirth
        : teacherData.dateOfBirth,
      experience: data.experience ? data.experience : teacherData.experience,
      gender: data.gender ? data.gender : teacherData.gender,
      phone: data.phone ? data.phone : teacherData.phone,
      qualification: data.qualification
        ? data.qualification
        : teacherData.qualification,
      residentialStatus: data.residentialStatus
        ? data.residentialStatus
        : teacherData.residentialStatus,
      section: data.section ? data.section : teacherData.section,
      shift: data.shift ? data.shift : teacherData.shift,
      subject: data.subject ? data.subject : teacherData.subject,
      teacherName: data.teacherName
        ? data.teacherName
        : teacherData.teacherName,
      teacherPassword: data.teacherPassword
        ? data.teacherPassword
        : teacherData.teacherPassword,
      teacherImage: image ? image : teacherData.teacherImage,
    };

    try {
      setIsload(true);
      const submittedData = await PatchData(
        `teacher/update-single-teacher-by-patch/${teacherData._id}`,
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
        <h2 className="font-semibold text-gray-700 ">Edit Teacher</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto bg-white p-8 rounded-md shadow-lg border"
      >
        <Toaster />
        <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
          Edit Teacher Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Teacher Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              <FaUserTie className="inline mr-2" />
              Teacher`s Name
            </label>
            <input
              type="text"
              {...register("teacherName", { required: false })}
              placeholder="Enter teacher's name by english"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.teacherName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Teacher Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              <FaUserTie className="inline mr-2" />
              Nid Number
            </label>
            <input
              type="number"
              {...register("nidNumber", { required: false })}
              placeholder="Enter teacher's Nid number"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.nidNumber && (
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

          {/* Blood Group */}
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-2">
              <FaTint className="inline mr-2" />
              Blood Group
            </label>
            <select
              {...register("bloodGroup", { required: false })}
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodGroup && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              <FaEnvelope className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: false })}
              placeholder="Enter email address"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                A valid email is required
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

          {/* Section */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              <FaBuilding className="inline mr-2" />
              Section
            </label>
            <input
              type="text"
              {...register("section", { required: false })}
              placeholder="Enter section"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.section && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Shift */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              <FaClock className="inline mr-2" />
              Shift
            </label>
            <select
              {...register("shift", { required: false })}
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select shift</option>
              <option value="Morning">Morning</option>
              <option value="Day">Day</option>
              <option value="Evening">Evening</option>
            </select>
            {errors.shift && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Highest Qualification */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Highest Qualification
            </label>
            <input
              type="text"
              {...register("qualification", { required: false })}
              placeholder="Enter highest qualification"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.qualification && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              {...register("subject", { required: false })}
              placeholder="Enter subject"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Experience (Years)
            </label>
            <input
              type="number"
              {...register("experience", { required: false })}
              placeholder="Enter teaching experience in years"
              className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.experience && (
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
          className="w-full bg-gray-600 mt-3 flex justify-center items-center gap-3 text-white p-2 rounded-md hover:bg-gray-700 transition"
        >
          {isload ? <ImSpinner2 className="animate-spin" /> : null}
          Save Teacher Information
        </button>
      </form>
    </div>
  );
}

import { useForm } from "react-hook-form";
import {
  FaUserTie,
  FaCalendarAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTint,
  FaBuilding,
  FaClock,
  FaHome,
  FaMale,
} from "react-icons/fa";

export default function AddTeacherForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Teacher Data Submitted:", data);
    alert("Teacher Information Saved Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto bg-white p-8 rounded-md shadow-lg border"
    >
      <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
        Add Teacher Information
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
            {...register("teacherName", { required: true })}
            placeholder="Enter teacher's name"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.teacherName && (
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

        {/* Blood Group */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            <FaTint className="inline mr-2" />
            Blood Group
          </label>
          <select
            {...register("bloodGroup", { required: true })}
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
            <span className="text-red-500 text-sm">This field is required</span>
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
            {...register("email", { required: true })}
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
            {...register("phone", { required: true })}
            placeholder="Enter phone number"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">This field is required</span>
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
            {...register("section", { required: true })}
            placeholder="Enter section"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.section && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Shift */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            <FaClock className="inline mr-2" />
            Shift
          </label>
          <select
            {...register("shift", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select shift</option>
            <option value="Morning">Morning</option>
            <option value="Day">Day</option>
            <option value="Evening">Evening</option>
          </select>
          {errors.shift && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Highest Qualification */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Highest Qualification
          </label>
          <input
            type="text"
            {...register("qualification", { required: true })}
            placeholder="Enter highest qualification"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.qualification && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            {...register("subject", { required: true })}
            placeholder="Enter subject"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Experience (Years)
          </label>
          <input
            type="number"
            {...register("experience", { required: true })}
            placeholder="Enter teaching experience in years"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.experience && (
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gray-600 mt-3 text-white p-2 rounded-md hover:bg-gray-700 transition"
      >
        Save Teacher Information
      </button>
    </form>
  );
}

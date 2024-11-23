import { useForm } from "react-hook-form";
import {
  FaUser,
  FaCalendarAlt,
  FaTint,
  FaMapMarkerAlt,
  FaHome,
  FaMale,
  FaSchool,
} from "react-icons/fa";

export default function AddStudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Student Information Saved Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  mx-auto bg-white p-8 rounded-md shadow-lg border"
    >
      <h2 className="text-2xl font-bold text-center text-gray-600 mb-6">
        Add Student Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Student Name in English */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            <FaUser className="inline mr-2" />
            Student Name (English)
          </label>
          <input
            type="text"
            {...register("studentNameEnglish", { required: true })}
            placeholder="Enter student name in English"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.studentNameEnglish && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Student Name in Bangla */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            <FaUser className="inline mr-2" />
            ছাত্র/ছাত্রীর নাম (বাংলা)
          </label>
          <input
            type="text"
            {...register("studentNameBangla", { required: true })}
            placeholder="বাংলা নাম লিখুন"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.studentNameBangla && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Father's Name */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            Father`s Name
          </label>
          <input
            type="text"
            {...register("fathersName", { required: true })}
            placeholder="Enter father's name"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.fathersName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Mother's Name */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            Mother`s Name
          </label>
          <input
            type="text"
            {...register("mothersName", { required: true })}
            placeholder="Enter mother's name"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.mothersName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Date of Birth */}
        <div className="w-full">
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

        {/* Height */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">Height</label>
          <input
            type="text"
            {...register("height", { required: true })}
            placeholder="Enter height (e.g., 5'6\)"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.height && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Weight */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">Weight</label>
          <input
            type="text"
            {...register("weight", { required: true })}
            placeholder="Enter weight (e.g., 60kg)"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.weight && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Identity Mark */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            Identity Mark
          </label>
          <input
            type="text"
            {...register("identityMark", { required: true })}
            placeholder="Enter any identity mark"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.identityMark && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Birth Certificate Number */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            Birth Certificate Number
          </label>
          <input
            type="text"
            {...register("birthCertificate", { required: true })}
            placeholder="Enter birth certificate number"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.birthCertificate && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Section */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">
            <FaSchool className="inline mr-2" />
            Section
          </label>
          <select
            {...register("section", { required: true })}
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select section</option>
            <option value="alia">Alia</option>
            <option value="hifz">Hifz</option>
            <option value="thaksisi">Thaksisi</option>
          </select>
          {errors.section && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Class */}
        <div className="w-full">
          <label className="block font-medium text-gray-700 mb-2">Class</label>
          <input
            type="text"
            {...register("class", { required: true })}
            placeholder="Enter class"
            className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          {errors.class && (
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
        <div className="w-full col-span-1 md:col-span-2">
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
        className="w-full mt-3 bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 transition"
      >
        Save Student Information
      </button>
    </form>
  );
}

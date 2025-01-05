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
  //   FaBloodDrop,
  FaImage,
} from "react-icons/fa";

export default function AddStudentFather() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Father's information added successfully!");
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
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

        {/* Father's Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <FaImage className="inline mr-2" /> Father`s Image (optional)
          </label>
          <input
            type="file"
            {...register("fatherImage")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-150"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

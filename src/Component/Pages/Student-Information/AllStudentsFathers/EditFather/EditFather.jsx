import { useForm } from "react-hook-form";
import { FaSave, FaUndo } from "react-icons/fa";

const EditFather = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Father Data Submitted:", data);
    // Add logic to send data to the server here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Edit Father Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Father's Name in English */}
        <div>
          <label htmlFor="fatherNameEn" className="block font-medium mb-1">
            Father`s Name (English)
          </label>
          <input
            type="text"
            id="fatherNameEn"
            {...register("fatherNameEn", {
              required: "This field is required",
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter father's name in English"
          />
          {errors.fatherNameEn && (
            <p className="text-red-500 text-sm">
              {errors.fatherNameEn.message}
            </p>
          )}
        </div>

        {/* Father's Name in Bangla */}
        <div>
          <label htmlFor="fatherNameBn" className="block font-medium mb-1">
            পিতার নাম (বাংলা)
          </label>
          <input
            type="text"
            id="fatherNameBn"
            {...register("fatherNameBn", {
              required: "এই ঘরটি পূরণ করতে হবে।",
            })}
            className="w-full border rounded-lg p-2"
            placeholder="পিতার নাম বাংলায় লিখুন"
          />
          {errors.fatherNameBn && (
            <p className="text-red-500 text-sm">
              {errors.fatherNameBn.message}
            </p>
          )}
        </div>

        {/* Father's Occupation */}
        <div>
          <label htmlFor="occupation" className="block font-medium mb-1">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            {...register("occupation", { required: "This field is required" })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter father's occupation"
          />
          {errors.occupation && (
            <p className="text-red-500 text-sm">{errors.occupation.message}</p>
          )}
        </div>

        {/* Monthly Income */}
        <div>
          <label htmlFor="monthlyIncome" className="block font-medium mb-1">
            Monthly Income
          </label>
          <input
            type="number"
            id="monthlyIncome"
            {...register("monthlyIncome", {
              required: "This field is required",
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter monthly income"
          />
          {errors.monthlyIncome && (
            <p className="text-red-500 text-sm">
              {errors.monthlyIncome.message}
            </p>
          )}
        </div>

        {/* NID Number */}
        <div>
          <label htmlFor="nidNumber" className="block font-medium mb-1">
            NID Number
          </label>
          <input
            type="text"
            id="nidNumber"
            {...register("nidNumber", { required: "This field is required" })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter NID number"
          />
          {errors.nidNumber && (
            <p className="text-red-500 text-sm">{errors.nidNumber.message}</p>
          )}
        </div>

        {/* Work Location */}
        <div>
          <label htmlFor="workLocation" className="block font-medium mb-1">
            Work Location
          </label>
          <input
            type="text"
            id="workLocation"
            {...register("workLocation", {
              required: "This field is required",
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter work location"
          />
          {errors.workLocation && (
            <p className="text-red-500 text-sm">
              {errors.workLocation.message}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobilenumber" className="block font-medium mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobilenumber"
            {...register("mobilenumber", {
              required: "This field is required",
            })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter mobile number"
          />
          {errors.mobilenumber && (
            <p className="text-red-500 text-sm">
              {errors.mobilenumber.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "This field is required" })}
            className="w-full border rounded-lg p-2"
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            <FaUndo className="mr-2" />
            Reset
          </button>
          <button
            type="submit"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            <FaSave className="mr-2" />
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditFather;

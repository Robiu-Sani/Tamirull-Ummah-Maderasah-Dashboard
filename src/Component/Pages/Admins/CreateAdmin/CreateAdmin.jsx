import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function CreateAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      ...data,
      accountCreatingTime: new Date().toLocaleString(),
      status: "admin",
    };
    console.log("Admin Data:", adminData);
    reset(); // Reset the form after submission
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Create Admin
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Name Field */}
        <div className="w-full">
          <label className="block">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="w-full">
          <label className="block">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Number Field */}
        <div className="w-full">
          <label className="block">Number</label>
          <input
            type="text"
            {...register("number", { required: "Number is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
            placeholder="Enter Your Number"
          />
          {errors.number && (
            <p className="text-red-500 text-sm">{errors.number.message}</p>
          )}
        </div>

        {/* Gender Field */}
        <div className="w-full">
          <label className="block">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Address Field */}
        <div className="w-full col-span-1 sm:col-span-2">
          <label className="block">Address</label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            className="w-full my-1  rounded-md border outline-0 px-3 p-2"
            placeholder="Enter Your Address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="w-full">
          <label className="block">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 p-2"
              placeholder="Enter Your Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="w-full">
          <label className="block">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 p-2"
              placeholder="Confirm Your Password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Create Admin
          </button>
        </div>
      </form>
    </div>
  );
}

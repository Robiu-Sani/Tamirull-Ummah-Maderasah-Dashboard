import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function CreateAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmiting, setIsSubmitein] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const HandleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "robiussani");
      data.append("cloud_name", "dyigfnuvy");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dyigfnuvy/image/upload",
        data
      );

      if (response.status === 200) {
        setImageUrl(response.data.url);
        toast.success("Image uploaded successfully!");
      }
    } catch (error) {
      console.error("Error uploading image:", error.message || error);
      toast.error("Image upload failed!");
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data) => {
    const adminData = {
      ...data,
      accountCreatingTime: new Date().toLocaleString(),
      status: "admin",
      profile: imageUrl,
    };

    setIsSubmitein(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_EXPRESS_API}/admins`,
        adminData
      );
      toast.success(response.data.message || "Admin created successfully!");
      reset();
      setImageUrl(null);
      navigate("/admins");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      setIsSubmitein(false);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <Toaster position="top-center" />
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Create Admin
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {/* Name Field */}
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 py-2"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full my-1 rounded-md border outline-0 px-3 py-2"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Number Field */}
        <div>
          <label className="block font-medium text-gray-700">Number</label>
          <input
            type="text"
            {...register("number", {
              required: "Number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
            className="w-full my-1 rounded-md border outline-0 px-3 py-2"
            placeholder="Enter your phone number"
          />
          {errors.number && (
            <p className="text-red-500 text-sm">{errors.number.message}</p>
          )}
        </div>

        {/* Gender Field */}
        <div>
          <label className="block font-medium text-gray-700">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 py-2"
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
        <div className="sm:col-span-2">
          <label className="block font-medium text-gray-700">Address</label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 py-2"
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block font-medium text-gray-700">Password</label>
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
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full my-1 rounded-md border outline-0 px-3 py-2"
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-4 text-gray-500"
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

        <div className="flex h-[100px] justify-start gap-3 items-start">
          <div className="w-[100px] relative flex-col cursor-pointer h-[100px] rounded-md overflow-hidden border flex justify-center items-center">
            <IoCloudUploadOutline className="text-2xl" />
            <small>Upload Profile</small>
            <input
              onChange={HandleImageUpload}
              type="file"
              name="image"
              accept=".jpg, .jpeg, .png"
              className="absolute top-0 left-0 cursor-pointer w-full h-full opacity-0"
            />
          </div>
          <div className="h-full">
            {isUploading ? (
              <div className="flex justify-center items-center w-[100px] border rounded-md h-full">
                <ImSpinner2 className="text-2xl text-gray-700 animate-spin" />
              </div>
            ) : imageUrl ? (
              <img
                src={imageUrl}
                alt="profile"
                className="h-full rounded-md border"
              />
            ) : null}
          </div>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 bg-gray-700 font-semibold text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            {isSubmiting ? <ImSpinner2 /> : null}
            Create Admin
          </button>
        </div>
      </form>
    </div>
  );
}

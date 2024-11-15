import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useLogedAdmin from "../../customComponent/useLogedAdmin";

export default function Login() {
  const { adminEmail } = useLogedAdmin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Fixed typo from navgate to navigate

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_EXPRESS_API}/admin-login`,
        data
      );

      // If login is successful, save the email to localStorage
      if (response.data.message === "success") {
        localStorage.setItem("adminEmail", response.data.email);
        toast.success("Admin logged in successfully!");
        reset(); // Reset the form on successful submission
        navigate("/dashboard");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    }
  };

  if (adminEmail) {
    navigate("/dashboard");
  }

  return (
    <div className="bg-gray-100 w-full min-h-screen py-10 px-5 flex justify-center items-center">
      <Toaster position="top-center" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full sm:w-[450px] p-7 sm:p-10 bg-white rounded-md shadow-md flex flex-col gap-5"
      >
        <h1 className="text-center font-bold text-2xl sm:text-3xl">Welcome</h1>

        {/* Email Field */}
        <div className="w-full">
          <label>Email</label>
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

        {/* Password Field with Toggle */}
        <div className="w-full relative">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            className="w-full my-1 rounded-md border outline-0 px-3 p-2"
            placeholder="Enter Your Password"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-10 right-3 cursor-pointer text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Login"
          className="w-full p-2 rounded-md font-semibold cursor-pointer text-white bg-gray-700"
        />
      </form>
    </div>
  );
}

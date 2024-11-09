import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen py-10 px-5 flex justify-center items-center">
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
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^\d{5}$/,
                message: "Password must be a 5-digit number",
              },
            })}
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

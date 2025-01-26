import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePassword() {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false); // Toggle for showing the new password form
  const [loading, setLoading] = useState(false); // Loader state for submit buttons
  const [isError, setIsError] = useState(false);
  const router = useNavigate();

  // Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Fetching student data from localStorage
    const teacher = JSON.parse(localStorage.getItem("data"));
    if (teacher) {
      setPassword(teacher.teacherPassword);
    }
  }, []);

  // Handle password verification
  const handlePasswordCheck = (data) => {
    if (data.password === password) {
      setIsError(false);
      setShowNewPasswordForm(true); // Show new password form
    } else {
      // Display error manually for wrong password
      reset({ password: "" }); // Reset the password input field
      setIsError(true);
    }
  };

  // Handle password update
  const handlePasswordUpdate = async (data) => {
    setLoading(true); // Show loader
    try {
      const response = await axios.patch(
        `${
          import.meta.env.VITE_SERVER
        }/teacher/update-single-teacher-by-patch/${id}`,
        { teacherPassword: data.newPassword }
      );
      console.log(response);
      if (response.status === 200) {
        reset(); // Reset form fields
        localStorage.setItem("data", JSON.stringify(response.data.data));
        router("/teachers");
        setShowNewPasswordForm(false); // Hide new password form
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setIsError(true);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-10 mt-5">
      {!showNewPasswordForm && (
        <form
          onSubmit={handleSubmit(handlePasswordCheck)}
          className="w-full max-w-md p-5 border rounded shadow"
        >
          <h2 className="text-xl font-bold mb-4">Verify Password</h2>
          {isError && (
            <div className="mb-4 flex justify-center items-center p-2 rounded-md border border-red-500 text-center text-red-500 bg-red-100">
              Password is not currect. please try again!
            </div>
          )}

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-gray-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-600 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify Password"}
          </button>
        </form>
      )}

      {showNewPasswordForm && (
        <form
          onSubmit={handleSubmit(handlePasswordUpdate)}
          className="w-full max-w-md p-5 border rounded shadow"
        >
          <h2 className="text-xl font-bold mb-4">Update Password</h2>
          {isError && (
            <div className="mb-4 flex justify-center items-center p-2 rounded-md border border-red-500 text-center text-red-500 bg-red-100">
              Password is not updated. please try again by another password!
            </div>
          )}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter new password"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                errors.newPassword
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-gray-500"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mb-4">
              {errors.newPassword.message}
            </p>
          )}
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-600 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      )}
    </div>
  );
}

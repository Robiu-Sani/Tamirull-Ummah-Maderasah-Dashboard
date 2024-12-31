import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddDefaultValue() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [savedExamInfo, setSavedExamInfo] = useState(null);

  const navigate = useNavigate();

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("examInfo");
    if (storedData) {
      setSavedExamInfo(JSON.parse(storedData));
    }
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      localStorage.setItem("examInfo", JSON.stringify(data));
      setSavedExamInfo(data);
      reset();
      navigate("/add-exam-result/result-form");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full p-5 flex flex-col justify-center rounded-md border shadow-md items-center bg-white">
      <h3 className="text-center text-lg font-semibold mb-4">
        Add Exam Name, Class, and Gender
      </h3>

      {/* Display saved data if available */}
      {savedExamInfo && (
        <div className="mb-4 p-3 border rounded-md bg-gray-100 w-full text-center">
          <p className="text-sm text-gray-700 font-medium">
            Saved Exam:{" "}
            <span className="font-bold text-gray-900">
              {savedExamInfo.examName}
            </span>
          </p>
          <p className="text-sm text-gray-700 font-medium">
            Saved Class:{" "}
            <span className="font-bold text-gray-900">
              {savedExamInfo.className}
            </span>
          </p>
          <p className="text-sm text-gray-700 font-medium">
            Saved Gender:{" "}
            <span className="font-bold text-gray-900">
              {savedExamInfo.gender}
            </span>
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-1">
          {/* Exam Name */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2">
              Exam Name
            </label>
            <select
              {...register("examName", { required: true })}
              className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="" disabled selected>
                Select an exam name
              </option>
              <option value="First Tutorial">First Tutorial</option>
              <option value="Half Yearly Exam">Half Yearly Exam</option>
              <option value="Second Tutorial">Second Tutorial</option>
              <option value="Final Exam">Final Exam</option>
            </select>
            {errors.examName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Class */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2">
              Class
            </label>
            <select
              {...register("className", { required: true })}
              className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="" disabled selected>
                Select a class
              </option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Five">Five</option>
              <option value="Six">Six</option>
              <option value="Seven">Seven</option>
              <option value="Eight">Eight</option>
              <option value="Nine">Nine</option>
              <option value="Ten">Ten</option>
              <option value="Eleven">Eleven</option>
              <option value="Twelve">Twelve</option>
              <option value="Hifz">Hifz</option>
              <option value="Norani">Norani</option>
              <option value="Thaksisi">Thaksisi</option>
              <option value="Fazil">Fazil</option>
              <option value="Kamil">Kamil</option>
            </select>
            {errors.className && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              {...register("gender", { required: true })}
              className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Save Exam Info
        </button>
      </form>
    </div>
  );
}

import { useForm } from "react-hook-form";
import axios from "axios";

export default function SetResultDate() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_SERVER}/set-result-date`, data)
      .then((response) => {
        console.log("Response:", response.data);
        alert("Dates saved successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to save dates. Please try again.");
      });
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="bg-indigo-500 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Set Result Release Dates</h1>
        <p className="mt-2 text-lg">
          Plan and organize your release dates with ease!
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Schedule Result Dates
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Tutorial */}
            <div>
              <label
                htmlFor="firstTutorial"
                className="block text-gray-700 font-semibold mb-2"
              >
                First Tutorial Release Date
              </label>
              <input
                id="firstTutorial"
                type="datetime-local"
                {...register("firstTutorial", { required: "Date is required" })}
                className={`w-full p-3 border ${
                  errors.firstTutorial ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              />
              {errors.firstTutorial && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstTutorial.message}
                </p>
              )}
            </div>

            {/* Second Tutorial */}
            <div>
              <label
                htmlFor="secondTutorial"
                className="block text-gray-700 font-semibold mb-2"
              >
                Second Tutorial Release Date
              </label>
              <input
                id="secondTutorial"
                type="datetime-local"
                {...register("secondTutorial", {
                  required: "Date is required",
                })}
                className={`w-full p-3 border ${
                  errors.secondTutorial ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              />
              {errors.secondTutorial && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.secondTutorial.message}
                </p>
              )}
            </div>

            {/* Half-Yearly Exam */}
            <div>
              <label
                htmlFor="halfYearlyExam"
                className="block text-gray-700 font-semibold mb-2"
              >
                Half-Yearly Exam Release Date
              </label>
              <input
                id="halfYearlyExam"
                type="datetime-local"
                {...register("halfYearlyExam", {
                  required: "Date is required",
                })}
                className={`w-full p-3 border ${
                  errors.halfYearlyExam ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              />
              {errors.halfYearlyExam && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.halfYearlyExam.message}
                </p>
              )}
            </div>

            {/* Final Exam */}
            <div>
              <label
                htmlFor="finalExam"
                className="block text-gray-700 font-semibold mb-2"
              >
                Final Exam Release Date
              </label>
              <input
                id="finalExam"
                type="datetime-local"
                {...register("finalExam", { required: "Date is required" })}
                className={`w-full p-3 border ${
                  errors.finalExam ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              />
              {errors.finalExam && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.finalExam.message}
                </p>
              )}
            </div>

            {/* Model Test */}
            <div>
              <label
                htmlFor="modelTest"
                className="block text-gray-700 font-semibold mb-2"
              >
                Model Test Release Date
              </label>
              <input
                id="modelTest"
                type="datetime-local"
                {...register("modelTest", { required: "Date is required" })}
                className={`w-full p-3 border ${
                  errors.modelTest ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              />
              {errors.modelTest && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.modelTest.message}
                </p>
              )}
            </div>

            {/* Text */}
            <div>
              <label
                htmlFor="text"
                className="block text-gray-700 font-semibold mb-2"
              >
                Text Release Date
              </label>
              <input
                id="text"
                type="datetime-local"
                {...register("text", { required: "Date is required" })}
                className={`w-full p-3 border ${
                  errors.text ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              />
              {errors.text && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.text.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white py-3 px-6 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Save Dates
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

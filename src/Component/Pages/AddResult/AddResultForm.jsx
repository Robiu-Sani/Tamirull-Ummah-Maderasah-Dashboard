import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AddResultForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [total, setTotal] = useState(0);

  // Watch all fields to dynamically calculate the total
  const watchedFields = watch();

  // Calculate the total dynamically whenever input values change
  useEffect(() => {
    const sum = Object.keys(watchedFields)
      .filter(
        (key) =>
          !isNaN(watchedFields[key]) &&
          watchedFields[key] !== "" &&
          watchedFields[key] >= 0 &&
          watchedFields[key] <= 100
      )
      .reduce((acc, key) => acc + Number(watchedFields[key]), 0);
    setTotal(sum);
  }, [watchedFields]);

  // Handle form submission
  const onSubmit = (data) => {
    const resultData = { ...data, total };
    console.log("Submitted Data:", resultData);
    reset();
    alert("Result submitted successfully!");
  };

  return (
    <div className="w-full p-5 flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Student Result</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Quran
            </label>
            <input
              {...register("quran", {
                valueAsNumber: true,
                min: { value: 0, message: "Value cannot be less than 0" },
                max: { value: 100, message: "Value cannot be more than 100" },
              })}
              type="number"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="Enter marks"
            />
            {errors.quran && (
              <p className="text-red-500 text-sm">{errors.quran.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Hifz</label>
            <input
              {...register("hifz", {
                valueAsNumber: true,
                min: { value: 0, message: "Value cannot be less than 0" },
                max: { value: 100, message: "Value cannot be more than 100" },
              })}
              type="number"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              placeholder="Enter marks"
            />
            {errors.hifz && (
              <p className="text-red-500 text-sm">{errors.hifz.message}</p>
            )}
          </div>

          {["arabicFirst", "arabicSecend", "englishFirst", "englishSecend"].map(
            (field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  {field
                    .replace(/[A-Z]/g, (char) => ` ${char}`)
                    .replace(/\b./g, (c) => c.toUpperCase())}
                </label>
                <input
                  {...register(field, {
                    valueAsNumber: true,
                    min: { value: 0, message: "Value cannot be less than 0" },
                    max: {
                      value: 100,
                      message: "Value cannot be more than 100",
                    },
                  })}
                  type="number"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
                  placeholder="Enter marks"
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm">
                    {errors[field].message}
                  </p>
                )}
              </div>
            )
          )}

          {[
            { name: "Math", key: "math" },
            { name: "Science", key: "science" },
            { name: "Physics", key: "physics" },
            { name: "Chemistry", key: "chemistry" },
            { name: "Biology", key: "biology" },
            { name: "History", key: "history" },
            { name: "ICT", key: "ict" },
            { name: "Physical Education", key: "physicalEducation" },
            { name: "Behaviour", key: "behaviour" },
          ].map((subject) => (
            <div key={subject.key} className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                {subject.name}
              </label>
              <input
                {...register(subject.key, {
                  valueAsNumber: true,
                  min: { value: 0, message: "Value cannot be less than 0" },
                  max: { value: 100, message: "Value cannot be more than 100" },
                })}
                type="number"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
                placeholder={`Enter marks for ${subject.name}`}
              />
              {errors[subject.key] && (
                <p className="text-red-500 text-sm">
                  {errors[subject.key].message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Total Display */}
        <div className="flex items-center justify-between my-4 p-3 bg-gray-100 border rounded-md">
          <p className="text-lg font-medium text-gray-800">
            Total Marks: <span className="font-bold">{total}</span>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Submit Result
        </button>
      </form>
    </div>
  );
}

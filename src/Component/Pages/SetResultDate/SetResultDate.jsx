import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function SetResultDate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [releaseData, setReleaseDate] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/release/`)
      .then((data) => setReleaseDate(data.data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitForm = async (data, field) => {
    setIsSubmitting(true); // Start loading
    try {
      const payload = { [field]: data[field] }; // Only send the specific field
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER}/release/update/${releaseData._id}`,
        payload
      );
      toast.success(
        response.data.message || `${field} date saved successfully!`
      );
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Failed to save ${field} date. Please try again.`);
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  // Helper component for each field form
  const DateForm = ({ fieldId, label }) => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      handleSubmitForm(data, fieldId);
      reset();
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label htmlFor={fieldId} className="block text-gray-700 font-semibold">
          {label}
        </label>
        <input
          id={fieldId}
          type="datetime-local"
          {...register(fieldId, { required: true })}
          className={`w-full p-3 border ${
            errors[fieldId] ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400`}
        />
        {errors[fieldId] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[fieldId].message || "This field is required"}
          </p>
        )}
        <button
          type="submit"
          className="bg-gray-500 w-full text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Date"}
        </button>
      </form>
    );
  };

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="bg-indigo-500 rounded-md text-white text-center py-12">
        <h1 className="text-4xl font-bold">Set Result Release Dates</h1>
        <p className="mt-2 text-lg">
          Plan and organize your release dates with ease!
        </p>
      </div>

      {/* Forms Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 px-4">
        <DateForm fieldId="firstTutorial" label="First Tutorial Release Date" />
        <DateForm
          fieldId="secondTutorial"
          label="Second Tutorial Release Date"
        />
        <DateForm
          fieldId="halfYearlyExam"
          label="Half-Yearly Exam Release Date"
        />
        <DateForm fieldId="finalExam" label="Final Exam Release Date" />
        <DateForm fieldId="modelTest" label="Model Test Release Date" />
        <DateForm fieldId="test" label="Test Release Date" />
      </div>
    </div>
  );
}

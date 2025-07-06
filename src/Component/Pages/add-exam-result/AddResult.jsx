import { useParams } from "react-router-dom";
import FirstTutiral from "./FirstTutiral/FirstTutiral";
import SecondTutiral from "./SecondTutiral/SecondTutiral";
import HalfYearlyExam from "./HalfYearlyExam/HalfYearlyExam";
import FinalExam from "./FinalExam/FinalExam";
import TestExam from "./TestExam/TestExam";
import ModelTestExam from "./ModelTestExam/ModelTestExam";
import AdmitionExam from "./AdmitionExam/AdmitionExam";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function AddExamResult() {
  const [datahave, setDatahave] = useState(
    localStorage.getItem("add-result-data") ? true : false
  );
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();
  const userData = JSON.parse(localStorage.getItem("data"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/class`
        );
        setClasses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching classes:", error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const onSubmit = (data) => {
    // Find the selected class from the classes array
    const selectedClass = classes.find((cls) => cls._id === data.classId);

    if (!selectedClass) {
      toast.error("Please select a valid class");
      return;
    }

    localStorage.setItem(
      "add-result-data",
      JSON.stringify({
        releasDate: data.releaseDate,
        teacherId: userData._id,
        class: selectedClass.name,
        classid: selectedClass._id,
      })
    );

    toast.success("Setup is done");
    setDatahave(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Toaster />
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Add Exam Information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Class
              </label>
              <select
                id="class"
                {...register("classId", { required: "Class is required" })}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.classId ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.nameBangla} ({cls.name})
                  </option>
                ))}
              </select>
              {errors.classId && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.classId.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="releaseDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Result Release Date and Time
              </label>
              <input
                type="datetime-local"
                id="releaseDate"
                {...register("releaseDate", {
                  required: "Release date is required",
                })}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.releaseDate ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.releaseDate && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.releaseDate.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {datahave && type === "first-tutorial" && <FirstTutiral />}
      {datahave && type === "second-tutorial" && <SecondTutiral />}
      {datahave && type === "helf-yaerly-exam" && <HalfYearlyExam />}
      {datahave && type === "final-exam" && <FinalExam />}
      {datahave && type === "test-exam" && <TestExam />}
      {datahave && type === "model-text-exam" && <ModelTestExam />}
      {datahave && type === "admission-exam" && <AdmitionExam />}
    </div>
  );
}

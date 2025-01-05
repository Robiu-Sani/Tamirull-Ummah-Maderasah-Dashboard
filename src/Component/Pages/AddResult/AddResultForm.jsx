import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import fetchOutput from "../../Default/functions/fatchingData";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import postOutput from "../../Default/functions/postOutput";
import toast, { Toaster } from "react-hot-toast";

export default function AddResultForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [total, setTotal] = useState(0);
  const [savedExamInfo, setSavedExamInfo] = useState(null);
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  const navigate = useNavigate();

  // Watch all fields to dynamically calculate the total
  const watchedFields = watch();

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("examInfo");
    if (storedData) {
      setSavedExamInfo(JSON.parse(storedData));
    }
  }, []);

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

  useEffect(() => {
    if (savedExamInfo) {
      setLoading(true);
      axios
        .get(
          `${import.meta.env.VITE_SERVER}/student/get-by-class/${
            savedExamInfo.className
          }?gender=${savedExamInfo.gender}`
        )
        .then((response) => {
          setStudent(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setLoading(false); // If an error occurs, set loading to false as well
        });
    }
  }, [savedExamInfo]);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Remove fields with NaN values or empty strings
      const cleanedData = Object.fromEntries(
        Object.entries(data).filter(
          ([key, value]) => value !== "" && !isNaN(value)
        )
      );

      // Add additional fields to the cleaned data
      const SubmitedData = {
        total: total,
        examName: savedExamInfo.examName,
        studentId: selectedStudent._id,
        teacherId: "6767f30f439df9b583b4d4fc",
        studentClass: savedExamInfo.className,
        studentName: selectedStudent.studentNameEnglish,
        studentGender: selectedStudent.gender || savedExamInfo.gender,
        subjects: cleanedData,
      };

      // Make the API call to submit the data
      const response = await postOutput(
        "result/create-exam-result",
        SubmitedData
      );

      // Handle API response
      if (response?.status === true) {
        if (response.data.status === true) {
          toast.success(response.message);
        }
        if (response.data.status === false) {
          toast.error("Result for this student already exists.");
        }
      } else {
        toast.error(response.message);
      }

      // Reset the form after submission
      reset();
    } catch (error) {
      console.error("An error occurred during submission:", error);
    }
  };

  if (!savedExamInfo) {
    navigate("/add-exam-result");
  }

  return (
    <div className="w-full p-5 flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
      {loading && (
        <div className="w-full h-[200px] flex justify-center items-center ">
          <ImSpinner9 className="animate-spin" size={50} />
        </div>
      )}
      <Toaster />
      <h2 className="text-xl font-semibold mb-4">Add Student Result</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">
            Select Student
          </label>
          <select
            {...register("testSelector", {
              required: "This field is required",
            })}
            onChange={(e) => {
              const selected = student.find(
                (s) => s.studentNameEnglish === e.target.value
              );
              setSelectedStudent(selected);
            }}
            className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="" disabled selected>
              Select Student
            </option>
            {student?.map((item, idx) => (
              <option key={idx} value={item.studentNameEnglish}>
                <span>{item.studentNameEnglish}</span> |{" "}
                <span>Roll {item.classRoll}</span>
              </option>
            ))}
          </select>

          {errors.examName && (
            <span className="text-red-500 text-sm">
              {errors.examName.message}
            </span>
          )}
        </div>

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
            { name: "Bangla First", key: "banglaFirst" },
            { name: "Bangla Second", key: "banglaSecend" },
            { name: "Math", key: "math" },
            { name: "Higher Math", key: "heigherMath" },
            { name: "Science", key: "science" },
            { name: "Physics", key: "physics" },
            { name: "Chemistry", key: "chemistry" },
            { name: "Biology", key: "biology" },
            { name: "Fiquah", key: "fiquah" },
            { name: "Fiquah First", key: "fiquahFirst" },
            { name: "Fiquah Second", key: "fiquahSecend" },
            { name: "Balagat & Manthiq", key: "balagatAndManthiq" },
            { name: "Agriculture", key: "agreculture" },
            { name: "Sociology", key: "socialogy" },
            { name: "Pouro-Nithy First", key: "pouroNithyFirst" },
            { name: "Pouro-Nithy Second", key: "pouroNithySecend" },
            { name: "History", key: "history" },
            { name: "ICT", key: "ict" },
            { name: "Physical Education", key: "physicalEducation" },
            { name: "General Knowledge", key: "commomKnowladge" },
            { name: "Career Study", key: "carrierStudy" },
            { name: "Behavior", key: "behaviour" },
            { name: "Drawing", key: "drowing" },
            { name: "Piyer & Character", key: "piyerAndCarecter" }, // Fixed spelling mistake here
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

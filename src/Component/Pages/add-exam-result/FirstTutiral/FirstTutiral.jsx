import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function FirstTutiral() {
  const examData = JSON.parse(localStorage.getItem("add-result-data") || "{}");
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [studentLoading, setStudentLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      userId: "",
      releasDate: examData.releasDate || "",
      examName: `First Tutorial ${new Date().getFullYear()}`,
      examYear: new Date().getFullYear(),
      totatlMarks: 0,
      parcentage: Number(examData.parcentage) || 0,
      position: 0,
      teacherId: examData.teacherId || "",
      class: examData.class || "",
      subject: [],
    },
  });

  // Watch only the specific fields we need
  const watchedSubjects = watch("subject");
  const watchedUserId = watch("userId");

  // Fetch students by class
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setStudentLoading(true);
        const response = await axios.get(
          // `http://localhost:5001/api/v1/student/get-by-class/${
          `${import.meta.env.VITE_SERVER}/student/get-by-class/${
            examData.class
          }`
        );
        console.log(response.data);
        if (response.data.status) {
          setStudents(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch students:", error);
        toast.error("Failed to fetch students");
      } finally {
        setStudentLoading(false);
      }
    };

    if (examData.class) {
      fetchStudents();
    }
  }, [examData.class]);

  // Memoized calculation function
  const calculateResults = useCallback(() => {
    const currentSubjects = getValues("subject");
    if (!currentSubjects || currentSubjects.length === 0) return;

    let totalMarks = 0;
    let totalPercentage = 0;
    let needsUpdate = false;

    const updatedSubjects = currentSubjects.map((subject) => {
      // Validate marks
      let validMarks = subject.marks || 0;
      const maxMarks = subject.heightNumber || 100;

      if (validMarks > maxMarks) {
        validMarks = maxMarks;
        needsUpdate = true;
        toast.error(
          `Marks cannot exceed ${maxMarks} for ${subject.subjectName}`
        );
      }
      if (validMarks < 0) {
        validMarks = 0;
        needsUpdate = true;
        toast.error(`Marks cannot be negative for ${subject.subjectName}`);
      }

      // Calculate percentage
      const percentage = examData.parcentage
        ? (validMarks / maxMarks) * Number(examData.parcentage)
        : 0;

      // Calculate grade
      let grade = "";
      if (validMarks >= (maxMarks / 100) * 80) grade = "A+";
      else if (validMarks >= (maxMarks / 100) * 70) grade = "A";
      else if (validMarks >= (maxMarks / 100) * 60) grade = "A-";
      else if (validMarks >= (maxMarks / 100) * 50) grade = "B";
      else if (validMarks >= (maxMarks / 100) * 40) grade = "C";
      else if (validMarks >= (maxMarks / 100) * 33) grade = "D";
      else grade = "F";

      // Update totals
      totalMarks += validMarks;
      totalPercentage += percentage;

      // Check if we need to update this subject
      if (
        validMarks !== subject.marks ||
        percentage.toFixed(2) !== subject.parcentage?.toFixed(2) ||
        grade !== subject.grade
      ) {
        needsUpdate = true;
      }

      return {
        ...subject,
        marks: validMarks,
        parcentage: parseFloat(percentage.toFixed(2)),
        grade,
      };
    });

    // Only update if values actually changed
    if (needsUpdate) {
      setValue("subject", updatedSubjects, { shouldValidate: true });
      setValue("totatlMarks", totalMarks);
      setValue("parcentage", parseFloat(totalPercentage.toFixed(2)));
    }
  }, [examData.parcentage, getValues, setValue]);

  // Fetch subjects
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/exam-subject/${examData.classid}`
        );
        if (response.data.success) {
          setSubjects(response.data.data.subject);

          const initialSubjects = response.data.data.subject.map((sub) => ({
            subjectName: sub.englishName,
            marks: 0,
            parcentage: 0,
            heightNumber: 100,
            grade: "",
          }));

          setValue("subject", initialSubjects);
        }
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
        toast.error("Failed to fetch subjects");
      }
    };

    if (examData.classid) {
      fetchSubjects();
    }
  }, [examData.classid, setValue]);

  // Calculate results when subjects change
  useEffect(() => {
    calculateResults();
  }, [watchedSubjects, calculateResults]);

  const handleHeightNumberChange = (index, value) => {
    const newValue = Math.max(0, Math.min(1000, Number(value) || 100));
    setValue(`subject.${index}.heightNumber`, newValue);
    calculateResults();
  };

  const handleMarksChange = (index, value) => {
    const heightNumber = getValues(`subject.${index}.heightNumber`) || 100;
    const newValue = Math.max(0, Math.min(heightNumber, Number(value) || 0));
    setValue(`subject.${index}.marks`, newValue);
    calculateResults();
  };

  const handleStudentChange = (e) => {
    const studentId = e.target.value;
    setValue("userId", studentId);
  };

  const onSubmit = async (data) => {
    if (!data.userId) {
      toast.error("Please select a student");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER2}/first_tutiral`,
        data
      );

      if (response.data.success) {
        toast.success("Exam results saved successfully!");
      } else {
        toast.error("Failed to save exam results");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Student Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student
            </label>
            <select
              value={watchedUserId}
              onChange={handleStudentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              disabled={studentLoading}
            >
              <option value="">Select a student</option>
              {students.map((student) => (
                <option key={student._id} value={student._id}>
                  {student.studentNameEnglish} (ROLL: {student.classRoll})
                </option>
              ))}
            </select>
            {!watchedUserId && (
              <p className="text-red-500 text-sm mt-1">
                Please select a student
              </p>
            )}
          </div>

          {/* Class Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Class
            </label>
            <input
              type="text"
              {...register("class", { required: "Class is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              readOnly
            />
          </div>

          {/* Release Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Release Date
            </label>
            <input
              type="datetime-local"
              {...register("releasDate", {
                required: "Release date is required",
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            />
          </div>

          {/* Total Percentage */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Percentage
            </label>
            <input
              type="number"
              {...register("parcentage", {
                required: "Percentage is required",
                valueAsNumber: true,
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              readOnly
            />
          </div>

          {/* Total Marks */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Marks
            </label>
            <input
              type="number"
              {...register("totatlMarks", {
                required: "Total marks is required",
                valueAsNumber: true,
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              readOnly
            />
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Subjects</h2>
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <div key={subject._id} className="border p-4 rounded-lg">
                <h3 className="font-medium">
                  {subject.englishName} ({subject.banglaName})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2">
                  {/* Marks Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Marks
                    </label>
                    <input
                      type="number"
                      value={watchedSubjects?.[index]?.marks || ""}
                      onChange={(e) => handleMarksChange(index, e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                    />
                  </div>

                  {/* Max Marks Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Max Marks
                    </label>
                    <input
                      type="number"
                      value={watchedSubjects?.[index]?.heightNumber || 100}
                      onChange={(e) =>
                        handleHeightNumberChange(index, e.target.value)
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
                    />
                  </div>

                  {/* Percentage Display */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Percentage
                    </label>
                    <input
                      type="number"
                      value={
                        watchedSubjects?.[index]?.parcentage?.toFixed(2) || ""
                      }
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border bg-gray-100"
                    />
                  </div>

                  {/* Grade Display */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Grade
                    </label>
                    <input
                      type="text"
                      value={watchedSubjects?.[index]?.grade || ""}
                      readOnly
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border bg-gray-100"
                    />
                  </div>

                  {/* Progress Bar */}
                  <div className="flex items-end">
                    <div className="w-full">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-indigo-600 rounded-full"
                          style={{
                            width: `${Math.min(
                              100,
                              watchedSubjects?.[index]?.parcentage || 0
                            )}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">
                        {watchedSubjects?.[index]?.parcentage?.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading || !watchedUserId}
            className={`px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              loading || !watchedUserId
                ? "bg-indigo-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Results"}
          </button>
        </div>
      </form>
    </div>
  );
}

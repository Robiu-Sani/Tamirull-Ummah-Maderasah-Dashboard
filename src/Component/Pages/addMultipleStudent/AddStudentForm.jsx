import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function AddStudentForm() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [students, setStudents] = useState([
    { studentNameEnglish: "", classRoll: "" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load saved data from localStorage if available
    const savedData = localStorage.getItem("studentFormData");
    if (savedData) {
      const { class: savedClass, gender } = JSON.parse(savedData);
      setSelectedClass(savedClass);
      setSelectedGender(gender);
    }
  }, []);

  const handleStudentChange = (index, e) => {
    const { name, value } = e.target;
    const newStudents = [...students];
    newStudents[index][name] = value;
    setStudents(newStudents);
  };

  const addStudentField = () => {
    setStudents([...students, { studentNameEnglish: "", classRoll: "" }]);
  };

  const removeStudentField = (index) => {
    if (students.length > 1) {
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!selectedClass || !selectedGender) {
      toast.error("Please select class and gender first");
      setIsSubmitting(false);
      return;
    }

    // Extract class name from the saved format (EnglishName(BanglaName))
    const className = selectedClass.split("(")[0].trim();

    try {
      let successCount = 0;

      // Process students one by one
      for (const student of students) {
        try {
          const studentData = {
            class: className,
            gender: selectedGender,
            studentNameEnglish: student.studentNameEnglish,
            classRoll: student.classRoll,
          };

          console.log("Submitting:", studentData);

          const response = await axios.post(
            "https://tum-server.vercel.app/api/v1/api/v1/student/create-student",
            studentData
          );

          console.log("Response:", response);
          successCount++;
          toast.success(
            `Student ${student.studentNameEnglish} added successfully!`
          );
        } catch (error) {
          console.error(
            `Error adding student ${student.studentNameEnglish}:`,
            error
          );
          toast.error(
            `Failed to add student ${student.studentNameEnglish}. Please try again.`
          );
        }
      }

      // Summary notification
      if (successCount === students.length) {
        toast.success(`All ${successCount} students added successfully!`);
      } else if (successCount > 0) {
        toast.success(
          `${successCount} of ${students.length} students added successfully!`
        );
      } else {
        toast.error(
          "No students were added. Please check your inputs and try again."
        );
      }

      // Reset form after all submissions are attempted
      setStudents([{ studentNameEnglish: "", classRoll: "" }]);
    } catch (error) {
      console.error("Unexpected error during submission:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Multiple Students</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Selected Class & Gender</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Class</p>
              <p className="font-medium">{selectedClass || "Not selected"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gender</p>
              <p className="font-medium capitalize">
                {selectedGender || "Not selected"}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {students.map((student, index) => (
            <div key={index} className="p-4 border rounded-lg relative">
              {students.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStudentField(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  × Remove
                </button>
              )}
              <h3 className="font-medium mb-3">Student #{index + 1}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`studentNameEnglish-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Student Name (English)
                  </label>
                  <input
                    type="text"
                    id={`studentNameEnglish-${index}`}
                    name="studentNameEnglish"
                    value={student.studentNameEnglish}
                    onChange={(e) => handleStudentChange(index, e)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`classRoll-${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Class Roll
                  </label>
                  <input
                    type="text"
                    id={`classRoll-${index}`}
                    name="classRoll"
                    value={student.classRoll}
                    onChange={(e) => handleStudentChange(index, e)}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={addStudentField}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              + Add Another Student
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
            >
              {isSubmitting ? "Submitting..." : "Submit All Students"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

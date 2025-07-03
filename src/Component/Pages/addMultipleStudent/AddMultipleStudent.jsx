import { useState, useEffect } from "react";
import AddStudentForm from "./AddStudentForm";
import toast, { Toaster } from "react-hot-toast";

export default function AddMultipleStudent() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [callSaveStdent, setCallSaveStudent] = useState(false);

  useEffect(() => {
    // Load saved data from localStorage if available
    const savedData = localStorage.getItem("studentFormData");
    setCallSaveStudent(savedData ? true : false);
    if (savedData) {
      const { class: savedClass, gender } = JSON.parse(savedData);
      setSelectedClass(savedClass);
      setSelectedGender(gender);
    }

    // Fetch classes from API
    const fetchClasses = async () => {
      try {
        const response = await fetch(
          "https://tum-server.vercel.app/api/v1/class"
        );
        const data = await response.json();
        setClasses(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching classes:", error);
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the selected class object
    const classObj = classes.find(
      (cls) => cls.name === selectedClass || cls.nameBangla === selectedClass
    );

    if (classObj) {
      const dataToSave = {
        class: `${classObj.name}(${classObj.nameBangla})`,
        gender: selectedGender,
      };
      localStorage.setItem("studentFormData", JSON.stringify(dataToSave));
      toast.success("Data saved successfully!");
      setCallSaveStudent(true);
    }
  };

  if (isLoading) {
    return <div className="w-full bg-white p-4">Loading classes...</div>;
  }

  return (
    <div className="w-full rounded-md shadow-md bg-white">
      <Toaster />
      {/* Header form for class and gender */}
      <form onSubmit={handleSubmit} className="p-4 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Class
            </label>
            <select
              id="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls.name}>
                  {cls.name} ({cls.nameBangla})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              id="gender"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Selection
          </button>
        </div>
      </form>

      {/* add student form component */}
      {callSaveStdent && <AddStudentForm />}
    </div>
  );
}

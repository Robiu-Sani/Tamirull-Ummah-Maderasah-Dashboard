import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  FiPlus,
  FiTrash2,
  FiEdit,
  FiLoader,
  FiSave,
  FiRefreshCw,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

export default function CreateExamSubject() {
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [examSubjects, setExamSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Fetch initial data
  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [classesRes, subjectsRes, examSubjectsRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_SERVER}/class`),
        axios.get(`${import.meta.env.VITE_SERVER}/subject`),
        axios.get(`${import.meta.env.VITE_SERVER}/exam-subject`),
      ]);
      setClasses(classesRes.data);
      setSubjects(subjectsRes.data);
      setExamSubjects(examSubjectsRes.data.data);
    } catch (error) {
      toast.error("Failed to fetch data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) => {
      const exists = prev.some(
        (s) =>
          s.englishName === subject.name && s.banglaName === subject.nameBangla
      );

      if (exists) {
        return prev.filter(
          (s) =>
            !(
              s.englishName === subject.name &&
              s.banglaName === subject.nameBangla
            )
        );
      } else {
        return [
          ...prev,
          { englishName: subject.name, banglaName: subject.nameBangla },
        ];
      }
    });
  };

  const removeSubject = (index) => {
    setSelectedSubjects((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClass) {
      toast.error("Please select a class");
      return;
    }

    if (selectedSubjects.length === 0) {
      toast.error("Please select at least one subject");
      return;
    }

    try {
      setFormLoading(true);
      const payload = {
        class: selectedClass,
        subject: selectedSubjects,
      };

      if (editingId) {
        await axios.put(
          `${import.meta.env.VITE_SERVER}/exam-subject/${editingId}`,
          payload
        );
        toast.success("Exam subjects updated successfully");
      } else {
        await axios.post(
          `${import.meta.env.VITE_SERVER}/exam-subject`,
          payload
        );
        toast.success("Exam subjects created successfully");
      }

      resetForm();
      fetchInitialData();
    } catch (error) {
      toast.error(
        editingId
          ? "Failed to update exam subjects"
          : "Failed to create exam subjects"
      );
      console.error(error);
    } finally {
      setFormLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedClass("");
    setSelectedSubjects([]);
    setEditingId(null);
    setIsSubjectDropdownOpen(false);
    setSearchTerm("");
  };

  const handleEdit = (examSubject) => {
    setSelectedClass(examSubject.class._id);
    setSelectedSubjects(examSubject.subject);
    setEditingId(examSubject._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this exam subject?"))
      return;

    try {
      setLoading(true);
      await axios.delete(`${import.meta.env.VITE_SERVER}/exam-subject/${id}`);
      toast.success("Exam subject deleted successfully");
      fetchInitialData();
    } catch (error) {
      toast.error("Failed to delete exam subject");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.nameBangla.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getClassName = (classId) => {
    const cls = classes.find((c) => c._id === classId);
    return cls ? `${cls.name} (${cls.nameBangla})` : "Unknown Class";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {editingId ? (
          <>
            <FiEdit className="text-blue-500" /> Edit Exam Subjects
          </>
        ) : (
          <>
            <FiPlus className="text-green-500" /> Create Exam Subjects
          </>
        )}
      </h1>

      {/* Horizontal Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-8"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="class"
            >
              Select Class
            </label>
            <select
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="class"
              value={selectedClass}
              onChange={handleClassChange}
              required
            >
              <option value="">Select a class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.name} ({cls.nameBangla})
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-1/2 px-3 relative">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Select Subjects
            </label>
            <div className="relative">
              <div
                className="appearance-none  w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 cursor-pointer flex justify-between items-center"
                onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}
              >
                <span>
                  {selectedSubjects.length > 0
                    ? `${selectedSubjects.length} subjects selected`
                    : "Select subjects"}
                </span>
                <FiChevronDown
                  className={`transition-transform ${
                    isSubjectDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isSubjectDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
                  <div className="p-2 border-b">
                    <input
                      type="text"
                      placeholder="Search subjects..."
                      className="w-full p-2 border rounded"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  {filteredSubjects.map((subject) => (
                    <div
                      key={subject._id}
                      className={`p-3 hover:bg-gray-100 cursor-pointer flex items-center ${
                        selectedSubjects.some(
                          (s) =>
                            s.englishName === subject.name &&
                            s.banglaName === subject.nameBangla
                        )
                          ? "bg-blue-50"
                          : ""
                      }`}
                      onClick={() => toggleSubject(subject)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedSubjects.some(
                          (s) =>
                            s.englishName === subject.name &&
                            s.banglaName === subject.nameBangla
                        )}
                        readOnly
                        className="mr-2"
                      />
                      <span>
                        {subject.name} ({subject.nameBangla})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Selected subjects chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedSubjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full flex items-center"
                >
                  {subject.englishName}
                  <button
                    type="button"
                    onClick={() => removeSubject(index)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
            >
              <FiPlus /> New
            </button>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2"
            type="submit"
            disabled={formLoading}
          >
            {formLoading ? (
              <FiLoader className="animate-spin" />
            ) : editingId ? (
              <FiSave />
            ) : (
              <FiPlus />
            )}
            {editingId ? "Update Exam Subjects" : "Create Exam Subjects"}
          </button>
        </div>
      </form>

      {/* Exam Subjects List */}
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">All Exam Subjects</h2>
          <button
            onClick={fetchInitialData}
            disabled={loading}
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {loading && examSubjects.length === 0 ? (
          <div className="flex justify-center py-8">
            <FiLoader className="animate-spin text-2xl text-blue-500" />
          </div>
        ) : examSubjects.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No exam subjects found. Create one above.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Subjects
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {examSubjects.map((examSubject) => (
                  <tr
                    key={examSubject._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      {getClassName(examSubject.class._id)}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-2">
                        {examSubject.subject.map((subject, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {subject.englishName}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        onClick={() => handleEdit(examSubject)}
                        className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50"
                        title="Edit"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(examSubject._id)}
                        className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                        title="Delete"
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

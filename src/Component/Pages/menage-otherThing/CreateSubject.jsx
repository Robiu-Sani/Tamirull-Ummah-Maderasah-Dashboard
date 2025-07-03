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
} from "react-icons/fi";

export default function CreateSubject() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nameBangla: "",
    code: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all subjects on component mount
  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/subject`
      );
      setSubjects(response.data);
    } catch (error) {
      toast.error("Failed to fetch subjects");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.nameBangla) {
      toast.error("Name and Bangla Name are required");
      return;
    }

    try {
      setFormLoading(true);
      if (editingId) {
        await axios.put(
          `${import.meta.env.VITE_SERVER}/subject/${editingId}`,
          formData
        );
        toast.success("Subject updated successfully");
      } else {
        await axios.post(`${import.meta.env.VITE_SERVER}/subject`, formData);
        toast.success("Subject created successfully");
      }
      setFormData({ name: "", nameBangla: "", code: "" });
      setEditingId(null);
      fetchSubjects();
    } catch (error) {
      toast.error(
        editingId ? "Failed to update subject" : "Failed to create subject"
      );
      console.error(error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleEdit = (subject) => {
    setFormData({
      name: subject.name,
      nameBangla: subject.nameBangla,
      code: subject.code || "",
    });
    setEditingId(subject._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subject?"))
      return;

    try {
      setLoading(true);
      await axios.delete(`${import.meta.env.VITE_SERVER}/subject/${id}`);
      toast.success("Subject deleted successfully");
      fetchSubjects();
    } catch (error) {
      toast.error("Failed to delete subject");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {editingId ? (
          <>
            <FiEdit className="text-blue-500" /> Edit Subject
          </>
        ) : (
          <>
            <FiPlus className="text-green-500" /> Create New Subject
          </>
        )}
      </h1>

      {/* Horizontal Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-8"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Subject Name (English)
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="name"
              name="name"
              type="text"
              placeholder="Mathematics"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nameBangla"
            >
              Subject Name (Bangla)
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="nameBangla"
              name="nameBangla"
              type="text"
              placeholder="গণিত"
              value={formData.nameBangla}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="code"
            >
              Subject Code (Optional)
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="code"
              name="code"
              type="text"
              placeholder="MATH-101"
              value={formData.code}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setFormData({ name: "", nameBangla: "", code: "" });
              }}
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
            {editingId ? "Update Subject" : "Create Subject"}
          </button>
        </div>
      </form>

      {/* Subjects List */}
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">All Subjects</h2>
          <button
            onClick={fetchSubjects}
            disabled={loading}
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {loading && subjects.length === 0 ? (
          <div className="flex justify-center py-8">
            <FiLoader className="animate-spin text-2xl text-blue-500" />
          </div>
        ) : subjects.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No subjects found. Create one above.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    English Name
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Bangla Name
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr
                    key={subject._id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{subject.name}</td>
                    <td className="py-3 px-4">{subject.nameBangla}</td>
                    <td className="py-3 px-4">{subject.code || "-"}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        onClick={() => handleEdit(subject)}
                        className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50"
                        title="Edit"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(subject._id)}
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

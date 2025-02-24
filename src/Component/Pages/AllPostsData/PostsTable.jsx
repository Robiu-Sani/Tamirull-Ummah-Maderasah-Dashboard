import { useState, useEffect } from "react";
import axios from "axios";
import { FaEllipsisV } from "react-icons/fa";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function PostsTable({ getTotal }) {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // 'all' or 'selected'
  const [activeRow, setActiveRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 50;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/post/table`,
        {
          params: {
            page: currentPage,
            search,
            selectFilter: filter === "selected" ? "true" : "",
          },
        }
      );

      const { data, totalPosts, selectedPosts } = response.data.data;
      getTotal(totalPosts, selectedPosts);
      setPosts(data || []);
      setTotalPosts(totalPosts || 0);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleBox = (rowId) => {
    setActiveRow((prev) => (prev === rowId ? null : rowId));
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search, filter, currentPage]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_SERVER}/post/delete-post/${id}`
          );
          const data = response.data;

          if (data.status === true) {
            toast.success(data.message);
            fetchPosts();
          } else {
            toast.error("Failed to delete the contact.");
          }
        } catch (error) {
          console.error("Error deleting the contact:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    });
  };

  const handleselected = async (id, UpdateData) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(
            `${
              import.meta.env.VITE_SERVER
            }/post/update-single-post-by-patch/${id}`,
            { isSelected: UpdateData }
          );
          const data = response.data;

          if (data.status === true) {
            toast.success(data.message);
            fetchPosts();
          } else {
            toast.error("Failed to updated the contact.");
          }
        } catch (error) {
          console.error("Error updateing the contact:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    });
  };

  return (
    <div className="w-full">
      <Toaster />
      {/* <h1 className="text-xl font-bold mb-4">Posts Table</h1> */}

      <div className="flex items-center justify-between mb-4">
        {/* Search Bar */}
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-1/3"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter Dropdown */}
        <select
          className="border border-gray-300 rounded-md p-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Posts</option>
          <option value="selected">Selected Posts</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <p className="text-center">Loading posts...</p>
        ) : (
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">student name</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Content</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((row, index) => (
                <tr key={row._id} className="odd:bg-white even:bg-gray-50">
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">
                    {row.studentID?.studentNameEnglish || "N/A"}
                  </td>
                  <td className="border px-4 py-2">
                    {row.createdAt
                      ? `${new Date(row.createdAt).toLocaleDateString()}`
                      : null}
                  </td>
                  <td className="border px-4 py-2">
                    {row.postTitle.split(" ").slice(0, 3).join(" ")}...
                  </td>
                  <td className="border px-4 py-2">
                    {row.postDescription.split(" ").slice(0, 6).join(" ")}...
                  </td>
                  <td className="border px-4 py-2 text-center relative">
                    <div className="inline-block relative">
                      <FaEllipsisV
                        className="text-gray-600 cursor-pointer"
                        size={20}
                        onClick={() => toggleBox(row._id)}
                      />
                      {activeRow === row._id && (
                        <div className="absolute z-10 -right-20 -translate-x-1/2 mt-2 bg-gray-100 shadow-lg border rounded-md p-2 w-40">
                          <Link
                            to={`/update/single-posts-data/${row._id}`}
                            className="block w-full text-left px-2 py-1 hover:bg-gray-200 rounded-md"
                          >
                            Details
                          </Link>
                          <div className="flex items-center justify-between px-2 py-1 hover:bg-gray-200 rounded-md">
                            <span>Select</span>
                            <label className="inline-flex relative items-center cursor-pointer">
                              <input
                                onClick={() =>
                                  handleselected(
                                    row._id,
                                    row.isSelected === true ? false : true
                                  )
                                }
                                type="checkbox"
                                className="sr-only peer"
                                checked={row.isSelected}
                                readOnly
                              />
                              <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                          <button
                            onClick={() => handleDelete(row._id)}
                            className="block w-full text-left px-2 py-1 hover:bg-gray-200 rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        <button
          className="px-3 py-1 border rounded-md mx-1"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded-md mx-1 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border rounded-md mx-1"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

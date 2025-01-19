import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt, FaTimes, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function PostsReports() {
  const [posts, setPosts] = useState([]);

  // Fetch posts with reports

  const fetchReports = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/post/report`
      );
      if (response.data.status) {
        setPosts(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching post reports:", error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Delete Post

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
            fetchReports();
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

  const handleRemoveReports = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove report!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.patch(
            `${
              import.meta.env.VITE_SERVER
            }/post/update-single-post-by-patch/${id}`,
            { reports: "" }
          );
          const data = response.data;

          if (data.status === true) {
            toast.success(data.message);
            fetchReports();
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
    <div className="w-full  bg-gray-100 min-h-screen">
      <Toaster />
      <div className="w-full p-3 rounded-md shadow-md mb-5 border bg-white">
        <h1 className="text-xl font-semibold text-gray-700">Posts Reports</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden p-4 flex flex-col"
          >
            {/* Post Image */}
            {post.postImage ? (
              <img
                src={post.postImage}
                alt={post.postTitle}
                className="w-full h-48 object-cover mb-3 rounded-lg"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-3 rounded-lg">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            {/* Post Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {post.postTitle}
            </h2>

            {/* Reports */}
            <p className="text-gray-600 text-sm mb-4">
              <strong>Report:</strong> {post.reports || "No reports available"}
            </p>

            {/* Action Buttons */}
            <div className="mt-auto flex gap-3">
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(post._id)}
                className="flex items-center justify-center gap-1 bg-red-500 text-white py-2 px-3 rounded-md text-sm hover:bg-red-600"
              >
                <FaTrashAlt /> Delete posts
              </button>

              {/* Remove Reports Button */}
              <button
                onClick={() => handleRemoveReports(post._id)}
                className="flex items-center justify-center gap-1 bg-yellow-400 text-white py-2 px-3 rounded-md text-sm hover:bg-yellow-500"
              >
                <FaTimes /> Remove Reports
              </button>

              {/* Details Button */}
              <Link
                to={`/update/single-posts-data/${post._id}`}
                className="flex items-center justify-center gap-1 bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600"
              >
                <FaInfoCircle /> Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch post details
  const fetchPost = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/post/single-post/${id}`
      );
      const { data } = response.data;
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
      toast.error("Failed to load the post. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Delete post
  const handleDelete = async () => {
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
          } else {
            toast.error("Failed to delete the post.");
          }
        } catch (error) {
          console.error("Error deleting the post:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    });
  };

  // Update post selection
  const handleUpdate = async (updateData) => {
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
            { isSelected: updateData }
          );
          const data = response.data;

          if (data.status === true) {
            toast.success(data.message);
            fetchPost();
          } else {
            toast.error("Failed to update the post.");
          }
        } catch (error) {
          console.error("Error updating the post:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    });
  };

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return <div className="text-center p-5">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center p-5">No post found.</div>;
  }

  const { postTitle, postDescription, postImage, isSelected, studentID } = post;

  return (
    <div className="max-w-6xl mx-auto ">
      <Toaster />
      {/* Student Details */}
      <div className="bg-white border shadow-lg mb-3 rounded-lg p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          Student Details
        </h2>
        <div className="w-full h-[120px]">
          <img src={studentID.image} alt="" className="h-full max-h-[120px]" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Name:</strong> {studentID.studentNameEnglish}
            </p>
            <p>
              <strong>Gender:</strong> {studentID.gender}
            </p>
            <p>
              <strong>Class:</strong> {studentID.class}
            </p>
            <p>
              <strong>Section:</strong> {studentID.section}
            </p>
          </div>
          <div>
            <p>
              <strong>Address:</strong> {studentID.address}
            </p>
            <p>
              <strong>Email:</strong> {studentID.email}
            </p>
            <p>
              <strong>Date of Birth:</strong> {studentID.dateOfBirth}
            </p>
            <p>
              <strong>Blood Group:</strong> {studentID.bloodGroup}
            </p>
          </div>
        </div>
      </div>
      {/* Post Details */}
      <div className="bg-white border shadow-lg rounded-lg p-5 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">{postTitle}</h1>
        <img
          src={postImage}
          alt={postTitle}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700 mb-4">{postDescription}</p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Delete Post
          </button>
          <button
            onClick={() => handleUpdate(!isSelected)}
            className={`px-4 py-2 rounded transition ${
              isSelected
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isSelected ? "Unselect" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
}

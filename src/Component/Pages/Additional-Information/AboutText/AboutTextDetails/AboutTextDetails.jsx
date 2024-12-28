import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import fetchOutput from "../../../../Default/functions/fatchingData";
import Swal from "sweetalert2";
import deleteOutput from "../../../../Default/functions/deleteOutput";
import toast from "react-hot-toast";

export default function AboutTextDetails() {
  const [aboutText, setAboutText] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOutput(`about/single-about/${id}`)
      .then((response) => {
        setAboutText(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOutput(`about/delete-about/${id}`)
          .then((response) => {
            toast.success(response.data.message + " Deleted");
            navigate(-1);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    });
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      {aboutText ? (
        <>
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {aboutText.title}
            </h1>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Speaker:</span>{" "}
              {aboutText.speaker}
            </p>
            <p className="text-gray-500 text-xs">
              <span className="font-semibold">Created At:</span>{" "}
              {new Date(aboutText.createdAt).toLocaleString()}
            </p>
            <p className="text-gray-500 text-xs">
              <span className="font-semibold">Updated At:</span>{" "}
              {new Date(aboutText.updatedAt).toLocaleString()}
            </p>
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Description:
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {aboutText.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <Link
              to={`/additional-information/about-text/edit/${id}`}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center">Loading about details...</p>
      )}
    </div>
  );
}

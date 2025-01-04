import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import fetchOutput from "../../../Default/functions/fatchingData";
import { useParams } from "react-router-dom";

export default function ResultDetails() {
  const [singleResult, getSingleResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchOutput(`result/get-single-result/${id}`)
      .then((response) => {
        getSingleResult(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    );
  }

  if (!singleResult) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">No result data available.</p>
      </div>
    );
  }

  return <div>ResultDetails</div>;
}

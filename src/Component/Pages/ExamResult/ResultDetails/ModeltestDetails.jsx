import { useEffect, useState } from "react";
import fetchOutput from "../../../Default/functions/fatchingData";
import { Link, useParams } from "react-router-dom";

export default function ModeltestDetails() {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchOutput(`result/get-single-result/${id}`)
      .then((response) => {
        setResultData(response.data); // Assuming `response.data` contains the desired data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  // Function to calculate grade
  const calculateGrade = (mark) => {
    if (mark >= 80) return "A+";
    if (mark >= 70) return "A";
    if (mark >= 60) return "A-";
    if (mark >= 50) return "B";
    if (mark >= 40) return "C";
    if (mark >= 33) return "D";
    return "F";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!resultData) {
    return <div>Error: Data not found</div>;
  }

  const { subjects, examName, total } = resultData;

  return (
    <div className="p-6 shadow-md bg-white text-gray-800 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">
        {examName} - Student Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Student Info */}
        <div className="p-4 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Student Information
          </h2>
          <p>
            <strong>Name (Bangla):</strong>{" "}
            {resultData.studentId.studentNameBangla}
          </p>
          <p>
            <strong>Name (English):</strong>{" "}
            {resultData.studentId.studentNameEnglish}
          </p>
          <p>
            <strong>Class:</strong> {resultData.studentId.class}
          </p>
          <p>
            <strong>Section:</strong> {resultData.studentId.section}
          </p>
          <p>
            <strong>Roll:</strong> {resultData.studentId.classRoll}
          </p>
          <p>
            <strong>Gender:</strong> {resultData.studentId.gender}
          </p>
        </div>

        {/* Teacher Info */}
        <div className="p-4 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Teacher Information
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={resultData.teacherId.teacherImage}
              alt="Teacher"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p>
                <strong>Name:</strong> {resultData.teacherId.teacherName}
              </p>
              <p>
                <strong>Email:</strong> {resultData.teacherId.email}
              </p>
              <p>
                <strong>Phone:</strong> {resultData.teacherId.phone}
              </p>
              <p>
                <strong>Subject:</strong> {resultData.teacherId.subject}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Table */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Subject Marks:</h3>
        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 border">Subject Name</th>
              <th className="py-2 px-4 border">Main Marks</th>
              <th className="py-2 px-4 border">Grade</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(subjects).map(([subject, mark]) => (
              <tr key={subject} className="border-t">
                <td className="py-2 px-4 border">{subject}</td>
                <td className="py-2 px-4 border">{mark}</td>
                <td className="py-2 px-4 border">{calculateGrade(mark)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Marks */}
      <div className="text-lg font-semibold">
        <p>Total Marks: {total}</p>
      </div>
      <div className="w-full flex justify-end">
        <Link
          to={`/exam-results/exam-result-edit/${resultData._id}`}
          className="p-2 px-10 mt-7 bg-gray-700 text-white rounded-md m-3 border shadow-md"
        >
          {" "}
          Edit{" "}
        </Link>
      </div>
    </div>
  );
}

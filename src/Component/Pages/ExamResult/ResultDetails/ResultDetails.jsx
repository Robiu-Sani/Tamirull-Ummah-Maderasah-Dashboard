import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import fetchOutput from "../../../Default/functions/fatchingData";
import { useParams } from "react-router-dom";

export default function ResultDetails() {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchOutput(`result/get-single-result/${id}`)
      .then((response) => {
        setResultData(response);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [id]);

  const calculateGrade = (marks) => {
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "A-";
    if (marks >= 50) return "B";
    if (marks >= 40) return "C";
    if (marks >= 33) return "D";
    return "F";
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    );
  }

  if (!resultData || !resultData.status) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">No result data available.</p>
      </div>
    );
  }

  const { tutiral, data } = resultData;
  const subjects = [
    ...new Set([...Object.keys(tutiral), ...Object.keys(data.subjects)]),
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-md rounded-lg">
      {/* Exam Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          {data.examName}
        </h1>
        <p className="text-gray-500">Exam Results</p>
      </div>

      {/* Student and Teacher Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Student Info */}
        <div className="p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Student Information
          </h2>
          <p>
            <strong>Name (Bangla):</strong> {data.studentId.studentNameBangla}
          </p>
          <p>
            <strong>Name (English):</strong> {data.studentId.studentNameEnglish}
          </p>
          <p>
            <strong>Class:</strong> {data.studentId.class}
          </p>
          <p>
            <strong>Section:</strong> {data.studentId.section}
          </p>
          <p>
            <strong>Roll:</strong> {data.studentId.classRoll}
          </p>
          <p>
            <strong>Gender:</strong> {data.studentId.gender}
          </p>
        </div>

        {/* Teacher Info */}
        <div className="p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Teacher Information
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={data.teacherId.teacherImage}
              alt="Teacher"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p>
                <strong>Name:</strong> {data.teacherId.teacherName}
              </p>
              <p>
                <strong>Email:</strong> {data.teacherId.email}
              </p>
              <p>
                <strong>Phone:</strong> {data.teacherId.phone}
              </p>
              <p>
                <strong>Subject:</strong> {data.teacherId.subject}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Result Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Subject</th>
              <th className="border border-gray-300 p-2">Tutorial</th>
              <th className="border border-gray-300 p-2">50% of Tutorial</th>
              <th className="border border-gray-300 p-2">Subject Marks</th>
              <th className="border border-gray-300 p-2">80% of Subject</th>
              <th className="border border-gray-300 p-2">Total</th>
              <th className="border border-gray-300 p-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => {
              const tutorialMark = tutiral[subject] || 0;
              const subjectMark = data.subjects[subject] || 0;
              const tutorialPercentage = (tutorialMark * 50) / 100;
              const subjectPercentage = (subjectMark * 80) / 100;
              const total = tutorialPercentage + subjectPercentage;
              const grade = calculateGrade(total);

              return (
                <tr key={subject}>
                  <td className="border border-gray-300 p-2 capitalize">
                    {subject}
                  </td>
                  <td className="border border-gray-300 p-2">{tutorialMark}</td>
                  <td className="border border-gray-300 p-2">
                    {tutorialPercentage.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 p-2">{subjectMark}</td>
                  <td className="border border-gray-300 p-2">
                    {subjectPercentage.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {total.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 p-2">{grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

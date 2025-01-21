import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function TeacherPrivate({ children }) {
  const [teacher, setTeacher] = useState(null); // Initialize state as null
  const location = useLocation();
  const logData = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const storedData = JSON.parse(localStorage.getItem("data"));

        if (storedData && storedData._id) {
          // Fetch updated teacher data from the server
          const response = await axios.get(
            `${import.meta.env.VITE_SERVER}/teacher/single-teacher/${
              storedData._id
            }`
          );

          const updatedTeacherData = response.data.data;

          // Update localStorage and state
          localStorage.setItem("data", JSON.stringify(updatedTeacherData));
          setTeacher(updatedTeacherData);
        } else {
          // If no valid storedData exists, redirect to login
          setTeacher(null);
        }
      } catch (error) {
        console.error("Error fetching teacher data:", error);
        setTeacher(null); // Handle error by resetting state
      }
    };

    fetchTeacherData();
  }, []);

  if (!logData) {
    localStorage.removeItem("data");
    navigate("/");
  }

  // Show children if the teacher exists and is an admin
  if (
    (teacher && teacher.type === "teacher") ||
    (logData && logData.type === "teacher")
  ) {
    return children;
  }

  // Redirect to home page if not authorized
  return <Navigate state={location.pathname} to={`/`} replace />;
}

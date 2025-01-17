import { useEffect, useState } from "react";

export default function useLogedAdmin() {
  const [adminEmail, setAdminEmail] = useState(null);
  const [teacherID, setTeacherID] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchAdminEmail = async () => {
      try {
        setIsLoading(true);

        // Get the stored data from localStorage
        const storedData = JSON.parse(localStorage.getItem("data"));

        // If storedData exists, extract the necessary fields
        if (storedData) {
          setAdminEmail(storedData.email || null);
          setTeacherID(storedData._id || null);
          setUser(storedData);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setAdminEmail(null);
        setTeacherID(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdminEmail();
  }, []); // Runs once when the component mounts

  return { adminEmail, user, isLoading, teacherID };
}

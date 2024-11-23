import { useState, useEffect } from "react";
import axios from "axios";

export default function useSingleAdmin() {
  const [logedAdmin, setLogedAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const adminEmail = localStorage.getItem("adminEmail");
    if (adminEmail) {
      fetchAdmins(adminEmail);
    }
  }, []);

  const fetchAdmins = async (adminEmail) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_EXPRESS_API}/admins/${adminEmail}`
      );
      setLogedAdmin(response.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { logedAdmin, isLoading };
}

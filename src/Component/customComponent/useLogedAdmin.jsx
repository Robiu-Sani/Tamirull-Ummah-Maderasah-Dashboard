import { useEffect, useState } from "react";

export default function useLogedAdmin() {
  const [adminEmail, setAdminEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching from localStorage)
    const fetchAdminEmail = async () => {
      setIsLoading(true);
      const storedEmail = await localStorage.getItem("adminEmail");
      if (storedEmail) {
        setAdminEmail(storedEmail);
      }
      setIsLoading(false);
    };

    fetchAdminEmail();
  }, []);

  return { adminEmail, isLoading };
}

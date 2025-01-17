import { useEffect, useState } from "react";

export default function useLogedAdmin() {
  const [adminEmail, setAdminEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching from localStorage)
    const fetchAdminEmail = async () => {
      setIsLoading(true);
      const storedEmail = await JSON.parse(localStorage.getItem("data"));
      console.log(storedEmail);
      if (storedEmail) {
        setAdminEmail(storedEmail.email);
      }
      setIsLoading(false);
    };

    fetchAdminEmail();
  }, []);

  return { adminEmail, isLoading };
}

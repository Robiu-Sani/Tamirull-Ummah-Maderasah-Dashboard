import { useEffect, useState } from "react";

export default function useLogedAdmin() {
  const [adminEmail, setAdminEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("adminEmail");
    if (storedEmail) {
      setAdminEmail(storedEmail);
    }
  }, []);

  return { adminEmail };
}

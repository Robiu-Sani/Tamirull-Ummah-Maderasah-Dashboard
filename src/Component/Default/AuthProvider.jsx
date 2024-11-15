import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [adminEmail, setAdminEmail] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("adminEmail");
    if (storedEmail) {
      setAdminEmail(storedEmail);
    }
  }, []);

  const ContextData = {
    adminEmail,
  };

  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
}

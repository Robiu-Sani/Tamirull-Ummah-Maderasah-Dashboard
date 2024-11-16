import { Navigate, useLocation } from "react-router-dom";

export default function Private({ children }) {
  const adminEmail = localStorage.getItem("adminEmail");
  const location = useLocation();

  if (adminEmail) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={`/`} replace={true}></Navigate>
  );
}

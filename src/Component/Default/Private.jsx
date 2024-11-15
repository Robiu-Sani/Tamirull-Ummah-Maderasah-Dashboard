import { Navigate, useLocation } from "react-router-dom";
import useLogedAdmin from "../customComponent/useLogedAdmin";

export default function Private({ children }) {
  const { adminEmail } = useLogedAdmin();
  const location = useLocation();

  if (adminEmail == null) {
    return children;
  }

  return (
    <Navigate state={location.pathname} to={`/login`} replace={true}></Navigate>
  );
}

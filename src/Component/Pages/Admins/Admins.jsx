import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminsBanner from "./AdminsBanner";
import AllAdmins from "./AllAdmins";

export default function Admins() {
  return (
    <div>
      <AdminsBanner />
      <div className="w-full flex justify-between items-center">
        <h3 className="font-bold">Admin</h3>
        <Link
          to={"/create-admin"}
          className="px-3 p-1 flex gap-3 justify-center items-center rounded-md bg-gray-800 text-white"
        >
          <FaPlus className="text-sm" />
          Create Admin
        </Link>
      </div>
      <AllAdmins />
    </div>
  );
}

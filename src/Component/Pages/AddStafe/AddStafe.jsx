import { RiEdgeNewFill } from "react-icons/ri";
import AddStaffForm from "./AddStaffForm";

export default function AddStafe() {
  return (
    <div className="w-full">
      <div className="w-full mb-3 p-3 rounded-md bg-white border shadow-md flex justify-start items-center gap-3">
        <RiEdgeNewFill />
        <h2 className="font-semibold text-gray-700 ">Add Staff</h2>
      </div>
      <AddStaffForm />
    </div>
  );
}

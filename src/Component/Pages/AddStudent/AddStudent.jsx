import { MdOutlineNewspaper } from "react-icons/md";
import AddStudentForm from "./AddStudentForm";

export default function AddStudent() {
  return (
    <div className="w-full">
      <div className="w-full mb-3 p-3 rounded-md bg-white border shadow-md flex justify-start items-center gap-3">
        <MdOutlineNewspaper />
        <h2 className="font-semibold text-gray-700 ">Add Student</h2>
      </div>
      <AddStudentForm />
    </div>
  );
}

import { AiOutlineWeiboCircle } from "react-icons/ai";
import AddTeacherForm from "./AddTeacherForm";

export default function AddTeacher() {
  return (
    <div className="w-full">
      <div className="w-full mb-3 p-3 rounded-md bg-white border shadow-md flex justify-start items-center gap-3">
        <AiOutlineWeiboCircle />
        <h2 className="font-semibold text-gray-700 ">Add Teacher</h2>
      </div>
      <AddTeacherForm />
    </div>
  );
}

import AddDefaultValue from "./AddDefaultValue";
import AddResultForm from "./AddResultForm";

export default function AddResult() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full p-3 flex justify-center rounded-md border shadow-md items-center bg-white">
        <h3 className="font-semibold text-gray-700">Add Exam Result</h3>
      </div>
      <AddDefaultValue />
      <AddResultForm />
    </div>
  );
}

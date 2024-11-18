import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiGoogledataproc } from "react-icons/si";

export default function UpdateAboutOurMaderasah() {
  const [callItem, setCallItem] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <div
        onClick={() => setCallItem(!callItem)}
        className={`w-full flex justify-between cursor-pointer p-5 ${
          callItem ? "border-b" : "border-0"
        } items-center`}
      >
        <span className="flex justify-center items-center gap-3">
          <SiGoogledataproc />
          <span>Update about the institute</span>
        </span>
        <MdKeyboardArrowDown
          className={`text-3xl ${callItem ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {callItem && (
        <div className="w-full p-5">
          <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Title Field */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">Title</label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Description Field */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">Description</label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter description"
                rows="4"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-2 w-full bg-gray-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiGoogledataproc } from "react-icons/si";

export default function UpdateAboutOurMaderasah() {
  const [callItem, setCallItem] = useState(false);
  const [isSubmiting, setIsSubmitein] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const submissionDate = new Date().toLocaleString();
    const newData = { ...data, submissionDate };

    try {
      setIsSubmitein(true);
      const response = await axios.post(
        `${import.meta.env.VITE_EXPRESS_API}/about_text`,
        newData
      );
      toast.success(
        response.data.message || "about_text created successfully!"
      );
      reset();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage);
    } finally {
      setIsSubmitein(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md">
      <Toaster position="top-center" />
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

            {/* Title Field */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">Speaker</label>
              <input
                type="text"
                {...register("speaker", { required: "Title is required" })}
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
              className="px-6 flex justify-center items-center gap-3 py-2 w-full bg-gray-500 text-white rounded-md"
            >
              {isSubmiting ? <ImSpinner2 className="animate-spin" /> : null}
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

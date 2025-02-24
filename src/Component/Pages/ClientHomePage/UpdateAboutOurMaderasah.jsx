import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";
import { SiGoogledataproc } from "react-icons/si";
import postOutput from "../../Default/functions/postOutput";

export default function UpdateAboutOurMaderasah() {
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
      const submittedData = await postOutput("about/create-about", newData);
      if (submittedData.status === true) {
        toast.success(submittedData.message);
        reset();
      } else {
        toast.error(submittedData.message);
      }
    } catch (error) {
      toast.error("Error submitting form:");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitein(false);
    }
  };

  return (
    <div className="w-full ">
      <Toaster position="top-center" />
      <div
        className={`w-full flex bg-white rounded-md shadow-md mb-3 justify-between cursor-pointer p-3 border items-center`}
      >
        <span className="flex justify-center items-center gap-3">
          <SiGoogledataproc />
          <span>Write something for your student</span>
        </span>
        {/* <MdKeyboardArrowDown
          className={`text-3xl ${callItem ? "rotate-180" : "rotate-0"}`}
        /> */}
      </div>

      <div className="w-full p-5 bg-white rounded-md shadow-md">
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
              className="w-full p-2 border h-[300px] rounded-md"
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
    </div>
  );
}

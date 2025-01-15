import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineNotification } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import postOutput from "../../Default/functions/postOutput";

export default function AddNotice() {
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
      const submittedData = await postOutput("notice/create-notice", newData);
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
    <div className="w-full  ">
      <Toaster position="top-center" />
      <div
        className={`w-full flex bg-white shadow-md justify-between cursor-pointer p-3 border rounded-md mb-3 items-center`}
      >
        <span className="flex justify-center items-center gap-3">
          <AiOutlineNotification />
          <span>Add a notice</span>
        </span>
      </div>

      <div className="w-full p-5 bg-white rounded-md shadow-md border">
        <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
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

            {/* Place (Optional) */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">Place (Optional)</label>
              <input
                type="text"
                {...register("place")}
                className="w-full p-2 border rounded-md"
                placeholder="Enter place"
              />
            </div>

            {/* Notice Start Date */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">Notice Start Date</label>
              <input
                type="date"
                {...register("startDate", {
                  required: "Start date is required",
                })}
                className="w-full p-2 border rounded-md"
              />
              {errors.startDate && (
                <p className="text-red-500 text-sm">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            {/* Notice Start Time */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">
                Notice Start Time (Optional)
              </label>
              <input
                type="time"
                {...register("startTime")}
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Notice End Date */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">Notice End Date</label>
              <input
                type="date"
                {...register("endDate", { required: "End date is required" })}
                className="w-full p-2 border rounded-md"
              />
              {errors.endDate && (
                <p className="text-red-500 text-sm">{errors.endDate.message}</p>
              )}
            </div>

            {/* Notice End Time */}
            <div className="w-full flex flex-col gap-2">
              <label className="font-medium">Notice End Time (Optional)</label>
              <input
                type="time"
                {...register("endTime")}
                className="w-full p-2 border rounded-md"
              />
            </div>
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
    </div>
  );
}

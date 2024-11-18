import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineNotification } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function AddNotice() {
  const [callItem, setCallItem] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const submissionDate = new Date().toLocaleString();
    console.log("Form Data:", { ...data, submissionDate });
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
          <AiOutlineNotification />
          <span>Add a notice</span>
        </span>
        <MdKeyboardArrowDown
          className={`text-3xl ${callItem ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {callItem && (
        <div className="w-full p-5">
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
                  <p className="text-red-500 text-sm">
                    {errors.endDate.message}
                  </p>
                )}
              </div>

              {/* Notice End Time */}
              <div className="w-full flex flex-col gap-2">
                <label className="font-medium">
                  Notice End Time (Optional)
                </label>
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

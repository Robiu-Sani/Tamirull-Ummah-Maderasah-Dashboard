import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";
import PatchData from "../../../../Default/functions/patchData";
import { useParams } from "react-router-dom";
import fetchOutput from "../../../../Default/functions/fatchingData";

export default function EditNotice() {
  const [isSubmiting, setIsSubmitein] = useState(false);
  const [notice, setNotice] = useState();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchOutput(`notice/single-notice/${id}`)
      .then((response) => {
        setNotice(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  const onSubmit = async (data) => {
    const newData = {
      title: data.title ? data.title : notice.title,
      submissionDate: data.submissionDate
        ? data.submissionDate
        : notice.submissionDate,
      place: data.place ? data.place : notice.place,
      endDate: data.endDate ? data.endDate : notice.endDate,
      endTime: data.endTime ? data.endTime : notice.endTime,
      startDate: data.startDate ? data.startDate : notice.startDate,
      startTime: data.startTime ? data.startTime : notice.startTime,
      description: data.description ? data.description : notice.description,
    };

    try {
      setIsSubmitein(true);
      const editedData = await PatchData(
        `notice/update-single-notice-by-patch/${id}`,
        newData
      );
      if (editedData.status === true) {
        toast.success(editedData.message || "notice updated successfully");
        reset();
      } else {
        toast.error(editedData.message);
      }
    } catch (error) {
      toast.error("Error submitting form:");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitein(false);
    }
  };

  return (
    <div className="w-full p-5">
      <Toaster />
      <h3 className="text-center text-xl my-2">Update Notice</h3>
      <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Title Field */}
          <div className="w-full flex flex-col gap-2">
            <label className="font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: false })}
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
                required: false,
              })}
              className="w-full p-2 border rounded-md"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm">{errors.startDate.message}</p>
            )}
          </div>

          {/* Notice Start Time */}
          <div className="w-full flex flex-col gap-2">
            <label className="font-medium">Notice Start Time (Optional)</label>
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
              {...register("endDate", { required: false })}
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
              required: false,
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter description"
            rows="4"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
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
  );
}

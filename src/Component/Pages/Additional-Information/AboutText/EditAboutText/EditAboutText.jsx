import toast, { Toaster } from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";
import PatchData from "../../../../Default/functions/patchData";
import fetchOutput from "../../../../Default/functions/fatchingData";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export default function EditAboutText() {
  const [isSubmiting, setIsSubmitein] = useState(false);
  const [about, setAbout] = useState();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchOutput(`about/single-about/${id}`)
      .then((response) => {
        setAbout(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  const onSubmit = async (data) => {
    const newData = {
      speaker: data.speaker ? data.speaker : about.speaker,
      title: data.title ? data.title : about.title,
      description: data.description ? data.description : about.description,
    };

    try {
      setIsSubmitein(true);
      const editedData = await PatchData(
        `about/update-single-about-by-patch/${id}`,
        newData
      );
      if (editedData.status === true) {
        toast.success(editedData.message || "about updated successfully");
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
      <h3 className="text-center text-xl my-2">
        Update About Institution Text
      </h3>
      <form className="w-full space-y-5" onSubmit={handleSubmit(onSubmit)}>
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

        {/* Title Field */}
        <div className="w-full flex flex-col gap-2">
          <label className="font-medium">Speaker</label>
          <input
            type="text"
            {...register("speaker", { required: false })}
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

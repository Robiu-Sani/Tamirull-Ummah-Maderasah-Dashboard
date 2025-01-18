import { useForm } from "react-hook-form";

export default function UploadVideos() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Video uploaded successfully!");
    reset(); // Reset the form after submission
  };

  return (
    <div className="w-full ">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white rounded-md text-center py-12">
        <h1 className="text-4xl font-bold">Upload Videos</h1>
        <p className="mt-2 text-lg">
          Share your amazing video content with the world!
        </p>
      </div>

      {/* Form Section */}
      <div className="flex -mt-6 justify-center py-12 ">
        <div className="bg-white rounded-lg shadow-lg w-full  p-8">
          <h2 className="text-2xl font-bold text-center mb-3">
            Upload a Video
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title Field */}
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-semibold mb-2"
              >
                Video Title
              </label>
              <input
                id="title"
                type="text"
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 3,
                    message: "Title must be at least 3 characters long",
                  },
                })}
                className={`w-full px-3 p-2 border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                placeholder="Enter the video title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Video Link Field */}
            <div>
              <label
                htmlFor="videoLink"
                className="block text-gray-700 font-semibold mb-2"
              >
                Video Link
              </label>
              <input
                id="videoLink"
                type="url"
                {...register("videoLink", {
                  required: "Video link is required",
                  pattern: {
                    value: /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$/,
                    message: "Enter a valid YouTube video link",
                  },
                })}
                className={`w-full px-3 p-2 border ${
                  errors.videoLink ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                placeholder="Enter a YouTube video link"
              />
              {errors.videoLink && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.videoLink.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-500 text-white w-full py-2 px-6 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Upload Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

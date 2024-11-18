import { useState } from "react";
import axios from "axios";

export default function ImageUpload({ onUpload }) {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "zdy07ggv");
      formData.append("cloud_name", "duegkjfvf"); //

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/duegkjfvf/image/upload",
        formData
      );

      if (response.status === 200) {
        const imageUrl = response.data.url;
        onUpload(imageUrl);
      }
    } catch (error) {
      console.error("Error uploading image:", error.message || error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .webp, .svg"
        onChange={handleImageUpload}
        disabled={isUploading}
        className="absolute top-0 left-0 cursor-pointer z-[99999] w-full h-full opacity-0"
      />
      {isUploading && <p className="text-blue-500">Uploading...</p>}
    </div>
  );
}

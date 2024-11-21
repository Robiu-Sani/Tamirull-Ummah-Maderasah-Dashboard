import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { MdKeyboardArrowDown, MdLocationOn, MdPhone } from "react-icons/md";
import {
  RiContactsBookUploadFill,
  RiWhatsappFill,
  RiTelegramFill,
} from "react-icons/ri";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaLinkedinIn,
  FaFacebookMessenger,
} from "react-icons/fa";
import ImageUpload from "../../Default/ImageUpload";
import { IoCloudUploadOutline } from "react-icons/io5";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";

export default function BasicContactInfo() {
  const [callItem, setCallItem] = useState(false);
  const [image, setImage] = useState(null);
  const [isSubmiting, setIsSubmitein] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const submissionDate = new Date().toLocaleString();
    const newData = { ...data, submissionDate, logo: image };

    try {
      setIsSubmitein(true);
      const response = await axios.post(
        `${import.meta.env.VITE_EXPRESS_API}/basic_info`,
        newData
      );
      toast.success(
        response.data.message || "basic_info created successfully!"
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

  const handleImageUpload = (url) => {
    setImage(url);
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
          <RiContactsBookUploadFill />
          <span>Update Name, Logo, Contact</span>
        </span>
        <MdKeyboardArrowDown
          className={`text-3xl transition-transform ${
            callItem ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {callItem && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-5 space-y-5"
        >
          <h2 className="text-xl font-semibold text-gray-600">
            Update Basic Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Institution Name (English) */}
            <div className="flex items-center gap-3">
              <MdLocationOn />
              <input
                type="text"
                {...register("institutionNameEnglish", { required: false })}
                placeholder="Institution Name (English)"
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.institutionNameEnglish && (
                <p className="text-red-500 text-sm">This field is required.</p>
              )}
            </div>

            {/* Institution Address (English) */}
            <div className="flex items-center gap-3">
              <MdLocationOn />
              <input
                type="text"
                {...register("institutionAddressEnglish", { required: false })}
                placeholder="Institution Address (English)"
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.institutionAddressEnglish && (
                <p className="text-red-500 text-sm">This field is required.</p>
              )}
            </div>

            {/* Institution Name (Bangla/Arabic) */}
            <div className="flex items-center gap-3">
              <MdLocationOn />
              <input
                type="text"
                {...register("institutionNameBanglaArabic")}
                placeholder="Institution Name (Bangla/Arabic)"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Institution Address (Bangla/Arabic) */}
            <div className="flex items-center gap-3">
              <MdLocationOn />
              <input
                type="text"
                {...register("institutionAddressBanglaArabic")}
                placeholder="Institution Address (Bangla/Arabic)"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Address */}
            <div className="flex col-span-1 md:col-span-2 items-center gap-3">
              <MdLocationOn />
              <input
                type="text"
                {...register("address")}
                placeholder="Address"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Contact Number */}
            <div className="flex items-center gap-3">
              <MdPhone />
              <input
                type="text"
                {...register("contactNumber", { required: false })}
                placeholder="Contact Number"
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm">This field is required.</p>
              )}
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <RiWhatsappFill />
              <input
                type="text"
                {...register("whatsApp")}
                placeholder="WhatsApp Number"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Telegram */}
            <div className="flex items-center gap-3">
              <RiTelegramFill />
              <input
                type="text"
                {...register("telegram")}
                placeholder="Telegram Number"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Social Media Links */}
            {[
              {
                icon: FaFacebookF,
                name: "facebook",
                placeholder: "Facebook Link",
              },
              { icon: FaTwitter, name: "twitter", placeholder: "Twitter Link" },
              {
                icon: FaInstagram,
                name: "instagram",
                placeholder: "Instagram Link",
              },
              { icon: FaYoutube, name: "youtube", placeholder: "YouTube Link" },
              { icon: FaDiscord, name: "discord", placeholder: "Discord Link" },
              {
                icon: FaFacebookMessenger,
                name: "messenger",
                placeholder: "Messenger Link",
              },
              {
                icon: FaLinkedinIn,
                name: "linkedin",
                placeholder: "LinkedIn Link",
              },
            ].map(({ icon: Icon, name, placeholder }) => (
              <div key={name} className="flex items-center gap-3">
                <Icon />
                <input
                  type="text"
                  {...register(name)}
                  placeholder={placeholder}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="mb-4 max-w-sm">
            <div className="w-full flex flex-col gap-3">
              <label className="block text-sm text-gray-600 mb-2">
                Upload Logo
              </label>
              <div className="w-full relative flex-col cursor-pointer h-auto min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded Preview"
                    className="w-full h-auto min-h-[150px] rounded-md border"
                  />
                ) : (
                  <div className="w-full max-h-[200px] min-h-[150px] flex flex-col justify-center items-center h-full">
                    <IoCloudUploadOutline className="text-2xl" />
                    <small>Upload Logo Image</small>
                  </div>
                )}
                <ImageUpload onUpload={handleImageUpload} />
              </div>
            </div>
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
      )}
    </div>
  );
}

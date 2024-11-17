import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
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

export default function BasicContactInfo() {
  const [callItem, setCallItem] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Contact information updated successfully!");
    reset(); // Reset form fields
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
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Institution Name (English) */}
            <div className="flex items-center gap-3">
              <MdLocationOn />
              <input
                type="text"
                {...register("institutionNameEnglish")}
                placeholder="Institution Name (English)"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>

            {/* Institution Address (English) */}
            <div className="flex items-center gap-3">
              <MdLocationOn />
              <input
                type="text"
                {...register("institutionAddressEnglish")}
                placeholder="Institution Address (English)"
                className="w-full border rounded-md px-3 py-2"
              />
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
                {...register("contactNumber")}
                placeholder="Contact Number"
                className="w-full border rounded-md px-3 py-2"
              />
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
          <div className="flex items-center gap-3">
            <RiContactsBookUploadFill />
            <input
              type="file"
              {...register("logo")}
              accept="image/*"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Update Information
          </button>
        </form>
      )}
    </div>
  );
}

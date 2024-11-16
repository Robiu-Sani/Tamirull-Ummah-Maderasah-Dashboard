import { FaEnvelopeOpenText } from "react-icons/fa";

export default function MessageBanner() {
  return (
    <div className="relative w-full mb-3 h-[150px] sm:h-[250px] bg-gradient-to-r from-blue-500 to-blue-700 rounded-md shadow-lg flex items-center justify-center overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/130/430/non_2x/email-business-online-marketing-background-office-workplace-furniture-laptop-screen-megaphone-digital-network-social-media-concept-banner-email-web-marketing-freelance-design-illustration-vector.jpg"
          alt="Message Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center text-white px-5">
        <div className="flex justify-center items-center space-x-3">
          <FaEnvelopeOpenText className="text-4xl sm:text-5xl" />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Messages
          </h1>
        </div>
        <p className="mt-2 text-sm sm:text-base font-medium">
          Seamless communication and message management at your fingertips.
        </p>
      </div>
    </div>
  );
}

import { GiNestedHexagons } from "react-icons/gi";

export default function NoticeBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-lg text-white">
      <div className="text-center">
        <GiNestedHexagons className="text-5xl mx-auto mb-4 text-white" />
        <h2 className="text-3xl font-bold">All Notices</h2>
        <p className="mt-2 text-lg max-w-4xl mx-auto">
          There have every kind of notice!
        </p>
      </div>
    </div>
  );
}

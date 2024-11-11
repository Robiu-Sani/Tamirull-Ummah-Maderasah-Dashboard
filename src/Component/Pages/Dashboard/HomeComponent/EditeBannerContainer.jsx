import EditeBannerSection from "./EditeBannerSection";
import NoticeSection from "./NoticeSection";

export default function EditeBannerContainer() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full">
        <EditeBannerSection />
      </div>
      <NoticeSection />
    </div>
  );
}

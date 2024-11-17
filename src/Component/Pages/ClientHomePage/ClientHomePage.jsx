import BasicContactInfo from "./BasicContactInfo";
import CarouselInformetion from "./CarouselInformetion";
import UpdateingHomePageInfoBanner from "./UpdateingHomePageInfoBanner";

export default function ClientHomePage() {
  return (
    <div className="w-full grid grid-cols-1 gap-3">
      <UpdateingHomePageInfoBanner />
      <BasicContactInfo />
      <CarouselInformetion />
    </div>
  );
}

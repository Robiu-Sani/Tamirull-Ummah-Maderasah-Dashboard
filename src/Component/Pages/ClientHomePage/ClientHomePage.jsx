import AddNotice from "./AddNotice";
import BasicContactInfo from "./BasicContactInfo";
import CarouselInformetion from "./CarouselInformetion";
import FeeForm from "./FeeForm";
import UpdateAboutOurMaderasah from "./UpdateAboutOurMaderasah";
import UpdateingHomePageInfoBanner from "./UpdateingHomePageInfoBanner";

export default function ClientHomePage() {
  return (
    <div className="w-full grid grid-cols-1 gap-3">
      <UpdateingHomePageInfoBanner />
      <AddNotice />
      <CarouselInformetion />
      <UpdateAboutOurMaderasah />
      <FeeForm />
      <BasicContactInfo />
    </div>
  );
}

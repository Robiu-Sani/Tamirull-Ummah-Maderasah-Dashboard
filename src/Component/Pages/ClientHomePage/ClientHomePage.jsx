import AddNotice from "./AddNotice";
import BasicContactInfo from "./BasicContactInfo";
import CarouselInformetion from "./CarouselInformetion";
import CreatePosts from "./CreatePosts";
import UpdateAboutOurMaderasah from "./UpdateAboutOurMaderasah";
import UpdateingHomePageInfoBanner from "./UpdateingHomePageInfoBanner";

export default function ClientHomePage() {
  return (
    <div className="w-full grid grid-cols-1 gap-3">
      <UpdateingHomePageInfoBanner />
      <AddNotice />
      <CreatePosts />
      <CarouselInformetion />
      <UpdateAboutOurMaderasah />
      <BasicContactInfo />
    </div>
  );
}

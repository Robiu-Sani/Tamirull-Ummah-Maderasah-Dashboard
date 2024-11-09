import { Outlet } from "react-router-dom";
import SiteNavBar from "./RootCommon/SiteNavBar";
import DashboardHeader from "./RootCommon/DashboardHeader";
import Footer from "./Footer";

export default function Root() {
  return (
    <div className="bg-gray-100 w-full flex h-screen">
      <div className="w-full min-w-[250px] sm:max-w-[255px] min-h-full overflow-y-auto">
        <SiteNavBar />
      </div>
      <div className="w-full flex flex-col">
        <DashboardHeader />
        <div className="w-full h-[calc(100vh-90px)] overflow-y-auto p-5">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

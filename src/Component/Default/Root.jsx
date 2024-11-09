import { Outlet } from "react-router-dom";
import SiteNavBar from "./RootCommon/SiteNavBar";

export default function Root() {
  return (
    <div className="bg-gray-100 w-full flex h-screen">
      <div className="w-full min-w-[250px] sm:max-w-[255px] min-h-full overflow-y-auto">
        <SiteNavBar />
      </div>
      <div className="w-full flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

import ChartContainer from "./HomeComponent/ChartContainer";
import EditeBannerContainer from "./HomeComponent/EditeBannerContainer";
import TopCards from "./HomeComponent/TopCards";

export default function Home() {
  return (
    <div>
      <TopCards />
      <div className="w-full ">
        <ChartContainer />
        <EditeBannerContainer />
      </div>
    </div>
  );
}

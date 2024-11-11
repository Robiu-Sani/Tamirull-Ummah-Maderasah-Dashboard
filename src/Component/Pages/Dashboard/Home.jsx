import ChartContainer from "./HomeComponent/ChartContainer";
import TopCards from "./HomeComponent/TopCards";

export default function Home() {
  return (
    <div>
      <TopCards />
      <div className="w-full ">
        <ChartContainer />
      </div>
    </div>
  );
}

import LineChart from "../Pages/Dashboard/HomeComponent/LineChart";
export default function ChieldNavTopBox() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
      <LineChart />
      <div className="w-full bg-white rounded-md shadow-md"></div>
    </div>
  );
}

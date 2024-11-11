import LineChart from "./LineChart";
import PieChart from "./PieChart";
import TeachersPiChart from "./TeachersPiChart";

export default function ChartContainer() {
  return (
    <div className="w-full grid grid-cols-1 my-4 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <LineChart />
      <PieChart />
      <TeachersPiChart />
    </div>
  );
}

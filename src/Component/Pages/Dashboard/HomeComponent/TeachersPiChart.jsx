import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function TeachersPiChart({ data }) {
  // Prepare data for the Doughnut chart
  const labels = data.map((item) => item.residentialStatus); // Extract residential statuses
  const totalTeachers = data.map((item) => item.totalTeachers); // Extract total teachers count

  const chartData = {
    labels, // Residential statuses for the chart
    datasets: [
      {
        label: "Teachers by Residential Status",
        data: totalTeachers, // Number of teachers per status
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Green
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red border
          "rgba(54, 162, 235, 1)", // Blue border
          "rgba(255, 206, 86, 1)", // Yellow border
          "rgba(75, 192, 192, 1)", // Green border
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} teachers`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full p-4 rounded-md shadow-lg bg-white col-span-1">
      <h2 className="text-left mb-2 text-sm font-semibold">
        Teachers by Department
      </h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

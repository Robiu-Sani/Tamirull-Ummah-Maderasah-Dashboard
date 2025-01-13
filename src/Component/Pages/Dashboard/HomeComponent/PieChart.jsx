import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  // Prepare data for the PolarArea chart
  const labels = data.map((item) => item.shiftName); // Extract shift names
  const totalTeachers = data.map((item) => item.totalTeachers); // Extract total teachers count

  const chartData = {
    labels, // Shift names for the chart
    datasets: [
      {
        label: "Teachers per Shift",
        data: totalTeachers, // Number of teachers in each shift
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // Red
          "rgba(54, 162, 235, 0.5)", // Blue
          "rgba(255, 206, 86, 0.5)", // Yellow
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red border
          "rgba(54, 162, 235, 1)", // Blue border
          "rgba(255, 206, 86, 1)", // Yellow border
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options for customization
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
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return (
    <div className="w-full p-4 rounded-md shadow-lg bg-white col-span-1">
      <h2 className="text-left mb-2 text-sm font-semibold">
        Shift-wise Teachers
      </h2>
      <PolarArea data={chartData} options={options} />
    </div>
  );
}

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

export default function PieChart() {
  // Dummy data for the PolarArea chart
  const data = {
    labels: ["Category ", "Category ", "Category ", "Category ", "Category "],
    datasets: [
      {
        label: "Sample Data",
        data: [12, 19, 7, 15, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
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
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full p-4 rounded-md shadow-lg bg-white col-span-1 ">
      <h2 className="text-left mb-2 text-sm font-semibold">Polar Area Chart</h2>
      <PolarArea data={data} options={options} />
    </div>
  );
}

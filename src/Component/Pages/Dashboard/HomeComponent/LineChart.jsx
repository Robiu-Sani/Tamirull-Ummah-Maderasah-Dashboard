import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  // Dummy data for boys and girls in class 0 to 12
  const data = {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ], // Class labels
    datasets: [
      {
        label: "Boys", // Label for the first line
        data: [50, 60, 70, 80, 85, 90, 95, 10, 110, 115, 120, 10, 140], // Dummy data for boys
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointBackgroundColor: "rgb(75, 192, 192)", // Point color on hover
      },
      {
        label: "Girls", // Label for the second line
        data: [45, 55, 65, 75, 80, 85, 90, 95, 105, 110, 10, 125, 15], // Dummy data for girls
        fill: false,
        borderColor: "rgb(255, 29, 132)",
        tension: 0.1,
        pointBackgroundColor: "rgb(255, 259, 102)", // Point color on hover
      },
    ],
  };

  // Chart options with hover interaction
  const options = {
    responsive: true,
    interaction: {
      mode: "index", // Hover across multiple datasets (index)
      intersect: false, // Prevent hover interaction when cursor doesn't intersect the chart
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full p-2 rounded-md shadow-md bg-white col-span-1 sm:col-span-2">
      <h2 className="text-left -mb-2 text-sm ">Boys and Girls (Class 0-12)</h2>
      <Line data={data} options={options} />
    </div>
  );
}

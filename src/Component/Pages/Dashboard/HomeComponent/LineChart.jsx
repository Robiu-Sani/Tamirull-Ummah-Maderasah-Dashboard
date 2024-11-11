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

export default function SmoothLineChart() {
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
    ],
    datasets: [
      {
        label: "Boys",
        data: [50, 70, 60, 80, 85, 90, 95, 100, 110, 115, 120, 125, 140],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointHoverRadius: 7,
      },
      {
        label: "Girls",
        data: [0, 55, 65, 75, 80, 85, 120, 95, 105, 120, 105, 120, 130],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
      x: {
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
      },
    },
  };

  return (
    <div className="w-full p-4 rounded-md shadow-md bg-white col-span-1 sm:col-span-2">
      <h2 className="text-left -mb-2 text-sm font-semibold">
        Boys and Girls (Class 0-12)
      </h2>
      <Line data={data} options={options} />
    </div>
  );
}

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

export default function SmoothLineChart({ data }) {
  // Prepare labels (class names) and datasets (boys and girls data)
  const labels = data.map((item) => item.className);
  const boysData = data.map((item) => item.boys);
  const girlsData = data.map((item) => item.girls);

  const chartData = {
    labels, // Class names for x-axis
    datasets: [
      {
        label: "Boys",
        data: boysData,
        borderColor: "rgba(54, 162, 235, 1)", // Blue
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Light blue fill
        borderWidth: 2,
        tension: 0.4, // Smooth line effect
        pointStyle: "circle",
        pointRadius: 5,
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Girls",
        data: girlsData,
        borderColor: "rgba(255, 99, 132, 1)", // Red
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Light red fill
        borderWidth: 2,
        tension: 0.4, // Smooth line effect
        pointStyle: "circle",
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
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
        ticks: {
          stepSize: 1,
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
        Boys and Girls in All Classes
      </h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function TeachersPiChart() {
  // Dummy data for the Doughnut chart
  const data = {
    labels: ["Math", "Science", "History", "English", "Physical Education"],
    datasets: [
      {
        label: "Teachers by Subject",
        data: [10, 15, 5, 8, 7], // Dummy data representing number of teachers per subject
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

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
        Teachers by depertment
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}

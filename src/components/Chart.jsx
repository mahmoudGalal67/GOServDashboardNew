import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["1/10", "7/10", "13/10", "19/10", "25/10", "31/10"], // X-axis labels
    datasets: [
      {
        label: "Monthly Sales", // Label for the dataset
        data: [65, 59, 80, 91, 56, 30], // Y-axis data points
        fill: false,
        backgroundColor: "#fff", // Color of the points
        borderColor: "white", // Color of the line
        tension: 0.1, // Curvature of the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "none", // Position of the legend
      },
      title: {
        display: false,
        text: "Sales Data Over Months", // Title of the chart
      },
    },
  };

  return (
    <div
      className="w-full lg:w-1/2"
      style={{
        overflow: "hidden",
        // width: "50%",
        maxHeight: "300px",
        backgroundColor: "#067DD3",
        display: "flex",
        alignItems: "center",
        borderBottomLeftRadius: "8px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;

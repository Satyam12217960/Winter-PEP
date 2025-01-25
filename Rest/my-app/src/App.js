import React from "react";  
import { Chart as ChartJS, defaults } from "chart.js/auto"; 
import { Bar } from "react-chartjs-2"; 

import revenueData from "./Bar_Chart/revenueData.json"; // Import data

// Global chart defaults
defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


export const App = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 70, 40, 90], // Example values
        backgroundColor: ["red", "blue", "green", "orange", "purple"], // Different bar colors
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Bar data={data} />
    </div>
  );
};
export default App;

// ________________________________________________________________________________________________

// const App = () => {
//   // Extract labels, revenue, and cost
//   const labels = revenueData.map(item => item.label);
//   const revenueValues = revenueData.map(item => item.revenue);
//   const costValues = revenueData.map(item => item.cost);

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Revenue",
//         data: revenueValues,
//         backgroundColor: "rgba(54, 162, 235, 0.6)",
//         borderColor: "rgba(54, 162, 235, 1)",
//         borderWidth: 1,
//       },
//       {
//         label: "Cost",
//         data: costValues,
//         backgroundColor: "rgba(255, 99, 132, 0.6)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ width: "800px", height: "500px" }}>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default App;

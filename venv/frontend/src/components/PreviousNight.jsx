import React, { useState } from "react";
import { PieChart, LineChart, BarChart } from "@mui/x-charts";
import "../css/PreviousNight.css";

function PreviousNight({ night: userPreviousNight }) {
  

  return (
    <>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["Total Won", "Total Spent"],
          },
        ]}
        series={[
          { data: [userPreviousNight.total_won, 0] }, // Total Won data
          { data: [0, userPreviousNight.total_spent] }, // Total Spent data
        ]}
        width={200}
        height={200}
      />
      <div className="last-night-info">
        <p>Spent: ${userPreviousNight.total_spent}</p>
        <p>Made: ${userPreviousNight.total_won}</p>
        <p>
          ($
          {userPreviousNight.total_won - userPreviousNight.total_spent})
        </p>
      </div>
    </>
  );
}

export default PreviousNight;

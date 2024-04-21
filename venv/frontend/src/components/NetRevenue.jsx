import React, { useState } from "react";
import "../css/NetRevenue.css";
import { PieChart } from "@mui/x-charts";

function NetRevenue({ earnings, maxValue }) {
  const { playersSpent, playersWon } = earnings;

  // Calculate the value relative to the total range (playersSpent)
  const valueRatio = playersWon / playersSpent;

  // Calculate the start and end angles based on the value ratio
  const startAngle = -110;
  const endAngle = startAngle + 220 * valueRatio;

  // Calculate the value based on the maximum value
  const adjustedValue = (playersSpent - playersWon) * (maxValue / playersSpent);

  return (
    <div className="revenue-container">
      <p>Net Revenue</p>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: playersWon, label: "Players Won" },
              { id: 1, value: playersSpent - playersWon, label: "House Won" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
      {playersSpent - playersWon > 0 ? (
        <p style={{ color: "green" }}>
          +${playersSpent - playersWon} (${playersSpent} total)
        </p>
      ) : (
        <p style={{ color: "red" }}>
          -${playersSpent - playersWon} (${playersWon} total)
        </p>
      )}
    </div>
  );
}

export default NetRevenue;

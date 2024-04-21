import React, { useState } from "react";
import "../css/NetRevenue.css";
import { LineChart } from "@mui/x-charts";

function AdminHomeLine({}) {
  return (
    <>
      <div style={{ textAlign: "center"}}>
        <p style={{ paddingTop: "0px"}}>Last 10 days</p>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5, 9, 10, 4, 8],
            },
          ]}
          width={500}
          height={170}
        />
      </div>
    </>
  );
}

export default AdminHomeLine;

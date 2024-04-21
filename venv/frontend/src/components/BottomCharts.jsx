import React, { useState, useEffect } from "react";
import { PieChart, LineChart } from "@mui/x-charts";
import "../css/BottomChart.css";

function BottomCharts({ user, userNights }) {
  const [userScores, setUserScores] = useState([]);

  useEffect(() => {
    if (userNights && userNights.length > 0) {
      const scores = userNights.map(
        (night) => night.total_won - night.total_spent
      );
      setUserScores(scores);
    }
  }, [userNights]);

  return (
    <>
      <div className="bottom-left-container">
        {userNights.length > 0 ? (
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: user.total_won, label: "Total Won" },
                  {
                    id: 1,
                    value: user.total_spent,
                    label: "Total Spent",
                  },
                ],
                innerRadius: 40,
                paddingAngle: 5,
                cornerRadius: 5,
              },
            ]}
            width={350}
            height={175}
          />
        ) : (
          <div style={{textAlign: "center", width: "100%"}}>
            <p>No data available</p>
          </div>
        )}
      </div>
      <div className="bottom-right-container">
        {userNights.length > 0 ? (
          <div className="chart-container">
            {userNights.length < 10 ? (
              <p style={{ fontSize: "20px", marginBottom: "5px" }}>
                Last {userNights.length} games
              </p>
            ) : (
              <p style={{ fontSize: "20px", marginBottom: "5px" }}>
                Last 10 games
              </p>
            )}

            <LineChart
              xAxis={[{ data: userScores.map((_, index) => index + 1) }]}
              series={[
                {
                  data: userScores,
                },
              ]}
              width={390}
              height={160}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}

export default BottomCharts;

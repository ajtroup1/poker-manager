import React, { useState, useEffect } from "react";
import { PieChart, LineChart, BarChart } from "@mui/x-charts";
import "../css/PreviousNight.css";

function PreviousNight({ userPreviousNight }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [spent, setSpent] = useState(userPreviousNight?.total_spent || 0);
  const [made, setMade] = useState(userPreviousNight?.total_won || 0);
  const [night, setNight] = useState(userPreviousNight);
  const [noPrevious, setNoPrevious] = useState(true);

  useEffect(() => {
    if (userPreviousNight.user !== 0) {
      setNoPrevious(false);
    }
  }, [userPreviousNight]);

  const handleUpdate = () => {
    const updatedUserNight = {
      ...userPreviousNight,
      total_spent: spent,
      total_won: made,
    };

    // Send updatedUserNight back for a fetch
    fetch(`http://127.0.0.1:8000/api/edit-usernight/${userPreviousNight.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserNight),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user night");
        }
        alert("User night updated successfully!");
        setIsUpdating(false); // Set back to viewing mode after update
      })
      .catch((error) => {
        console.error("Error updating user night:", error);
        // alert("Failed to update user night");
      });
  };

  return (
    <>
      {noPrevious ? (
        <p style={{fontSize: "15px", margin: "20px", textAlign: "center"}}>No previous games have been played. Play in some games to see more about your performance!</p>
      ) : (
        <div className="last-night-info">
          {!isUpdating ? (
            <>
              <div style={{ width: "50%" }}>
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
              </div>

              <div
                style={{
                  paddingLeft: "40px",
                  width: "50%",
                  marginTop: "10px",
                }}
              >
                <p style={{ textDecoration: "underline", paddingTop: "10px" }}>
                  {night.date}
                </p>
                <p>Spent: ${night.total_spent}</p>
                <p>Made: ${night.total_won}</p>
                <p>(${night.total_won - night.total_spent})</p>

                <p
                  style={{
                    fontSize: "10px",
                    textDecoration: "underline",
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                  onClick={() => setIsUpdating(true)}
                >
                  Update information
                </p>
              </div>
            </>
          ) : (
            <>
              <form
                onSubmit={handleUpdate}
                className="needs-validation"
                noValidate
              >
                <div className="mb-3">
                  <label htmlFor="spent" className="form-label">
                    Spent:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="spent"
                    value={spent}
                    onChange={(e) => setSpent(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter the amount spent.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="made" className="form-label">
                    Made:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="made"
                    value={made}
                    onChange={(e) => setMade(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter the amount made.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default PreviousNight;

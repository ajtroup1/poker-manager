import React, { useState, useEffect } from "react";
import "../css/AddNight.css";

function AddNight() {
  const [formData, setFormData] = useState({
    date: "",
    buyIn: "",
    class: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "select-multiple") {
      const options = e.target.options;
      const selectedOptions = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedOptions.push(options[i].value);
        }
      }
      setFormData({
        ...formData,
        [name]: selectedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-700">
        <div id="add-night-main" className="flex-grow">
          <div id="title">Schedule a new night</div>
          <div id="add-night-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="buyin">Buy in</label>
                <input
                  type="number"
                  className="form-control"
                  id="buyin"
                  name="buyIn"
                  value={formData.buyIn}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="class">Class</label>
                <select
                  className="form-control"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                >
                  <option value="1">Base</option>
                  <option value="2">First</option>
                  <option value="3">VIP</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="add-night-btn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNight;

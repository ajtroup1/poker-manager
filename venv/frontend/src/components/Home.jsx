import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <>
      <div id="home-main" className="bg-gray-700">
        <div id="title" className="text-2xl font-medium">
          <h1>Adam's Poker Emporium</h1>
        </div>
        <div id="images-container">
          <img
            src="https://img.freepik.com/premium-photo/happy-people-playing-poker_13339-44261.jpg"
            className=""
            id="poker-img1"
          />
          <img
            src="https://img.freepik.com/premium-photo/happy-poker-player-winning-holding-pair-aces_136403-12089.jpg"
            className=""
            id="poker-img2"
          />
        </div>
        <div id="book-container" className="bg-gray-600">
          <div id="subtitle">
            <h1>Sign up for a poker night!</h1>
          </div>
          <a href="/book">
            <button className="btn btn-primary" id="book-btn">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;

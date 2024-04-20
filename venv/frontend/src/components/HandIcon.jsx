import React, { useEffect, useState } from "react";
import "../css/HandIcon.css"

function HandIcon({ favoriteHand }) {
  const [hands, setHands] = useState([]);

  useEffect(() => {
    if (favoriteHand && typeof favoriteHand === "string") {
      const handList = favoriteHand.split(", ");
      if (handList.length === 2) {
        const suit1 = handList[0].split(" of ")[1].toLowerCase();
        const suit2 = handList[1].split(" of ")[1].toLowerCase();
        const card1 = handList[0].split(" ")[0];
        const card2 = handList[1].split(" ")[0];
        const card1path = `./src/assets/svg-cards/${card1.toLowerCase()}_of_${suit1}.svg`;
        const card2path = `./src/assets/svg-cards/${card2.toLowerCase()}_of_${suit2}.svg`;
        setHands([card1path, card2path]);
      } else {
        console.error(
          "Favorite hand should contain exactly two cards separated by ', '"
        );
      }
    } else {
      console.error("Favorite hand is not in the expected format");
    }
  }, [favoriteHand]);


  useEffect(() => {
  }, [hands]);

  return (
    <div>
      <img src={hands[0]} alt="Card 1" id="card"/>
      <img src={hands[1]} alt="Card 2" id="card"/>
    </div>
  );
}

export default HandIcon;

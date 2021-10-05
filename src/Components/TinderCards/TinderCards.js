import React, { useEffect, useState } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import axios from "../axios";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function getData() {
      const req = await axios.get("/tinderCards");
      setPeople(req.data);
    }
    getData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left of the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;

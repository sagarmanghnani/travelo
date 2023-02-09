import React from "react";
import homeImage from "../../assets/hero.png";
import {TravelQuote, Section} from './MainHeader.style';
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Explore, travel, love </h1>
          <TravelQuote>
          Be inspired by a place and book your stop online.
          <br></br>
          Add itenaries and guided tours for a unique journey.
          </TravelQuote>
        </div>
        {/* <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div> */}
      </div>
    </Section>
  );
}



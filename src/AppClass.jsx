import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  render() {
    const elephantData = this.imageData();

    return (
      <div>
        <h1>Kalvium Gallery 2.0</h1>
        <div className="images">
          {elephantData.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={`${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AppClass;

import React from "react";
import styled from "styled-components";
import car_standart from "./car_standart.jpg";
import car_business from "./car_business.jpg";
import car_premium from "./car_premium.jpg";
import Card from "../Card";
import './style.css'

const car_list = [
  { name: "Standart", price: 50, currency: "$", picture: car_standart },
  { name: "Busines", price: 100, currency: "$", picture: car_business },
  { name: "Premium", price: 150, currency: "$", picture: car_premium },
];

const List = styled.div`
  display: flex;
  background-color: white;
  box-sizing: border-box;
  justify-content: "space-around";
  padding: 10px 0 0 0 ;
`;

export default function Cards() {
  return (
    <List className="card_list">
      {car_list.map((card) => (
        <Card key = {card.name} card={card} />
      ))}
    </List>
  );
}

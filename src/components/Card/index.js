// import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 120px;
  height: 170px;
  background-color: white;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 5px;
  & > img {
    width: 100px;
    align-self: center;
  }
`;

export default function Cards({card}) {
  return (
    <Card>
      <strong>{card.name}</strong>
      <span>Price</span>
      <strong>{card.price} {card.currency}</strong>
      <img src={card.picture} alt={card.name}/>
    </Card>
  );
}

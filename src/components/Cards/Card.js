// import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 140px;
  background-color: white;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 5px;
  & > img {
    width: 90px;
    align-self: center;
  }
  @media (max-width: 420px) {
    align-self: center;
    margin-bottom: 10px;
  }
`;

export default function Cards({ card }) {
  return (
    <Card>
      <strong>{card.name}</strong>
      <span>Price</span>
      <strong>
        {card.price} {card.currency}
      </strong>
      <img src={card.picture} alt={card.name} />
    </Card>
  );
}

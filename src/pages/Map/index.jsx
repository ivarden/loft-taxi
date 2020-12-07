import React, { useState } from "react";
import Order from "../../components/Order";
import Main from "../../components/Main";
import PopUp from "./PopUp";
import Point from "./Point";
import MapboxMap from "./MapboxMap";

export default function Map() {
  const [order, setOrder] = useState(true);
  const handleOrder = () => {
    setOrder((prev) => !prev);
  };

  return (
    <Main>
      <MapboxMap />
      {order ? (
        <Order handleOrder={handleOrder} />
      ) : (
        <PopUp handleOrder={handleOrder} />
      )}
      <Point />
    </Main>
  );
}

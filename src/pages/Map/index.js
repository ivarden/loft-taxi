import React, { useState } from "react";
import Order from "../../components/Order";
import Main from "../../components/Main";
import PopUp from "./PopUp";
import Point from "./Point";

export default function Map({ authorized, setAuthorized }) {
  const [order, setOrder] = useState(true);
  const handleOrder = () => {
    setOrder((prev) => !prev);
  };

  return (
    <Main authorized={authorized} setAuthorized={setAuthorized}>
      {order ? (
        <Order handleOrder={handleOrder} />
      ) : (
        <PopUp handleOrder={handleOrder} />
      )}
      <Point />
    </Main>
  );
}

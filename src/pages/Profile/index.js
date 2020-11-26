import React, { useState, useContext } from "react";
import Main from "../../components/Main";
import PopUp from "./PopUp";
import PaymentForm from "../../components/PaymentForm";

export default function Profiles() {
  const [payment, setPayment] = useState(true);
  const handlePayment = () => {
    setPayment((prev) => !prev);
  };

  return (
    <Main style={{ justifyContent: "center" }}>
      {payment ? (
        <PaymentForm handlePayment={handlePayment} />
      ) : (
        <PopUp handlePayment={handlePayment} />
      )}
    </Main>
  );
}

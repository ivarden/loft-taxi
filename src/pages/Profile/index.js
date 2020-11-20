import React, { useState } from "react";
import Main from "../../components/Main";
import PopUp from "./PopUp";
import PaymentForm from "../../components/PaymentForm";

export default function Profiles({ authorized, setAuthorized }) {
  const [payment, setPayment] = useState(true);
  const handlePayment = () => {
    setPayment((prev) => !prev);
  };

  return (
    <Main authorized={authorized} setAuthorized={setAuthorized} style={{justifyContent:"center"}}>
      {payment ? (
        <PaymentForm handlePayment={handlePayment} />
      ) : (
        <PopUp handlePayment={handlePayment} />
      )}
    </Main>
  );
}

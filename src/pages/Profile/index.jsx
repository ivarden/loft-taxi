import React, { useState, useEffect } from "react";
import Main from "../../components/Main";
import PopUp from "../../components/PopUp/PopUpProfile";
import PaymentForm from "../../components/PaymentForm";

export default function Profiles() {
  const [payment, setPayment] = useState(true);
  const handlePayment = () => {
    setPayment((prev) => !prev);
  };
  useEffect(() => {
    document.title = "Profile";
  }, []);
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

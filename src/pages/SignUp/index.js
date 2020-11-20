import React from "react";
import Main from "../../components/Main";
import Signup from "../../components/SignUp";

export default function SignUp({ authorized, setAuthorized }) {
  return (
    <Main authorized={authorized} setAuthorized={setAuthorized}>
      <Signup authorized={authorized} setAuthorized={setAuthorized} />
    </Main>
  );
}

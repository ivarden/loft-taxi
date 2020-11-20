import React from "react";
import Main from "../../components/Main";
import Signin from "../../components/SignIn";

export default function SignIn({ authorized, setAuthorized }) {
  return (
    <Main authorized={authorized} setAuthorized={setAuthorized}>
      <Signin authorized={authorized} setAuthorized={setAuthorized} />
    </Main>
  );
}

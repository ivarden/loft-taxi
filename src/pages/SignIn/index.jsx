import React, { useEffect } from "react";
import Main from "../../components/Main";
import Signin from "../../components/SignIn";

export default function SignIn() {
  useEffect(() => {
    document.title = "Sign In";
  }, []);
  return (
    <Main>
      <Signin />
    </Main>
  );
}

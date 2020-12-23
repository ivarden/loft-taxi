import React, { useEffect } from "react";
import Main from "../../components/Main";
import Signup from "../../components/SignUp";

export default function SignUp() {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <Main>
      <Signup />
    </Main>
  );
}

import React from "react";
import Button from "./Button";
import Input from "./Input";

function Login() {
  return (
    <>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" buttonTxt="Login" />
      </form>
    </>
  );
}

export default Login;

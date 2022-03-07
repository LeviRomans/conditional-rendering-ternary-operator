import React from "react";
import Button from "./Button";
import Input from "./Input";

function Register() {
  return (
    <>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button type="submit" buttonTxt="Register" />
      </form>
    </>
  );
}

export default Register;
